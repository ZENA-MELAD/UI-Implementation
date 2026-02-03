import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Chats from "../../assets/Data/Chats";
import { IoIosArrowBack } from "react-icons/io";
import Img from "../../assets/Images/image5.png";
const ChatConversation = () => {
  const navigateBack = useNavigate();
  const { id } = useParams();
  const chat = Chats.find((chat) => chat.id === Number(id));
  console.log(chat);
  return (
    <div className="w-full flex-1">
      <div className="flex items-center px-3 my-2">
        <IoIosArrowBack
          size={30}
          className="cursor-pointer"
          onClick={() => navigateBack(-1)}
        />
        <h2 className="flex-1 text-center capitalize text-customTitle md:text-2xl font-semibold">
          {chat.namePerson}
        </h2>
      </div>
      <div className="w-full h-0.5 bg-gray-100"></div>
      <div className=" w-full flex flex-col  gap-2 mt-4  md:mt-5">
          <div className="common-style-container">
        <div className="w-7 md:w-10">
          <img src={chat.image} />
        </div>
        <div className="message-style message-send-style w-3/4 customWidth:w-2/3 sm:w-3/5 lg:w-1/3">
          Really love your most recent photo. I’ve been trying to capture the
          same thing for a few months and would love some tips!
        </div>
      </div>
      <div className="common-style-container">
        <div className="message-style message-receive-style w-3/4 customWidth:w-2/3 sm:w-3/5 lg:w-1/3">
          A fast 50mm like f1.8 would help with the bokeh. I’ve been using
          primes as they tend to get a bit sharper images.
        </div>
        <div className="w-7 md:w-10">
          <img src={Img} />
        </div>
      </div>
        <div className="common-style-container">
        <div className="w-7 md:w-10">
          <img src={chat.image} />
        </div>
        <div className=" message-style message-send-style  w-3/4 customWidth:w-2/3 sm:w-3/5 lg:w-1/3
        ">
          Thank you! That was very helpful!
        </div>
      </div>
      </div>
    
    </div>
  );
};
export default ChatConversation;
