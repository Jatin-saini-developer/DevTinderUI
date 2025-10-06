import React from "react";

const SignUpPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6">
      {/* Logo and Title */}
      <div className="text-center mb-6">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent mb-2">
          DevTinder
        </h1>
        <p className="text-gray-300">
          Join thousands of developers finding their perfect match
        </p>
      </div>

      {/* Form Container */}
      <div className="bg-zinc-900 p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-1">
          Create Your Developer Profile
        </h2>
        <p className="text-center text-gray-400 mb-6">
          Let's build your coding identity
        </p>

        {/* Full Name and Email */}
        <div className="flex flex-col gap-3 mb-4">
          <input
            type="text"
            placeholder="Full Name"
            className="bg-zinc-800 px-4 py-3 rounded-lg border border-zinc-700 focus:border-pink-600 focus:outline-none"
          />
          <input
            type="email"
            placeholder="E-mail"
            className="bg-zinc-800 px-4 py-3 rounded-lg border border-zinc-700 focus:border-pink-600 focus:outline-none"
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            className="w-full bg-zinc-800 px-4 py-3 rounded-lg border border-zinc-700 focus:border-pink-600 focus:outline-none"
          />
        </div>

        {/* Bio */}
        <div className="mb-4">
          <textarea
            name="bio"
            id="bio"
            placeholder="Write a short bio about yourself..."
            rows="3"
            className="w-full bg-zinc-800 px-4 py-3 rounded-lg border border-zinc-700 focus:border-pink-600 focus:outline-none resize-none"
          ></textarea>
        </div>

        {/* Skills */}
        <div className="mb-6">
          <label
            htmlFor="skills"
            className="block text-gray-300 mb-2 font-medium"
          >
            Skills & Technologies
          </label>
          <div className="flex gap-2">
            <input
              id="skills"
              type="text"
              placeholder="e.g., React, Python, Node.js"
              className="flex-1 bg-zinc-800 px-4 py-3 rounded-lg border border-zinc-700 focus:border-pink-600 focus:outline-none"
            />
            <button className="px-4 bg-pink-600 hover:bg-pink-700 rounded-lg font-bold text-white">
              +
            </button>
          </div>
        </div>

        {/* Submit Button */}
        <button className="w-full bg-gradient-to-r from-rose-600 to-pink-600 hover:opacity-90 transition-all py-3 rounded-xl font-semibold text-lg">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default SignUpPage;
