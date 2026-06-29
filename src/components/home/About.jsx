import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const stats = [
  { value: '25+', label: 'Years of Innovation' },
  { value: '50+', label: 'Countries Worldwide' },
  { value: '10,000+', label: 'Machines in Operation' },
  { value: '99.5%', label: 'Customer Satisfaction' },
];

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" ref={containerRef} className="py-20 md:py-28 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="text-steel font-semibold text-sm uppercase tracking-wider">About Us</span>
            <h2 id="about-title" className="text-3xl md:text-4xl font-extrabold text-text-primary mt-2 mb-6">
              Crafting the Future of Metal Folding
            </h2>
            <p id="about-subtitle" className="text-text-secondary leading-relaxed mb-6">
              For over 25 years, ARTITECT MACHINERY has been at the forefront of metal folding technology. Our commitment to innovation, precision engineering, and customer success has made us a trusted partner for manufacturers across the globe.
            </p>
            <p className="text-text-secondary leading-relaxed mb-8">
              From our state-of-the-art manufacturing facility, we produce a comprehensive range of double folding machines, sheet metal folders, and metal folding machines that set industry benchmarks for accuracy, reliability, and ease of use.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl md:text-3xl font-extrabold text-navy">{stat.value}</div>
                  <div className="text-text-secondary text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-xl overflow-hidden bg-slate-100">
              <img
                alt="ARTITECT MACHINERY manufacturing facility"
                data-strk-img-id="about-img-k4m7n2"
                data-strk-img="[about-subtitle] [about-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-amber text-white p-6 rounded-xl shadow-lg hidden md:block">
              <div className="text-3xl font-extrabold">25+</div>
              <div className="text-sm font-medium text-amber-light">Years of Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
