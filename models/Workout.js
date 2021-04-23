const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    totalDuration: {
        type: Number,
        default: 0
    },
    exercises: [
        {
            type: String,
            name: String,
            duration: Number,
            distance: Number,
            weight: Number,
            reps: Number,
            sets: Number
        }
    ]
});

WorkoutSchema.methods.calcDuration = function() {

    let duration = 0;
    for(i=0; i < this.exercises.length; i++){
        duration += this.exercises[i].duration;
    };
    return duration;
};

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;