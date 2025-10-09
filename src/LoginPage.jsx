import React from "react";
import { CardDemo } from "./CardDemo";

const LoginPage = () => { 
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4">
      {/* Logo */}
      <div className="text-center mb-4">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
          DevTinder
        </h1>
      </div>

      {/* Tagline */}
      <div className="flex justify-center gap-8 mb-2 text-gray-400 text-sm font-medium uppercase tracking-wide">
        <p>Code</p>
        <p>Connect</p>
        <p>Match</p>
      </div>

      {/* Subtitle */}
      <p className="text-gray-400 mb-8 text-lg">Find your coding soulmate</p>

      {/* Login Card */}
      <div className="w-full max-w-sm">
        <CardDemo />
      </div>
    </div>
  );
};

export default LoginPage;
