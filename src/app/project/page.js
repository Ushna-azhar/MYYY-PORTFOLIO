// ProjectsPage.js
import React from 'react';
import Projects from '../../components/Projects';  
import Footer from '../../components/Footer';
const ProjectsPage = () => {
  return (
    <div className='flex min-h-screen flex-col bg-black ' >
      
      <Projects/>     <Footer/>
    </div>

  );
};

export default ProjectsPage;
