import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const organisms = [
  {
    id: 'feat-1',
    name: 'Tardigrade',
    nickname: 'Water Bear',
    category: 'Micro-animal',
    description: 'Nearly indestructible, tardigrades survive in outer space, volcanic vents, and the deepest ocean trenches.',
    color: 'from-cyan-500/20 to-blue-600/10',
  },
  {
    id: 'feat-2',
    name: 'Penicillium',
    nickname: 'The Lifesaver',
    category: 'Fungi',
    description: 'This humble mold gave us penicillin — the antibiotic that has saved over 200 million human lives.',
    color: 'from-violet-500/20 to-purple-600/10',
  },
  {
    id: 'feat-3',
    name: 'Cyanobacteria',
    nickname: 'Earth\'s Oxygenators',
    category: 'Bacteria',
    description: 'Responsible for the Great Oxidation Event 2.4 billion years ago, they created the oxygen we breathe.',
    color: 'from-emerald-500/20 to-teal-600/10',
  },
];

const HomeFeatured = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-[#050d1a]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#00d4ff] text-sm font-medium tracking-widest uppercase">Featured Organisms</span>
          <h2
            id="featured-heading"
            className="text-3xl md:text-4xl font-bold text-[#e8f4f8] mt-3 mb-4"
          >
            Meet the Micro-Legends
          </h2>
          <p className="text-[#8ab4c8] max-w-xl mx-auto leading-relaxed">
            These tiny organisms have shaped the history of our planet in ways that dwarf any human achievement.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {organisms.map((org) => (
            <div
              key={org.id}
              className="group bg-[#0d1f35] rounded-2xl border border-[rgba(0,212,255,0.15)] overflow-hidden hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(0,212,255,0.15)] transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  alt={org.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-strk-img-id={`featured-img-${org.id}`}
                  data-strk-img={`[feat-desc-${org.id}] [feat-name-${org.id}] [featured-heading]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${org.color} to-transparent`} />
                <span className="absolute top-3 left-3 text-xs font-medium tracking-widest uppercase text-[#00d4ff] bg-[#050d1a]/70 rounded-full px-3 py-1 border border-[rgba(0,212,255,0.2)]">
                  {org.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-[#4a7a94] text-xs font-medium tracking-widest uppercase mb-1">
                  "{org.nickname}"
                </p>
                <h3 id={`feat-name-${org.id}`} className="text-xl font-bold text-[#e8f4f8] mb-3">
                  {org.name}
                </h3>
                <p id={`feat-desc-${org.id}`} className="text-[#8ab4c8] text-sm leading-relaxed">
                  {org.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/explore"
            className="inline-flex items-center gap-2 border border-[#00d4ff] text-[#00d4ff] rounded-full px-8 py-3 hover:bg-[rgba(0,212,255,0.1)] transition-colors"
          >
            View All Organisms <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeFeatured;
