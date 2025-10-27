import React from "react";
import {
  HeartIcon,
  ChatBubbleBottomCenterTextIcon,
  UserIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/solid";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteUser } from "../utils/UserSlice";
import { Link } from "react-router-dom";


const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    const response = await axios.post(
      "http://localhost:7777/logout"
      // { email, password },
      // { withCredentials: true }
    );
    dispatch(deleteUser());
    navigate("/");
  };

  return (
    <div>
      <nav className="bg-gray-900 px-4 py-2 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center">
          <div className="bg-pink-500 rounded-xl p-2 flex items-center justify-center mr-3">
            <HeartIcon className="h-6 w-6 text-white" />
          </div>
          <span className="text-pink-400 font-bold text-xl">DevTinder</span>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center space-x-8">
          <Link
            to="/browse"
            className="flex items-center text-pink-400 hover:text-pink-300 transition-colors"
          >
            <HeartIcon className="h-5 w-5 mr-1" />
            Browse
          </Link>
          <Link
           to="/matches"
            className="flex items-center text-gray-300 hover:text-pink-400 transition-colors"
          >
            <ChatBubbleBottomCenterTextIcon className="h-5 w-5 mr-1" />
            Matches
          </Link>
          <Link
            to="/profile"
            className="flex items-center text-gray-300 hover:text-pink-400 transition-colors"
          >
            <UserIcon className="h-5 w-5 mr-1" />
            Profile
          </Link>
          <a
            href="#"
            onClick={handleLogout}
            className="flex items-center text-gray-300 hover:text-pink-400 transition-colors"
          >
            <ArrowRightOnRectangleIcon className="h-5 w-5 mr-1" />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
