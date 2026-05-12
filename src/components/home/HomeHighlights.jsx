import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Eye, Atom } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const highlights = [
  {
    icon:        Atom,
    title:       'Nuclear Fusion',
    description: 'Stars are thermonuclear reactors — hydrogen fuses into helium, releasing energy via E=mc². This process powers every star for billions of years.',
    imgId:       'highlight-img-fusion-3b7c1e',
    imgQuery:    '[highlight-fusion-desc] [highlight-fusion-title]',
    titleId:     'highlight-fusion-title',
    descId:      'highlight-fusion-desc',
  },
  {
    icon:        Eye,
    title:       'Electromagnetic Spectrum',
    description: 'Visible light is just 0.0035% of the EM spectrum. Radio waves, X-rays, and infrared reveal structures invisible to the naked eye.',
    imgId:       'highlight-img-spectrum-8d2f4a',
    imgQuery:    '[highlight-spectrum-desc] [highlight-spectrum-title]',
    titleId:     'highlight-spectrum-title',
    descId:      'highlight-spectrum-desc',
  },
  {
    icon:        Zap,
    title:       'Gravitational Waves',
    description: 'Ripples in spacetime caused by colliding black holes or neutron stars — detected by LIGO, confirming Einstein\'s General Relativity.',
    imgId:       'highlight-img-gravity-5e9a3c',
    imgQuery:    '[highlight-gravity-desc] [highlight-gravity-title]',
    titleId:     'highlight-gravity-title',
    descId:      'highlight-gravity-desc',
  },
];

export default function HomeHighlights() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section ref={containerRef} className="bg-cosmos-void py-20 md:py-28 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-px bg-amber-glow" />
              <span className="text-xs font-semibold uppercase tracking-widest text-amber-glow">
                Core Physics Concepts
              </span>
            </div>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-star-white">
              The Science Behind the Stars
            </h2>
          </div>
          <Link
            to="/knowledge"
            className="group flex items-center gap-2 text-sm font-semibold text-amber-glow hover:text-amber-bright transition-colors duration-300 shrink-0"
          >
            Full Knowledge Hub
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>

        {/* Highlights grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group bg-cosmos-surface border border-cosmos-border hover:border-amber-glow/30 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 shadow-card-cosmos"
              >
                {/* Image */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    data-strk-img-id={item.imgId}
                    data-strk-img={item.imgQuery}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                  <div className="absolute inset-0 img-overlay-bottom" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-amber-glow/10 border border-amber-glow/20 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-amber-glow" />
                    </div>
                    <h3
                      id={item.titleId}
                      className="font-display font-semibold text-lg text-star-white"
                    >
                      {item.title}
                    </h3>
                  </div>
                  <p
                    id={item.descId}
                    className="text-sm text-cosmos-subtle leading-relaxed"
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
