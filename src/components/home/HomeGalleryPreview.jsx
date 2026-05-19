import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const galleryItems = [
  { id: 'tardigrade', title: 'Tardigrade', subtitle: 'Water Bear — the most resilient creature on Earth', span: 'col-span-1 row-span-2' },
  { id: 'diatom', title: 'Diatom', subtitle: 'Microscopic algae with glass-like shells', span: 'col-span-1 row-span-1' },
  { id: 'pollen', title: 'Pollen Grain', subtitle: 'Intricate surface patterns under electron microscope', span: 'col-span-1 row-span-1' },
  { id: 'neuron', title: 'Neuron', subtitle: 'Brain cell forming connections', span: 'col-span-2 row-span-1' },
];

export default function HomeGalleryPreview() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-4 md:px-8 bg-[#0a1628]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <p className="text-cyan-400 text-sm uppercase tracking-widest mb-3">Gallery Preview</p>
            <h2 id="gallery-preview-title" className="text-4xl md:text-5xl font-bold text-white">
              Stunning Imagery
            </h2>
            <p id="gallery-preview-subtitle" className="text-slate-400 text-lg mt-3 max-w-xl">
              Electron microscopy and fluorescence imaging reveal the hidden beauty of the microscopic world.
            </p>
          </div>
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold transition-colors whitespace-nowrap"
          >
            View Full Gallery <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px]">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className={`${item.span} group relative rounded-2xl overflow-hidden border border-cyan-900/30 hover:border-cyan-500/50 transition-all duration-300`}
            >
              <img
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                data-strk-img-id={`home-gallery-${item.id}-j1k2l3`}
                data-strk-img={`[home-gallery-${item.id}-sub] [home-gallery-${item.id}-title] [gallery-preview-subtitle] [gallery-preview-title]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050d1a]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 id={`home-gallery-${item.id}-title`} className="text-white font-bold text-base">{item.title}</h3>
                <p id={`home-gallery-${item.id}-sub`} className="text-slate-300 text-xs mt-1">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
