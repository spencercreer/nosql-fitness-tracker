const router = require('express').Router();
// const mongoose = require('mongoose')
const db  = require("../models");
// const Workout = require("../models/Workout.js");

// get workouts, range, post for workouts, put 

// How to find most recent workout
router.get('/api/workouts', (req, res) => {
    db.Workout.find({})
        .then(data => {
            console.log(data)
            res.json(data);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

// sort and limit methods
router.get('/api/workouts/range', (req, res) => {
    db.Workout.find({}).sort({ day: -1}).limit(1)
        .then(data => {
            console.log(data)
            res.json(data);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.put("/api/workouts/:id", (req, res) => {
    db.Workout.findOneAndUpdate(
        {_id: req.params.id},
        { $push: { exercises: req.body}}

        .then(data => {
            let duration = data.calcDuration();
            db.Workout.findOneAndUpdate(
                { _id: req.params.id},
                { $set: {totalDuration: duration}}
            ) .then(updated => {
                res.json(updated);
            })
        }).catch(err => {
            res.json(err);
        })
    )
});

router.post("/api/workouts", ( { body }, res) => {
    db.Workout.create(body)
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

module.exports = router;
