var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Tags = require('../models/tags');


router.get('/:id', function(req, res, next) {
  Tags.findOne({_id: req.params.id}, function(err, data) {
    res.json(data);
  });
});
  
router.get('/', function(req, res, next) {
  Tags.find(function(err, data) {
    if(err) { console.error(err); return }
    res.json(data);
  });
});

router.post('/:id', function(req, res, next) {
  var query = {_id: req.params.id};
  Tags.findOneAndUpdate(query, req.body, function(err, data) {
    if(err) { 
      res.json({err: err});
    }
    else {
      res.json({err: false});
    }
  });
});
  
router.post('/', function(req, res, next) {
  Tags.create(req.body, function(err, data) {
    if(err) { console.error(err); return }
    res.json(data);
  });
});
  
router.delete('/:id', function(req, res, next) {
  Tags.findByIdAndRemove(req.params.id, function(err) {
    if(err) { 
      res.json({err: err});
    }
    else {
      res.json({err: false});
    }
  });
});

router.put('/:id', function(req, res, next) {
  var query = {_id: req.params.id};
  Tags.findOneAndUpdate(query, req.body, function(err, data) {
    if(err) { 
      res.json({err: err});
    }
    else {
      res.json({err: false});
    }
  });
});


module.exports = router;
