import React, { useState } from "react";
import {
  SingleEliminationBracket,
  Match,
  SVGViewer,
} from "@g-loot/react-tournament-brackets";
// title="<b>The Arena of</b> <br /> a <b>Eternal Glory</b>"

function TournamentBracket() {
  const [matches, setMatches] = useState([
    {
      id: 1,
      name: "Match 1",
      nextMatchId: 3,
      tournamentRoundText: "Round 1",
      startTime: "2024-12-23T10:00:00Z",
      state: "DONE",
      participants: [
        {
          id: "p1",
          name: "Team A",
          resultText: "WON",
          isWinner: true,
          status: "PLAYED",
        },
        {
          id: "p2",
          name: "Team B",
          resultText: "LOST",
          isWinner: false,
          status: "PLAYED",
        },
      ],
    },
    {
      id: 2,
      name: "Match 2",
      nextMatchId: 3,
      tournamentRoundText: "Round 1",
      startTime: "2024-12-23T10:30:00Z",
      state: "DONE",
      participants: [
        {
          id: "p3",
          name: "Team C",
          resultText: "WON",
          isWinner: true,
          status: "PLAYED",
        },
        {
          id: "p4",
          name: "Team D",
          resultText: "LOST",
          isWinner: false,
          status: "PLAYED",
        },
      ],
    },
    {
      id: 3,
      name: "Final Match",
      tournamentRoundText: "Final",
      startTime: "2024-12-23T11:00:00Z",
      state: "SCHEDULED",
      participants: [
        {
          id: "p1",
          name: "Team A",
          resultText: "-",
          isWinner: false,
          status: "-",
        },
        {
          id: "p3",
          name: "Team C",
          resultText: "-",
          isWinner: false,
          status: "-",
        },
      ],
    },
  ]);

  return (
    <div className="relative w-full h-[600px] p-5 rounded-lg shadow-lg bg-gray-900 text-white">
      <h1 className="text-3xl font-bold text-center mb-5">
        Tournament Bracket
      </h1>
      <div className="border-2 border-gray-700 rounded-lg overflow-hidden">
        <SingleEliminationBracket matches={matches} matchComponent={Match} />
      </div>
    </div>
  );
}

export default TournamentBracket;
