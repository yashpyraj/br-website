const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: '*',
    },
});

app.use(cors());
app.use(express.json());

// Connect to MongoDB Atlas (Cloud Database)
const mongoUri = process.env.MONGO_URI || 'mongodb+srv://yammy:veTw3ksndDKFbP4c@br.jcii5.mongodb.net/';
mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const matchSchema = new mongoose.Schema({
    id: Number,
    teams: [{ name: String }],
    winner: String,
});

const Match = mongoose.model('Match', matchSchema);

// Generate matches from a list of names
app.post('/generate-matches', async (req, res) => {
    const { names } = req.body;

    if (!Array.isArray(names) || names.length % 2 !== 0) {
        return res.status(400).json({ error: 'Please provide an even number of names.' });
    }

    await Match.deleteMany(); // Clear existing matches

    const matches = [];
    for (let i = 0; i < names.length; i += 2) {
        const match = new Match({
            id: matches.length + 1,
            teams: [{ name: names[i] }, { name: names[i + 1] }],
            winner: null,
        });
        await match.save();
        matches.push(match);
    }

    io.emit('matchUpdate', matches);
    res.json(matches);
});

// Serve admin panel
app.use(express.static(path.join(__dirname, 'admin-panel')));

// Endpoint to get matches
app.get('/matches', async (req, res) => {
    const matches = await Match.find();
    res.json(matches);
});

// Endpoint to update a match result
app.post('/matches/:id', async (req, res) => {
    const { id } = req.params;
    const { winner } = req.body;

    const match = await Match.findOne({ id: parseInt(id) });
    if (match) {
        match.winner = winner;
        await match.save();
    }

    const matches = await Match.find();
    io.emit('matchUpdate', matches);
    res.json({ success: true });
});

// Serve admin panel HTML file
app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, 'admin-panel', 'index.html'));
});

io.on('connection', (socket) => {
    console.log('New client connected');

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

const PORT = process.env.PORT || 5050;
server.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));


