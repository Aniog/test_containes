import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ZoomIn } from 'lucide-react';

const photos = [
  {
    id: 'gallery-pollen',
    title: 'Pollen Grain',
    caption: 'Scanning electron microscopy reveals the intricate surface architecture of a sunflower pollen grain.',
    ratio: '1x1',
    width: '600',
    titleId: 'gallery-pollen-title',
    captionId: 'gallery-pollen-caption',
    imgId: 'gallery-pollen-img-aa1bb2',
    span: 'md:col-span-1',
  },
  {
    id: 'gallery-neuron',
    title: 'Neural Network',
    caption: 'A fluorescence microscopy image of interconnected neurons forming synaptic connections in brain tissue.',
    ratio: '3x2',
    width: '900',
    titleId: 'gallery-neuron-title',
    captionId: 'gallery-neuron-caption',
    imgId: 'gallery-neuron-img-cc3dd4',
    span: 'md:col-span-2',
  },
  {
    id: 'gallery-crystal',
    title: 'Salt Crystal',
    caption: 'Polarized light microscopy transforms ordinary table salt into a kaleidoscope of geometric color.',
    ratio: '3x2',
    width: '900',
    titleId: 'gallery-crystal-title',
    captionId: 'gallery-crystal-caption',
    imgId: 'gallery-crystal-img-ee5ff6',
    span: 'md:col-span-2',
  },
  {
    id: 'gallery-butterfly',
    title: 'Butterfly Wing Scale',
    caption: 'The iridescent colors of butterfly wings arise from microscopic photonic crystal structures, not pigment.',
    ratio: '1x1',
    width: '600',
    titleId: 'gallery-butterfly-title',
    captionId: 'gallery-butterfly-caption',
    imgId: 'gallery-butterfly-img-gg7hh8',
    span: 'md:col-span-1',
  },
  {
    id: 'gallery-dna',
    title: 'DNA Strand',
    caption: 'Atomic force microscopy captures the double helix structure of DNA — the blueprint of all known life.',
    ratio: '1x1',
    width: '600',
    titleId: 'gallery-dna-title',
    captionId: 'gallery-dna-caption',
    imgId: 'gallery-dna-img-ii9jj0',
    span: 'md:col-span-1',
  },
  {
    id: 'gallery-snowflake',
    title: 'Snowflake',
    caption: 'No two snowflakes are alike — each one grows in a unique path through the atmosphere, creating perfect hexagonal symmetry.',
    ratio: '1x1',
    width: '600',
    titleId: 'gallery-snowflake-title',
    captionId: 'gallery-snowflake-caption',
    imgId: 'gallery-snowflake-img-kk1ll2',
    span: 'md:col-span-1',
  },
  {
    id: 'gallery-blood',
    title: 'Red Blood Cells',
    caption: 'Scanning electron microscopy reveals the biconcave disc shape of red blood cells, optimized for oxygen transport.',
    ratio: '3x2',
    width: '900',
    titleId: 'gallery-blood-title',
    captionId: 'gallery-blood-caption',
    imgId: 'gallery-blood-img-mm3nn4',
    span: 'md:col-span-1',
  },
];

export default function Gallery() {
  const containerRef = useRef(null);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [selected]);

  return (
    <section id="gallery" ref={containerRef} className="bg-slate-950 py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-4 block">
            Visual Wonders
          </span>
          <h2 id="gallery-title" className="text-4xl md:text-5xl font-bold text-slate-50 mb-6">
            Microscopy Gallery
          </h2>
          <p id="gallery-subtitle" className="text-slate-400 text-lg max-w-2xl mx-auto">
            Stunning images captured through electron microscopes, fluorescence imaging,
            and polarized light — revealing beauty invisible to the human eye.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className={`${photo.span} relative group cursor-pointer overflow-hidden rounded-2xl border border-slate-800 hover:border-cyan-500/40 transition-all duration-300`}
              onClick={() => setSelected(photo)}
            >
              <img
                alt={photo.title}
                data-strk-img-id={photo.imgId}
                data-strk-img={`[${photo.captionId}] [${photo.titleId}] [gallery-subtitle] [gallery-title]`}
                data-strk-img-ratio={photo.ratio}
                data-strk-img-width={photo.width}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 min-h-48"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-slate-50 font-bold text-lg">{photo.title}</h3>
                <p className="text-slate-300 text-sm mt-1 line-clamp-2">{photo.caption}</p>
              </div>
              <div className="absolute top-3 right-3 w-8 h-8 bg-slate-950/60 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ZoomIn className="w-4 h-4 text-cyan-400" />
              </div>
              {/* Hidden IDs for image query references */}
              <span id={photo.titleId} className="sr-only">{photo.title}</span>
              <span id={photo.captionId} className="sr-only">{photo.caption}</span>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selected && (
          <div
            className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-6"
            onClick={() => setSelected(null)}
          >
            <div
              className="max-w-3xl w-full bg-slate-900 border border-cyan-900/40 rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(0,229,255,0.15)]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                alt={selected.title}
                data-strk-img-id={`lightbox-${selected.imgId}`}
                data-strk-img={`[lightbox-caption-${selected.id}] [lightbox-title-${selected.id}]`}
                data-strk-img-ratio="3x2"
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full object-cover max-h-96"
              />
              <div className="p-6">
                <h3 id={`lightbox-title-${selected.id}`} className="text-slate-50 text-2xl font-bold mb-2">{selected.title}</h3>
                <p id={`lightbox-caption-${selected.id}`} className="text-slate-400 leading-relaxed">{selected.caption}</p>
                <button
                  className="mt-4 text-sm text-slate-500 hover:text-cyan-400 transition-colors"
                  onClick={() => setSelected(null)}
                >
                  Close ✕
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
