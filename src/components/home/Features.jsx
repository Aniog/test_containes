import { Shield, Gem, Clock, Headphones, Map, Star } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Quantum Safety Protocol',
    description:
      'Our proprietary QSP-9 technology ensures a 99.8% safe return rate. Every traveler is equipped with a personal reality anchor and emergency recall beacon.',
    color: 'text-emerald-400',
    bg: 'bg-emerald-900/20',
    border: 'border-emerald-700/30',
  },
  {
    icon: Gem,
    title: 'Uncompromising Luxury',
    description:
      'From zero-gravity spa suites to bioluminescent dining rooms, every touchpoint is curated to the highest standard of interdimensional hospitality.',
    color: 'text-gold',
    bg: 'bg-yellow-900/20',
    border: 'border-yellow-700/30',
  },
  {
    icon: Clock,
    title: 'Temporal Precision',
    description:
      'Arrive and depart at the exact moment you choose. Our chrono-navigation team ensures you never miss a moment — or return a second late.',
    color: 'text-cyan-400',
    bg: 'bg-cyan-900/20',
    border: 'border-cyan-700/30',
  },
  {
    icon: Headphones,
    title: '24/7 Reality Concierge',
    description:
      'Our interdimensional concierge team is available across all timelines. Whether you need a reservation or an emergency extraction, we are always reachable.',
    color: 'text-emerald-400',
    bg: 'bg-emerald-900/20',
    border: 'border-emerald-700/30',
  },
  {
    icon: Map,
    title: 'Exclusive Access',
    description:
      'Nexus Voyages holds the only licensed portal network to 47 mapped realities. Our destinations are inaccessible by any other means — truly exclusive.',
    color: 'text-orange-400',
    bg: 'bg-orange-900/20',
    border: 'border-orange-700/30',
  },
  {
    icon: Star,
    title: 'Bespoke Itineraries',
    description:
      'No two journeys are alike. Our reality architects craft fully personalized experiences tailored to your desires, curiosities, and comfort level.',
    color: 'text-pink-400',
    bg: 'bg-pink-900/20',
    border: 'border-pink-700/30',
  },
];

export default function Features() {
  return (
    <section id="experiences" className="py-28 px-6 md:px-12 lg:px-24 bg-void-dark relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/10 mb-6">
            <span className="font-inter text-xs font-semibold text-gold tracking-[0.2em] uppercase">
              The Nexus Difference
            </span>
          </div>
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-mist mb-5">
            Why Travel <span className="text-gold">Beyond</span>
          </h2>
          <p className="font-inter text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            We don't just offer vacations. We offer transformative encounters with realities
            that will permanently expand your understanding of what is possible.
          </p>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent mb-16" />

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.title}
                className={`p-7 rounded-2xl border ${feat.border} ${feat.bg} hover:scale-[1.02] transition-transform duration-300 group`}
              >
                <div className={`w-12 h-12 rounded-xl ${feat.bg} border ${feat.border} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-6 h-6 ${feat.color}`} />
                </div>
                <h3 className={`font-cinzel text-lg font-semibold ${feat.color} mb-3`}>
                  {feat.title}
                </h3>
                <p className="font-inter text-sm text-gray-400 leading-relaxed">
                  {feat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
