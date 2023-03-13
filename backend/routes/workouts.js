const express =require('express');

const {
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController.js')
const router =express.Router()

//GET All Workouts
router.get('/',getWorkouts)
//GET single Workout
router.get('/:id',getWorkout)
//Post A Workout
router.post('/',createWorkout)
//Delete single workouts
router.delete('/:id',deleteWorkout)
//Update single workouts
router.patch('/:id',updateWorkout)


module.exports = router