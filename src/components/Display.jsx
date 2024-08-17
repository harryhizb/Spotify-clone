import React from 'react'
import {Route , Routes} from 'react-router-dom'
import DisplayHome from './DisplayHome'
import DisplayAlbum from './DisplayAlbum'
import { useLocation } from 'react-router-dom';
import { albumsData } from '../assets/assets';
import  { useEffect, useRef } from 'react';

const Display = () => {

  const displayRef = useRef();
  const location = useLocation();
  const isAlbumId = location.pathname.includes('album');
  const albumId = isAlbumId ? location.pathname.slice(-1) : '';
  const bgColor = albumsData[Number(albumId)]?.bgColor || '#000000';

  useEffect(() => {
    if (isAlbumId) {
      displayRef.current.style.background = `linear-gradient(${bgColor}, #121212)`;
    }
    else {
      displayRef.current.style.background = `#121212`;
    }
  },[isAlbumId, bgColor]);
  return (
    <div ref={displayRef} className='w-[100%]  m-2 px-6 pt-4 rounded bg-[#121212] overflow-auto text-white lg:w-[75%] lg:ml- '>
    <Routes>
      <Route path='/' element = {<DisplayHome/>} />
      <Route path='/album/:id' element = {<DisplayAlbum/>} />
      </Routes> 
    </div>
  )
}

export default Display