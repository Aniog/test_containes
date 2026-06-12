import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const industries = [
  {
    id: 'hvac',
    titleId: 'ind-title-hvac',
    descId: 'ind-desc-hvac',
    imgId: 'ind-img-hvac-3c1d9e',
    name: 'HVAC & Ventilation',
    description: 'Precision ductwork and ventilation panel fabrication with consistent, repeatable folds.',
  },
  {
    id: 'construction',
    titleId: 'ind-title-const',
    descId: 'ind-desc-const',
    imgId: 'ind-img-const-8b2f4a',
    name: 'Construction & Roofing',
    description: 'Cladding, flashing, and roofing profiles manufactured to exact specifications.',
  },
  {
    id: 'automotive',
    titleId: 'ind-title-auto',
    descId: 'ind-desc-auto',
    imgId: 'ind-img-auto-5e7c2b',
    name: 'Automotive',
    description: 'Body panels, brackets, and structural components with tight tolerances.',
  },
  {
    id: 'electrical',
    titleId: 'ind-title-elec',
    descId: 'ind-desc-elec',
    imgId: 'ind-img-elec-1a4d6f',
    name: 'Electrical Enclosures',
    description: 'Switchgear cabinets, enclosures, and cable trays with clean, accurate bends.',
  },
];

const IndustriesSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="industries" ref={containerRef} className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-steel text-sm font-semibold uppercase tracking-widest mb-3">Industries We Serve</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-navy tracking-tight mb-5">
            Trusted Across Industries
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mb-6" />
          <p className="text-muted text-lg max-w-2xl mx-auto leading-relaxed">
            ARTITECT machines are at work in fabrication shops and factories around the world,
            serving a wide range of industries.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry) => (
            <div
              key={industry.id}
              className="group relative overflow-hidden rounded-lg bg-surface h-72 cursor-default"
            >
              <img
                data-strk-img-id={industry.imgId}
                data-strk-img={`[${industry.descId}] [${industry.titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={industry.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent" />
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 id={industry.titleId} className="text-surface font-bold text-lg mb-1">{industry.name}</h3>
                <p id={industry.descId} className="text-surface/70 text-xs leading-relaxed">{industry.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
