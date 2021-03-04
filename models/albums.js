const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const albumSchema = new Schema({
    artist: String,
    title: String,
    year: Number,
    genre: String,
})


const AlbumModel = mongoose.model("albums", albumSchema);

module.exports = AlbumModel;