import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const milestones = [
  { year: '1998', title: 'Founded', description: 'ARTITECT MACHINERY established with a mission to build the finest sheet metal folding machines in the industry.' },
  { year: '2005', title: 'First Export', description: 'Expanded into international markets, delivering machines to fabrication shops across Europe and Asia.' },
  { year: '2012', title: 'CNC Integration', description: 'Introduced advanced CNC control systems to our product line, setting new standards for precision and automation.' },
  { year: '2018', title: '5000th Machine', description: 'Reached the milestone of 5000 machines delivered worldwide, serving industries from HVAC to aerospace.' },
  { year: '2024', title: 'Next Generation', description: 'Launched our latest generation of smart folding machines with IoT connectivity and predictive maintenance.' },
];

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section id="about" ref={containerRef} className="section-padding bg-white">
      <div className="container-width">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                alt="ARTITECT MACHINERY manufacturing facility"
                data-strk-img-id="about-factory-image-k4m5n6"
                data-strk-img="[about-desc] [about-heading]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 lg:-right-10 bg-brand-navy rounded-xl p-6 shadow-2xl max-w-xs">
              <div className="text-4xl font-extrabold text-brand-gold mb-1">25+</div>
              <div className="text-white text-sm font-medium">Years of Engineering Excellence</div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <span className="inline-block text-sm font-bold text-brand-gold uppercase tracking-widest mb-4">
              About Us
            </span>
            <h2
              id="about-heading"
              className="text-3xl sm:text-4xl font-extrabold text-brand-navy mb-6"
            >
              Crafting the Future of{' '}
              <span className="text-brand-gold">Metal Fabrication</span>
            </h2>
            <p
              id="about-desc"
              className="text-slate-600 leading-relaxed mb-6"
            >
              For over 25 years, ARTITECT MACHINERY has been at the forefront
              of sheet metal folding technology. What started as a small
              engineering workshop has grown into a globally recognized brand
              trusted by thousands of fabricators, manufacturers, and
              industrial workshops worldwide.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              Our commitment to innovation, quality craftsmanship, and
              customer satisfaction drives everything we do. Every machine
              that leaves our facility represents the pinnacle of precision
              engineering and is built to deliver decades of reliable service.
            </p>

            {/* Timeline */}
            <div className="space-y-4">
              {milestones.slice(0, 3).map((m, i) => (
                <div key={m.year} className="flex gap-4 items-start">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-brand-navy text-white text-xs font-bold flex items-center justify-center shrink-0">
                      {m.year}
                    </div>
                    {i < 2 && <div className="w-0.5 h-8 bg-surface-200 mt-1" />}
                  </div>
                  <div className="pt-1">
                    <h4 className="text-sm font-bold text-brand-navy">{m.title}</h4>
                    <p className="text-sm text-slate-500">{m.description}</p>
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
