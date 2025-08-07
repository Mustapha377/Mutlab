import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden shadow-md border border-gray-700">
      {/* Image Container */}
      <div className="relative">
        <img
          src={project.media}
          alt={project.title}
          className="w-full h-56 object-cover sm:rounded-t-xl"
        />

        {/* Status Badge */}
        <span className={`absolute top-3 right-3 text-xs px-3 py-1 rounded-full 
        font-medium ${
          project.status === "collaboration"
            ? "bg-green-600/20 text-green-400"
            : "bg-red-600/20 text-red-400"
        }`}>
          {project.status}
        </span>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        {/* Profile + Like/Comment */}
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <img
              src={project.authorAvatar}
              className="w-6 h-6 rounded-full"
              alt={project.authorName}
            />
            <span>{project.authorName}</span>
          </div>
          <div className="flex gap-3">
            <span>👍 {project.likes || 0}</span>
            <span>💬 {project.comments || 0}</span>
          </div>
        </div>

        {/* Title + Description */}
        <h3 className="text-lg text-indigo-300 font-semibold">{project.title}</h3>
        <p className="text-sm text-gray-300 line-clamp-3">{project.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags?.map((tag, idx) => (
            <span key={idx} className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between mt-4">
          <Link
            to={`/project/${project.id}`}
            className="text-indigo-400 text-sm hover:underline"
          >
            View →
          </Link>
          <button
            className={`text-xs px-3 py-1 rounded-full font-medium ${
              project.status === "collaboration"
                ? "bg-green-600/20 text-green-400"
                : "bg-red-600/20 text-red-400"
            }`}
          >
            {project.status === "collaboration"
              ? "Request Collaboration"
              : "Request to Buy"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;