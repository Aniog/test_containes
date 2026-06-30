import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    text: 'The quality is incredible for the price. I wear my Golden Sphere Huggies every single day and they still look brand new after 6 months.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Jessica L.',
    text: 'I gifted the Royal Heirloom Set to my sister for her birthday. The packaging alone made her cry — and the jewelry is absolutely stunning.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Amanda K.',
    text: 'Finally, demi-fine jewelry that actually looks expensive. The Amber Lace Earrings get compliments everywhere I go. Obsessed.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-velmora-stone mb-3">
            Reviews
          </p>
          <h2 className="font-serif text-3xl md:text-4xl tracking-wide">
            Loved by Thousands
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white border border-velmora-warm p-8 md:p-10 text-center"
            >
              <div className="flex items-center justify-center gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-velmora-gold text-velmora-gold"
                  />
                ))}
              </div>
              <p className="text-velmora-base leading-relaxed text-sm md:text-base mb-6">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="text-xs uppercase tracking-widest font-medium text-velmora-stone">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
