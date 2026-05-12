import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Grid3X3, MessageCircle } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const entries = [
  {
    id:          'entry-knowledge',
    path:        '/knowledge',
    icon:        BookOpen,
    label:       'Knowledge Hub',
    title:       'The Physics of Stars',
    description: 'Dive into celestial coordinates, stellar evolution from nebula to black hole, and how the James Webb Space Telescope reveals the invisible universe.',
    imgId:       'entry-img-knowledge-4a8b1d',
    imgQuery:    '[entry-knowledge-desc] [entry-knowledge-title]',
    accent:      'from-amber-glow/20 to-transparent',
    border:      'hover:border-amber-glow/40',
  },
  {
    id:          'entry-gallery',
    path:        '/gallery',
    icon:        Grid3X3,
    label:       'Exploration Gallery',
    title:       'Wonders of the Night Sky',
    description: 'A curated collection of auroras, solar eclipses, and deep-sky objects — each with a Physics Insight explaining the science behind the spectacle.',
    imgId:       'entry-img-gallery-9c3e7f',
    imgQuery:    '[entry-gallery-desc] [entry-gallery-title]',
    accent:      'from-star-blue/20 to-transparent',
    border:      'hover:border-star-blue/40',
  },
  {
    id:          'entry-contact',
    path:        '/contact',
    icon:        MessageCircle,
    label:       'Student Questions',
    title:       'Ask Your Physics Teacher',
    description: 'Have a question about the cosmos? Submit it directly to your Physics teacher and join the conversation about the universe.',
    imgId:       'entry-img-contact-2d5f9a',
    imgQuery:    '[entry-contact-desc] [entry-contact-title]',
    accent:      'from-star-purple/20 to-transparent',
    border:      'hover:border-star-purple/40',
  },
];

export default function HomeEntryCards() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section ref={containerRef} className="bg-cosmos-deep py-20 md:py-28 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-amber-glow" />
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-glow">
              Your Learning Journey
            </span>
            <div className="w-8 h-px bg-amber-glow" />
          </div>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-star-white mb-4">
            Where Would You Like to Begin?
          </h2>
          <p className="text-cosmos-subtle max-w-xl mx-auto text-base leading-relaxed">
            Three pathways into the physics of the cosmos — choose your entry point and start exploring.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {entries.map((entry) => {
            const Icon = entry.icon;
            return (
              <Link
                key={entry.id}
                to={entry.path}
                className={`group relative bg-cosmos-card border border-cosmos-border ${entry.border} rounded-2xl overflow-hidden shadow-card-cosmos transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)] flex flex-col`}
              >
                {/* Image area */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  {/* Image — each card has a specific astronomical subject */}
                  <img
                    alt={entry.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    data-strk-img-id={entry.imgId}
                    data-strk-img={entry.imgQuery}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 img-overlay-bottom" />
                  {/* Label badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-cosmos-void/70 backdrop-blur-sm border border-cosmos-border/60">
                    <Icon className="w-3.5 h-3.5 text-amber-glow" />
                    <span className="text-xs font-semibold text-cosmos-text uppercase tracking-wider">
                      {entry.label}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3
                    id={`${entry.id}-title`}
                    className="font-display font-bold text-xl text-star-white mb-3 group-hover:text-amber-glow transition-colors duration-300"
                  >
                    {entry.title}
                  </h3>
                  <p
                    id={`${entry.id}-desc`}
                    className="text-sm text-cosmos-subtle leading-relaxed flex-1"
                  >
                    {entry.description}
                  </p>
                  <div className="flex items-center gap-2 mt-5 text-sm font-semibold text-amber-glow group-hover:gap-3 transition-all duration-300">
                    Explore
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Gradient accent at bottom */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${entry.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
