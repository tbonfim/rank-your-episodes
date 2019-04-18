const express = require('express');
const router = express.Router();

router.get('/', (req, res, next)=>{
  res.status(200).json({
    message: 'handling GET requests'
  });
});
router.post('/', (req, res, next)=>{
  res.status(200).json({
    message: 'handling POST requests'
  });
});

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

router.patch('/:episodeId', (req, res, next)=>{
  res.status(200).json({
    message: 'updated episode'
  });
});
router.delete('/:episodeId', (req, res, next)=>{
  res.status(200).json({
    message: 'delete episode'
  });
});
module.exports = router;