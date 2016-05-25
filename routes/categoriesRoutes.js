var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Categories = require('../models/categories');


router.get('/:id', function(req, res, next) {
  Categories.findOne({_id: req.params.id}, function(err, data) {
    res.json(data);
  });
});
  
router.get('/', function(req, res, next) {
  Categories.find(function(err, data) {
    if(err) { console.error(err); return }
    res.json(data);
  });
});

router.post('/:id', function(req, res, next) {
  var query = {_id: req.params.id};
  Categories.findOneAndUpdate(query, req.body, function(err, data) {
    if(err) { 
      res.json({err: err});
    }
    else {
      res.json({err: false});
    }
  });
});
  
router.post('/', function(req, res, next) {
  Categories.create(req.body, function(err, data) {
    if(err) { console.error(err); return }
    res.json(data);
  });
});
  
router.delete('/:id', function(req, res, next) {
  Categories.findByIdAndRemove(req.params.id, function(err) {
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
  Categories.findOneAndUpdate(query, req.body, function(err, data) {
    if(err) { 
      res.json({err: err});
    }
    else {
      res.json({err: false});
    }
  });
});


module.exports = router;
