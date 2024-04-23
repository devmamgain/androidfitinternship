import screentwoimage from "../assets/screentwo.svg"
import Loadingtwo from "../assets/Loading2.svg"
import { useNavigate } from "react-router-dom"

const ScreenTwo =()=>{
    const navigate = useNavigate()

    const tonavigate = () => {
        navigate("/signup")
       }
    return(
        <div className="flex flex-col h-screen">
            <div className="flex flex-col">
     <a className="flex flex-grow underline ml-auto mr-5 mt-5 text-[#9FB2FF] text-xl" onClick={tonavigate}>Skip</a>
        <img src={screentwoimage} alt= "running" className="ml-10 mr-10 mt-14 " />
        <div className=" mt-20 ml-5 mr-5">
        <h1 className="text-3xl font-semibold">Get Burn</h1>
        <p className="text-xl mt-3 text-[#787878]">Let’s keep burning to achieve your goals, it hurts only temporarily, if you give up now you will be in pain forever</p>
        </div>
        </div>
        <img src={Loadingtwo} alt="nextpage" className="mt-auto ml-auto mr-5 mb-12" onClick={tonavigate}/>

        </div>
    )
}

export default ScreenTwo