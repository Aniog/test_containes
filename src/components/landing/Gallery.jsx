import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const galleryItems = [
  { id: 'gal-title-1', title: 'Misty Forest Dawn', id_desc: 'gal-desc-1', desc: 'Morning fog through ancient trees', imgId: 'gal-img-m4n5o6', ratio: '3x4', width: 500, span: 'row-span-2' },
  { id: 'gal-title-2', title: 'Alpine Meadow', id_desc: 'gal-desc-2', desc: 'Wildflowers in a mountain meadow', imgId: 'gal-img-p7q8r9', ratio: '3x2', width: 700, span: '' },
  { id: 'gal-title-3', title: 'Waterfall Cascade', id_desc: 'gal-desc-3', desc: 'Rushing waterfall in tropical jungle', imgId: 'gal-img-s1t2u3', ratio: '3x2', width: 700, span: '' },
  { id: 'gal-title-4', title: 'Desert Sunset', id_desc: 'gal-desc-4', desc: 'Golden hour over sand dunes', imgId: 'gal-img-v4w5x6', ratio: '3x4', width: 500, span: 'row-span-2' },
  { id: 'gal-title-5', title: 'Arctic Aurora', id_desc: 'gal-desc-5', desc: 'Northern lights over snowy landscape', imgId: 'gal-img-y7z8a9', ratio: '3x2', width: 700, span: '' },
  { id: 'gal-title-6', title: 'Coral Reef', id_desc: 'gal-desc-6', desc: 'Vibrant underwater coral ecosystem', imgId: 'gal-img-b1c2d3', ratio: '3x2', width: 700, span: '' },
];

const Gallery = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="gallery" ref={containerRef} className="bg-gray-950 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-green-leaf font-sans font-semibold tracking-widest uppercase text-sm mb-3">
            Visual journey
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            Nature Gallery
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            A curated collection of nature's most awe-inspiring moments, captured from every corner of the globe.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[220px] gap-4">
          {galleryItems.map(({ id, title, id_desc, desc, imgId, ratio, width, span }) => (
            <div key={id} className={`relative overflow-hidden rounded-xl group cursor-pointer ${span}`}>
              <img
                alt={title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                data-strk-img-id={imgId}
                data-strk-img={`[${id_desc}] [${id}]`}
                data-strk-img-ratio={ratio}
                data-strk-img-width={width}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 id={id} className="text-white font-serif font-semibold text-base">{title}</h3>
                <p id={id_desc} className="text-white/70 text-xs mt-1">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
