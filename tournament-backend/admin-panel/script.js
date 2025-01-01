async function fetchMatches() {
    const response = await fetch('/matches');
    const matches = await response.json();
    const matchesDiv = document.getElementById('matches');

    matchesDiv.innerHTML = ''; // Clear previous content
    matches.forEach(match => {
        const matchDiv = document.createElement('div');
        matchDiv.className = 'match';

        matchDiv.innerHTML = `
        <span>${match.teams[0].name} vs ${match.teams[1].name}</span>
        <select id="winner-${match.id}">
          <option value="">Select Winner</option>
          <option value="${match.teams[0].name}">${match.teams[0].name}</option>
          <option value="${match.teams[1].name}">${match.teams[1].name}</option>
        </select>
        <button onclick="updateMatch(${match.id})">Update</button>
      `;

        matchesDiv.appendChild(matchDiv);
    });
}

async function updateMatch(id) {
    const winner = document.getElementById(`winner-${id}`).value;
    if (!winner) {
        alert('Please select a winner!');
        return;
    }

    await fetch(`/matches/${id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ winner }),
    });

    alert('Winner updated!');
    fetchMatches(); // Refresh matches
}

async function generateMatches() {
    const namesInput = document.getElementById('names-input').value;
    const names = namesInput.split(',').map(name => name.trim());

    const response = await fetch('/generate-matches', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ names }),
    });

    if (response.ok) {
        alert('Matches generated successfully!');
        fetchMatches(); // Refresh matches
    } else {
        alert('Failed to generate matches. Ensure names are even in number.');
    }
}


// Load matches on page load
fetchMatches();
