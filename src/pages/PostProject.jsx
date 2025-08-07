import React from 'react';
import { motion } from 'framer-motion';

const PostProject = () => {
  return (
    <motion.div
      className="min-h-screen px-4 py-8 bg-gray-900 text-white"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="max-w-2xl mx-auto bg-gray-800 p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-white">Post a New Project</h2>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Project Title"
            className="bg-gray-700 text-white px-4 py-2 rounded-md outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <textarea
            placeholder="Project Description"
            className="bg-gray-700 text-white px-4 py-2 rounded-md outline-none focus:ring-2 focus:ring-indigo-500 h-32"
          />
          <input
            type="text"
            placeholder="Tags (comma separated)"
            className="bg-gray-700 text-white px-4 py-2 rounded-md outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <select className="bg-gray-700 text-white px-4 py-2 rounded-md">
            <option value="collaborate">Open to Collaborate</option>
            <option value="sell">For Sale</option>
          </select>
          <input
            type="number"
            placeholder="Price (optional)"
            className="bg-gray-700 text-white px-4 py-2 rounded-md outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            type="submit"
            className="mt-4 bg-indigo-600 hover:bg-indigo-500 transition text-white px-6 py-2 rounded-md"
          >
            Post Project
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default PostProject;