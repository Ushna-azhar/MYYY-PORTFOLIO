'use client';

import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen bg-black">
      {/* Background Video */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          className="object-cover w-full h-full filter brightness-50"
          autoPlay
          muted
          loop
          src="/videoo.mp4"
          type="video/mp4"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-20 py-12 h-full flex items-center justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full">
          {/* Text Content */}
          <div className="col-span-1 lg:col-span-7 text-center lg:text-left">
            <h1 className="text-emerald-50 mb-6 text-3xl md:text-4xl lg:text-6xl font-semibold leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-br">
                Hello, I&apos;m{' '}
              </span>
              <TypeAnimation
                sequence={[
                  "Hello, I'm Ushna",
                  2000,
                  "I'm a Website Developer",
                  2000,
                  "I'm a UI UX Developer",
                  2000,
                  "I'm a Frontend Developer",
                  2000,
                ]}
                wrapper="span"
                speed={80}
                style={{
                  fontSize: 'clamp(1.5rem, 5vw, 3rem)',
                  display: 'inline-block',
                  fontWeight: 'bold',
                  opacity: 0.9,
                  transition: 'opacity 0.5s ease-in-out',
                }}
                repeat={Infinity}
                cursor={true}
              />
            </h1>
            <p className="text-gray-300 font-mono text-sm md:text-base lg:text-lg mb-6 md:mb-8">
              Hello! I&apos;m Ushna, a passionate Web Developer and UI UX Developer. With a unique blend of technical expertise and creative flair, I specialize in building dynamic websites and crafting visually compelling user interfaces.
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center lg:justify-start">
              <button
                className="px-6 md:px-8 py-2 md:py-3 bg-emerald-950 text-white rounded-full shadow-md hover:bg-emerald-600 transition-colors duration-300"
                aria-label="Click to hire me"
              >
                Hire Me
              </button>

              <a
                href="/ushnashaikh_cv.pdf"
                download="ushnashaikh_cv"
                className="px-6 md:px-8 py-2 md:py-3 bg-transparent border-2 border-emerald-950 text-white rounded-full shadow-md hover:bg-emerald-500 hover:text-white transition-colors duration-300"
                aria-label="Download Ushna's CV"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="col-span-1 lg:col-span-5 flex justify-center lg:justify-end mt-8 lg:mt-0">
            <Image
              src="/pf.jpg"
              alt="Portrait of Ushna, a Website Developer, Graphic Designer, and Digital Marketer"
              className="rounded-full border-4 border-white shadow-lg"
              width={180}
              height={180}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

