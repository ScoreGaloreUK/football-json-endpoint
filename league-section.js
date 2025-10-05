import ScoreCard from "./ScoreCard";

export default function LeagueSection({ leagueName, matches }) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4 text-yellow-400">{leagueName}</h2>
      {matches.map((match, idx) => (
        <ScoreCard key={idx} match={match} />
      ))}
    </div>
  );
}
