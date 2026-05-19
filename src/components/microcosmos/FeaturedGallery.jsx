import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const featuredImages = [
  { id: 'feat1', title: 'Spirulina Algae', desc: 'Spiral cyanobacteria', ratio: '1x1', width: 400 },
  { id: 'feat2', title: 'Dust Mite', desc: 'Household arachnid', ratio: '1x1', width: 400 },
  { id: 'feat3', title: 'Spirogyra', desc: 'Freshwater green algae', ratio: '1x1', width: 400 },
  { id: 'feat4', title: 'Nematode Worm', desc: 'Roundworm organism', ratio: '1x1', width: 400 },
  { id: 'feat5', title: 'Amoeba', desc: 'Shape-shifting protozoa', ratio: '1x1', width: 400 },
  { id: 'feat6', title: 'Euglena', desc: 'Flagellate microorganism', ratio: '1x1', width: 400 },
];

const FeaturedGallery = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-[#050d1a]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase text-cyan-400 mb-3">
            More Wonders
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-sky-50 mb-4">
            Microscopic Portraits
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-lg">
            Every drop of water, every grain of soil holds an entire world waiting to be discovered.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {featuredImages.map((img) => (
            <div
              key={img.id}
              className="group relative overflow-hidden rounded-2xl border border-cyan-500/15 aspect-square"
            >
              <img
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                data-strk-img-id={`feat-${img.id}-4d5e6f`}
                data-strk-img={`[feat-desc-${img.id}] [feat-title-${img.id}] microscopy`}
                data-strk-img-ratio={img.ratio}
                data-strk-img-width={img.width}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050d1a]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h4 id={`feat-title-${img.id}`} className="text-sky-50 font-bold text-sm">
                  {img.title}
                </h4>
                <p id={`feat-desc-${img.id}`} className="text-cyan-400 text-xs">
                  {img.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedGallery;
