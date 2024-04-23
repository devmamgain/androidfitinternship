import google from "../assets/google.svg"
import facebook from "../assets/facebook.svg"
import { useNavigate } from "react-router-dom"

const LogIn =()=>{
    const navigate = useNavigate()

    const tonavigate = () => {
        navigate("/workoutgoals")
       }
       const tosignup = () => {
        navigate("/signup")
       }
    return(
        <div className="flex flex-col h-screen justify-between">
            <div className="flex flex-col ">
        <h1 className="text-2xl text-[#2C2B2B] font-bold ml-5 mt-10">Welcome Back</h1>
        <input type="text" placeholder="Email" className="mt-14 rounded-2xl placeholder:font-semibold placeholder:text-[#7F7F7F] py-4 pl-5 bg-[#F1F1F1] ml-5 mr-5 focus:outline-none focus:border-none" />
          <input type="password" placeholder="Password" className="mt-8 rounded-2xl placeholder:font-semibold placeholder:text-[#7F7F7F] py-4 pl-5 bg-[#F1F1F1] ml-5 mr-5 focus:outline-none focus:border-none" />
       <div className="ml-5 mr-5 mt-2 flex gap-2">
        <p className="text-[#7F7F7F]">Forgot your password?</p>
        </div>
        </div>
        <div className="flex flex-col ">
        <button onClick={tonavigate} className="mt-20 ml-5 mr-5 py-4 font-semibold text-white rounded-2xl bg-gradient-to-r from-[#7B91FF] to-[#95BEFF]">Sign In</button>
       <div className="flex flex-grow justify-center mt-5">
        <span className="mt-3 border-t border-black w-[40%]" />
        <span className="px-2">Or</span> 
        <span className=" mt-3 border-t border-black w-[40%]" />
        </div> 
        <div className="flex gap-4 mt-5 justify-center">
        <div className="rounded-lg flex border border-[#7F7F7F] w-10 h-10"><img src={google} alt="google" className="m-auto"/></div>
        <div className="rounded-lg flex border border-[#7F7F7F] w-10 h-10"><img src={facebook} alt="facebook" className="m-auto"/></div>
        </div>
        <p className="flex-grow text-center mx-auto ml-5 mr-5 mt-5 mb-10">Don’t have an account yet? <a className="text-[#819CFF] underline" onClick={tosignup}>Create an account</a></p>
        </div>
        </div>
    )
}

export default LogIn