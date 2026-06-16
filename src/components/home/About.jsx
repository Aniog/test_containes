import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" ref={containerRef} className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img
                alt="ARTITECT Machinery workshop"
                data-strk-img-id="about-img-k9m2n4"
                data-strk-img="[about-subtitle] [about-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-gold text-navy-dark p-6 rounded-lg shadow-xl hidden md:block">
              <div className="text-4xl font-extrabold">25+</div>
              <div className="text-sm font-semibold">Years of Excellence</div>
            </div>
          </div>

          <div>
            <span className="text-gold font-semibold text-sm tracking-widest uppercase">
              About Us
            </span>
            <h2
              id="about-title"
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-dark mt-3 mb-6"
            >
              Crafting the Future of Metal Fabrication
            </h2>
            <p
              id="about-subtitle"
              className="text-gray-600 text-lg leading-relaxed mb-6"
            >
              Since 1998, ARTITECT MACHINERY has been at the forefront of metal
              folding technology. Our commitment to innovation, quality, and
              customer success has made us a trusted partner for workshops and
              manufacturers worldwide.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              From our state-of-the-art manufacturing facility, we design and
              build every machine with meticulous attention to detail. Each
              product undergoes rigorous testing to ensure it meets the highest
              standards of precision and durability before it reaches your
              workshop floor.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                'ISO 9001 Certified',
                'CE Compliant',
                'Global Service Network',
                'Custom Solutions',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gold rounded-full flex-shrink-0" />
                  <span className="text-navy-dark font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
