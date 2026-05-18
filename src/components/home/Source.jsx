import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Source = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="source" ref={containerRef} className="py-20 md:py-28 px-6 bg-sky-50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
          <img
            alt="Mountain spring source"
            className="w-full h-full object-cover"
            data-strk-img-id="source-img-b7d2e4"
            data-strk-img="[source-subtitle] [source-title]"
            data-strk-img-ratio="4x3"
            data-strk-img-width="700"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
          {/* Badge */}
          <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 shadow-md">
            <p className="text-xs text-slate-500 uppercase tracking-wide font-semibold">Elevation</p>
            <p className="text-2xl font-extrabold text-blue-700">2,400 m</p>
            <p className="text-xs text-slate-500">Above sea level</p>
          </div>
        </div>

        {/* Text */}
        <div>
          <p
            id="source-eyebrow"
            className="text-cyan-600 text-sm uppercase tracking-widest font-semibold mb-3"
          >
            Our Source
          </p>
          <h2
            id="source-title"
            className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-5"
          >
            Born in the Heart of the Mountains
          </h2>
          <p
            id="source-subtitle"
            className="text-slate-600 text-lg leading-relaxed mb-6"
          >
            AquaPure originates from a protected spring nestled at 2,400 metres in
            the alpine highlands. Rainwater and snowmelt percolate slowly through
            granite bedrock, absorbing natural minerals and emerging crystal-clear
            after a journey of over 200 years.
          </p>
          <p className="text-slate-600 text-lg leading-relaxed mb-8">
            The spring is enclosed within a protected nature reserve. No agriculture,
            no industry — just pristine wilderness ensuring the water stays as pure
            as nature intended.
          </p>

          <div className="grid grid-cols-2 gap-6">
            {[
              { label: 'pH Level', value: '7.4' },
              { label: 'TDS', value: '142 mg/L' },
              { label: 'Hardness', value: 'Soft' },
              { label: 'Source Age', value: '200+ yrs' },
            ].map(({ label, value }) => (
              <div key={label} className="bg-white rounded-xl p-4 shadow-sm border border-sky-100">
                <p className="text-xs text-slate-500 uppercase tracking-wide font-semibold mb-1">{label}</p>
                <p className="text-xl font-bold text-blue-700">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Source;
