import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const stats = [
  { value: '3×', label: 'Faster CPU', sub: 'vs previous gen' },
  { value: '10×', label: 'Faster GPU', sub: 'for graphics tasks' },
  { value: '38h', label: 'Battery Life', sub: 'on a single charge' },
  { value: '16GB', label: 'Unified Memory', sub: 'base configuration' },
];

const Performance = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="performance" ref={containerRef} className="py-24 md:py-32 bg-gray-950 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text side */}
          <div>
            <span className="text-sm font-semibold text-blue-400 uppercase tracking-widest">Performance</span>
            <h2 id="perf-title" className="text-4xl md:text-5xl font-bold text-white mt-3 tracking-tight leading-tight">
              Power that defies its size
            </h2>
            <p id="perf-desc" className="text-gray-400 mt-5 text-lg leading-relaxed">
              The APPLE mini packs desktop-class performance into a form factor that fits in the palm of your hand.
              Whether you're editing 4K video, running machine learning models, or powering a multi-display setup —
              it handles everything without breaking a sweat.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-10">
              {stats.map((s) => (
                <div key={s.label} className="border border-gray-800 rounded-2xl p-5 bg-gray-900">
                  <div className="text-4xl font-bold text-blue-400">{s.value}</div>
                  <div className="text-white font-semibold mt-1">{s.label}</div>
                  <div className="text-gray-500 text-sm mt-0.5">{s.sub}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image side */}
          <div className="relative rounded-2xl overflow-hidden aspect-square bg-gray-900">
            <img
              alt="APPLE mini performance chip"
              data-strk-img-id="perf-chip-img-b3d7e9"
              data-strk-img="[perf-desc] [perf-title]"
              data-strk-img-ratio="1x1"
              data-strk-img-width="700"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Performance;
