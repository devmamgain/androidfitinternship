import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ScreenOne from './components/ScreenOne'
import ScreenTwo from './components/ScreenTwo'
import SignUp from './components/SignUp'
import LogIn from './components/LogIn'
import WorkoutGoals from './components/WorkoutGoals'
import WorkoutTracker from './components/WorkoutTracker'
import WorkoutSchedule from './components/WorkoutSchedule'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path= "/" element={<ScreenOne/>} />
      <Route path= "/screentwo" element={<ScreenTwo/>} />
      <Route path= "/signup" element={<SignUp/>} />
      <Route path= "/login" element={<LogIn/>} />
      <Route path= "/workoutgoals" element={<WorkoutGoals/>} />
      <Route path= "/workouttracker" element={<WorkoutTracker/>} />
      <Route path= "/workoutschedule" element={<WorkoutSchedule/>} />

    </Routes>
    </BrowserRouter>
  )
}

export default App
