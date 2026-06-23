import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const galleryItems = [
  { id: 'gal-01', imgId: 'gal-img-01-aa1bb2', titleId: 'gal-01-title', title: 'Diatom Colony', ratio: '1x1', width: '600' },
  { id: 'gal-02', imgId: 'gal-img-02-cc3dd4', titleId: 'gal-02-title', title: 'Neuron Network', ratio: '3x2', width: '800' },
  { id: 'gal-03', imgId: 'gal-img-03-ee5ff6', titleId: 'gal-03-title', title: 'Butterfly Wing Scale', ratio: '1x1', width: '600' },
  { id: 'gal-04', imgId: 'gal-img-04-gg7hh8', titleId: 'gal-04-title', title: 'Salt Crystal Formation', ratio: '3x2', width: '800' },
  { id: 'gal-05', imgId: 'gal-img-05-ii9jj0', titleId: 'gal-05-title', title: 'Red Blood Cells', ratio: '1x1', width: '600' },
  { id: 'gal-06', imgId: 'gal-img-06-kk1ll2', titleId: 'gal-06-title', title: 'Pollen Grain Surface', ratio: '3x2', width: '800' },
  { id: 'gal-07', imgId: 'gal-img-07-mm3nn4', titleId: 'gal-07-title', title: 'Tardigrade Water Bear', ratio: '1x1', width: '600' },
  { id: 'gal-08', imgId: 'gal-img-08-oo5pp6', titleId: 'gal-08-title', title: 'Snowflake Crystal', ratio: '3x2', width: '800' },
  { id: 'gal-09', imgId: 'gal-img-09-qq7rr8', titleId: 'gal-09-title', title: 'Fungal Spores', ratio: '1x1', width: '600' },
  { id: 'gal-10', imgId: 'gal-img-10-ss9tt0', titleId: 'gal-10-title', title: 'Insect Compound Eye', ratio: '3x2', width: '800' },
  { id: 'gal-11', imgId: 'gal-img-11-uu1vv2', titleId: 'gal-11-title', title: 'Vitamin C Crystal', ratio: '1x1', width: '600' },
  { id: 'gal-12', imgId: 'gal-img-12-ww3xx4', titleId: 'gal-12-title', title: 'Paramecium Organism', ratio: '3x2', width: '800' },
];

export default function GallerySection() {
  const containerRef = useRef(null);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [selected]);

  return (
    <section id="gallery" ref={containerRef} className="py-24 px-6 md:px-12 lg:px-24 bg-[#0d1a26]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#00d4ff] mb-3">
            Photography
          </p>
          <h2 id="gallery-title" className="text-4xl md:text-5xl font-bold text-[#e8f4f8] mb-4">
            The Microscopic Gallery
          </h2>
          <p id="gallery-subtitle" className="text-[#8ab4c8] text-lg max-w-2xl mx-auto">
            Stunning electron microscopy and light microscopy images revealing the hidden beauty of the microscopic world.
          </p>
        </div>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="break-inside-avoid group relative cursor-pointer rounded-xl overflow-hidden border border-[#1a3a50] hover:border-[#00d4ff]/50 transition-all duration-300"
              onClick={() => setSelected(item)}
            >
              <img
                alt={item.title}
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.titleId}] [gallery-subtitle] [gallery-title]`}
                data-strk-img-ratio={item.ratio}
                data-strk-img-width={item.width}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050a0f]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                <span id={item.titleId} className="text-[#e8f4f8] text-sm font-semibold">
                  {item.title}
                </span>
              </div>
              {/* Hidden title for image query reference */}
              <span id={item.titleId} className="sr-only">{item.title}</span>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selected && (
          <div
            className="fixed inset-0 z-50 bg-[#050a0f]/95 flex items-center justify-center p-6"
            onClick={() => setSelected(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-[#0d1a26] rounded-2xl border border-[#1a3a50] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                alt={selected.title}
                data-strk-img-id={`modal-${selected.imgId}`}
                data-strk-img={`[modal-title-${selected.id}] [gallery-subtitle] [gallery-title]`}
                data-strk-img-ratio="16x9"
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full object-cover"
              />
              <div className="p-6 flex items-center justify-between">
                <div>
                  <h3 id={`modal-title-${selected.id}`} className="text-[#e8f4f8] text-xl font-semibold">
                    {selected.title}
                  </h3>
                  <p className="text-[#8ab4c8] text-sm mt-1">Microscopic Photography</p>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="text-[#8ab4c8] hover:text-[#e8f4f8] bg-[#1a3a50] border-none rounded-full w-10 h-10 flex items-center justify-center cursor-pointer transition-colors"
                >
                  ✕
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
