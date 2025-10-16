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