import React from 'react';
import Projectcard from './Projectcard';


const projects = [
  {
    id: 1,
    title: 'Personal Portfolio',
    description:
      'A personal portfolio website showcasing my skills and projects as a Web Developer and UI UX developer, featuring a modern, responsive layout.',
    videoUrl: '/portfolioweb.mp4',
    githubUrl: 'https://github.com/Ushna-azhar/MYYY-PORTFOLIO.git',
    webUrl: 'https://myportfolio.com',
    tags: ['Website'],
  },
  {
    id: 3,
    title: 'Snake Game',
    description:
      'A fun, interactive classic Snake Game built with HTML, CSS, and JavaScript, featuring responsive design and smooth animations.',
    videoUrl: '/snakegame.mp4',
    githubUrl: 'https://github.com/Ushna-azhar/Snakegame.git',
    webUrl: 'https://dreamy-tiramisu-3b28cd.netlify.app/',
    tags: ['Game'],
  },
  {
    id: 4,
    title: 'Resume Builder',
    description:
      'A web-based Resume Builder application that allows users to create and download customized resumes with various editable templates.',
    videoUrl: '/rg.mp4',
    githubUrl: 'https://github.com/Ushna-azhar',
    webUrl: 'https://fascinating-frangipane-4cab1b.netlify.app/',
    tags: ['Website'],
  },
  {
    id: 5,
    title: 'Islamic Website',
    description:
      'A web application that fetches and displays real-time Prayer times data for any location, utilizing an external weather API for accuracy.',
    videoUrl: '/islamicc.mp4',
    githubUrl: 'https://github.com/Ushna-azhar',
    webUrl: 'https://islam-web-jbs4.vercel.app/',
    tags: ['Website'],
  },
  {
    id: 6,
    title: 'Foodie Ecommerce Web',
    description:
      'An ecommerce website for food lovers, featuring a dynamic catalog of products, user-friendly cart, and seamless checkout process.',
    videoUrl: '/food.mp4',
    githubUrl: 'https://github.com/Ushna-azhar/restaurantweb.git',
   
    tags: ['App'],
  },
  {
    id: 7,
    title: 'Blog Website',
    description:
      'A blogging platform where users can create, edit, and publish blogs, complete with categories, comments, and user profiles.',
    videoUrl: '/blog.mp4',
    githubUrl: 'https://github.com/Ushna-azhar/blogyweb.git',
    webUrl: 'https://sage-dasik-2b62e0.netlify.app/',
    tags: ['App'],
  },
  {
    id: 9,
    title: 'Admin Dashboard (Password:admin890123)',
    description:
      'An admin dashboard for managing content, users, and products, with a user-friendly interface and various data visualizations.',
    videoUrl: '/admin.mp4',
    githubUrl: 'https://github.com/Ushna-azhar',
    webUrl: 'https://dashboard-iota-lovat.vercel.app/login',
    tags: ['App'],
  },
  {
    id: 10,
    title: 'E-commerce Marketplace',
    description:
      'An ecommerce marketplace for buying and selling products, featuring a comprehensive catalog, shopping cart, and secure checkout process.',
    videoUrl: '/marketplace.mp4',
    githubUrl: 'https://dashboard-iota-lovat.vercel.app/login',
    webUrl: 'https://marketplace-fypd.vercel.app/',
    tags: ['Website'],
  },
  {
    id: 8,
    title: 'UI/UX Website',
    description:
      'A shopping web app with an intuitive UI/UX design, allowing users to browse products, add them to their cart, and proceed to a smooth checkout process.',
    videoUrl: '/uiux.mp4',
    githubUrl: 'https://github.com/Ushna-azhar/ui-uxHackathon.git',
    tags: ['Website'],
  },
  
];

// ProjectsPage component
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
            webUrl={project.webUrl}
            tags={project.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
