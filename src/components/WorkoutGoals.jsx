import { useNavigate } from "react-router-dom"

const WorkoutGoals =()=>{
    const navigate = useNavigate()
    const tonavigate =()=>{
navigate("/workouttracker")
    }
    return(
        <div className="flex flex-col h-screen justify-between">
          <div className="flex flex-col ">

        <h1 className="text-2xl text-[#2C2B2B] font-bold ml-5 mt-10 text-center">What are your goals?</h1>
        <div   className="flex mt-5 rounded-2xl py-4 pl-5 bg-[#F1F1F1] ml-5 mr-5 " > Weight Loss <input type="checkbox"  className=" mr-5 appearance-none border border-[#819CFF] checked:bg-[#819CFF] bg-[#F1F1F1]  rounded-md  w-5 h-5 ml-auto "/>
</div>
<div   className="flex mt-5 rounded-2xl py-4 pl-5 bg-[#F1F1F1] ml-5 mr-5 " >Muscle Gain<input type="checkbox"  className=" mr-5 appearance-none border border-[#819CFF] checked:bg-[#819CFF] bg-[#F1F1F1]  rounded-md  w-5 h-5 ml-auto "/>
</div>
<div   className="flex mt-5 rounded-2xl py-4 pl-5 bg-[#F1F1F1] ml-5 mr-5 " >Flexibility and Mobility<input type="checkbox"  className=" mr-5 appearance-none border border-[#819CFF] checked:bg-[#819CFF] bg-[#F1F1F1]  rounded-md  w-5 h-5 ml-auto "/>
</div>
<div   className="flex mt-5 rounded-2xl py-4 pl-5 bg-[#F1F1F1] ml-5 mr-5 " >General Fitness<input type="checkbox"  className=" mr-5 appearance-none border border-[#819CFF] checked:bg-[#819CFF] bg-[#F1F1F1]  rounded-md  w-5 h-5 ml-auto "/>
</div>
<div   className="flex mt-5 rounded-2xl py-4 pl-5 bg-[#F1F1F1] ml-5 mr-5 " >Event - specific training<input type="checkbox"  className=" mr-5 appearance-none border border-[#819CFF] checked:bg-[#819CFF] bg-[#F1F1F1]  rounded-md  w-5 h-5 ml-auto "/>
</div>
<div   className="flex mt-5 rounded-2xl py-4 pl-5 bg-[#F1F1F1] ml-5 mr-5 " >Mindfulness and Mental Health<input type="checkbox"  className=" mr-5 appearance-none border border-[#819CFF] checked:bg-[#819CFF] bg-[#F1F1F1]  rounded-md  w-5 h-5 ml-auto "/>
</div>
        </div>
    
        <button onClick={tonavigate} className="mt-20 ml-5 mr-5 py-4 font-semibold text-white rounded-2xl bg-gradient-to-r from-[#7B91FF] to-[#95BEFF] mb-24">Confirm</button>


     
   
        </div>
    )
}

export default WorkoutGoals