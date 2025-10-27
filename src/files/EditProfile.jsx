import React, { useState } from "react";
import Navbar from "./Navbar";

const EditProfile = () => {
  const [gender, setGender] = useState("");
  const [name, setName] = useState("John Doe");
  const [bio, setBio] = useState("Full-stack developer passionate about React and Node.js");
  const [skills, setSkills] = useState("");

  return (
    <div className="min-h-screen bg-[#111113] text-gray-200">
      <Navbar />

      {/* Header */}
      <div className="flex justify-between items-center w-[80%] mx-auto mt-8">
        <h1 className="text-4xl font-bold text-white">Edit Profile</h1>
        <div>
          <button className="bg-gray-700 px-5 py-2 rounded-md mx-2 hover:bg-gray-600 transition">
            Cancel
          </button>
          <button className="bg-pink-600 px-5 py-2 rounded-md hover:bg-pink-700 transition">
            Save Changes
          </button>
        </div>
      </div>

      {/* Card Container */}
      <div className="w-[80%] mx-auto my-8 bg-[#1f1f23] rounded-2xl shadow-lg border-t-4 border-pink-600 overflow-hidden">

        {/* Profile Picture */}
        <div className="bg-pink-600 py-10 flex justify-center">
          <img
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=John"
            alt="Profile Pic"
            className="w-24 h-24 rounded-full border-4 border-white shadow-md"
          />
        </div>

        {/* Form Section */}
        <div className="p-8 space-y-6">
          
          {/* Name */}
          <div>
            <label className="block text-white font-medium mb-2">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-[#2a2c31] text-gray-200 px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
            />
          </div>

          {/* Bio */}
          <div>
            <label className="block text-white font-medium mb-2">Bio</label>
            <textarea
              rows="3"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="w-full bg-[#2a2c31] text-gray-200 px-4 py-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-pink-500 transition resize-none"
            />
          </div>

          {/* Skills */}
          <div>
            <label className="block text-white font-medium mb-2">Skills</label>
            <input
              type="text"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
              placeholder="e.g. React, Node.js, MongoDB"
              className="w-full bg-[#2a2c31] text-gray-200 px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block text-white font-medium mb-2">Gender</label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full bg-[#2a2c31] text-gray-200 px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500 transition cursor-pointer"
            >
              <option value="" disabled>
                Select gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="others">Others</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
