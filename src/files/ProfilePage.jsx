import React from "react";
import Navbar from "./Navbar";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProfilePage = () => {
  return (
    <div>
      <Navbar />

      <div className="my-4">
        <div className="flex justify-between items-center w-[80%] mx-auto ">
          <h1 className="text-4xl font-bold">Profile</h1>
          <Link to='/editProfile' className="bg-pink-600 p-3 rounded-md">Edit Profile</Link >
        </div>
        <div className="w-[80%] mx-auto my-3">
          <div className="bg-pink-600 py-15 rounded-t-2xl flex justify-center">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=John" alt="Profile Pic" className="w-24 h-24" />
          </div>


          <div className="bg-[#1f1f23] text-gray-200 p-6 rounded-b-2xl shadow-lg  mx-auto border border-gray-700">
            {/* Name and bio */}
            <h2 className="text-3xl font-bold text-white mb-2">Jatin Saini</h2>
            <p className="text-gray-400 mb-6">
              Full-stack developer passionate about React and Node.js
            </p>

            {/* Skills section */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3 text-white">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {["React", "TypeScript", "Node.js", "MongoDB"].map((skill) => (
                  <span
                    key={skill}
                    className="bg-gray-700 text-gray-200 px-3 py-1 rounded-full text-sm font-medium hover:bg-pink-600 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-lg font-semibold mb-3 text-white">
                Social Links
              </h3>
              <div className="flex gap-4 items-center text-gray-400">
                <a
                  href="#"
                  className="flex items-center gap-1 hover:text-pink-400 transition"
                >
                  <FaGithub className="text-lg" />
                  GitHub
                </a>
                <a
                  href="#"
                  className="flex items-center gap-1 hover:text-pink-400 transition"
                >
                  <FaLinkedin className="text-lg" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
