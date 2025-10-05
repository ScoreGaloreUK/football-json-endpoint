export default function ScoreCard({ match }) {
  return (
    <div className="bg-gray-900 text-white p-4 rounded-lg shadow-lg flex justify-between items-center mb-2 hover:scale-105 transition">
      <div>
        <p className="font-bold">{match.homeTeam} vs {match.awayTeam}</p>
        <p className="text-gray-300">{match.utcDate}</p>
      </div>
      <div className="text-xl font-extrabold">{match.score}</div>
      <div className={`px-2 py-1 rounded ${match.status === 'LIVE' ? 'bg-green-500' : 'bg-gray-600'}`}>
        {match.status}
      </div>
    </div>
  );
}
