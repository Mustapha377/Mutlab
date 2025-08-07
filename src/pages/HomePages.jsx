import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectList from '../component/projectList';
import ProjectTabs from '../component/projectTab';
import { projects } from '../projectData';

const HomePage = () => {
  const [activeTab, setActiveTab] = useState("Featured");

  const filtered = projects.filter((p) => {
    if (activeTab === "Featured") return true;
    if (activeTab === "Trending") return p.likes > 10;
    if (activeTab === "My Posts") return p.isMine;
  });

  return (
    <motion.div
      className="min-h-screen bg-gray-900 text-white px-4 py-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-3">
          Welcome to <span className="text-indigo-400">Mutlab</span>
        </h1>
        <p className="text-lg text-gray-300 mb-6">
          Share your project ideas, find collaborators, or sell your work.
        </p>
        <motion.input
          type="text"
          placeholder="Search for projects..."
          className="w-full max-w-2xl mx-auto px-5 py-3 text-sm md:text-base rounded-md outline-none bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-indigo-500 placeholder-gray-400"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        />
      </div>

       {/* Show horizontal tabs below input on mobile */}
      <div className=" max-w-6xl mx-auto mt-8">
        <ProjectTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      {/* Grid Layout */}
      <div className="max-w-6xl mx-auto grid grid-cols-1  gap-6">
        {/* Left - Project List */}
        <div>
          <ProjectList projects={filtered} />
        </div>

       
      </div>

     
    </motion.div>
  );
};

export default HomePage;
