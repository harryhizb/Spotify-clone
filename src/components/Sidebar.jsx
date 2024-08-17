import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="w-[30%]  p-2 flex-col gap-2 text-white hidden lg:flex ] ">
      <div className="bg-[#121212] h-[15%] rounded flex flex-col justify-around">
        <div onClick={()=>navigate('/')}  className="flex items-center gap-3 pl-8 cursor-pointer">
          <img className="w-6 m-2" src={assets.home_icon} alt="" />
          <p className="font-bold">Home</p>
        </div>
        <div className="flex items-center gap-3 pl-8 cursor-pointer">
          <img className="w-6 m-2 mt-4" src={assets.search_icon} alt="" />
          <p className="font-bold">Search</p>
        </div>
      </div>
      <div className="bg-[#121212] h-[85%] rounded">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              className="w-7 cursor-pointer"
              src={assets.stack_icon}
              alt=""
            />
            <p className="font-semibold cursor-pointer">Your Library</p>
          </div>
          <div className="flex items-center gap-3">
            <img className="w-5 cursor-pointer" src={assets.plus_icon} alt="" />
            <img
              className="w-5 cursor-pointer"
              src={assets.arrow_icon}
              alt=""
            />
          </div>
        </div>
        <div className="bg-[#242424] p-4 rounded font-semibold text-white flex flex-col items-start justify-start gap-1 pl-4 ">
          <h1>Create your first playlist</h1>
          <p className="font-light">it's easy we will help you</p>
          <button className="px-5 py-1.5 bg-white text-black text[10px] rounded-full mt-4 ">
            Create playlist
          </button>
        </div>
        <div className="bg-[#242424] p-4 rounded font-semibold text-white flex flex-col items-start justify-start gap-1 pl-4 mt-4 ">
          <h1>lets's find some podcasts to follow</h1>
          <p className="font-light">we'll keep you updated on new episodes</p>
          <button className="px-5 py-1.5 bg-white text-black text[10px] rounded-full mt-4  ">
            Browse podcasts
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
