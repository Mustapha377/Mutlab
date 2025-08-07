import React from 'react';
import { Outlet } from 'react-router-dom';
import ProjectTabs from './projectTab'; // your vertical tabs
import Navbar from "./Navbar"

const Layout = () => {
  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      {/* Left content area */}
      <div className="w-full lg:w-[85%] p-4">
        <Navbar />
        <Outlet />
      </div>

      {/* Sticky right sidebar */}
      <div className="hidden lg:block lg:w-[15%] p-4">
        <div className="sticky top-0 space-y-6">
          <nav>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="/" className="hover:text-indigo-400">Home</a></li>
              <li><a href="/post" className="hover:text-indigo-400">Post Project</a></li>
              <li><a href="/profile" className="hover:text-indigo-400">Profile</a></li>
            </ul>
          </nav>
          <ProjectTabs />
        </div>
      </div>
    </div>
  );
};

export default Layout;