import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sophia R.',
    rating: 5,
    text: 'I bought the Heirloom Set as a birthday gift for my sister and she absolutely loved it. The packaging is stunning and the quality feels so much more expensive than the price.',
  },
  {
    id: 2,
    name: 'Camille T.',
    rating: 5,
    text: 'The Golden Sphere Huggies are my everyday earrings now. They haven\'t tarnished at all after 3 months of daily wear — even through workouts. Genuinely impressed.',
  },
  {
    id: 3,
    name: 'Nadia K.',
    rating: 5,
    text: 'Velmora is my go-to for gifting. The Flora Nectar necklace is so delicate and beautiful. Fast shipping, gorgeous packaging, and the jewelry itself is perfect.',
  },
];

function StarRow() {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star key={s} size={12} className="text-gold fill-gold" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-parchment py-20 md:py-28 border-t border-linen">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <p className="font-manrope text-xs tracking-widest uppercase text-gold mb-2">
            Reviews
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-obsidian">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-cream p-8 flex flex-col gap-4">
              <StarRow />
              <p className="font-cormorant text-lg font-light text-obsidian leading-relaxed italic">
                "{t.text}"
              </p>
              <div className="mt-auto pt-4 border-t border-linen">
                <p className="font-manrope text-xs tracking-widest uppercase text-stone">
                  {t.name}
                </p>
                <p className="font-manrope text-[10px] text-mist mt-0.5">Verified Purchase</p>
              </div>
            </div>
          ))}
        </div>

        {/* Aggregate rating */}
        <div className="flex items-center justify-center gap-3 mt-12">
          <div className="flex items-center gap-0.5">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} size={14} className="text-gold fill-gold" />
            ))}
          </div>
          <span className="font-manrope text-xs text-mist">
            4.8 out of 5 · 524 reviews
          </span>
        </div>
      </div>
    </section>
  );
}
