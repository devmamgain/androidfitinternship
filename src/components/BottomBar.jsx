import home from "../assets/home.svg"
import lines from "../assets/lines.svg"

import camera from "../assets/camera.svg"
import person from "../assets/person.svg"
import search from "../assets/search.svg"
import searchicon from "../assets/searchicon.svg"

const BottomBar = ()=>{

    return(
        <nav className="fixed bottom-0 left-0 w-full bg-white  p-5 flex justify-around z-10 h-16">
        <img src={home} alt="homee"/>
            <img src={lines} alt="lines"/>
            <img src={search} alt="searche" className="relative z-20 bottom-10 h-16" />
            <img src={searchicon} alt="searchicon" className="fixed  z-20 bottom-10 " />

            <img src={camera} alt="camera"/>
            <img src={person} alt="person"/>

        </nav>
    )

}
export default BottomBar