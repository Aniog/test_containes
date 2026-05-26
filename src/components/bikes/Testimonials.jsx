import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 't1',
    name: 'Marcus Chen',
    role: 'Amateur Road Racer',
    rating: 5,
    text: 'The Apex Carbon Pro completely transformed my training. The stiffness-to-weight ratio is incredible — I shaved 4 minutes off my best time on the local climb.',
    initials: 'MC',
  },
  {
    id: 't2',
    name: 'Sarah Okonkwo',
    role: 'Daily Commuter',
    rating: 5,
    text: 'I switched from driving to the Metro Cruiser six months ago. Best decision ever. I arrive at work energized, and I\'ve saved a fortune on fuel and parking.',
    initials: 'SO',
  },
  {
    id: 't3',
    name: 'Jake Rivera',
    role: 'Trail Enthusiast',
    rating: 5,
    text: 'The TrailBlazer X9 handles everything I throw at it. Steep descents, technical rock gardens, muddy switchbacks — it just eats it all up. Absolutely love it.',
    initials: 'JR',
  },
  {
    id: 't4',
    name: 'Priya Sharma',
    role: 'Weekend Explorer',
    rating: 5,
    text: 'The UrbanFlow E5 is a game-changer. I can now join my friends on longer rides without worrying about keeping up. The battery range is genuinely impressive.',
    initials: 'PS',
  },
];

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star key={i} className={`w-4 h-4 ${i <= rating ? 'text-orange-500 fill-orange-500' : 'text-neutral-600'}`} />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="reviews" className="bg-[#1a1a1a] py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-orange-500">Rider Stories</span>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-100 mt-3">What Our Riders Say</h2>
          <p className="text-neutral-400 mt-3 max-w-xl mx-auto leading-relaxed">
            Real experiences from real riders. Join thousands of cyclists who found their perfect bike with VeloRide.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-[#222222] border border-[#2a2a2a] hover:border-orange-500/40 rounded-2xl p-6 transition-all duration-300 flex flex-col gap-4"
            >
              <div className="flex items-start justify-between">
                <StarRating rating={t.rating} />
                <Quote className="w-6 h-6 text-orange-500/30" />
              </div>
              <p className="text-neutral-300 leading-relaxed text-sm flex-1">"{t.text}"</p>
              <div className="flex items-center gap-3 pt-2 border-t border-[#2a2a2a]">
                <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center shrink-0">
                  <span className="text-sm font-bold text-orange-500">{t.initials}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-neutral-100">{t.name}</p>
                  <p className="text-xs text-neutral-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 rounded-2xl bg-gradient-to-r from-orange-500/20 via-orange-500/10 to-transparent border border-orange-500/20 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-neutral-100">Ready to Start Your Ride?</h3>
            <p className="text-neutral-400 mt-2">Find your perfect bike today and join the VeloRide community.</p>
          </div>
          <a
            href="#featured"
            className="shrink-0 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 shadow-lg shadow-orange-500/30 text-base whitespace-nowrap"
          >
            Shop All Bikes
          </a>
        </div>
      </div>
    </section>
  );
}
