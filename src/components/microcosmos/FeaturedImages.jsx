import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const featuredImages = [
  { id: 'feat1', title: 'Pollen Grain', desc: 'Scanning electron microscope view of flower pollen', ratio: '1x1', width: 400 },
  { id: 'feat2', title: 'Snowflake Crystal', desc: 'Ice crystal formation at microscopic scale', ratio: '1x1', width: 400 },
  { id: 'feat3', title: 'Butterfly Wing Scale', desc: 'Nanostructure of iridescent butterfly wing', ratio: '1x1', width: 400 },
  { id: 'feat4', title: 'Salt Crystal', desc: 'Cubic lattice structure of sodium chloride', ratio: '1x1', width: 400 },
  { id: 'feat5', title: 'Spider Silk', desc: 'Ultra-strong protein fiber at nanoscale', ratio: '1x1', width: 400 },
  { id: 'feat6', title: 'Ant Eye', desc: 'Compound eye of an ant under SEM', ratio: '1x1', width: 400 },
  { id: 'feat7', title: 'Neuron Network', desc: 'Fluorescent brain neurons forming synaptic connections', ratio: '16x9', width: 800 },
  { id: 'feat8', title: 'Coral Polyp', desc: 'Microscopic coral organism with tentacles extended', ratio: '4x3', width: 600 },
];

const FeaturedImages = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="featured" ref={containerRef} className="py-24 px-4 md:px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-emerald-400 text-sm font-semibold tracking-widest uppercase mb-3">Featured</p>
          <h2 id="featured-title" className="text-4xl md:text-5xl font-black text-white mb-4">
            Nature's Hidden Geometry
          </h2>
          <p id="featured-subtitle" className="text-gray-400 text-lg max-w-2xl mx-auto">
            Even everyday objects reveal breathtaking complexity under the microscope — from pollen to snowflakes to butterfly wings.
          </p>
        </div>

        {/* Hero wide image */}
        <div className="rounded-2xl overflow-hidden mb-6 border border-gray-800 group">
          <div className="aspect-video overflow-hidden">
            <img
              alt="Neuron Network"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              data-strk-img-id="feat7-img-main"
              data-strk-img="[feat7-desc] [feat7-title] [featured-subtitle] [featured-title]"
              data-strk-img-ratio="16x9"
              data-strk-img-width="1200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>
          <div className="p-4 bg-gray-950">
            <h3 id="feat7-title" className="text-white font-bold text-lg">Neuron Network</h3>
            <p id="feat7-desc" className="text-gray-400 text-sm">Fluorescent brain neurons forming synaptic connections</p>
          </div>
        </div>

        {/* 3-column grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
          {featuredImages.slice(0, 6).map((img) => (
            <div
              key={img.id}
              className="group rounded-xl overflow-hidden border border-gray-800 bg-gray-950 hover:border-emerald-500/40 transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  alt={img.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  data-strk-img-id={`${img.id}-img`}
                  data-strk-img={`[${img.id}-desc] [${img.id}-title] [featured-subtitle] [featured-title]`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width={img.width}
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div className="p-3">
                <h3 id={`${img.id}-title`} className="text-white text-sm font-semibold">{img.title}</h3>
                <p id={`${img.id}-desc`} className="text-gray-500 text-xs mt-0.5">{img.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom wide image */}
        <div className="rounded-2xl overflow-hidden border border-gray-800 group">
          <div className="aspect-[4/3] md:aspect-video overflow-hidden">
            <img
              alt="Coral Polyp"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              data-strk-img-id="feat8-img-bottom"
              data-strk-img="[feat8-desc] [feat8-title] [featured-subtitle] [featured-title]"
              data-strk-img-ratio="16x9"
              data-strk-img-width="1200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>
          <div className="p-4 bg-gray-950">
            <h3 id="feat8-title" className="text-white font-bold text-lg">Coral Polyp</h3>
            <p id="feat8-desc" className="text-gray-400 text-sm">Microscopic coral organism with tentacles extended</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedImages;
