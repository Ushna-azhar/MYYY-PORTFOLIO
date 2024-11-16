'use client';

import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen bg-black">
      <div className="absolute inset-0 overflow-hidden">
        <video
          className="object-cover w-full h-full filter brightness-50"
          autoPlay
          muted
          loop
          src="/videoo.mp4"
          type="video/mp4"
          poster="/fallback-image.jpg"
          aria-label="Background video showcasing web and design projects"
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-20 py-20 h-full flex items-center justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full">
          <div className="col-span-1 lg:col-span-7 text-center lg:text-left">
            <h1 className="text-emerald-50 mb-6 text-4xl lg:text-7xl font-semibold leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-br">
                Hello, I&apos;m{' '}
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
                  fontSize: 'clamp(2rem, 5vw, 3rem)',
                  display: 'inline-block',
                  fontWeight: 'bold',
                  opacity: 0.9,
                  transition: 'opacity 0.5s ease-in-out, color 0.3s ease',
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
                className="px-8 py-3 bg-emerald-950 text-white rounded-full shadow-md hover:bg-emerald-600 transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-emerald-500"
                aria-label="Hire me"
              >
                Hire Me
              </button>

              <a
                href="/Ushna_CV.pdf"
                download="Ushna_CV"
                className="px-8 py-3 bg-transparent border-2 border-emerald-950 text-white rounded-full shadow-md hover:bg-emerald-500 hover:text-white transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-emerald-500"
                aria-label="Download CV"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="col-span-1 lg:col-span-5 flex justify-center lg:justify-end mt-6 lg:mt-0">
            <Image
              src="/me.jpg"
              alt="Portrait of Ushna, a Website Developer, Graphic Designer, and Digital Marketer"
              className="rounded-full border-4 border-white w-60 h-60 object-cover shadow-lg"
              width={240}  // Set width
              height={240} // Set height
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
