'use client';

import React, { useEffect, useRef } from 'react';

const Projectcard = ({ videoUrl, title, description, tags, githubUrl, webUrl }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.5; // Set video playback speed
    }
  }, []);

  return (
    <div
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
      role="article"
      aria-labelledby={`projectTitle-${title}`}
    >
      {/* Video Preview */}
      <div className="relative" aria-hidden="true">
        <video
          ref={videoRef}
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
        <h5 id={`projectTitle-${title}`} className="text-xl font-semibold">{title}</h5>
        <p id={`projectDescription-${title}`} className="mt-2 text-sm">{description}</p>

        {/* Tags */}
        <div className="mt-4" role="region" aria-labelledby={`tags-${title}`}>
          <span id={`tags-${title}`} className="sr-only">Tags for the project:</span>
          {tags && tags.map((tag, index) => (
            <span
              key={index}
              className="inline-block bg-green-900 text-white text-sm rounded-full py-1 px-3 mr-2 mt-2"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-4 flex justify-between items-center space-x-4">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 text-sm hover:underline"
          >
            GitHub Repository
          </a>
          {webUrl && (
            <a
              href={webUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 text-sm hover:underline"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projectcard;


