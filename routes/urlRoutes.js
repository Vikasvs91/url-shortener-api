const express = require("express");
const { nanoid } = require("nanoid");
const Url = require("../models/Url");

const router = express.Router();

// POST /shorten
router.post("/shorten", async (req, res) => {
    const { originalUrl } = req.body;
    if (!originalUrl) return res.status(400).json({ message: "URL is required" });

    const shortId = nanoid(8);

    const url = new Url({ originalUrl, shortId });
    await url.save();

    res.status(201).json({ shortUrl: `${process.env.BASE_URL}/${shortId}` });
});

// GET /:shortId
router.get("/:shortId", async (req, res) => {
    const { shortId } = req.params;
    const url = await Url.findOne({ shortId });

    if (!url) return res.status(404).json({ message: "URL not found" });

    url.clicks++;
    url.lastAccessed = new Date();
    await url.save();

    res.redirect(url.originalUrl);
});

// GET /stats/:shortId
router.get("/stats/:shortId", async (req, res) => {
    const { shortId } = req.params;
    const url = await Url.findOne({ shortId });

    if (!url) return res.status(404).json({ message: "URL not found" });

    res.json({
        originalUrl: url.originalUrl,
        clicks: url.clicks,
        lastAccessed: url.lastAccessed,
    });
});

module.exports = router;
