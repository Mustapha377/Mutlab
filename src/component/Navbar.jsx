import { useState } from "react";
import { Bell, Plus, ChevronDown, Menu } from "lucide-react";
import avatar from "../assets/img/avatar_profile.jpg"; // Replace with actual path

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white px-4 py-3 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left - Logo */}
        <div className="text-xl font-bold text-indigo-400">Mutlab</div>

        {/* Right - Icons */}
        <div className="hidden md:flex items-center gap-4">
          {/* Notification Icon */}
          <button className="hover:text-indigo-400">
            <Bell size={22} />
          </button>

          {/* Add Post Button */}
          <button
            onClick={() => setIsPostModalOpen(true)}
            className="hover:text-indigo-400"
          >
            <Plus size={22} />
          </button>

          {/* Profile with Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-2 hover:text-indigo-400"
            >
              <img
                src={avatar}
                alt="User"
                className="w-8 h-8 rounded-full"
              />
              <span className="text-sm">Mustapha</span>
              <ChevronDown size={16} />
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-gray-800 border border-gray-700 rounded-lg shadow-md z-50">
                <ul className="text-sm text-gray-300">
                  <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Profile</li>
                  <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Settings</li>
                  <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Logout</li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Hamburger for Mobile */}
        <button className="md:hidden">
          <Menu size={24} />
        </button>
      </div>

     
    </nav>
  );
};

export default Navbar;