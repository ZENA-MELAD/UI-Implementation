import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { GoPlus } from "react-icons/go";
import { IoChatbubbleOutline } from "react-icons/io5";
import { BsPerson } from "react-icons/bs";
const Footer = () => {
  return (
    <div className="p-2 w-full  border border-t-gray-300  border-transparent flex flex-col justify-center items-center gap-4">
      <div className="w-full flex justify-around items-center md:justify-center md:gap-x-28">
        <AiOutlineHome size={20} />
        <CiSearch size={20} />
        <div className="w-16 h-9 rounded-3xl bg-gradient-to-r from-[#FF4D00]  to-[#FF00D6]  flex justify-center items-center">
          <GoPlus size={20} color="white" />
        </div>
        <IoChatbubbleOutline size={20} />
        <BsPerson size={20} />
      </div>
      <div className="w-28 h-1 bg-black"></div>
    </div>
  );
};

export default Footer;
