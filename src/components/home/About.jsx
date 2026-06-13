import React, { useEffect, useRef } from 'react';
import { CheckCircle } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const milestones = [
  { year: '1998', event: 'Company founded, first manual folder launched' },
  { year: '2005', event: 'CNC folding machine series introduced' },
  { year: '2012', event: 'Global expansion to 30+ countries' },
  { year: '2018', event: 'Servo-driven automation platform released' },
  { year: '2023', event: 'AI-assisted bending technology unveiled' },
];

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" ref={containerRef} className="py-20 md:py-28 lg:py-32 bg-navy-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="text-gold text-sm font-semibold tracking-[0.2em] uppercase">
              About Us
            </span>
            <h2
              id="about-title"
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 mb-6"
            >
              Crafting the Future of Metal Forming
            </h2>
            <p
              id="about-subtitle"
              className="text-gray-400 text-lg leading-relaxed mb-6"
            >
              For over 25 years, ARTITECT MACHINERY has been at the forefront of
              metal folding technology. We combine traditional craftsmanship with
              cutting-edge innovation to deliver machines that set industry
              standards.
            </p>
            <p className="text-gray-400 text-base leading-relaxed mb-8">
              Our state-of-the-art manufacturing facility and dedicated R&D team
              ensure every machine that bears the ARTITECT name meets the highest
              standards of precision, durability, and performance.
            </p>

            <div className="space-y-4 mb-8">
              {[
                'ISO 9001:2015 Certified Manufacturing',
                'Patented Quick-Change Tooling System',
                'In-house R&D with 50+ Engineers',
                'Global Service Network in 60+ Countries',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-xl overflow-hidden">
              <img
                alt="ARTITECT Manufacturing Facility"
                data-strk-img-id="about-img-k9m2n8"
                data-strk-img="[about-subtitle] [about-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/40 to-transparent" />
            </div>

            <div className="absolute -bottom-6 -left-6 bg-card-dark border border-gold/30 rounded-xl p-6 shadow-2xl max-w-[240px]">
              <div className="text-3xl font-bold text-gold">25+</div>
              <div className="text-white text-sm font-medium mt-1">
                Years of Excellence
              </div>
              <div className="text-gray-400 text-xs mt-1">
                Trusted by manufacturers worldwide
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-16 border-t border-navy-light">
          <h3 className="text-2xl font-bold text-white mb-10 text-center">
            Our Journey
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {milestones.map((milestone) => (
              <div key={milestone.year} className="text-center">
                <div className="text-2xl font-bold text-gold mb-2">
                  {milestone.year}
                </div>
                <div className="text-gray-400 text-sm leading-relaxed">
                  {milestone.event}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
