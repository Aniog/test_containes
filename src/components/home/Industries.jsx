import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const industries = [
  {
    id: 'hvac',
    title: 'HVAC & Ventilation',
    description: 'Precision ductwork and ventilation components with consistent bend angles.',
    imgId: 'ind-hvac-2a4b6c',
    titleId: 'ind-hvac-title',
    descId: 'ind-hvac-desc',
  },
  {
    id: 'construction',
    title: 'Construction & Cladding',
    description: 'Architectural panels, roofing profiles, and structural cladding systems.',
    imgId: 'ind-construction-7d8e9f',
    titleId: 'ind-construction-title',
    descId: 'ind-construction-desc',
  },
  {
    id: 'automotive',
    title: 'Automotive & Transport',
    description: 'Body panels, chassis components, and precision brackets for vehicles.',
    imgId: 'ind-automotive-1b3c5d',
    titleId: 'ind-automotive-title',
    descId: 'ind-automotive-desc',
  },
  {
    id: 'electrical',
    title: 'Electrical Enclosures',
    description: 'Control panels, switchgear housings, and electrical cabinet fabrication.',
    imgId: 'ind-electrical-4e6f8a',
    titleId: 'ind-electrical-title',
    descId: 'ind-electrical-desc',
  },
];

const Industries = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <section id="industries" ref={containerRef} className="bg-[#F7F8FA] py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#C9A84C] text-xs font-bold tracking-[0.3em] uppercase mb-3 block">
            Industries We Serve
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#1B2A4A] mb-4"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Trusted Across Industries
          </h2>
          <p className="text-[#5A6A82] text-lg max-w-2xl mx-auto leading-relaxed">
            Artitect Machinery powers fabrication operations across a wide range of sectors, delivering reliable performance wherever precision matters.
          </p>
        </div>

        {/* Industry Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry) => (
            <div
              key={industry.id}
              className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-default"
            >
              {/* Image */}
              <div className="relative h-64">
                <img
                  alt={industry.title}
                  data-strk-img-id={industry.imgId}
                  data-strk-img={`[${industry.descId}] [${industry.titleId}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1C33]/90 via-[#1B2A4A]/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="w-8 h-0.5 bg-[#C9A84C] mb-3" />
                <h3
                  id={industry.titleId}
                  className="text-white font-bold text-base mb-1"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  {industry.title}
                </h3>
                <p id={industry.descId} className="text-[#B8C8DC] text-xs leading-relaxed">
                  {industry.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
