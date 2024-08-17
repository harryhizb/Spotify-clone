import React from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { albumsData, assets, songsData } from "../assets/assets";
import { PlayerContext } from "../context/PlayerContext";
import { useContext } from "react";

const DisplayAlbum = () => {
  const {id} = useParams();
  const albumData = albumsData[id];
  const {playWidthId} = useContext(PlayerContext)
  return (
    <>
      <Navbar />
      <div className="mt-10 flex flex-col md:flex-row md:items-end">
        <img className="w-48 rounded" src={albumData.image} alt="" />
        <div className="flex flex-col ml-5">
          <p>Playlist</p>
          <h2 className="text-5xl font-bold mb-4 md:text-7xl">
            {albumData.name}
          </h2>
          <h4 className="">{albumData.desc}</h4>
          <p className="mt-1">
            <img
              className="inline-block w-5"
              src={assets.spotify_logo}
              alt=""
            />
            <b>Spotify</b>• 1,350,024 Likes • <b>50 sounds </b>
            about 2 hr 30 min
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]">
        <p>
          <b className="mr-4">#</b>Title
        </p>
        <p className="ml-3">Album</p>
        <p className="hidden sm:block ">Date Added</p>
        <img className="m-auto w-4" src={assets.clock_icon} alt="" />
      </div>
      <hr />
      {songsData.map((item, index) => (
        <div onClick={()=>playWidthId(item.id)}
          key={index}
          className="grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer "
        >
          <p className="text-white">
            <b className="mr-4 text-[#a7a7a7]">{index+1}</b>
            <img className="inline w-10 " src={item.image} alt="" />
            <b className="m-4">{item.name}</b>
          </p>
          <p className="text-[15px]">{albumData.name }</p>
          <p className="text-[15px] ml-2 hidden sm:block">5 days ago</p>
          <p className="text=[15px] text-center ml-2">{item.duration}</p>
        </div>
      ))}
    </>
  );
};

export default DisplayAlbum;
