import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const applications = [
  {
    id: 'hvac',
    titleId: 'app-title-hvac',
    descId: 'app-desc-hvac',
    imgId: 'app-img-hvac-2c3d4e',
    title: 'HVAC & Ventilation',
    description: 'Precision folding for ductwork, air handling units, and ventilation panels requiring tight tolerances and consistent profiles.',
  },
  {
    id: 'roofing',
    titleId: 'app-title-roofing',
    descId: 'app-desc-roofing',
    imgId: 'app-img-roofing-3d4e5f',
    title: 'Roofing & Cladding',
    description: 'Architectural metal panels, standing seam roofing, and facade cladding systems produced with flawless accuracy.',
  },
  {
    id: 'automotive',
    titleId: 'app-title-automotive',
    descId: 'app-desc-automotive',
    imgId: 'app-img-automotive-4e5f6a',
    title: 'Automotive',
    description: 'Body panels, brackets, and structural components for automotive manufacturing with exacting dimensional requirements.',
  },
  {
    id: 'construction',
    titleId: 'app-title-construction',
    descId: 'app-desc-construction',
    imgId: 'app-img-construction-5f6a7b',
    title: 'Construction',
    description: 'Steel framing, lintels, flashings, and structural metalwork for commercial and residential construction projects.',
  },
];

const Applications = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="applications" ref={containerRef} className="py-20 md:py-28 bg-[#1B2A4A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#C9A84C] text-xs font-semibold uppercase tracking-widest">Industries We Serve</span>
          <h2 id="applications-title" className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
            Built for Every Application
          </h2>
          <div className="w-16 h-1 bg-[#C9A84C] mx-auto mb-6" />
          <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">
            ARTITECT folding machines power production lines across a wide range of industries, delivering the precision and reliability that modern manufacturing demands.
          </p>
        </div>

        {/* Application Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {applications.map((app) => (
            <div
              key={app.id}
              className="group relative overflow-hidden bg-[#0F1C33] hover:bg-[#243a5e] transition-colors duration-300 border border-white/5 hover:border-[#C9A84C]/30"
            >
              {/* Image */}
              <div className="aspect-[4x3] overflow-hidden">
                <img
                  alt={app.title}
                  data-strk-img-id={app.imgId}
                  data-strk-img={`[${app.descId}] [${app.titleId}] [applications-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                />
              </div>

              {/* Content */}
              <div className="p-5 border-t border-[#C9A84C]/20">
                <h3 id={app.titleId} className="text-white font-bold text-lg mb-2 group-hover:text-[#C9A84C] transition-colors duration-200">
                  {app.title}
                </h3>
                <p id={app.descId} className="text-slate-400 text-sm leading-relaxed">
                  {app.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Applications;
