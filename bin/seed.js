require('../configs/db.config');
const mongoose = require("mongoose");
const AlbumModel = require('../models/albums');


const someAlbums = [
  {
    artist: "Porcupine Tree",
    title: "In Absentia",
    year: 2008,
    genre: "Progressive Rock",
  },
  {
    artist: "Alice In Chains",
    title: "Alice In Chains",
    year: 1996,
    genre: "Grunge Rock",
  },
];

AlbumModel.create(someAlbums)
.then((album)=>{
    console.log("NEW ALBUM CREATED", album)
})
.catch((error)=>{
    console.log("There is an error in the CREATE", error)
});

