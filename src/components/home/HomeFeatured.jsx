import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const featuredOrganisms = [
  {
    id: 'tardigrade',
    titleId: 'feat-tardigrade-title',
    descId: 'feat-tardigrade-desc',
    imgId: 'feat-img-tardigrade-a1b2',
    title: 'Tardigrades',
    desc: 'The indestructible "water bears" that survive in outer space, volcanic vents, and the deepest ocean trenches.',
    tag: 'Extremophile',
    tagColor: 'text-cosmos-amber border-cosmos-amber/20 bg-cosmos-amber/10',
  },
  {
    id: 'mycelium',
    titleId: 'feat-mycelium-title',
    descId: 'feat-mycelium-desc',
    imgId: 'feat-img-mycelium-c3d4',
    title: 'Mycelium Networks',
    desc: 'The "Wood Wide Web" — fungal threads connecting entire forests, sharing nutrients and chemical signals.',
    tag: 'Fungi',
    tagColor: 'text-cosmos-emerald border-cosmos-emerald/20 bg-cosmos-emerald/10',
  },
  {
    id: 'diatom',
    titleId: 'feat-diatom-title',
    descId: 'feat-diatom-desc',
    imgId: 'feat-img-diatom-e5f6',
    title: 'Diatoms',
    desc: 'Microscopic algae encased in intricate glass shells, responsible for 20% of Earth\'s oxygen production.',
    tag: 'Algae',
    tagColor: 'text-cosmos-cyan border-cosmos-cyan/20 bg-cosmos-cyan/10',
  },
];

const HomeFeatured = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-cosmos-bg">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-cosmos-teal text-xs font-medium uppercase tracking-widest">Featured Organisms</span>
          <h2 className="text-3xl md:text-4xl font-bold text-cosmos-text mt-3 mb-4">
            Meet the Micro-World's Most Remarkable Residents
          </h2>
          <p className="text-cosmos-muted max-w-xl mx-auto leading-relaxed">
            From indestructible extremophiles to world-building fungi, these tiny organisms shape the planet in ways we're only beginning to understand.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {featuredOrganisms.map((org) => (
            <article
              key={org.id}
              className="bg-cosmos-surface border border-cosmos-border rounded-2xl overflow-hidden hover:border-cosmos-teal/40 hover:shadow-[0_0_30px_rgba(0,212,200,0.1)] transition-all duration-300 group"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  alt={org.title}
                  data-strk-img-id={org.imgId}
                  data-strk-img={`[${org.descId}] [${org.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cosmos-surface via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <span className={`inline-block text-xs font-medium px-3 py-1 rounded-full border mb-3 ${org.tagColor}`}>
                  {org.tag}
                </span>
                <h3 id={org.titleId} className="text-cosmos-text text-xl font-semibold mb-2">
                  {org.title}
                </h3>
                <p id={org.descId} className="text-cosmos-muted text-sm leading-relaxed">
                  {org.desc}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/explore"
            className="inline-flex items-center gap-2 border border-cosmos-teal text-cosmos-teal font-semibold px-8 py-3 rounded-full hover:bg-cosmos-teal hover:text-cosmos-bg transition-all duration-200"
          >
            View All Organisms
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeFeatured;
