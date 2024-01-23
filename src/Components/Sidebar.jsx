import { useSelector } from "react-redux"


export default function Sidebar(){
    console.log("Sidebar is rendered")

    const isToggle = useSelector((state)=>state.sidebarToggler.isToggle);
    if(!isToggle) return null;
    return(
        <div className="p-5 w-48 shadow-lg ">
            <ul>
                <li className=" font-bold my-3">Home</li>
                <li>Liked Videoes</li>
                <li>Watch Later</li>
                <li>Save Later</li>
                <li>Downloaded Video</li>
            </ul>
            <ul>
                <li className=" font-bold my-3">Subscriptions</li>
                <li>Satyam</li>
                <li>Akash</li>
                <li>Sample Name1</li>
                <li>Sample Name2</li>
            </ul>
            <ul>
                <li className=" font-bold my-3">Explore</li>
                <li>Cricket</li>
                <li>Building</li>
                <li>Badminton</li>
                <li>Tennis</li>
            </ul>
        </div>
    )
}