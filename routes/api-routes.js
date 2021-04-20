const { db } = require("../models/Workout.js");
const Workout = require("../models/Workout.js");

module.exports = (app) => {
    // How to find most recent workout
    app.get("/api/workouts", (req, res) => {
        Workout.find({}).sort({ "date": -1 }).limit(1)
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.status(400).json(err);
            });
    });

    // app.put("/api/workouts/:id", (req, res) => {
    //     Workout.update(
    //         {
    //             _id = req.params
    //         },
    //         {
    //             type: req.body.type,
    //             name: req.body.name,
    //             duration: req.body.duration,
    //             weight: req.body.weight,
    //             reps: req.body.reps,
    //             sets: req.body.sets
    //         }
    //     )
    // });

    app.post("/api/workouts", ({ body }, res) => {
        Workout.create(body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
    });

}
