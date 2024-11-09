import React from "react";
import {
  AiOutlinePicture,
  AiOutlineGif,
  AiOutlineSmile,
  AiOutlineCalendar,
} from "react-icons/ai";
import { BiPoll, BiMap } from "react-icons/bi";

function HeadPost() {
  return (
    <div className="headpost-container flex p-4 border-b border-gray-700">
      <div className="profile-pic mr-4">
        <img
          src="/path/to/profile-pic.jpg"
          alt="Profile"
          className="w-12 h-12 rounded-full"
        />
      </div>
      <div className="post-content w-full">
        <textarea
          className="w-full bg-transparent text-white outline-none resize-none border-b-[1px] border-gray-700"
          rows="2"
          placeholder="Apa yang sedang terjadi?"
        ></textarea>
        <div className="post-actions flex items-center justify-between mt-4">
          <div className="icons flex gap-4 text-blue-500">
            <AiOutlinePicture size={24} />
            <AiOutlineGif size={24} />
            <BiPoll size={24} />
            <AiOutlineSmile size={24} />
            <AiOutlineCalendar size={24} />
            <BiMap size={24} />
          </div>
          <button className="bg-blue-500 text-white rounded-full px-4 py-2 font-semibold">
            Posting
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeadPost;
