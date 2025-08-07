import React from 'react';
import{ projects} from '../projectData';
import ProjectCard from './projectcard';



const ProjectList = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-white px-6 py-10">
      <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} layout='vertical'/>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
