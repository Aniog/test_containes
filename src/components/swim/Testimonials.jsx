import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah M.',
    role: 'Competitive Swimmer',
    text: 'The Racing Goggles Pro are the best I\'ve ever used. Zero leakage, crystal clear vision, and they stayed on perfectly during my last competition.',
    rating: 5,
    initials: 'SM',
  },
  {
    name: 'James T.',
    role: 'Swim Coach',
    text: 'I recommend SwimGear to all my athletes. The training equipment is top quality and the customer service is outstanding.',
    rating: 5,
    initials: 'JT',
  },
  {
    name: 'Priya K.',
    role: 'Triathlete',
    text: 'The silicone swim cap and pull buoy have become essential parts of my training. Great products at fair prices.',
    rating: 4,
    initials: 'PK',
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <span className="inline-block bg-cyan-100 text-cyan-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            Reviews
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-sky-900 mb-4">
            What Swimmers Are Saying
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto">
            Trusted by thousands of swimmers around the world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-sky-50 rounded-2xl p-6 border border-sky-100 flex flex-col"
            >
              <div className="flex gap-0.5 mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i <= t.rating ? 'text-amber-400 fill-amber-400' : 'text-slate-200 fill-slate-200'}`}
                  />
                ))}
              </div>
              <p className="text-slate-600 text-sm leading-relaxed flex-1 mb-6">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-sky-700 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-sky-900 text-sm">{t.name}</div>
                  <div className="text-slate-400 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
