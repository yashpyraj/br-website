import React, { useState } from "react";
import {
  SingleEliminationBracket,
  Match,
  SVGViewer,
} from "@g-loot/react-tournament-brackets";

function TournamentBracket({ title = "Tournament Bracket" }) {
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
          startTime: "2024-12-23T10:00:00Z",
        },
        {
          id: "p2",
          name: "Team B",
          resultText: "LOST",
          isWinner: false,
          status: "PLAYED",
          startTime: "2024-12-23T10:00:00Z",
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
          startTime: "2024-12-23T10:30:00Z",
        },
        {
          id: "p4",
          name: "Team D",
          resultText: "LOST",
          isWinner: false,
          status: "PLAYED",
          startTime: "2024-12-23T10:30:00Z",
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
          startTime: "2024-12-23T11:00:00Z",
        },
        {
          id: "p3",
          name: "Team C",
          resultText: "-",
          isWinner: false,
          status: "-",
          startTime: "2024-12-23T11:00:00Z",
        },
      ],
    },
  ]);

  return (
    <div className="relative w-full h-[600px] p-5 rounded-lg shadow-lg bg-gray-900 text-white">
      <h1 className="text-3xl font-bold text-center mb-5" aria-label={title}>
        {title}
      </h1>
      <div className="border-2 border-gray-700 rounded-lg overflow-hidden">
        {matches.length === 0 ? (
          <p className="text-center text-gray-400">No matches scheduled</p>
        ) : (
          <SingleEliminationBracket
            matches={matches}
            matchComponent={({
              onMouseEnter,
              topParty,
              bottomParty,
              topWon,
              teamNameFallback,
              resultFallback,
            }) => (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                  backgroundColor: "#f9f9f9",
                  color: "#000",
                  width: "100%",
                  height: "100%",
                }}
              >
                <div
                  onMouseEnter={() => onMouseEnter(topParty.id)}
                  style={{ display: "flex" }}
                >
                  <div>{topParty.name || teamNameFallback}</div>
                  <div>{topParty.resultText ?? resultFallback(topParty)}</div>
                  <div>
                    {new Date(topParty.startTime)
                      .toISOString()
                      .substring(11, 16)}
                  </div>
                </div>
                <div
                  style={{
                    height: "1px",
                    width: "100%",
                    background: "#FF8C00",
                  }}
                />
                <div
                  onMouseEnter={() => onMouseEnter(bottomParty.id)}
                  style={{ display: "flex" }}
                >
                  <div>{bottomParty.name || teamNameFallback}</div>
                  <div>
                    {bottomParty.resultText ?? resultFallback(topParty)}
                  </div>
                  <div>
                    {new Date(bottomParty.startTime)
                      .toISOString()
                      .substring(11, 16)}
                  </div>
                </div>
              </div>
            )}
          />
        )}
      </div>
    </div>
  );
}

export default TournamentBracket;
