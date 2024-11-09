import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../lib/axios";

const uploadPost = async (data) => {
    try {
        const response = await axiosInstance.post("post", data,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }
        );
        return response.data;
    } catch (error) {
        throw new Error(error.message);
    }
}

export const useUploadPost = () => {
    return useMutation({
        mutationFn: (data) => uploadPost(data),
    });
}