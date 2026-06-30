import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    text: "I've worn my Golden Sphere Huggies every single day for three months. They still look brand new. Absolutely worth it.",
    name: 'Sarah M.',
    rating: 5,
  },
  {
    id: 2,
    text: "Bought the Royal Heirloom Set as a gift for my sister. She cried. The packaging alone is stunning — the jewelry even more so.",
    name: 'Rachel K.',
    rating: 5,
  },
  {
    id: 3,
    text: "Finally found jewelry that looks expensive but doesn't irritate my sensitive ears. Velmora is my go-to for every occasion now.",
    name: 'Emma L.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-brand-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-brand-charcoal">
            Loved by Thousands
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-brand-cream p-8 rounded-sm">
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold" />
                ))}
              </div>
              <p className="text-sm text-brand-graphite leading-relaxed italic font-serif">
                "{t.text}"
              </p>
              <p className="mt-4 text-xs tracking-wider uppercase text-brand-muted font-sans">
                — {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
