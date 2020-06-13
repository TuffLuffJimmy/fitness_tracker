const Router = require('express').Router
const router = Router()
const { Workout } = require('../models')

// GET ALL
router.get('/api/workouts/range', (req, res) => {
  Workout.find()
    .then((dbExercise) => {
      res.json(dbExercise)
    })
    .catch(e => console.error(e))
})

// GET ONE
router.get('/api/workouts', (req, res) => {
  Exercise.find().sort('-date')
    .then((dbExercise) => {
      res.json(dbExercise)
    })
})

router.post('/api/workouts', (req, res) => {
  Workout.create({})
    .then((dbWorkout) => {
      res.json(dbWorkout)
    })
    .catch(e => console.error(e))
})

router.put('/api/workouts/:id', (req, res) => {
  Workout.findByIdAndUpdate(req.params.id, {$push: {exercises: req.body}}, {new: true})
    .then((dbWorkout) => {
      res.json(dbWorkout)
    })
    .catch(e => console.error(e))
})

module.exports = router
