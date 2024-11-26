const mongoose = require("mongoose");

const UrlSchema = new mongoose.Schema({
    originalUrl: { type: String, required: true },
    shortId: { type: String, required: true, unique: true },
    clicks: { type: Number, default: 0 },
    lastAccessed: { type: Date },
});

module.exports = mongoose.model("Url", UrlSchema);
