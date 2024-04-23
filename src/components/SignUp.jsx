import google from "../assets/google.svg"
import facebook from "../assets/facebook.svg"
import { useNavigate } from "react-router-dom"

const SignUp =()=>{
    const navigate = useNavigate()

    const tonavigate = () => {
        navigate("/workoutgoals")
       }
       const tologin = () => {
        navigate("/login")
       }
    return(
        <div className="flex flex-col h-screen justify-between">
          <div className="flex flex-col ">

        <h1 className="text-2xl text-[#2C2B2B] font-bold ml-5 mt-10">Create an account</h1>
        <input type="text" placeholder="First Name" className="mt-14 rounded-2xl placeholder:font-semibold placeholder:text-[#7F7F7F] py-4 pl-5 bg-[#F1F1F1] ml-5 mr-5 focus:outline-none focus:border-none" />
        <input type="text" placeholder="Last Name" className="mt-8 rounded-2xl placeholder:font-semibold placeholder:text-[#7F7F7F] py-4 pl-5 bg-[#F1F1F1] ml-5 mr-5 focus:outline-none focus:border-none" />
        <input type="text" placeholder="Email" className="mt-8 rounded-2xl placeholder:font-semibold placeholder:text-[#7F7F7F] py-4 pl-5 bg-[#F1F1F1] ml-5 mr-5 focus:outline-none focus:border-none" />
        <input type="password" placeholder="Password" className="mt-8 rounded-2xl placeholder:font-semibold placeholder:text-[#7F7F7F] py-4 pl-5 bg-[#F1F1F1] ml-5 mr-5 focus:outline-none focus:border-none" />
       <div className="ml-5 mr-5 mt-8 flex gap-2">
        <input type="checkbox"  className=" focus:outline-none focus:border-none w-7 h-7"/>
        <p className="text-[#7F7F7F]">By proceeding, I agree to all T&C and  Privacy Policy</p>
        </div>
        </div>
        <div className="flex flex-col ">

        <button onClick={tonavigate} className="mt-20 ml-5 mr-5 py-4 font-semibold text-white rounded-2xl bg-gradient-to-r from-[#7B91FF] to-[#95BEFF]">Create an Account</button>
       <div className="flex flex-grow justify-center mt-5">
        <span className="mt-3 border-t border-black w-[40%]" />
        <span className="px-2">Or</span> 
        <span className=" mt-3 border-t border-black w-[40%]" />
        </div> 
        <div className="flex gap-4 mt-5 justify-center">
        <div className="rounded-lg flex border border-[#7F7F7F] w-10 h-10"><img src={google} alt="google" className="m-auto"/></div>
        <div className="rounded-lg flex border border-[#7F7F7F] w-10 h-10"><img src={facebook} alt="facebook" className="m-auto"/></div>
        </div>
        <p className="flex-grow mx-auto mt-5 mb-10">Already have an account? <a className="text-[#819CFF] underline" onClick={tologin}>Login</a></p>
</div>
        </div>
    )
}

export default SignUp