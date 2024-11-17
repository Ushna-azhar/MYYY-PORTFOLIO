'use client';

import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen bg-black pt-20 pb-20">
      <div className="absolute inset-0 overflow-hidden">
        <video
          className="object-cover w-full h-full filter brightness-50"
          autoPlay
          muted
          loop
          src="/videoo.mp4"
          type="video/mp4"
          poster="/poster-image.jpg"
          aria-label="Background video showcasing a creative professional"
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-20 py-20 flex flex-col lg:flex-row items-center justify-center">
        {/* Left side - Text */}
        <div className="text-center lg:text-left lg:w-1/2 mb-8 lg:mb-0">
          <h1 className="text-emerald-50 mb-6 text-4xl lg:text-6xl xl:text-7xl font-semibold leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-br">
              Hello, I'm{' '}
            </span>
            <TypeAnimation
              sequence={[
                "Hello, I'm Ushna",
                2000,
                "I'm a Website Developer",
                2000,
                "I'm a Graphic Designer",
                2000,
                "I'm a Digital Marketer",
                2000,
              ]}
              wrapper="span"
              speed={80}
              style={{
                fontSize: 'clamp(2rem, 5vw, 3rem)', // Responsive font size
                display: 'inline-block',
                fontWeight: 'bold',
                opacity: 0.9,
                transition: 'opacity 0.5s ease-in-out',
              }}
              repeat={Infinity}
              cursor={true}
            />
          </h1>
          <p className="text-gray-300 font-mono text-lg lg:text-xl mb-8">
            Hello! I’m Ushna, a passionate Web Developer and Graphic Designer. With a unique blend of technical expertise and creative flair, I specialize in building dynamic websites and crafting visually compelling user interfaces.
          </p>

          <div className="flex gap-4 justify-center lg:justify-start">
            <button
              className="px-8 py-3 bg-emerald-950 text-white rounded-full shadow-md hover:bg-emerald-600 transition-colors duration-300"
              aria-label="Hire me"
            >
              Hire Me
            </button>

            <a
              href="/Ushna_CV.pdf"
              download="Ushna_CV"
              className="px-8 py-3 bg-transparent border-2 border-emerald-950 text-white rounded-full shadow-md hover:bg-emerald-500 hover:text-white transition-colors duration-300"
              aria-label="Download CV"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Right side - Profile Picture */}
        <div className="flex justify-center lg:justify-end w-full lg:w-1/2 mt-8 lg:mt-0 relative top-[-16px] sm:top-[-32px]">
          <img
            src="/me.jpg"
            alt="Portrait of Ushna, a Website Developer, Graphic Designer, and Digital Marketer"
            className="rounded-full border-4 border-white w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


