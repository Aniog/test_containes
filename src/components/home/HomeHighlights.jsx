import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Link } from 'react-router-dom';

const highlights = [
  {
    id: 'hl-amoeba',
    title: 'Amoeba',
    subtitle: 'Shape-shifting predator',
    imgId: 'hl-img-mc008',
  },
  {
    id: 'hl-paramecium',
    title: 'Paramecium',
    subtitle: 'Ciliated swimmer',
    imgId: 'hl-img-mc009',
  },
  {
    id: 'hl-vorticella',
    title: 'Vorticella',
    subtitle: 'Bell-shaped filter feeder',
    imgId: 'hl-img-mc010',
  },
  {
    id: 'hl-nematode',
    title: 'Nematode',
    subtitle: 'Microscopic roundworm',
    imgId: 'hl-img-mc011',
  },
  {
    id: 'hl-radiolaria',
    title: 'Radiolaria',
    subtitle: 'Silica skeleton builder',
    imgId: 'hl-img-mc012',
  },
  {
    id: 'hl-copepod',
    title: 'Copepod',
    subtitle: 'Ocean\'s tiny giant',
    imgId: 'hl-img-mc013',
  },
];

const HomeHighlights = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-4 md:px-8 bg-cosmos-bg">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <p className="text-xs font-heading font-medium uppercase tracking-widest text-cosmos-primary mb-3">
              Micro Gallery
            </p>
            <h2
              id="highlights-title"
              className="font-heading font-bold text-3xl md:text-5xl text-slate-50"
            >
              More Tiny Wonders
            </h2>
          </div>
          <Link
            to="/explore"
            className="text-cosmos-primary font-heading font-medium text-sm hover:text-cyan-400 transition-colors whitespace-nowrap"
          >
            See all organisms →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {highlights.map((h) => (
            <div
              key={h.id}
              className="group relative rounded-2xl overflow-hidden aspect-square cursor-pointer"
            >
              <img
                alt={h.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                data-strk-img-id={h.imgId}
                data-strk-img={`[${h.id}-sub] [${h.id}-name] [highlights-title]`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="500"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cosmos-bg/90 via-cosmos-bg/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h3 id={`${h.id}-name`} className="font-heading font-semibold text-slate-50 text-base">
                  {h.title}
                </h3>
                <p id={`${h.id}-sub`} className="font-body text-xs text-cosmos-primary mt-0.5">
                  {h.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeHighlights;
