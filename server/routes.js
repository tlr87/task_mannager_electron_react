var express = require('express')
var router = express.Router()

var development = require('../knexfile').development
var knex = require('knex')(development)

router.get('/', function (req, res) {
  knex('tasks')
    .then(function (tasks) {
      res.send(tasks)
    })
})


router.post('/', function(req, res) {
    var body = req.body
    console.log(body);
    knex('tasks')
    .insert(body)
    .then(function (tasksPost) {
      res.sendStatus(200)
    })
    .catch(function(err){
      console.log(err);
      res.sendStatus(500)
    })
  })

router.delete('/:id', function (req, res) {
  var id = req.params.id
  knex('tasks')
  .where('id', id)
  .del()
  .then(function (tasksDel) {
    res.status(204).send(tasksDel)
  })
})








module.exports = router
