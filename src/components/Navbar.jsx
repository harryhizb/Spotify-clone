import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const Navigate = useNavigate();
  return (
    <>
      <div className="w-full flex justify-between items-center font-semibold p-3 ">
        <div className="flex items-center gap-2">
          <img
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer" onClick={()=>(Navigate(-1))}
            src={assets.arrow_left}
            alt=""
          />
          <img
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer" on onClick={()=>(Navigate(1))}
            src={assets.arrow_right}
            alt=""
          />
        </div>
        <div className="flex items-center gap-4">
          <p className="bg-white text-black text-[15px] px-4 py-1 rounded-2xl hiden md:block cursor-pointer">
            Explore Premium
          </p>
          <p className="bg-black text-white py-1 px-3 rounded-2xl text[15px] cursor-pointer ">
            Install App
          </p>
          <p className="bg-purple-500 text-black text-[15px] rounded-full cursor-pointer h-6 w-6 flex items-center justify-center">
            A
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-4 ml-3">
<p className="bg-white text-black px-3 py-1 rounded-2xl">All</p>
<p className="bg-gray-800 px-4 py-1 rounded-2xl">Music</p>
<p className="bg-gray-800 px-4 py-1 rounded-2xl">Podcasts</p>
      </div>
    </>
  );
};

export default Navbar;
