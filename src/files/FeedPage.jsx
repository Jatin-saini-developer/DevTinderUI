import React, { useEffect } from "react";
import { HeartIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/FeedSlice";

const FeedPage = () => {
  const dispatch = useDispatch();

  const getFeed = async () => {
    try {
      const res = await axios.get("http://localhost:7777/feed", { withCredentials: true });
      dispatch(addFeed(res.data.data));
    } catch (error) {}
  };

  const feeds = useSelector((state) => state.feed )

  useEffect(() => {
    getFeed();
  }, []);

  return (
<div className="flex flex-wrap justify-center gap-6 p-6 bg-black min-h-screen">
  {feeds && feeds.length > 0 ? (
    feeds.map((user) => (
      <div
        key={user._id}
        className="bg-[#111] text-white rounded-2xl overflow-hidden shadow-lg w-80"
      >
        {/* Image */}
        <div className="bg-pink-500 flex justify-center items-center h-48">
          <img
            src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.firstName}`}
            alt={user.firstName}
            className="h-32 w-32 rounded-full border-4 border-[#111] -mb-12"
          />
        </div>

        {/* Content */}
        <div className="p-6 pt-16">
          <h2 className="text-xl font-semibold">{user.firstName} {user.lastName}</h2>
          <p className="text-gray-400 text-sm mt-2 leading-relaxed">
            {user.about || "No description provided"}
          </p>

          {/* Skills (optional placeholder if your API doesn’t have skills yet) */}
          <div className="flex flex-wrap gap-2 mt-4">
            {["React", "TypeScript", "Tailwind CSS"].map((skill) => (
              <span
                key={skill}
                className="bg-[#1e1e1e] text-gray-300 px-3 py-1 text-xs rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex justify-between mt-6">
            <button className="flex items-center justify-center gap-2 border border-gray-600 bg-black hover:bg-gray-800 text-gray-300 px-6 py-2 rounded-lg transition">
              <XMarkIcon className="h-5 w-5" />
              Pass
            </button>
            <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-6 py-2 rounded-lg transition">
              <HeartIcon className="h-5 w-5" />
              Like
            </button>
          </div>
        </div>
      </div>
    ))
  ) : (
    <p className="text-gray-400">Loading feed...</p>
  )}
</div>

  );
};

export default FeedPage;
