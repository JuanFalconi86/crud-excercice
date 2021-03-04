const express = require("express");
const router = express.Router();
const AlbumModel = require("../models/albums");

//CREATE A NEW ALBUM

router.get("/albums/new", (req, res, next) => {
  res.render("../views/rock-albums/create-rock.hbs");
});

router.post("/albums/create", (req, res, next) => {
  AlbumModel.create(req.body)
    .then(() => {
      res.redirect("/albums/list");
    })
    .catch((err) => {
      res.render("../views/rock-albums/create-rock.hbs");
      console.log(err);
    });
});

// DISPLAY THE LIST OF ALBUMS

router.get("/albums/list", (req, res, next) => {
  AlbumModel.find()
    .then((album) => {
      res.render("../views/rock-albums/list-albums.hbs", { album });
    })
    .catch((error) => {
      console.log("there is a ERROR", error);
    });
});

//UPDATE THE ALBUM

router.get("/albums/update/:id", (req, res, next) => {
  AlbumModel.findById(req.params.id)
    .then((album) => {
      res.render("./rock-albums/update-album.hbs", { album });
    })
    .catch((error) => {
      console.log(error);
    });
});

router.post("/albums/update/:id", (req, res, next) => {
    console.log(req.body)
  AlbumModel.findByIdAndUpdate(req.params.id, req.body)
  .then(() => {
      res.redirect("/albums/list");
    })
    .catch((err) => {
      res.render("./rock-albums/update-album.hbs", err);
    });
});


//DELETE THE ALBUM

router.post("/albums/delete/:id", (req, res, next)=>{
    AlbumModel.findByIdAndDelete(req.params.id)
    .then(()=>{
        res.redirect("/albums/list")
    })
    .catch((error)=>{
        console.log(error)
    })
})


module.exports = router;
