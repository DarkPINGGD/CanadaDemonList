const fs = require('fs');
const path = require('path');

export default function handler(req, res) {
  try {
    // The generator writes a JSON blob to `pages/api/list` (no extension).
    const filePath = path.join(process.cwd(), 'pages', 'api', 'list');
    if (fs.existsSync(filePath)) {
      const raw = fs.readFileSync(filePath, 'utf8');
      const json = JSON.parse(raw);
      res.status(200).json(json);
      return;
    }

    // Fallback: return an empty array if no generated file exists.
    res.status(200).json([]);
  } catch (err) {
    res.status(500).json({ error: 'Failed to read generated list', detail: String(err) });
  }
}
export default function handler(req, res) {
    const demons = [
        { name: "The Nightmare", creator: "Noyan", difficulty: "Insane" },
        { name: "Void Runner", creator: "CreatorName", difficulty: "Hard Demon" },
        { name: "Solar Flare", creator: "AnotherCreator", difficulty: "Extreme Demon" }
        // ...add or load your real demon list here...
    ];

    res.setHeader("Content-Type", "application/json");
    res.status(200).json(demons);
}