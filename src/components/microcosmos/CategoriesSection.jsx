import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  {
    id: 'cat-bacteria',
    title: 'Bacteria & Archaea',
    description: 'The oldest and most abundant life forms on Earth, shaping every ecosystem.',
    imgId: 'cat-img-mc003',
    ratio: '3x4',
    width: 600,
  },
  {
    id: 'cat-algae',
    title: 'Algae & Diatoms',
    description: 'Geometric masterpieces of silica, producing half of Earth\'s oxygen.',
    imgId: 'cat-img-mc004',
    ratio: '3x4',
    width: 600,
  },
  {
    id: 'cat-protozoa',
    title: 'Protozoa',
    description: 'Single-celled hunters navigating a world invisible to the human eye.',
    imgId: 'cat-img-mc005',
    ratio: '3x4',
    width: 600,
  },
  {
    id: 'cat-fungi',
    title: 'Fungi & Spores',
    description: 'Nature\'s recyclers, weaving networks of mycelium through soil and wood.',
    imgId: 'cat-img-mc006',
    ratio: '3x4',
    width: 600,
  },
];

const CategoriesSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-6 md:px-12 bg-[#0a1628]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p id="cat-label" className="text-sm font-medium tracking-widest uppercase text-[#00d4aa] mb-4">
            Kingdoms of the Micro World
          </p>
          <h2 id="cat-title" className="text-4xl md:text-5xl font-bold text-[#e8f4f8]">
            Explore by Category
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="group relative rounded-2xl overflow-hidden border border-[#1a3a4a] hover:border-[#00d4aa]/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,212,170,0.2)] cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img
                  alt={cat.title}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[${cat.id}-desc] [${cat.id}-title] [cat-label]`}
                  data-strk-img-ratio={cat.ratio}
                  data-strk-img-width={cat.width}
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050d1a] via-[#050d1a]/30 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 id={`${cat.id}-title`} className="text-lg font-bold text-[#e8f4f8] mb-1">{cat.title}</h3>
                <p id={`${cat.id}-desc`} className="text-sm text-[#94b8c8] leading-snug">{cat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
