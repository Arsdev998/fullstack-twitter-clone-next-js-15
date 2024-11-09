"use client";
import React, { useState } from "react";
import { useUploadPost } from "../../../hook/useUpload"; // Import hook untuk mutasi
import {
  AiOutlinePicture,
  AiOutlineGif,
  AiOutlineSmile,
  AiOutlineCalendar,
} from "react-icons/ai";
import { BiPoll, BiMap } from "react-icons/bi";

function HeadPost() {
  const { mutate: uploadPost, isLoading, isError, error } = useUploadPost();
  const [file, setFile] = useState(null);
  const [caption, setCaption] = useState("");
  const [fileType, setFileType] = useState("");

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      // Validasi jenis file (hanya gambar yang diizinkan)
      const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
      if (!allowedTypes.includes(selectedFile.type)) {
        alert("Hanya file gambar yang diizinkan (JPEG, PNG, GIF)!");
        setFile(null);
        return;
      }
      setFile(selectedFile);
      setFileType(selectedFile.type); // Menyimpan tipe file
    }
  };

  const handlePost = () => {
    if (!file || !caption) {
      alert("File dan caption diperlukan!");
      return;
    }

    // Membuat FormData untuk mengirim data (file + caption + fileType)
    const formData = new FormData();
    formData.append("file", file); // Menambahkan file ke FormData
    formData.append("caption", caption); // Menambahkan caption ke FormData
    formData.append("fileType", fileType); // Menambahkan tipe file ke FormData

    // Memanggil mutasi untuk upload data
    uploadPost(formData);
  };

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
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
        ></textarea>

        <input type="file" onChange={handleFileChange} className="file-input" />

        <div className="post-actions flex items-center justify-between mt-4">
          <div className="icons flex gap-4 text-blue-500">
            <AiOutlinePicture size={24} />
            <AiOutlineGif size={24} />
            <BiPoll size={24} />
            <AiOutlineSmile size={24} />
            <AiOutlineCalendar size={24} />
            <BiMap size={24} />
          </div>
          <button
            onClick={handlePost}
            disabled={isLoading}
            className={`bg-blue-500 text-white rounded-full px-4 py-2 font-semibold ${
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isLoading ? "Uploading..." : "Posting"}
          </button>
        </div>

        {isError && <p className="text-red-500">Error: {error.message}</p>}
      </div>
    </div>
  );
}

export default HeadPost;
