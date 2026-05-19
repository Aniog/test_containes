import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  {
    id: 'bacteria',
    title: 'Bacteria',
    description: 'Single-celled organisms found in every environment on Earth.',
    color: 'from-cyan-500/20 to-teal-500/10',
    border: 'border-cyan-500/30',
  },
  {
    id: 'viruses',
    title: 'Viruses',
    description: 'Microscopic agents that replicate inside living cells.',
    color: 'from-purple-500/20 to-pink-500/10',
    border: 'border-purple-500/30',
  },
  {
    id: 'cells',
    title: 'Human Cells',
    description: 'The fundamental building blocks of all living organisms.',
    color: 'from-blue-500/20 to-cyan-500/10',
    border: 'border-blue-500/30',
  },
  {
    id: 'crystals',
    title: 'Micro Crystals',
    description: 'Stunning geometric structures formed at the molecular level.',
    color: 'from-amber-500/20 to-orange-500/10',
    border: 'border-amber-500/30',
  },
];

export default function HomeFeatured() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-4 md:px-8 bg-[#050d1a]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm uppercase tracking-widest mb-3">Discover</p>
          <h2 id="featured-title" className="text-4xl md:text-5xl font-bold text-white mb-4">
            Worlds Within Worlds
          </h2>
          <p id="featured-subtitle" className="text-slate-400 text-lg max-w-2xl mx-auto">
            Every drop of water, every grain of soil holds an entire civilization invisible to the naked eye.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className={`group relative rounded-2xl overflow-hidden border ${cat.border} bg-gradient-to-br ${cat.color} card-glass hover:scale-[1.02] transition-all duration-300 cursor-pointer`}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  data-strk-img-id={`home-cat-${cat.id}-d4e5f6`}
                  data-strk-img={`[home-cat-${cat.id}-desc] [home-cat-${cat.id}-title] [featured-subtitle] [featured-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div className="p-5">
                <h3 id={`home-cat-${cat.id}-title`} className="text-white font-bold text-lg mb-2">{cat.title}</h3>
                <p id={`home-cat-${cat.id}-desc`} className="text-slate-400 text-sm leading-relaxed">{cat.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/explore"
            className="inline-flex items-center gap-2 border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 font-semibold px-8 py-3 rounded-full transition-all duration-200"
          >
            Explore All Categories <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
