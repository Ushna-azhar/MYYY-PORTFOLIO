'use client';

import React, { useEffect, useRef } from 'react';

const Projectcard = ({ videoUrl, title, description, tags, githubUrl, webUrl }) => {
  const videoRef = useRef(null);

  useEffect(() => {
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

        {/* Buttons */}
        <div className="flex justify-between items-center mt-6">
          {webUrl && (
            <a
              href={webUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white text-sm font-medium py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              View Website
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              View GitHub Repo
            </a>
          )}
        </div>
      </div>
    </a>
  );
};

export default Projectcard;
