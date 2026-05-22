import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const exploreItems = [
  {
    id: 'exp-1',
    imgId: 'explore-img-e1001',
    category: 'Virology',
    title: 'Viruses: Life on the Edge',
    desc: 'Are viruses alive? These nanoscale entities blur the boundary between chemistry and biology, hijacking cells to replicate with astonishing precision.',
    ratio: '3x2',
    width: 700,
  },
  {
    id: 'exp-2',
    imgId: 'explore-img-e1002',
    category: 'Soil Science',
    title: 'A Teaspoon of Soil',
    desc: 'One teaspoon of healthy soil contains more microorganisms than there are people on Earth — a bustling metropolis of bacteria, fungi, nematodes, and protozoa.',
    ratio: '3x2',
    width: 700,
  },
  {
    id: 'exp-3',
    imgId: 'explore-img-e1003',
    category: 'Human Microbiome',
    title: 'The Body\'s Inner Universe',
    desc: 'Your body hosts trillions of microbes — outnumbering your own cells. This microbiome influences immunity, mood, digestion, and even behavior.',
    ratio: '3x2',
    width: 700,
  },
  {
    id: 'exp-4',
    imgId: 'explore-img-e1004',
    category: 'Extremophiles',
    title: 'Life at the Extremes',
    desc: 'Thermophiles thrive in boiling springs. Psychrophiles flourish in Antarctic ice. Halophiles colonize salt flats. Life finds a way in the most hostile places.',
    ratio: '3x2',
    width: 700,
  },
  {
    id: 'exp-5',
    imgId: 'explore-img-e1005',
    category: 'Bioluminescence',
    title: 'Living Light',
    desc: 'From deep-sea bacteria to firefly squid, bioluminescence is one of nature\'s most magical phenomena — light produced by living organisms through chemical reactions.',
    ratio: '3x2',
    width: 700,
  },
  {
    id: 'exp-6',
    imgId: 'explore-img-e1006',
    category: 'Crystallography',
    title: 'Crystals of Life',
    desc: 'Proteins, minerals, and ice form breathtaking crystalline structures at the microscale — each one a testament to the mathematical elegance underlying nature.',
    ratio: '3x2',
    width: 700,
  },
];

const ExploreCard = ({ item }) => (
  <div className="group relative rounded-2xl overflow-hidden bg-gray-800 border border-gray-700 hover:-translate-y-1 transition-transform duration-300">
    <div className="aspect-[3/2] overflow-hidden">
      <img
        id={item.id}
        alt={item.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        data-strk-img-id={item.imgId}
        data-strk-img={`[${item.id}-desc] [${item.id}-title] [${item.id}-cat]`}
        data-strk-img-ratio={item.ratio}
        data-strk-img-width={item.width}
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
      />
    </div>
    <div className="p-5">
      <p id={`${item.id}-cat`} className="text-cyan-400 text-xs uppercase tracking-widest font-semibold mb-2">
        {item.category}
      </p>
      <h3 id={`${item.id}-title`} className="text-white font-bold text-lg mb-2 leading-snug">
        {item.title}
      </h3>
      <p id={`${item.id}-desc`} className="text-gray-400 text-sm leading-relaxed">
        {item.desc}
      </p>
    </div>
  </div>
);

const Explore = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="explore" ref={containerRef} className="bg-gray-900 py-20 md:py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-emerald-400 text-sm uppercase tracking-widest font-semibold mb-3">
            Deep Dives
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-5">
            Explore Further
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Fascinating topics at the frontier of microscopic science
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {exploreItems.map((item) => (
            <ExploreCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Explore;
