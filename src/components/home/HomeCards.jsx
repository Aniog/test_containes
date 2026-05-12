import { NavLink } from 'react-router-dom';
import { Compass, Layers, Eye, MessageCircle, ArrowRight } from 'lucide-react';

const cards = [
  {
    to: '/knowledge#constellations',
    icon: Compass,
    label: 'Constellations',
    title: 'Mapping the Sky',
    description:
      'Discover how astronomers use celestial coordinates to chart the heavens — from right ascension to declination.',
    accent: 'aurora',
  },
  {
    to: '/knowledge#stellar-evolution',
    icon: Layers,
    label: 'Stellar Evolution',
    title: 'Life of a Star',
    description:
      'Follow the dramatic journey of stars — from swirling nebulae to brilliant supernovae and the mystery of black holes.',
    accent: 'amber-star',
  },
  {
    to: '/knowledge#observational',
    icon: Eye,
    label: 'Observational Physics',
    title: 'Light & Telescopes',
    description:
      'Understand how telescopes capture light across the electromagnetic spectrum to reveal the invisible universe.',
    accent: 'aurora',
  },
  {
    to: '/contact',
    icon: MessageCircle,
    label: 'Feedback',
    title: 'Ask Your Teacher',
    description:
      'Have a question about the cosmos? Submit your thoughts and curiosities directly to your physics teacher.',
    accent: 'amber-star',
  },
];

export default function HomeCards() {
  return (
    <section className="py-20 md:py-28 bg-cosmos">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <div className="text-center mb-14 space-y-3">
          <p className="font-inter text-xs uppercase tracking-widest text-aurora">
            Knowledge Sections
          </p>
          <h2 className="font-cormorant text-3xl md:text-4xl font-light text-moonlight">
            Where Would You Like to Begin?
          </h2>
          <p className="font-inter text-sm text-comet max-w-md mx-auto">
            Each section is a doorway into a different dimension of astronomical understanding.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map(({ to, icon: Icon, label, title, description, accent }) => (
            <NavLink
              key={to}
              to={to}
              className="group relative bg-deep-space border border-stardust/60 rounded-xl p-6 md:p-7 flex flex-col gap-4 hover:border-aurora/40 hover:shadow-aurora transition-all duration-300"
            >
              {/* Icon */}
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                accent === 'aurora' ? 'bg-aurora/10' : 'bg-amber-star/10'
              }`}>
                <Icon className={`w-5 h-5 ${accent === 'aurora' ? 'text-aurora' : 'text-amber-star'}`} />
              </div>

              {/* Label */}
              <p className="font-inter text-xs uppercase tracking-widest text-horizon">{label}</p>

              {/* Title */}
              <h3 className="font-cormorant text-xl font-medium text-moonlight leading-snug">
                {title}
              </h3>

              {/* Description */}
              <p className="font-inter text-sm text-comet leading-relaxed flex-1">
                {description}
              </p>

              {/* Arrow */}
              <div className="flex items-center gap-1 text-aurora text-sm font-inter group-hover:gap-2 transition-all duration-200">
                Explore <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </section>
  );
}
