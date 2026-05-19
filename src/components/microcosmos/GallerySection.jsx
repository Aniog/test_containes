import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const galleryItems = [
  {
    id: 'gal-1',
    titleId: 'gal-title-1',
    subtitleId: 'gal-sub-1',
    title: 'Diatom Silica Shell',
    subtitle: 'Microscopic algae with intricate glass-like cell walls',
    tag: 'Algae',
    imgId: 'gal-img-m4n5o6',
    ratio: '1x1',
    width: 600,
    span: 'md:col-span-1',
  },
  {
    id: 'gal-2',
    titleId: 'gal-title-2',
    subtitleId: 'gal-sub-2',
    title: 'Tardigrade in Moss',
    subtitle: 'The near-indestructible water bear surviving extreme conditions',
    tag: 'Extremophile',
    imgId: 'gal-img-p7q8r9',
    ratio: '3x2',
    width: 900,
    span: 'md:col-span-2',
  },
  {
    id: 'gal-3',
    titleId: 'gal-title-3',
    subtitleId: 'gal-sub-3',
    title: 'Snowflake Crystal',
    subtitle: 'No two snowflakes are alike — hexagonal symmetry at its finest',
    tag: 'Crystal',
    imgId: 'gal-img-s1t2u3',
    ratio: '3x2',
    width: 900,
    span: 'md:col-span-2',
  },
  {
    id: 'gal-4',
    titleId: 'gal-title-4',
    subtitleId: 'gal-sub-4',
    title: 'Neuron Network',
    subtitle: 'Branching dendrites forming the web of thought and memory',
    tag: 'Neuroscience',
    imgId: 'gal-img-v4w5x6',
    ratio: '1x1',
    width: 600,
    span: 'md:col-span-1',
  },
  {
    id: 'gal-5',
    titleId: 'gal-title-5',
    subtitleId: 'gal-sub-5',
    title: 'Pollen Grain',
    subtitle: 'Spiky spheres carrying the genetic code of flowering plants',
    tag: 'Botany',
    imgId: 'gal-img-y7z8a9',
    ratio: '1x1',
    width: 600,
    span: 'md:col-span-1',
  },
  {
    id: 'gal-6',
    titleId: 'gal-title-6',
    subtitleId: 'gal-sub-6',
    title: 'Butterfly Wing Scale',
    subtitle: 'Iridescent nanostructures creating color without pigment',
    tag: 'Entomology',
    imgId: 'gal-img-b1c2d3',
    ratio: '1x1',
    width: 600,
    span: 'md:col-span-1',
  },
  {
    id: 'gal-7',
    titleId: 'gal-title-7',
    subtitleId: 'gal-sub-7',
    title: 'Red Blood Cells',
    subtitle: 'Biconcave discs ferrying oxygen through every vessel in the body',
    tag: 'Hematology',
    imgId: 'gal-img-e4f5g6',
    ratio: '1x1',
    width: 600,
    span: 'md:col-span-1',
  },
];

const tagColors = {
  Algae: 'bg-emerald-900/60 text-emerald-300',
  Extremophile: 'bg-violet-900/60 text-violet-300',
  Crystal: 'bg-sky-900/60 text-sky-300',
  Neuroscience: 'bg-pink-900/60 text-pink-300',
  Botany: 'bg-lime-900/60 text-lime-300',
  Entomology: 'bg-amber-900/60 text-amber-300',
  Hematology: 'bg-red-900/60 text-red-300',
};

const GallerySection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="gallery" ref={containerRef} className="py-20 md:py-28 bg-[#0d1a24]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-[#9b5de5] font-semibold mb-3">
            Visual Archive
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Gallery of the Unseen
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Stunning electron microscope and fluorescence photography revealing the hidden beauty of the microscopic world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className={`relative group overflow-hidden rounded-2xl ${item.span} cursor-pointer`}
            >
              <img
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.subtitleId}] [${item.titleId}]`}
                data-strk-img-ratio={item.ratio}
                data-strk-img-width={item.width}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050a0f]/90 via-[#050a0f]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                <span className={`text-xs font-semibold px-2 py-1 rounded-full w-fit mb-2 ${tagColors[item.tag] || 'bg-slate-800 text-slate-300'}`}>
                  {item.tag}
                </span>
                <h3 id={item.titleId} className="text-white font-bold text-lg leading-tight">
                  {item.title}
                </h3>
                <p id={item.subtitleId} className="text-slate-300 text-sm mt-1">
                  {item.subtitle}
                </p>
              </div>
              {/* Always-visible tag on non-hover */}
              <div className="absolute top-3 left-3 group-hover:opacity-0 transition-opacity duration-300">
                <span className={`text-xs font-semibold px-2 py-1 rounded-full ${tagColors[item.tag] || 'bg-slate-800 text-slate-300'}`}>
                  {item.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
