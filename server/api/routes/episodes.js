const express = require('express');
const router = express.Router();

// Post
router.post('/', (req, res, next)=>{
  const {name, releaseDate} = req.body;
  const episode = {
    name: name,
    releaseDate: releaseDate
  };

  res.status(200).json({
    message: 'handling POST requests',
    createdEpisode: episode
  });
});

// Get all episodes
router.get('/', (req, res, next)=>{
  res.status(200).json({
    message: 'handling GET requests'
  });
});

//Get with ID
router.get('/:episodeId', (req, res, next)=>{
  const id = req.params.episodeId;
  if( id === "special") {
    res.status(200).json({
      message: 'you discovered the special episode',
      id: id
    }); 
  } 
  else{
    res.status(200).json({
      message: 'you passed an ID'
    }); 
  }
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