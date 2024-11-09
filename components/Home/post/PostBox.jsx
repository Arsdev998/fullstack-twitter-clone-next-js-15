import Image from "next/image";
import userProfile from "../../../public/img/profile.jpg";
import { BsThreeDots } from "react-icons/bs";
import { FiMessageCircle } from "react-icons/fi";
import { BiRepost } from "react-icons/bi";
import { IoHeartOutline } from "react-icons/io5";
import { CiBookmark } from "react-icons/ci";

function PostBox({ name, src, caption, profile, email }) {
  return (
    <div className="w-full max-w-[650px] p-4 border-b border-gray-700 hover:bg-zinc-800/15 transition duration-150 ease-in-out cursor-pointer">
      <div className="flex gap-x-3">
        <Image
          src={profile || userProfile}
          alt={`user ${name} profile`}
          width={50}
          height={50}
          className="rounded-full object-cover h-[50px] w-[50px]"
        />
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-1">
              <p className="font-semibold text-white">{name}</p>
              <p className="text-sm text-gray-400">@{email}</p>
            </div>
            <BsThreeDots className="text-gray-400 cursor-pointer" />
          </div>
          {/* Post Body */}
          <p className="text-white mt-2">{caption}</p>
          {src && (
            <Image
              src={src}
              alt={`post by ${name}`}
              height={400}
              width={500}
              className="rounded-lg mt-3 max-w-full h-auto object-cover"
            />
          )}
          {/* Post Footer */}
          <div className="flex justify-between items-center mt-3 text-gray-400">
            <div className="flex items-center gap-x-1 cursor-pointer hover:text-blue-400">
              <FiMessageCircle />
              <p className="text-sm">107</p>
            </div>
            <div className="flex items-center gap-x-1 cursor-pointer hover:text-green-400">
              <BiRepost />
              <p className="text-sm">327</p>
            </div>
            <div className="flex items-center gap-x-1 cursor-pointer hover:text-red-400">
              <IoHeartOutline />
              <p className="text-sm">1.2K</p>
            </div>
            <div className="cursor-pointer hover:text-blue-400">
              <CiBookmark />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostBox;
