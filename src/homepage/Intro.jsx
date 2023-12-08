import React, { useRef, useState } from 'react';
import {meal} from "../constants/index";
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';

const Intro = () => {
    const [playVideo, setPlayVideo] = useState(false);
   const  videoRef = useRef()
  return (
    <div>
       <div className='video-div'> <video ref={videoRef} src={meal} type="video/mp4"
        loop
        controls={false}
        muted />

        <div style={playVideo?{background:"none"}:{background: "rgba(0,0,0,0.65)"}} className='play-pause-div'>
       <div
       className='play-pause'
      
        
       onClick={()=>{

        setPlayVideo(!playVideo)
        if(playVideo){
            videoRef.current.pause();
        }else{
            videoRef.current.play();
        }
    
    
    
    }}
       
       
       
       >
        {
            playVideo?<BsPauseFill color="#fff" fontSize={30}/> : <BsFillPlayFill color="#fff" fontSize={30}/>
        }



       </div>
       </div>


       </div>
    </div>
  )
}

export default Intro