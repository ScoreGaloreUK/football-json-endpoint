let latestMatches = { matches: [] };

export default function handler(req, res) {
  if (req.method === "POST") {
    latestMatches = req.body;
    return res.status(200).json({ message: "Matches updated" });
  }

  // GET request returns the current matches
  res.setHeader("Cache-Control", "s-maxage=10, stale-while-revalidate=59");
  return res.status(200).json(latestMatches);
}
