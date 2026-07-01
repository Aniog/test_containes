import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const galleryItems = [
  { id: 'gal-1', titleId: 'gal-title-1', descId: 'gal-desc-1', imgId: 'gal-img-1-s1t2u3', title: 'Wood-Fired Margherita', desc: 'Classic Neapolitan pizza from the wood-fired oven', ratio: '4x3', width: '700', span: 'md:col-span-2 md:row-span-2' },
  { id: 'gal-2', titleId: 'gal-title-2', descId: 'gal-desc-2', imgId: 'gal-img-2-v4w5x6', title: 'Fresh Sourdough Loaves', desc: 'Artisan sourdough bread cooling on a rack', ratio: '1x1', width: '400', span: '' },
  { id: 'gal-3', titleId: 'gal-title-3', descId: 'gal-desc-3', imgId: 'gal-img-3-y7z8a9', title: 'Butter Croissants', desc: 'Golden flaky croissants fresh from the oven', ratio: '1x1', width: '400', span: '' },
  { id: 'gal-4', titleId: 'gal-title-4', descId: 'gal-desc-4', imgId: 'gal-img-4-b1c2d3', title: 'Truffle Mushroom Pizza', desc: 'Gourmet pizza with wild mushrooms and truffle cream', ratio: '4x3', width: '600', span: '' },
  { id: 'gal-5', titleId: 'gal-title-5', descId: 'gal-desc-5', imgId: 'gal-img-5-e4f5g6', title: 'Pastry Selection', desc: 'Assorted pastries and sweet baked goods display', ratio: '4x3', width: '600', span: '' },
];

export default function Gallery() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="gallery" ref={containerRef} className="bg-ash py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="font-inter text-sm uppercase tracking-widest text-crust mb-3">From Our Kitchen</p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-charcoal">Gallery</h2>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px] md:auto-rows-[220px]">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className={`relative overflow-hidden rounded-2xl group ${item.span}`}
            >
              <img
                alt={item.title}
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.descId}] [${item.titleId}]`}
                data-strk-img-ratio={item.ratio}
                data-strk-img-width={item.width}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/50 transition-colors duration-300 flex items-end p-4">
                <p
                  id={item.titleId}
                  className="font-playfair text-white font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  {item.title}
                </p>
                <span id={item.descId} className="sr-only">{item.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
