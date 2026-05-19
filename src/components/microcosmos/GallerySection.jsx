import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const galleryItems = [
  {
    id: 'gallery-item-1',
    titleId: 'gallery-title-1',
    descId: 'gallery-desc-1',
    imgId: 'gallery-img-a1f2b3',
    title: 'Diatom Algae',
    desc: 'Microscopic single-celled algae with intricate silica shells',
    ratio: '1x1',
    width: 600,
    span: 'md:col-span-1',
  },
  {
    id: 'gallery-item-2',
    titleId: 'gallery-title-2',
    descId: 'gallery-desc-2',
    imgId: 'gallery-img-c4d5e6',
    title: 'Snowflake Crystal',
    desc: 'Ice crystal formation under polarized light microscopy',
    ratio: '4x3',
    width: 800,
    span: 'md:col-span-2',
  },
  {
    id: 'gallery-item-3',
    titleId: 'gallery-title-3',
    descId: 'gallery-desc-3',
    imgId: 'gallery-img-f7g8h9',
    title: 'Pollen Grain',
    desc: 'Scanning electron microscope image of flower pollen',
    ratio: '4x3',
    width: 800,
    span: 'md:col-span-2',
  },
  {
    id: 'gallery-item-4',
    titleId: 'gallery-title-4',
    descId: 'gallery-desc-4',
    imgId: 'gallery-img-i1j2k3',
    title: 'Red Blood Cells',
    desc: 'Human erythrocytes flowing through a capillary vessel',
    ratio: '1x1',
    width: 600,
    span: 'md:col-span-1',
  },
  {
    id: 'gallery-item-5',
    titleId: 'gallery-title-5',
    descId: 'gallery-desc-5',
    imgId: 'gallery-img-l4m5n6',
    title: 'Tardigrade',
    desc: 'Water bear micro-animal, the most resilient creature on Earth',
    ratio: '1x1',
    width: 600,
    span: 'md:col-span-1',
  },
  {
    id: 'gallery-item-6',
    titleId: 'gallery-title-6',
    descId: 'gallery-desc-6',
    imgId: 'gallery-img-o7p8q9',
    title: 'Neuron Network',
    desc: 'Fluorescent imaging of neural connections in the brain',
    ratio: '1x1',
    width: 600,
    span: 'md:col-span-1',
  },
  {
    id: 'gallery-item-7',
    titleId: 'gallery-title-7',
    descId: 'gallery-desc-7',
    imgId: 'gallery-img-r1s2t3',
    title: 'Butterfly Wing Scale',
    desc: 'Nanostructures on butterfly wing creating iridescent color',
    ratio: '1x1',
    width: 600,
    span: 'md:col-span-1',
  },
];

const GalleryCard = ({ item }) => (
  <div
    className={`group relative rounded-2xl overflow-hidden border border-cyan-900/40 hover:border-cyan-400/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(34,211,238,0.2)] ${item.span}`}
  >
    <div className="relative overflow-hidden">
      <img
        id={item.id}
        alt={item.title}
        className="w-full object-cover group-hover:scale-105 transition-transform duration-700"
        data-strk-img-id={item.imgId}
        data-strk-img={`[${item.descId}] [${item.titleId}] microscopic photography`}
        data-strk-img-ratio={item.ratio}
        data-strk-img-width={item.width}
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050a14] via-transparent to-transparent opacity-80" />
    </div>
    <div className="absolute bottom-0 left-0 right-0 p-5">
      <h3 id={item.titleId} className="text-white font-bold text-lg mb-1">
        {item.title}
      </h3>
      <p id={item.descId} className="text-slate-400 text-sm leading-snug">
        {item.desc}
      </p>
    </div>
  </div>
);

const GallerySection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="gallery" ref={containerRef} className="py-20 md:py-28 bg-[#050a14]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <p className="text-cyan-400 text-sm font-semibold tracking-[0.3em] uppercase mb-4">
            Visual Gallery
          </p>
          <h2
            id="gallery-section-title"
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Wonders Too Small to See
          </h2>
          <p
            id="gallery-section-desc"
            className="text-slate-400 max-w-xl mx-auto text-base leading-relaxed"
          >
            A curated collection of microscopic imagery — from living organisms to crystalline structures — each one a universe unto itself.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {galleryItems.map((item) => (
            <GalleryCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
