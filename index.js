const exerciseUrl = 'http://localhost:3000/exercises'

//fetches from json server
const fetchExercises = () => {
    fetch(exerciseUrl)
    .then(res => res.json())
    .then(exercises => iterator(exercises))
}
fetchExercises()

// iterates through exercises
const iterator = (exercises) => {
    exercises.forEach(exercise => renderExercise(exercise))
}

// const img = document.getElementById('workout-pics')
const todaysWorkoutList = document.getElementById('todays-workout')
todaysWorkoutList.textContent = "Todays Workout:"

// renders exercises to page when their name is clicked
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

    //changes muscle group color on mouseover, reverts to original color on mouse leave
    chosenWorkout.onmouseover = () => {
        chosenWorkout.style.backgroundColor = 'olive'
        chosenWorkout.style.color = 'white'
    }
    chosenWorkout.onmouseleave = () => {
        chosenWorkout.style.backgroundColor = 'rgba(128, 128, 0, 0.424)'
        chosenWorkout.style.color = 'black'
    }


    //double clicking a muscle category adds it to the workout schedule
chosenWorkout.ondblclick = (exercise) =>  addToSchedule(exercise)

const addToSchedule = () => {
    const listItem = document.createElement('li')
    todaysWorkoutList.appendChild(listItem)
    listItem.textContent = exercise.name

    //removes item from list when clicked on
    listItem.onclick = () => {
        listItem.remove()
    }
    listItem.onmouseover = () => {
        listItem.style.fontWeight = "bold"
    }
    listItem.onmouseleave = () => {
        listItem.style.fontWeight = "normal"
    }
}



}




