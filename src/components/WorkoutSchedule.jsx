import BottomBar from "./BottomBar"
import CustomCalendar from "./CustomCalendar"
import leftarrow from "../assets/leftarrow.svg"
import { useNavigate } from "react-router-dom"

const WorkoutSchedule = ()=>{
    const navigate = useNavigate()

    const backnavigate =()=>{
        navigate("/workoutTracker")
            }
    return(
        <div>
         <h1 className="flex gap-2 text-2xl text-[#2C2B2B] font-bold ml-5 mt-10 text-center">
        <img src={leftarrow}  onClick={backnavigate} alt="leftarrow" className='w-5 h-5 mt-2'/>

           <span className='mx-auto'> Workout Schedule</span>
           </h1>
        
  <div className="ml-5 mr-5 mt-5">
        <CustomCalendar />
        <div className="flex flex-col divide-y gap-3">
        <h1 className="pt-3 text-sm">06:00 AM</h1>
        <h1 className="pt-3 text-sm">07:00 AM</h1>
        <h1 className="pt-3 text-sm">08:00 AM</h1>
        <h1 className="pt-3 text-sm">09:00 AM</h1>
        <h1 className="pt-3 text-sm">10:00 AM</h1>
        <h1 className="pt-3 text-sm">11:00 AM</h1>
        <h1 className="pt-3 text-sm">12:00 AM</h1>
        <h1 className="pt-3 text-sm">01:00 AM</h1>
        <h1 className="pt-3 text-sm">02:00 AM</h1>
        <h1 className="pt-3 text-sm">03:00 AM</h1>
        <h1 className="pt-3 text-sm">04:00 AM</h1>
        <h1 className="pt-3 text-sm">05:00 AM</h1>

        </div>
</div>
        <BottomBar />

        </div>
    )
}

export default WorkoutSchedule