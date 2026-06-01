import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const featuredItems = [
  {
    id: 'tardigrade',
    titleId: 'home-feat-tardigrade-title',
    descId: 'home-feat-tardigrade-desc',
    imgId: 'home-feat-tardigrade-img-d4e5f6',
    title: 'Tardigrades',
    desc: 'The indestructible water bears that survive in outer space.',
    badge: 'Extremophile',
    badgeColor: 'text-violet-400 bg-violet-500/10 border-violet-500/20',
  },
  {
    id: 'diatom',
    titleId: 'home-feat-diatom-title',
    descId: 'home-feat-diatom-desc',
    imgId: 'home-feat-diatom-img-g7h8i9',
    title: 'Diatoms',
    desc: 'Microscopic algae with intricate glass-like silica shells.',
    badge: 'Algae',
    badgeColor: 'text-teal-400 bg-teal-500/10 border-teal-500/20',
  },
  {
    id: 'snowflake',
    titleId: 'home-feat-snowflake-title',
    descId: 'home-feat-snowflake-desc',
    imgId: 'home-feat-snowflake-img-j1k2l3',
    title: 'Snowflake Crystals',
    desc: 'Every snowflake is a unique hexagonal masterpiece of ice.',
    badge: 'Crystal',
    badgeColor: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
  },
];

export default function HomeFeatured() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28 max-w-7xl mx-auto px-4 md:px-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
        <div>
          <span className="text-teal-400 text-sm font-medium uppercase tracking-widest">Featured</span>
          <h2 id="home-featured-title" className="text-4xl md:text-5xl font-bold text-white mt-2">
            Wonders of the Small
          </h2>
        </div>
        <Link
          to="/explore"
          className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 text-sm font-medium transition-colors"
        >
          See all categories <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featuredItems.map((item) => (
          <article
            key={item.id}
            className="group bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-teal-500/40 transition-all duration-300"
          >
            <div className="relative overflow-hidden aspect-[4/3]">
              <img
                alt={item.title}
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.descId}] [${item.titleId}] [home-featured-title]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
            </div>
            <div className="p-6">
              <span className={`inline-block text-xs font-medium px-3 py-1 rounded-full border mb-3 ${item.badgeColor}`}>
                {item.badge}
              </span>
              <h3 id={item.titleId} className="text-xl font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p id={item.descId} className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
