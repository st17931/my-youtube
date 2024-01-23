import { useDispatch } from "react-redux";
import { handleToggle } from "../store/Slices/appSlice";


export default function Head(){
    const dispatch = useDispatch();

    function handleClick(){
        dispatch(handleToggle());
    }

    console.log("Head component is rendered");
    return(
        <div className=" grid grid-flow-col p-5 m-2 shadow-lg ">
            <div className="flex justify-between col-span-1">
                <img alt="hamburger" onClick={handleClick} src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Hamburger_icon.svg"/>
                <img alt="youtube-icon" className=" h-8" src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"/>
            </div>

            <div className="col-span-10 text-center ">
                <input className=" w-6/12 border p-2 border-gray-400 rounded-l-full" type="text"/>
                <button className=" w-2/12 border p-2 border-gray-400 rounded-r-full">Search</button>
            </div>

            <div className="col-span-1">
                <img alt="profile-pic" className=" h-8" src="https://static.vecteezy.com/system/resources/previews/019/879/198/non_2x/user-icon-on-transparent-background-free-png.png"/>
            </div>
        </div>
    )
}