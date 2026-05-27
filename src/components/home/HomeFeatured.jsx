import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Link } from 'react-router-dom';

const creatures = [
  {
    id: 'tardigrade',
    name: 'Tardigrade',
    nickname: 'Water Bear',
    description:
      'The toughest animal on Earth. Tardigrades survive extreme radiation, the vacuum of space, and temperatures from -272°C to 150°C.',
    tag: 'Extremophile',
    imgId: 'feat-img-mc002',
  },
  {
    id: 'diatom',
    name: 'Diatom',
    nickname: 'Glass Algae',
    description:
      'Single-celled algae encased in intricate silica shells. Diatoms produce 20% of Earth\'s oxygen and form stunning geometric patterns.',
    tag: 'Microalgae',
    imgId: 'feat-img-mc003',
  },
  {
    id: 'rotifer',
    name: 'Rotifer',
    nickname: 'Wheel Animal',
    description:
      'Named for their spinning crown of cilia, rotifers are microscopic predators that hunt bacteria and algae in freshwater environments.',
    tag: 'Microanimal',
    imgId: 'feat-img-mc004',
  },
];

const HomeFeatured = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="featured" ref={containerRef} className="py-24 px-4 md:px-8 bg-cosmos-bg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-heading font-medium uppercase tracking-widest text-cosmos-primary mb-3">
            Featured Organisms
          </p>
          <h2
            id="featured-title"
            className="font-heading font-bold text-3xl md:text-5xl text-slate-50 mb-4"
          >
            Meet the Inhabitants
          </h2>
          <p className="font-body text-slate-400 max-w-xl mx-auto text-base md:text-lg">
            Extraordinary creatures that share our world, invisible to the naked eye yet vital to all life on Earth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {creatures.map((c) => (
            <div
              key={c.id}
              className="group bg-cosmos-card border border-cosmos-border rounded-2xl overflow-hidden hover:border-cosmos-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,212,170,0.1)]"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  alt={c.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-strk-img-id={c.imgId}
                  data-strk-img={`[${c.id}-desc] [${c.id}-name] [featured-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cosmos-card/80 to-transparent" />
                <span className="absolute top-3 left-3 bg-cosmos-primary/10 text-cosmos-primary border border-cosmos-primary/30 rounded-full px-3 py-1 text-xs font-heading font-medium uppercase tracking-widest">
                  {c.tag}
                </span>
              </div>
              <div className="p-6">
                <p className="text-xs text-slate-500 font-body uppercase tracking-widest mb-1">{c.nickname}</p>
                <h3 id={`${c.id}-name`} className="font-heading font-semibold text-xl text-slate-50 mb-2">
                  {c.name}
                </h3>
                <p id={`${c.id}-desc`} className="font-body text-sm text-slate-400 leading-relaxed">
                  {c.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/explore"
            className="inline-flex items-center gap-2 border border-cosmos-border text-slate-200 font-heading font-medium px-8 py-3 rounded-full hover:border-cosmos-primary hover:text-cosmos-primary transition-colors duration-200"
          >
            View Full Gallery →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeFeatured;
