import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";



export default function MainContainer(){
    console.log("MainContainer is rendered");
    return(
        <div>

            <ButtonList/>
            <VideoContainer/>

        </div>
    )
}