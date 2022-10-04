const exerciseUrl = 'http://localhost:3000/exercises'

const fetchExercises = () => {
    fetch(exerciseUrl)
    .then(res => res.json())
    .then(exercises => iterator(exercises))
}
fetchExercises()

const iterator = (exercises) => {
    exercises.forEach(exercise => renderExercise(exercise))
}

// const img = document.getElementById('workout-pics')


const renderExercise = (exercise) => {
    const workoutLibrary = document.getElementById('exercise-library')
    const chosenWorkout = document.createElement('ul')
    chosenWorkout.id = 'individual-exercise'
    const largerImage = document.getElementById('workout-img')
    const exerciseName = document.getElementById('name-of-exercise')
    const setsAndReps = document.getElementById('sets-reps')
    workoutLibrary.appendChild(chosenWorkout)

    chosenWorkout.textContent = exercise.muscle_group
    
    chosenWorkout.onclick = () => {
        largerImage.src = exercise.image
        exerciseName.textContent = exercise.name
        setsAndReps.textContent = exercise.sets_reps

    }

    chosenWorkout.onmouseover = () => {
        chosenWorkout.style.backgroundColor = 'olive'
    }
    chosenWorkout.onmouseleave = () => {
        chosenWorkout.style.backgroundColor = 'rgba(128, 128, 0, 0.424)'
    }

}

