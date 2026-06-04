import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const featured = [
  {
    id: 'tardigrade',
    titleId: 'feat-tardigrade-title',
    descId: 'feat-tardigrade-desc',
    imgId: 'feat-img-tardigrade-a1b2',
    title: 'Tardigrades',
    desc: 'The indestructible "water bears" that survive in outer space, extreme radiation, and boiling water.',
    tag: 'Extremophile',
    tagColor: 'text-amber-400 bg-amber-400/10 border-amber-400/30',
  },
  {
    id: 'bioluminescent',
    titleId: 'feat-bioluminescent-title',
    descId: 'feat-bioluminescent-desc',
    imgId: 'feat-img-bioluminescent-c3d4',
    title: 'Bioluminescent Bacteria',
    desc: 'Glowing microbes that light up ocean waves and deep-sea creatures with their natural blue-green light.',
    tag: 'Bacteria',
    tagColor: 'text-teal-400 bg-teal-400/10 border-teal-400/30',
  },
  {
    id: 'mycelium',
    titleId: 'feat-mycelium-title',
    descId: 'feat-mycelium-desc',
    imgId: 'feat-img-mycelium-e5f6',
    title: 'Mycelium Networks',
    desc: "The underground fungal internet connecting forests — sharing nutrients and chemical signals across miles.",
    tag: 'Fungi',
    tagColor: 'text-violet-400 bg-violet-400/10 border-violet-400/30',
  },
];

const FeaturedSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-6" style={{ backgroundColor: '#0a0e1a' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-teal-400 text-sm font-semibold uppercase tracking-widest">Featured</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mt-3 mb-4">
            Remarkable Microorganisms
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            From indestructible extremophiles to glowing ocean bacteria — the microbial world never ceases to amaze.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((item) => (
            <article
              key={item.id}
              className="group bg-slate-800/60 border border-slate-700/50 rounded-2xl overflow-hidden hover:border-teal-500/50 hover:bg-slate-800/80 transition-all duration-300 shadow-lg"
            >
              <div className="relative overflow-hidden h-52">
                <img
                  alt={item.title}
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[${item.descId}] [${item.titleId}]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
              </div>
              <div className="p-6">
                <span className={`text-xs font-medium px-3 py-1 rounded-full border ${item.tagColor} mb-3 inline-block`}>
                  {item.tag}
                </span>
                <h3 id={item.titleId} className="text-slate-100 font-semibold text-xl mb-2">{item.title}</h3>
                <p id={item.descId} className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/explore"
            className="inline-flex items-center gap-2 border border-teal-500/50 text-teal-400 hover:bg-teal-500/10 font-medium px-6 py-3 rounded-xl transition-all duration-200"
          >
            View All Organisms
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
