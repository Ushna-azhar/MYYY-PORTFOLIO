// "use client" directive to specify that this is a client-side component
'use client';

import React, { useEffect, useRef } from 'react';

const Projectcard = ({ videoUrl, title, description, tags, githubUrl }) => {
  const videoRef = useRef(null); // Create a reference for the video element

  useEffect(() => {
    // Set the playbackRate directly on the video element when it mounts
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.5;
    }
  }, []);

  return (
    <a
      href={githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
      aria-labelledby="projectTitle"
    >
      {/* Video Preview */}
      <div className="relative" aria-hidden="true">
        <video
          ref={videoRef} // Attach the ref to the video element
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          preload="auto"
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Project Details */}
      <div className="p-4 text-white">
        <h5 id="projectTitle" className="text-xl font-semibold">{title}</h5>
        <p id="projectDescription">{description}</p>

        {/* Tags */}
        <div className="mt-4" role="region" aria-labelledby="tags">
          <span id="tags" className="sr-only">Tags for the project:</span>
          {tags && tags.map((tag, index) => (
            <span key={index} className="inline-block bg-green-900 text-white text-sm rounded-full py-1 px-3 mr-2 mt-2">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
};

export default Projectcard;
