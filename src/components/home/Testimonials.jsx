import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Isabelle Fontaine',
    title: 'Art Collector, Paris',
    destination: 'Steampunk Albion',
    rating: 5,
    quote:
      'I have traveled to every corner of this world, but nothing — nothing — prepared me for the sight of a thousand brass airships at sunset over the Albion skyline. Nexus Voyages delivered a dream I didn\'t know I had.',
    accentColor: 'text-orange-400',
  },
  {
    id: 2,
    name: 'Kenji Murakami',
    title: 'Tech Entrepreneur, Tokyo',
    destination: 'Neon Megacity IX',
    rating: 5,
    quote:
      'As someone who builds the future for a living, I was skeptical. But Megacity IX made everything I\'ve ever imagined look primitive. The neural art gallery alone was worth the entire journey.',
    accentColor: 'text-cyan-400',
  },
  {
    id: 3,
    name: 'Dr. Amara Osei',
    title: 'Anthropologist, Accra',
    destination: 'Terra Prima',
    rating: 5,
    quote:
      'Witnessing the first great civilization — not through artifacts, but in living, breathing reality — was the most profound experience of my professional and personal life. I wept at the crystal temples.',
    accentColor: 'text-emerald-400',
  },
  {
    id: 4,
    name: 'Marcus & Elena Voss',
    title: 'Honeymooners, Vienna',
    destination: 'Aqua Infinitum',
    rating: 5,
    quote:
      'We spent our honeymoon in an underwater glass suite watching bioluminescent creatures drift past. We have no words. Only gratitude. Nexus Voyages gave us a memory that will last several lifetimes.',
    accentColor: 'text-blue-400',
  },
];

function StarRating({ count }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 text-gold fill-gold" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-28 px-6 md:px-12 lg:px-24 bg-space-black relative overflow-hidden">
      {/* Decorative orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-violet-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-700/40 bg-purple-900/20 mb-6">
            <span className="font-inter text-xs font-semibold text-purple-300 tracking-[0.2em] uppercase">
              Traveler Accounts
            </span>
          </div>
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-mist mb-5">
            Voices from <span className="text-gold">Other Worlds</span>
          </h2>
          <p className="font-inter text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Our travelers return changed. Here are their stories.
          </p>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-purple-700/60 to-transparent mb-16" />

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="p-8 rounded-2xl border border-purple-900/40 bg-void-dark hover:border-purple-700/60 transition-all duration-300 group relative"
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-purple-700/40 mb-4" />

              {/* Quote text */}
              <p className="font-inter text-gray-300 leading-relaxed text-base mb-6 italic">
                "{t.quote}"
              </p>

              {/* Rating */}
              <StarRating count={t.rating} />

              {/* Author */}
              <div className="mt-5 pt-5 border-t border-white/5 flex items-center justify-between">
                <div>
                  <div className="font-cinzel text-base font-semibold text-mist">{t.name}</div>
                  <div className="font-inter text-xs text-gray-500 mt-0.5">{t.title}</div>
                </div>
                <div className={`font-inter text-xs font-semibold ${t.accentColor} tracking-wider uppercase px-3 py-1 rounded-full bg-white/5 border border-white/10`}>
                  {t.destination}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          {[
            { value: '4.98 / 5', label: 'Average Rating' },
            { value: '12,400+', label: 'Verified Reviews' },
            { value: '100%', label: 'Would Travel Again' },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <div className="font-cinzel text-3xl font-bold text-gold">{item.value}</div>
              <div className="font-inter text-xs text-gray-500 tracking-wider uppercase mt-1">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
