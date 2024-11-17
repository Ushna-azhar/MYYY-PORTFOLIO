'use client';

import Image from "next/image";
import React, { useState } from "react"; 
import TabButton from './TabButton';

// Tab Data: This contains the tab identifiers, labels, and their content
const TAB_DATA = [
  { id: 'skills', label: 'Skills', content: (
      <div className="text-white">
        <h3 className="text-xl font-semibold text-green-800">Skills</h3>
        <ul className="list-disc pl-6 mt-4">
          <li>React</li>
          <li>Next.js</li>
          <li>Node.js</li>
          <li>TypeScript</li>
          <li>HTML & CSS</li>
          <li>Adobe Illustrator & Photoshop</li>
        </ul>
      </div>
    ) 
  },
  { id: 'education', label: 'Education', content: (
      <div className="text-white">
        <h3 className="text-xl font-semibold text-emerald-800">Education</h3>
        <p className="mt-4">Cloud Generative AI from Governor House Karachi</p>
      </div>
    ) 
  },
  { id: 'experience', label: 'Experience', content: (
      <div className="text-white">
        <h3 className="text-xl font-semibold text-emerald-800">Experience</h3>
        <ul className="list-disc pl-6 mt-4">
          <li>Web Developer at Auzi (Australian brand)</li>
          <li>Web Developer at Shanaer Shaikh Clothing store</li>
          <li>Graphic Designer at Tabarak Foods</li>
        </ul>
      </div>
    ) 
  },
];

const Abouts = () => {
  const [tab, setTab] = useState("skills"); // Default tab is 'skills'

  // Handle the tab change
  const handleTabChange = (id) => {
    setTab(id); 
  };

  return (
    <section className="text-gray-300 py-8 px-6 sm:py-12 sm:px-10 lg:px-16">
      <div className="flex flex-col md:grid md:grid-cols-2 gap-10 items-center justify-center"> {/* Flex for smaller, grid for larger screens */}
        
        {/* Image Section */}
        <div className="flex justify-center md:justify-start mb-8 md:mb-0"> 
          <Image
            src="/about.jpg" 
            alt="About Me"
            width={500}
            height={500}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="text-center md:text-left">
          <h2 className="text-emerald-800 text-3xl font-semibold mb-4">About Me</h2>
          <p className="text-green-400 font-mono text-lg md:text-xl mb-6">
            A passionate Web Developer and Graphic Designer. I specialize in creating dynamic, responsive websites and designing visually engaging user interfaces. With a strong foundation in both front-end and back-end development, I bring ideas to life with clean code and creative design. I thrive on solving complex problems and delivering seamless user experiences. Let&apos;s create something amazing together!
          </p>

          {/* Tab Buttons */}
          <div role="tablist" className="flex flex-wrap gap-4 justify-center md:justify-start mt-8">
            {TAB_DATA.map((tabItem) => (
              <TabButton
                key={tabItem.id}
                selectTab={() => handleTabChange(tabItem.id)}
                active={tab === tabItem.id}
                aria-selected={tab === tabItem.id}
                role="tab"
                tabIndex={tab === tabItem.id ? 0 : -1} // Makes sure the active tab is focusable
                aria-controls={tabItem.id} // Links the button with the content
                id={`tab-${tabItem.id}`} // Correct use of template literals
                className="px-4 py-2 text-lg font-medium bg-emerald-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-600 transition-all duration-200"
              >
                {tabItem.label}
              </TabButton>
            ))}
          </div>

          {/* Tab Content */}
          <div className="mt-8">
            {TAB_DATA.map(
              (tabItem) =>
                tab === tabItem.id && (
                  <div
                    key={tabItem.id}
                    className="tab-content"
                    role="tabpanel"
                    aria-labelledby={`tab-${tabItem.id}`} // Correct use of template literals
                    id={tabItem.id}
                  >
                    {tabItem.content}
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Abouts;
