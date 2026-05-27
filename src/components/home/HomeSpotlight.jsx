import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const spotlightItems = [
  {
    id: 'spot-1',
    tag: 'Bacteria',
    title: 'E. coli Under the Microscope',
    desc: 'The rod-shaped bacterium that lives in our gut — and occasionally causes chaos.',
    imgId: 'spotlight-ecoli-4f5g6h',
  },
  {
    id: 'spot-2',
    tag: 'Cells',
    title: 'The Dance of Mitosis',
    desc: 'Watch a single cell divide into two — the fundamental act of life itself.',
    imgId: 'spotlight-mitosis-7i8j9k',
  },
  {
    id: 'spot-3',
    tag: 'Crystals',
    title: 'Snowflake Architecture',
    desc: 'No two are alike. The geometric perfection of ice crystals at 200x magnification.',
    imgId: 'spotlight-snowflake-1l2m3n',
  },
];

const HomeSpotlight = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-microsurface/40">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <p className="text-microteal text-sm font-semibold uppercase tracking-widest mb-3">
              Editor's picks
            </p>
            <h2 id="spotlight-heading" className="font-display font-bold text-3xl md:text-5xl text-microtext">
              In the Spotlight
            </h2>
          </div>
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 text-microteal font-medium hover:text-microglow transition-colors shrink-0"
          >
            View all <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {spotlightItems.map((item) => (
            <article
              key={item.id}
              className="group bg-microsurface border border-microborder rounded-2xl overflow-hidden hover:border-microteal/40 hover:shadow-xl hover:shadow-microteal/10 transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[${item.id}-desc] [${item.id}-title] [spotlight-heading]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-microsurface to-transparent" />
                <span className="absolute top-4 left-4 bg-microteal/20 border border-microteal/40 text-microteal text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
                  {item.tag}
                </span>
              </div>
              <div className="p-6">
                <h3 id={`${item.id}-title`} className="font-display font-semibold text-lg text-microtext mb-2 leading-snug">
                  {item.title}
                </h3>
                <p id={`${item.id}-desc`} className="text-micromuted text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeSpotlight;
