import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const featured = [
  {
    id: 'feat-mc001',
    titleId: 'feat-title-1',
    descId: 'feat-desc-1',
    title: 'Snowflake Architecture',
    desc: 'No two snowflakes are alike — each one a unique hexagonal crystal grown from water vapor in the atmosphere',
    category: 'Crystallography',
    ratio: '1x1',
    width: 500,
  },
  {
    id: 'feat-mc002',
    titleId: 'feat-title-2',
    descId: 'feat-desc-2',
    title: 'Mitosis in Action',
    desc: 'A cell divides — chromosomes align, separate, and two daughter cells are born in this fundamental act of life',
    category: 'Cell Biology',
    ratio: '1x1',
    width: 500,
  },
  {
    id: 'feat-mc003',
    titleId: 'feat-title-3',
    descId: 'feat-desc-3',
    title: 'Radiolarian Skeleton',
    desc: 'Intricate silica skeletons of radiolarian protists — geometric masterpieces built by single-celled organisms',
    category: 'Protistology',
    ratio: '1x1',
    width: 500,
  },
  {
    id: 'feat-mc004',
    titleId: 'feat-title-4',
    descId: 'feat-desc-4',
    title: 'Vitamin C Crystal',
    desc: 'Ascorbic acid crystallizes into vivid, colorful structures under polarized light microscopy',
    category: 'Chemistry',
    ratio: '1x1',
    width: 500,
  },
  {
    id: 'feat-mc005',
    titleId: 'feat-title-5',
    descId: 'feat-desc-5',
    title: 'Mosquito Eye',
    desc: 'Compound eye of a mosquito — thousands of individual lenses creating a mosaic view of the world',
    category: 'Entomology',
    ratio: '1x1',
    width: 500,
  },
  {
    id: 'feat-mc006',
    titleId: 'feat-title-6',
    descId: 'feat-desc-6',
    title: 'Coral Polyp',
    desc: 'A living coral polyp extends its tentacles to feed — the builder of the ocean\'s greatest structures',
    category: 'Marine Biology',
    ratio: '1x1',
    width: 500,
  },
  {
    id: 'feat-mc007',
    titleId: 'feat-title-7',
    descId: 'feat-desc-7',
    title: 'Spider Silk',
    desc: 'Spider silk threads — stronger than steel by weight, elastic, and produced by one of nature\'s most elegant spinnerets',
    category: 'Arachnology',
    ratio: '1x1',
    width: 500,
  },
  {
    id: 'feat-mc008',
    titleId: 'feat-title-8',
    descId: 'feat-desc-8',
    title: 'Leaf Stomata',
    desc: 'Microscopic pores on a leaf surface that regulate gas exchange — the lungs of the plant kingdom',
    category: 'Botany',
    ratio: '1x1',
    width: 500,
  },
];

const MosaicSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="mosaic" ref={containerRef} className="py-24 px-6 md:px-12 bg-[#0d1a26]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-4 block">Featured Specimens</span>
          <h2 id="mosaic-heading" className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nature's <span className="text-cyan-400">Masterpieces</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A curated selection of the most stunning microscopic specimens from across the natural world.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {featured.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-xl overflow-hidden aspect-square cursor-pointer"
            >
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                data-strk-img-id={item.id}
                data-strk-img={`[${item.descId}] [${item.titleId}] [mosaic-heading]`}
                data-strk-img-ratio={item.ratio}
                data-strk-img-width={item.width}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050a0f]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-cyan-400 text-xs font-semibold block mb-0.5">{item.category}</span>
                <h4 id={item.titleId} className="text-white font-bold text-sm">{item.title}</h4>
                <p id={item.descId} className="text-slate-400 text-xs mt-1 leading-snug hidden">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MosaicSection;
