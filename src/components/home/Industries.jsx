import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const industries = [
  {
    id: 'hvac',
    title: 'HVAC & Ventilation',
    description: 'Precision ductwork and ventilation components demand consistent fold angles and tight tolerances — exactly what Artitect machines deliver.',
    imgId: 'ind-hvac-3p1q2r',
    titleId: 'ind-hvac-title',
    descId: 'ind-hvac-desc',
  },
  {
    id: 'automotive',
    title: 'Automotive',
    description: 'From body panels to structural components, our machines handle the complex geometries and high-volume demands of automotive manufacturing.',
    imgId: 'ind-auto-4s5t6u',
    titleId: 'ind-automotive-title',
    descId: 'ind-automotive-desc',
  },
  {
    id: 'construction',
    title: 'Construction & Roofing',
    description: 'Roofing profiles, cladding panels, and architectural metalwork require the versatility and reliability that Artitect folders provide.',
    imgId: 'ind-const-7v8w9x',
    titleId: 'ind-construction-title',
    descId: 'ind-construction-desc',
  },
  {
    id: 'aerospace',
    title: 'Aerospace',
    description: 'Aerospace-grade precision for enclosures, brackets, and structural parts where accuracy is non-negotiable and quality is paramount.',
    imgId: 'ind-aero-0y1z2a',
    titleId: 'ind-aerospace-title',
    descId: 'ind-aerospace-desc',
  },
];

const Industries = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="industries" className="bg-brand-light py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-brand-gold text-xs tracking-widest uppercase font-sans font-semibold mb-3">
            Industries We Serve
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-navy mb-4">
            Trusted Across Sectors
          </h2>
          <div className="w-16 h-1 bg-brand-gold mx-auto mb-6" />
          <p className="text-brand-steel/70 text-lg max-w-2xl mx-auto font-sans leading-relaxed">
            Artitect Machinery serves the world's most demanding industries with folding solutions engineered for every application.
          </p>
        </div>

        {/* Industries Grid */}
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industries.map((industry) => (
            <div
              key={industry.id}
              className="relative overflow-hidden group h-72"
            >
              {/* Background Image */}
              <img
                alt={industry.title}
                data-strk-img-id={industry.imgId}
                data-strk-img={`[${industry.descId}] [${industry.titleId}] industrial manufacturing`}
                data-strk-img-ratio="16x9"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/50 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="w-8 h-0.5 bg-brand-gold mb-3" />
                <h3
                  id={industry.titleId}
                  className="font-serif text-2xl font-bold text-brand-white mb-2"
                >
                  {industry.title}
                </h3>
                <p
                  id={industry.descId}
                  className="text-brand-silver text-sm leading-relaxed font-sans opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
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
