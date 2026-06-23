import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  {
    id: 'cat-biology',
    titleId: 'cat-biology-title',
    descId: 'cat-biology-desc',
    imgId: 'cat-img-mc014',
    title: 'Cell Biology',
    desc: 'Explore the fundamental units of life — from mitochondria to the nucleus, every cell is a universe unto itself.',
    count: '240+ images',
    ratio: '3x4',
    width: '500',
  },
  {
    id: 'cat-minerals',
    titleId: 'cat-minerals-title',
    descId: 'cat-minerals-desc',
    imgId: 'cat-img-mc015',
    title: 'Minerals & Crystals',
    desc: 'Nature\'s geometry revealed — the stunning lattice structures of minerals and crystals under polarized light.',
    count: '180+ images',
    ratio: '3x4',
    width: '500',
  },
  {
    id: 'cat-insects',
    titleId: 'cat-insects-title',
    descId: 'cat-insects-desc',
    imgId: 'cat-img-mc016',
    title: 'Insect Anatomy',
    desc: 'The alien beauty of compound eyes, wing scales, and sensory hairs — insects reimagined at microscopic scale.',
    count: '320+ images',
    ratio: '3x4',
    width: '500',
  },
  {
    id: 'cat-water',
    titleId: 'cat-water-title',
    descId: 'cat-water-desc',
    imgId: 'cat-img-mc017',
    title: 'Water Worlds',
    desc: 'A single drop of pond water contains thousands of organisms — rotifers, paramecia, and algae in constant motion.',
    count: '150+ images',
    ratio: '3x4',
    width: '500',
  },
];

const ExploreSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-cosmos-dark py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-cosmos-teal text-xs uppercase tracking-widest font-sans font-semibold mb-4">
            Explore by Category
          </p>
          <h2
            id="explore-title"
            className="font-display text-4xl md:text-5xl font-bold text-cosmos-text"
          >
            Worlds Within Worlds
          </h2>
          <p className="text-cosmos-muted mt-4 max-w-xl mx-auto font-sans text-base leading-relaxed">
            Dive deep into specific realms of the microscopic universe, each with its own rules, inhabitants, and wonders.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="relative rounded-2xl overflow-hidden border border-cosmos-border group cursor-pointer hover:border-cosmos-teal/60 hover:shadow-cosmos-glow transition-all duration-300"
              style={{ height: '420px' }}
            >
              <img
                alt={cat.title}
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.descId}] [${cat.titleId}] [explore-title]`}
                data-strk-img-ratio={cat.ratio}
                data-strk-img-width={cat.width}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cosmos-dark via-cosmos-dark/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-cosmos-teal text-xs uppercase tracking-widest font-sans font-semibold block mb-2">
                  {cat.count}
                </span>
                <h3 id={cat.titleId} className="font-display text-cosmos-text text-xl font-semibold mb-2">
                  {cat.title}
                </h3>
                <p id={cat.descId} className="text-cosmos-muted text-xs font-sans leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-h-0 group-hover:max-h-20 overflow-hidden">
                  {cat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
