import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, Layers, Radio, Image } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const cards = [
  {
    id: 'card-constellations',
    path: '/knowledge#constellations',
    icon: Compass,
    label: 'Section A',
    title: 'Constellations & Coordinates',
    titleId: 'card-constellations-title',
    descId: 'card-constellations-desc',
    description: 'Map the celestial sphere using Right Ascension and Declination — the GPS of the night sky.',
    imgId: 'home-card-constellations-8f2a9c',
    accent: 'indigo',
  },
  {
    id: 'card-stellar',
    path: '/knowledge#stellar-evolution',
    icon: Layers,
    label: 'Section B',
    title: 'Stellar Evolution',
    titleId: 'card-stellar-title',
    descId: 'card-stellar-desc',
    description: 'Follow a star from nebula to supernova — the nuclear and gravitational forces that shape cosmic life.',
    imgId: 'home-card-stellar-3b7d1e',
    accent: 'amber',
  },
  {
    id: 'card-wavelengths',
    path: '/knowledge#wavelengths',
    icon: Radio,
    label: 'Section C',
    title: 'Observational Physics',
    titleId: 'card-wavelengths-title',
    descId: 'card-wavelengths-desc',
    description: 'From gamma rays to radio waves — how different telescopes reveal the invisible universe.',
    imgId: 'home-card-wavelengths-5c9f4a',
    accent: 'cyan',
  },
  {
    id: 'card-gallery',
    path: '/gallery',
    icon: Image,
    label: 'Gallery',
    title: 'Sky Gallery & Phenomena',
    titleId: 'card-gallery-title',
    descId: 'card-gallery-desc',
    description: 'Auroras, eclipses, deep-sky objects — stunning visuals paired with the physics behind each phenomenon.',
    imgId: 'home-card-gallery-2e6b8d',
    accent: 'rose',
  },
];

const accentMap = {
  indigo: { border: 'border-indigo-500/30', text: 'text-indigo-400', bg: 'bg-indigo-500/10', hover: 'hover:border-indigo-400/50' },
  amber: { border: 'border-amber-500/30', text: 'text-amber-400', bg: 'bg-amber-500/10', hover: 'hover:border-amber-400/50' },
  cyan: { border: 'border-cyan-500/30', text: 'text-cyan-400', bg: 'bg-cyan-500/10', hover: 'hover:border-cyan-400/50' },
  rose: { border: 'border-rose-500/30', text: 'text-rose-400', bg: 'bg-rose-500/10', hover: 'hover:border-rose-400/50' },
};

export default function HomeNavCards() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-6 md:px-12 lg:px-24 bg-[#0B0F19]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest text-amber-400">Curriculum</span>
          <h2 className="text-4xl md:text-5xl font-light text-white mt-3 mb-4">
            Your Learning Journey
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto leading-relaxed">
            Four carefully crafted modules that bridge the beauty of the night sky with the rigour of physics.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card) => {
            const accent = accentMap[card.accent];
            const Icon = card.icon;
            return (
              <Link
                key={card.id}
                to={card.path}
                className={`group relative bg-[#111827] border ${accent.border} ${accent.hover} rounded-2xl overflow-hidden transition-all duration-400 hover:shadow-[0_0_40px_rgba(99,102,241,0.1)]`}
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    data-strk-img-id={card.imgId}
                    data-strk-img={`[${card.descId}] [${card.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/40 to-transparent" />
                  <div className={`absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full ${accent.bg} border ${accent.border}`}>
                    <Icon className={`w-3.5 h-3.5 ${accent.text}`} />
                    <span className={`text-xs font-medium ${accent.text}`}>{card.label}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 id={card.titleId} className="text-xl font-medium text-white mb-2 group-hover:text-amber-400 transition-colors duration-300">
                    {card.title}
                  </h3>
                  <p id={card.descId} className="text-gray-400 text-sm leading-relaxed mb-4">
                    {card.description}
                  </p>
                  <div className={`flex items-center gap-2 text-sm ${accent.text} font-medium`}>
                    Explore Module
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
