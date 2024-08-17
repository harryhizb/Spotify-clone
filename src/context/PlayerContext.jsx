import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";

// Create the context
export const PlayerContext = createContext();

// Correct the component name
const PlayerContextProvider = (props) => {
    const audioRef = useRef();
    const seekBg = useRef();
    const seekBar = useRef();

    const [track , setTrack] = useState(songsData[0]);
    const [playStatus , setPlayStatus]= useState(false);
    const [time , setTime] = useState({
        currentTime :{
            second:0,
            minute:0
        },
        totalTime:{
            second:0,
            minute:0
        }
    })
    const play = () =>{
        audioRef.current.play();
        setPlayStatus(true)
    }

    const pause = () =>{
        audioRef.current.pause();
        setPlayStatus(false);
    }


   const playWidthId = async(id) => {
   await setTrack(songsData[id]);
   await audioRef.current.play();
   setPlayStatus(true);
   }

   const previous = async() =>{
    if(track.id > 0){
        await setTrack(songsData[track.id-1]);
        await audioRef.current.play();
        setPlayStatus(true);
        
    }
   }

   const next = async() =>{
    if(track.id < songsData.length-1){
        await setTrack(songsData[track.id+1]);
        await audioRef.current.play();
        setPlayStatus(true);
        
    }
   }
    
   const seekSong = async (e) => {
    const seekPosition = e.nativeEvent.offsetX; // Get the X position where the user clicked
    const seekWidth = seekBg.current.offsetWidth; // Get the total width of the seek bar
    const duration = audioRef.current.duration; // Get the total duration of the audio
  
    // Calculate the new current time based on where the user clicked
    audioRef.current.currentTime = (seekPosition / seekWidth) * duration;
  };
  
    


    useEffect(() => {
        const interval = setInterval(() => {
            const currentTime = audioRef.current.currentTime;
            const duration = audioRef.current.duration;

            if (duration > 0) {
                // Update the time state
                setTime({
                    currentTime: {
                        second: Math.floor(currentTime % 60),
                        minute: Math.floor(currentTime / 60)
                    },
                    totalTime: {
                        second: Math.floor(duration % 60),
                        minute: Math.floor(duration / 60)
                    }
                });

                // Update the width of the seekBar
                const seekBarWidth = (currentTime / duration) * 100;
                if (seekBar.current) {
                    seekBar.current.style.width = `${seekBarWidth}%`;
                }
            }
        }, 1000);

        // Clean up the interval on component unmount
        return () => clearInterval(interval);
    }, [audioRef]);

    const contextValue = {
        audioRef,
        seekBg,
        seekBar,
        track,
        setTrack,
        playStatus, 
        setPlayStatus,
        time, setTime,
        play, pause, playWidthId,next,previous,
        seekSong 

    };

    return (
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider> 
    );
};

// Export the context provider
export default PlayerContextProvider;
