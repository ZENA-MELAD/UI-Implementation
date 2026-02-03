import React from "react";
import Chats from "../../assets/Data/Chats";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const ChatsPage = () => {
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/individualchat/${id}`);
  };
  return (
    <div className="w-full flex flex-col flex-1">
      <h1 className=" capitalize text-customTitle md:text-2xl font-semibold text-center my-2">
        chats
      </h1>
      <div className="w-full h-0.5 bg-gray-100"></div>
      {Chats.map((chat) => (
        <div
          key={chat.id}
          className="
    cursor-pointer
  transition-colors duration-300
  hover:bg-gray-50
  active:bg-gray-200
  "
          onClick={() => handleClick(chat.id)}
        >
          <div className="flex items-start p-2 gap-3.5 md:px-5 ">
            <div className="w-16">
              <img src={chat.image} />
            </div>
            <div className="w-3/4">
              <h2 className="font-semibold text-sm md:text-base lg:text-lg">
                {chat.namePerson}
              </h2>
              <p className="text-custom  md:text-sm lg:text-base">
                {chat.content}
              </p>
            </div>
          </div>
          <div className="w-full h-0.5 bg-gray-100"></div>
        </div>
      ))}
    </div>
  );
};

export default ChatsPage;
