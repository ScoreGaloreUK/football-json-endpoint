import { useEffect, useState } from "react";
import LeagueSection from "./components/LeagueSection";

function App() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const fetchMatches = async () => {
      const res = await fetch("https://your-json-endpoint.com/matches.json");
      const data = await res.json();
      setMatches(data.matches);
    };
    fetchMatches();

    const interval = setInterval(fetchMatches, 15 * 60 * 1000); // every 15 min
    return () => clearInterval(interval);
  }, []);

  const leagues = [...new Set(matches.map(m => m.competition))];

  return (
    <div className="bg-gray-800 min-h-screen p-6">
      <h1 className="text-4xl font-bold text-center text-white mb-8">European Football Scores</h1>
      {leagues.map((league, idx) => (
        <LeagueSection
          key={idx}
          leagueName={league}
          matches={matches.filter(m => m.competition === league)}
        />
      ))}
    </div>
  );
}

export default App;
