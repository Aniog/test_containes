import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Star, Telescope } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const sections = [
  {
    icon: BookOpen,
    label: 'Section A',
    title: 'Constellations & Coordinate Systems',
    desc: 'Learn how astronomers map the celestial sphere using Right Ascension and Declination.',
    path: '/knowledge/constellations',
    accent: 'text-amber-400',
    bg: 'bg-amber-400/10',
  },
  {
    icon: Star,
    label: 'Section B',
    title: 'Stellar Evolution',
    desc: 'Trace the life cycle of stars from molecular clouds to their spectacular final stages.',
    path: '/knowledge/stellar-evolution',
    accent: 'text-indigo-400',
    bg: 'bg-indigo-400/10',
  },
  {
    icon: Telescope,
    label: 'Section C',
    title: 'Observational Physics',
    desc: 'Discover how telescopes and the electromagnetic spectrum unlock the secrets of the cosmos.',
    path: '/knowledge/observational-physics',
    accent: 'text-teal-400',
    bg: 'bg-teal-400/10',
  },
];

export default function KnowledgeHub() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <div ref={containerRef} className="bg-space-950 pt-24">
      {/* Header */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-20 text-center">
        <p className="section-label mb-4">Educational Resource</p>
        <h1 className="font-serif text-5xl md:text-6xl font-light text-star-silver mb-6">
          Knowledge Hub
        </h1>
        <div className="amber-divider mx-auto" />
        <p className="text-slate-400 text-lg max-w-2xl mx-auto mt-6 leading-relaxed">
          Three carefully curated sections to guide you through the fundamental
          concepts of observational astronomy and astrophysics.
        </p>
      </section>

      {/* Section Cards */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sections.map((s, i) => {
            const Icon = s.icon;
            return (
              <Link
                key={s.path}
                to={s.path}
                className="glass-card rounded-2xl overflow-hidden group block"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    data-strk-img-id={`knowledge-hub-${i}-img-9f3a`}
                    data-strk-img={`[knowledge-hub-${i}-desc] [knowledge-hub-${i}-title]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-space-950 via-space-950/40 to-transparent" />
                  <div className={`absolute top-4 left-4 p-2.5 rounded-xl ${s.bg} ${s.accent}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-7">
                  <p className="section-label mb-2">{s.label}</p>
                  <h3
                    id={`knowledge-hub-${i}-title`}
                    className="font-serif text-xl font-light text-star-silver mb-3 group-hover:text-amber-400 transition-colors"
                  >
                    {s.title}
                  </h3>
                  <p
                    id={`knowledge-hub-${i}-desc`}
                    className="text-slate-400 text-sm leading-relaxed mb-5"
                  >
                    {s.desc}
                  </p>
                  <div className={`flex items-center gap-2 text-sm font-medium ${s.accent}`}>
                    Explore Section
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
