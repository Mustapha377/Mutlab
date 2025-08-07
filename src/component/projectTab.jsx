import React, { useState } from 'react';

const ProjectTabs = ({ activeTab, setActiveTab, vertical = false }) => {
  const tabs = ["Featured", "Trending", "My Posts"];

  return (
    <div className={`flex ${vertical ? "flex-col items-start" : "justify-center"} gap-4`}>
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`
            ${activeTab === tab ? "text-indigo-400 border-b-2 border-indigo-400" : "text-gray-400"}
            ${vertical ? "text-sm w-full text-left py-1" : "px-4 py-2"}
            hover:text-white transition
          `}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default ProjectTabs;

