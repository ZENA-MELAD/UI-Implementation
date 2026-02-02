import React from "react";
import { FaSignal } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";
import { FaBatteryFull } from "react-icons/fa6";
const Header = () => {
  return (
    <div className="w-full px-6 py-6 sm:px-10 flex justify-between items-center">
      <span className="font-semibold text-lg">9:27</span>
      <div className="flex gap-3">
        <FaSignal size={20} />
        <FaWifi size={20} />
        <FaBatteryFull size={20} />
      </div>
    </div>
  );
};

export default Header;
