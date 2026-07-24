import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    rating: 5,
    text: 'I bought the Golden Sphere Huggies and I haven\'t taken them off in three weeks. The quality is incredible for the price — they look and feel like fine jewelry.',
    product: 'Golden Sphere Huggies',
  },
  {
    id: 2,
    name: 'Priya K.',
    rating: 5,
    text: 'Ordered the Royal Heirloom Set as a birthday gift for my sister. The packaging alone made her cry. The jewelry is stunning — she wears it every single day.',
    product: 'Royal Heirloom Set',
  },
  {
    id: 3,
    name: 'Emma L.',
    rating: 5,
    text: 'The Majestic Flora Nectar is exactly what I was looking for — delicate but eye-catching. Fast shipping, beautiful packaging, and the gold hasn\'t tarnished at all.',
    product: 'Majestic Flora Nectar',
  },
];

function StarRow({ count = 5 }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={12} strokeWidth={1} className="fill-velmora-gold text-velmora-gold" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-velmora-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-velmora-gold mb-3">
            Reviews
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-velmora-obsidian tracking-wide">
            What Our Customers Say
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-velmora-cream border border-velmora-border p-8 flex flex-col gap-5 hover:shadow-md transition-shadow duration-300"
            >
              <StarRow count={t.rating} />
              <blockquote className="font-serif text-base font-light italic text-velmora-obsidian leading-relaxed flex-1">
                "{t.text}"
              </blockquote>
              <div className="hairline pt-4 flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold tracking-[0.1em] uppercase text-velmora-obsidian">
                    {t.name}
                  </p>
                  <p className="text-[10px] text-velmora-muted mt-0.5 tracking-wide">
                    Verified Purchase · {t.product}
                  </p>
                </div>
                <div className="w-6 h-6 rounded-full bg-velmora-gold/20 flex items-center justify-center">
                  <span className="text-[10px] font-semibold text-velmora-gold">
                    {t.name[0]}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Overall rating */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-velmora-cream border border-velmora-border px-8 py-4">
            <StarRow count={5} />
            <span className="text-sm font-medium text-velmora-obsidian">4.9 / 5</span>
            <span className="text-xs text-velmora-muted">from 462 reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
}
