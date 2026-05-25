import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const galleryItems = [
  { id: 'gal-1', imgId: 'gallery-img-1-a3f7', label: 'Alpine Sunrise', labelId: 'gal-label-1', query: 'alpine sunrise mountain golden light', ratio: '3x2', width: 800 },
  { id: 'gal-2', imgId: 'gallery-img-2-b8c1', label: 'Ice Climbing', labelId: 'gal-label-2', query: 'ice climbing frozen waterfall climber', ratio: '3x4', width: 600 },
  { id: 'gal-3', imgId: 'gallery-img-3-c5d9', label: 'Summit Ridge', labelId: 'gal-label-3', query: 'mountain summit ridge snow climber', ratio: '3x2', width: 800 },
  { id: 'gal-4', imgId: 'gallery-img-4-d2e6', label: 'Base Camp', labelId: 'gal-label-4', query: 'mountain base camp tents glacier', ratio: '3x2', width: 800 },
  { id: 'gal-5', imgId: 'gallery-img-5-e4f0', label: 'Rock Face', labelId: 'gal-label-5', query: 'rock face climbing vertical cliff', ratio: '3x4', width: 600 },
  { id: 'gal-6', imgId: 'gallery-img-6-f1a8', label: 'Himalayan View', labelId: 'gal-label-6', query: 'himalayan mountain range panorama clouds', ratio: '3x2', width: 800 },
];

const Gallery = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="gallery" ref={containerRef} className="py-20 md:py-28 px-6 bg-slate-950 border-t border-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block bg-sky-500/20 text-sky-400 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5 border border-sky-500/30">
            The Experience
          </span>
          <h2 className="font-bold text-3xl md:text-4xl text-white mb-4">
            Life Above the Clouds
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-base leading-relaxed">
            A glimpse into the breathtaking world that awaits those who dare to climb.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {galleryItems.map((item) => (
            <div key={item.id} className="relative overflow-hidden rounded-xl group aspect-video">
              <span id={item.labelId} className="sr-only">{item.label}</span>
              <img
                alt={item.label}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.labelId}]`}
                data-strk-img-ratio={item.ratio}
                data-strk-img-width={item.width}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white font-semibold text-sm">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
