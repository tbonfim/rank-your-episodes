const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Episode = require('../models/episode');

// Post
router.post('/', (req, res, next)=>{
  const {name, releaseDate} = req.body;
  const episode = new Episode({
    _id: new mongoose.Types.ObjectId(),
    name: name,
    releaseDate: releaseDate
  });
  episode.save()
    .then( result => console.log(result))
    .catch(err => console.log(err));
  
  res.status(201).json(episode);
});

// Get all episodes
router.get('/', (req, res, next)=>{
  Episode.find()
  .exec()
  .then(episodes => {
    console.log(episodes);
    res.status(200).json(episodes);
  })
  .catch(err => res.status(500).json(err));
});

//Get with ID
router.get('/:episodeId', (req, res, next)=>{
  const id = req.params.episodeId;
  Episode.findById(id).exec()
  .then(episode => {
    console.log(episode);
    res.status(200).json(episode);
  })
  .catch(err => res.status(500).json(err));
});



// Patch
router.patch('/:episodeId', (req, res, next)=>{
  res.status(200).json({
    message: 'updated episode'
  });
});
// Delete
router.delete('/:episodeId', (req, res, next)=>{
  res.status(200).json({
    message: 'delete episode'
  });
});
module.exports = router;