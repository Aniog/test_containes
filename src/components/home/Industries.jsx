import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const industries = [
  {
    id: 'hvac',
    title: 'HVAC & Ventilation',
    description: 'Precision ductwork and ventilation components for commercial and industrial HVAC systems.',
    titleId: 'ind-hvac-title',
    descId: 'ind-hvac-desc',
    imgId: 'ind-hvac-img-3f8a2c',
  },
  {
    id: 'construction',
    title: 'Construction & Roofing',
    description: 'Cladding panels, roofing sheets, and architectural metalwork with flawless bends.',
    titleId: 'ind-const-title',
    descId: 'ind-const-desc',
    imgId: 'ind-const-img-7b1d4e',
  },
  {
    id: 'automotive',
    title: 'Automotive & Transport',
    description: 'Body panels, chassis components, and structural parts for vehicles and transport equipment.',
    titleId: 'ind-auto-title',
    descId: 'ind-auto-desc',
    imgId: 'ind-auto-img-5c9f1a',
  },
  {
    id: 'electronics',
    title: 'Electronics Enclosures',
    description: 'Server racks, control panels, and precision enclosures for electronics and electrical equipment.',
    titleId: 'ind-elec-title',
    descId: 'ind-elec-desc',
    imgId: 'ind-elec-img-2a6e8b',
  },
  {
    id: 'furniture',
    title: 'Metal Furniture',
    description: 'Designer furniture, shelving systems, and decorative metalwork with clean, precise folds.',
    titleId: 'ind-furn-title',
    descId: 'ind-furn-desc',
    imgId: 'ind-furn-img-9d3c7f',
  },
  {
    id: 'aerospace',
    title: 'Aerospace & Defense',
    description: 'High-tolerance components for aerospace structures and defense equipment manufacturing.',
    titleId: 'ind-aero-title',
    descId: 'ind-aero-desc',
    imgId: 'ind-aero-img-6e4b2d',
  },
];

export default function Industries() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="industries" className="py-24 md:py-32 bg-white" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-gold mb-3">
            Industries We Serve
          </p>
          <h2 id="industries-section-title" className="font-display font-bold text-4xl md:text-5xl text-navy mb-5">
            Trusted Across Every Sector
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            ARTITECT machines power production lines in the world's most demanding industries.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry) => (
            <div
              key={industry.id}
              className="group relative overflow-hidden rounded-2xl h-64 cursor-default"
            >
              <img
                alt={industry.title}
                data-strk-img-id={industry.imgId}
                data-strk-img={`[${industry.descId}] [${industry.titleId}] [industries-section-title]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 id={industry.titleId} className="font-display font-bold text-xl text-white mb-1">
                  {industry.title}
                </h3>
                <p id={industry.descId} className="text-white/70 text-sm leading-snug">
                  {industry.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
