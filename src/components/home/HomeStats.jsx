import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight } from 'lucide-react';

const stats = [
  { value: '10,000×', label: 'Magnification Power' },
  { value: '1 μm', label: 'Smallest Organism' },
  { value: '8.7M', label: 'Species on Earth' },
  { value: '99%', label: 'Life is Microscopic' },
];

const HomeStats = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-[#050d1a]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-teal-400 text-sm font-semibold uppercase tracking-widest">By the Numbers</span>
            <h2
              id="stats-title"
              className="text-3xl md:text-4xl font-bold text-white mt-3 mb-6"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              The Scale of the Microscopic World
            </h2>
            <p id="stats-desc" className="text-slate-400 leading-relaxed mb-8">
              The microscopic world is not just small — it is vast. Billions of organisms inhabit every cubic centimeter of soil, water, and air around us. Understanding this hidden universe is key to understanding life itself.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat) => (
                <div key={stat.label} className="border border-slate-800 rounded-xl p-4 bg-[#0a1628]">
                  <div className="text-2xl font-bold text-teal-400 mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {stat.value}
                  </div>
                  <div className="text-slate-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            <Link
              to="/explore"
              className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-white font-semibold px-7 py-3 rounded-full transition-all duration-200 shadow-lg shadow-teal-500/20"
            >
              Explore the Gallery <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden aspect-square shadow-2xl shadow-teal-900/30">
              <img
                alt="Microscopic organism under electron microscope"
                data-strk-img-id="stats-img-s1t2u3"
                data-strk-img="[stats-desc] [stats-title]"
                data-strk-img-ratio="1x1"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover bg-slate-800"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-xl overflow-hidden border-2 border-teal-700 shadow-lg">
              <img
                alt="Microscopic crystal structure"
                data-strk-img-id="stats-img-v4w5x6"
                data-strk-img="microscopic crystal structure close-up"
                data-strk-img-ratio="1x1"
                data-strk-img-width="200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover bg-slate-800"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeStats;
