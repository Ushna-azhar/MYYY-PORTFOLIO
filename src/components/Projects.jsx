// ProjectsPage.js
import React from 'react';
import Projectcard from './Projectcard';

// Data for multiple projects
const projects = [
  {
    id: 1,
    title: 'Personal Portfolio',
    description: 'My portfolio website showcases my skills as a Web Developer and Graphic Designer, featuring a blend of dynamic web development and visually captivating design projects.',
    videoUrl: '/portfolioweb.mp4',
    githubUrl: 'https://github.com/Ushna-azhar',
    tags: ['Website'],
  },
  {
    id: 2,
    title: 'E-commerce Website',
    description: 'A demo e-commerce website with advanced features.',
    videoUrl: '/ss.mp4',
    githubUrl: 'https://github.com/Ushna-azhar',
    tags: ['Website'],
  },
  {
    id: 3,
    title: 'Snake Game',
    description: 'A classic Snake Game built with HTML, CSS, and JavaScript, featuring responsive design, score tracking, and smooth animations.',
    videoUrl: '/snakegame.mp4',
    githubUrl: 'https://github.com/Ushna-azhar',
    tags: ['Game'],
  },
  {
    id: 4,
    title: 'Resume Builder',
    description: 'A Resume Builder app that allows users to create, customize, and download professional resumes with editable templates and real-time preview.',
    videoUrl: '/rg.mp4',
    githubUrl: 'https://github.com/Ushna-azhar',
    tags: ['Website'],
  },
];

const ProjectsPage = () => {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      {/* Page Title */}
      <div className="text-center py-16">
        <h1 className="text-4xl font-bold text-green-500">My Projects</h1>
        <p className="mt-4 text-lg text-purple-500">Here are some of the projects I have worked on:</p>
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {projects.map((project) => (
          <Projectcard
            key={project.id}
            title={project.title}
            description={project.description}
            videoUrl={project.videoUrl}
            githubUrl={project.githubUrl}
            tags={project.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
