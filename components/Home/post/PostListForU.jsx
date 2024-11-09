"use client";

import { useGetPost } from "../../../hook/useGetPost";
import PostBox from "./PostBox";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

function PostListForU() {
  const { data, isFetching } = useGetPost();

  return (
    <div className="text-white">
      {isFetching ? (
         <AiOutlineLoading3Quarters className="animate-spin mx-auto text-blue-500 text-xl font-bold"/>
      ) : (
        data?.map((post) => (
          <PostBox
            key={post.id}
            name={post.user.name}
            src={post.imgUrl}
            caption={post.caption}
            email={post.user.email}
          />
        ))
      )}
    </div>
  );
}

export default PostListForU;
