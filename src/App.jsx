import Sidebar from './components/Sidebar';
import Player from './components/Player';
import Display from './components/Display';
import { useContext } from 'react';
import { PlayerContext } from './context/PlayerContext';



const App = () => {
    

  const {audioRef, track} = useContext(PlayerContext)

  return (
    <div className='h-screen flex flex-col bg-black'>
      <div className='flex-grow flex w-full p-2'>
        <Sidebar />
        <Display />
      </div>
      <Player />
      <audio ref={audioRef} src={track.file} preload='auto'></audio>
    </div>
  );
};

export default App;
