import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const photos = [
  { id: 'g1', imgId: 'gallery-img-d4e5f6', label: 'Mountain Landscape', query: '[gallery-label-1]', ratio: '3x2', width: 800 },
  { id: 'g2', imgId: 'gallery-img-g7h8i9', label: 'Street Portrait', query: '[gallery-label-2]', ratio: '3x4', width: 600 },
  { id: 'g3', imgId: 'gallery-img-j1k2l3', label: 'Ocean at Sunset', query: '[gallery-label-3]', ratio: '3x2', width: 800 },
  { id: 'g4', imgId: 'gallery-img-m4n5o6', label: 'Forest Path', query: '[gallery-label-4]', ratio: '3x4', width: 600 },
  { id: 'g5', imgId: 'gallery-img-p7q8r9', label: 'City Skyline at Night', query: '[gallery-label-5]', ratio: '16x9', width: 1200 },
  { id: 'g6', imgId: 'gallery-img-s1t2u3', label: 'Macro Flower', query: '[gallery-label-6]', ratio: '1x1', width: 600 },
];

export default function Gallery() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="gallery" ref={containerRef} className="bg-zinc-900 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-widest text-amber-400 mb-3">Shot on Lumora</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Every Frame, a Masterpiece
          </h2>
        </div>

        {/* Hidden label elements for image queries */}
        {photos.map((p, i) => (
          <span key={p.id} id={`gallery-label-${i + 1}`} className="hidden">
            {p.label}
          </span>
        ))}

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {photos.map((p, i) => (
            <div
              key={p.id}
              className={`overflow-hidden rounded-xl bg-zinc-800 ${i === 4 ? 'col-span-2 md:col-span-2' : ''}`}
            >
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={p.label}
                className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-500"
                data-strk-img-id={p.imgId}
                data-strk-img={p.query}
                data-strk-img-ratio={p.ratio}
                data-strk-img-width={p.width}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
