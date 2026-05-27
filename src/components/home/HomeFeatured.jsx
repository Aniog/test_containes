import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  { id: 'cat-bacteria', title: 'Bacteria', subtitle: 'Single-celled prokaryotes', color: 'from-teal-500/20' },
  { id: 'cat-viruses', title: 'Viruses', subtitle: 'Nanoscale pathogens', color: 'from-purple-500/20' },
  { id: 'cat-cells', title: 'Human Cells', subtitle: 'Building blocks of life', color: 'from-blue-500/20' },
  { id: 'cat-fungi', title: 'Fungi & Spores', subtitle: 'Nature\'s recyclers', color: 'from-green-500/20' },
  { id: 'cat-crystals', title: 'Crystals', subtitle: 'Geometric perfection', color: 'from-yellow-500/20' },
  { id: 'cat-parasites', title: 'Parasites', subtitle: 'Hidden invaders', color: 'from-red-500/20' },
];

const HomeFeatured = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="featured" ref={containerRef} className="py-20 md:py-28 max-w-7xl mx-auto px-4 md:px-8">
      <div className="text-center mb-14">
        <p className="text-microteal text-sm font-semibold uppercase tracking-widest mb-3">
          Explore by category
        </p>
        <h2 id="featured-heading" className="font-display font-bold text-3xl md:text-5xl text-microtext mb-4">
          Worlds Within Worlds
        </h2>
        <p className="text-micromuted text-base md:text-lg max-w-xl mx-auto">
          Each category reveals a different dimension of the microscopic universe.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            to="/explore"
            className="group relative bg-microsurface border border-microborder rounded-2xl overflow-hidden hover:border-microteal/50 hover:shadow-xl hover:shadow-microteal/10 transition-all duration-300"
          >
            <div className="relative h-52 overflow-hidden">
              <img
                alt={cat.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                data-strk-img-id={`featured-${cat.id}-img-x9y8z`}
                data-strk-img={`[${cat.id}-sub] [${cat.id}-title] [featured-heading]`}
                data-strk-img-ratio="3x2"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${cat.color} to-transparent opacity-60`} />
              <div className="absolute inset-0 bg-gradient-to-t from-microsurface/80 to-transparent" />
            </div>
            <div className="p-5">
              <h3 id={`${cat.id}-title`} className="font-display font-semibold text-lg text-microtext mb-1">
                {cat.title}
              </h3>
              <p id={`${cat.id}-sub`} className="text-micromuted text-sm mb-3">{cat.subtitle}</p>
              <span className="inline-flex items-center gap-1 text-microteal text-sm font-medium group-hover:gap-2 transition-all">
                Explore <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default HomeFeatured;
