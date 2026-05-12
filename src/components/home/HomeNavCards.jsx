import { Link } from 'react-router-dom';
import { Compass, Atom, Eye, Image, ArrowRight } from 'lucide-react';

const cards = [
  {
    icon: Compass,
    label: 'Section A',
    title: 'Constellations & Coordinates',
    description:
      'Learn how astronomers map the celestial sphere using Right Ascension and Declination — the GPS of the night sky.',
    path: '/knowledge#constellations',
    accent: 'text-amber',
    border: 'hover:border-amber/40',
    bg: 'hover:bg-amber/5',
    glow: 'hover:shadow-amber/10',
  },
  {
    icon: Atom,
    label: 'Section B',
    title: 'Stellar Evolution',
    description:
      'Trace the life cycle of stars from swirling nebulae to brilliant supernovae, white dwarfs, and the enigmatic black hole.',
    path: '/knowledge#stellar-evolution',
    accent: 'text-aurora',
    border: 'hover:border-aurora/40',
    bg: 'hover:bg-aurora/5',
    glow: 'hover:shadow-aurora/10',
  },
  {
    icon: Eye,
    label: 'Section C',
    title: 'Observational Physics',
    description:
      'Discover how telescopes across the electromagnetic spectrum — from radio waves to gamma rays — reveal the invisible universe.',
    path: '/knowledge#observational',
    accent: 'text-nebula-pink',
    border: 'hover:border-nebula-pink/40',
    bg: 'hover:bg-nebula-pink/5',
    glow: 'hover:shadow-nebula-pink/10',
  },
  {
    icon: Image,
    label: 'Gallery',
    title: 'Sky Gallery',
    description:
      'A curated collection of auroras, eclipses, and deep sky objects — each image a window into the physics of light and matter.',
    path: '/gallery',
    accent: 'text-amber',
    border: 'hover:border-amber/40',
    bg: 'hover:bg-amber/5',
    glow: 'hover:shadow-amber/10',
  },
];

export default function HomeNavCards() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-void">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="text-xs font-medium tracking-widest uppercase text-amber">
            What You'll Discover
          </span>
          <div className="section-divider mt-4 mb-6" />
          <h2 className="font-serif font-light text-3xl md:text-4xl text-star tracking-wide">
            Your Guide to the Cosmos
          </h2>
          <p className="text-muted text-base mt-4 max-w-xl mx-auto leading-relaxed">
            Four carefully crafted sections to take you from the basics of sky mapping to the frontiers of modern observational astronomy.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <Link
                key={card.title}
                to={card.path}
                className={`group relative bg-nebula rounded-2xl border border-subtle p-8 md:p-10 transition-all duration-300 ${card.border} ${card.bg} hover:shadow-xl ${card.glow} hover:scale-[1.01]`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-surface flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-5 h-5 ${card.accent}`} />
                </div>

                {/* Label */}
                <span className={`text-xs font-medium tracking-widest uppercase ${card.accent} mb-2 block`}>
                  {card.label}
                </span>

                {/* Title */}
                <h3 className="font-sans text-xl font-semibold text-star mb-3 tracking-tight">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-muted text-sm leading-relaxed mb-6">
                  {card.description}
                </p>

                {/* Arrow */}
                <div className={`flex items-center gap-2 text-sm font-medium ${card.accent} group-hover:gap-3 transition-all duration-300`}>
                  <span>Explore</span>
                  <ArrowRight className="w-4 h-4" />
                </div>

                {/* Corner decoration */}
                <div className="absolute top-6 right-6 w-16 h-16 rounded-full bg-gradient-to-br from-white/2 to-transparent pointer-events-none" />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
