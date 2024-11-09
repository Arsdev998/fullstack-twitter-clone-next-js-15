import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../lib/axios";

const getPost = async () => {
  try {
    const { data } = await axiosInstance.get("post");
    return data;
  } catch (error) {
    throw new error(error.message);
  }
};

export const useGetPost = () => {
  return useQuery({
    queryKey: ["post"],
    queryFn: getPost,
  });
};
