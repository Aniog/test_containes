import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const milestones = [
  { year: '1998', event: 'Founded in Stuttgart, Germany' },
  { year: '2005', event: 'Launched first CNC folding machine series' },
  { year: '2012', event: 'Expanded to 40+ global markets' },
  { year: '2018', event: 'ISO 9001 certification achieved' },
  { year: '2024', event: '5,000th machine delivered worldwide' },
];

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" ref={containerRef} className="py-24 lg:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <div className="relative">
            <div className="relative overflow-hidden aspect-[4/3]">
              <img
                alt="ARTITECT Machinery factory"
                data-strk-img-id="about-factory-img-3a9c7d"
                data-strk-img="[about-subtitle] [about-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative gold border offset */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-gold -z-10" />
          </div>

          {/* Right: Content */}
          <div>
            <p className="font-sans text-xs font-semibold text-gold tracking-[0.3em] uppercase mb-4">
              Our Story
            </p>
            <h2
              id="about-title"
              className="font-serif text-3xl lg:text-4xl font-bold text-navy mb-4 leading-tight"
            >
              Crafting Precision Machines for Over 25 Years
            </h2>
            <div className="w-16 h-0.5 bg-gold mb-6" />
            <p
              id="about-subtitle"
              className="font-sans text-steel leading-relaxed mb-6"
            >
              Founded in 1998, ARTITECT MACHINERY has grown from a specialist workshop into a globally 
              recognized manufacturer of sheet metal folding machines. Our engineering philosophy is 
              simple: every machine must perform flawlessly, every time.
            </p>
            <p className="font-sans text-steel leading-relaxed mb-10">
              We combine traditional German engineering precision with cutting-edge CNC technology, 
              delivering machines that empower fabricators, manufacturers, and metalworkers to achieve 
              results that were once impossible.
            </p>

            {/* Timeline */}
            <div className="space-y-4">
              {milestones.map((m, i) => (
                <div key={m.year} className="flex items-start gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-2 h-2 bg-gold mt-1.5 flex-shrink-0" />
                    {i < milestones.length - 1 && (
                      <div className="w-px flex-1 bg-border-subtle mt-1 min-h-[20px]" />
                    )}
                  </div>
                  <div className="pb-2">
                    <span className="font-sans text-xs font-bold text-gold tracking-widest">{m.year}</span>
                    <p className="font-sans text-sm text-steel mt-0.5">{m.event}</p>
                  </div>
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
