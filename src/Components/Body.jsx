
import MainContainer from "./Maincontainer";
import Sidebar from "./Sidebar";

export default function Body(){
    console.log("Body Component is rendered")
    return(
        <div className=" flex">

            <Sidebar/>
            <MainContainer/>

        </div>
    )
}