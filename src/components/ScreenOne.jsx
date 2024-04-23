import screenonesvg from "../assets/screenone.svg"
import Loadingone from "../assets/Loading1.svg"
import { useNavigate } from "react-router-dom"

const ScreenOne =()=>{
   const navigate = useNavigate()
   const tonavigate = ()=>{
    navigate("/screentwo")
   }
    return(
        <div className="flex flex-col h-screen">
            <div className="flex flex-col">
     <a className="flex flex-grow underline ml-auto mr-5 mt-5 text-[#9FB2FF] text-xl" onClick={tonavigate}>Skip</a>
        <img src={screenonesvg} alt= "running" className="ml-10 mr-10 mt-14 " />
        <div className=" mt-20 ml-5 mr-5">
        <h1 className="text-3xl font-semibold">Track Your Goal</h1>
        <p className="text-xl mt-3 text-[#787878]">Don’t worry if you have trouble determining your goals, We can help you determine your goals and track your goals</p>
        </div>
        </div>
        <img src={Loadingone} alt="nextpage" className="mt-auto ml-auto mr-5 mb-12" onClick={tonavigate} />

        </div>
    )
}

export default ScreenOne