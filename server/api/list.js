const express = require('express')
const router = express.Router()
const queries = require('../db/queries')



router.get('/', (req, res) => {
  queries.getAll().then(list => {
  res.json(list)
});
});

router.get('/:id', (req, res) => {
  queries.getOne(req.params.id).then(list =>{
  res.json(list)
});
});

router.post('/', (req, res) => {
    queries.create(req.body).then(list => {
      res.json(list[0]);
    });

});

router.put('/:id', (req, res)=>{
  queries.update(req.params.id, req.body).then(list=>{
  res.json(list[0])
  })
})

router.delete('/:id', (req, res)=>{
  queries.update(req.params.id, req.body).then(list=>{
  res.json(list[0])
  })
})





module.exports = router;
