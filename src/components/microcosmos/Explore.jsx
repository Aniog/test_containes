import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const featuredItems = [
  {
    id: 'feat-1',
    imgId: 'feat-img-mc001',
    titleId: 'feat-title-mc001',
    descId: 'feat-desc-mc001',
    title: 'Radiolarian Skeleton',
    desc: 'Intricate silica skeleton of a radiolarian protozoan, resembling a geometric jewel',
    category: 'Protozoa',
    ratio: '3x4',
    width: '500',
  },
  {
    id: 'feat-2',
    imgId: 'feat-img-mc002',
    titleId: 'feat-title-mc002',
    descId: 'feat-desc-mc002',
    title: 'Vitamin C Crystal',
    desc: 'Polarized light microscopy of ascorbic acid crystals forming colorful geometric patterns',
    category: 'Chemistry',
    ratio: '3x4',
    width: '500',
  },
  {
    id: 'feat-3',
    imgId: 'feat-img-mc003',
    titleId: 'feat-title-mc003',
    descId: 'feat-desc-mc003',
    title: 'Neuron Network',
    desc: 'Fluorescent imaging of interconnected neurons forming synaptic networks in brain tissue',
    category: 'Neuroscience',
    ratio: '3x4',
    width: '500',
  },
  {
    id: 'feat-4',
    imgId: 'feat-img-mc004',
    titleId: 'feat-title-mc004',
    descId: 'feat-desc-mc004',
    title: 'Moth Eye Surface',
    desc: 'Nanostructured surface of a moth eye under electron microscope, inspiring anti-reflective coatings',
    category: 'Biomimicry',
    ratio: '3x4',
    width: '500',
  },
  {
    id: 'feat-5',
    imgId: 'feat-img-mc005',
    titleId: 'feat-title-mc005',
    descId: 'feat-desc-mc005',
    title: 'Spirogyra Algae',
    desc: 'Spiral chloroplasts of Spirogyra freshwater algae under bright-field microscopy',
    category: 'Algae',
    ratio: '3x4',
    width: '500',
  },
  {
    id: 'feat-6',
    imgId: 'feat-img-mc006',
    titleId: 'feat-title-mc006',
    descId: 'feat-desc-mc006',
    title: 'Salt Crystal Formation',
    desc: 'Cubic sodium chloride crystals growing in a supersaturated solution under polarized light',
    category: 'Mineralogy',
    ratio: '3x4',
    width: '500',
  },
  {
    id: 'feat-7',
    imgId: 'feat-img-mc007',
    titleId: 'feat-title-mc007',
    descId: 'feat-desc-mc007',
    title: 'Dust Mite',
    desc: 'Scanning electron microscope image of a house dust mite, a common household microorganism',
    category: 'Arachnida',
    ratio: '3x4',
    width: '500',
  },
  {
    id: 'feat-8',
    imgId: 'feat-img-mc008',
    titleId: 'feat-title-mc008',
    descId: 'feat-desc-mc008',
    title: 'Mitosis in Progress',
    desc: 'Fluorescent microscopy capturing a cell dividing, chromosomes aligned at the metaphase plate',
    category: 'Cell Biology',
    ratio: '3x4',
    width: '500',
  },
];

const categoryColors = {
  'Protozoa': 'text-teal-glow',
  'Chemistry': 'text-violet-400',
  'Neuroscience': 'text-amber-glow',
  'Biomimicry': 'text-biolume',
  'Algae': 'text-teal-glow',
  'Mineralogy': 'text-blue-400',
  'Arachnida': 'text-red-400',
  'Cell Biology': 'text-pink-400',
};

const Explore = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="explore" className="py-20 md:py-28 bg-dark-navy">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <span className="text-xs font-medium tracking-widest uppercase text-teal-glow mb-3 block">Curated Collection</span>
          <h2 className="text-3xl md:text-4xl font-bold text-soft-white mb-4">Explore More Wonders</h2>
          <p className="text-muted-blue max-w-xl mx-auto leading-relaxed">
            From crystalline structures to living cells, each image reveals a universe of complexity hiding just beyond the threshold of human vision.
          </p>
        </div>

        <div ref={containerRef} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {featuredItems.map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-2xl bg-midnight border border-white/10 hover:border-teal-glow/30 transition-all duration-300 cursor-pointer">
              <div className="relative overflow-hidden aspect-[3/4]">
                <img
                  alt={item.title}
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[${item.descId}] [${item.titleId}]`}
                  data-strk-img-ratio={item.ratio}
                  data-strk-img-width={item.width}
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-transparent" />
              </div>
              <div className="p-3">
                <span className={`text-xs font-medium ${categoryColors[item.category] || 'text-teal-glow'}`}>
                  {item.category}
                </span>
                <h4 id={item.titleId} className="text-soft-white font-semibold text-sm mt-0.5 leading-tight">{item.title}</h4>
                <p id={item.descId} className="text-muted-blue text-xs mt-1 leading-relaxed line-clamp-2">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Explore;
