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