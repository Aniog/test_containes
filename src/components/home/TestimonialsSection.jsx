import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sophie M.',
    text: 'I have sensitive ears and have never found earrings I can wear all day — until Velmora. The quality is incredible for the price.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Amara K.',
    text: 'Bought the Royal Heirloom Set as a gift and ended up keeping it for myself. The packaging alone feels like a luxury experience.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Elena R.',
    text: 'These are my everyday pieces now. They have not tarnished after months of wear, and I get compliments every single time.',
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-base">
      <div className="container-main">
        <h2 className="font-serif text-3xl md:text-4xl text-text-inverse text-center mb-12">
          Loved by Thousands
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="text-center md:text-left border-t border-hairline-dark pt-8"
            >
              <div className="flex items-center justify-center md:justify-start gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < t.rating
                        ? 'text-gold fill-gold'
                        : 'text-hairline-dark fill-hairline-dark'
                    }`}
                  />
                ))}
              </div>
              <p className="font-sans text-sm text-text-inverse/90 leading-relaxed mb-5 italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="font-sans text-xs uppercase tracking-widest text-gold font-medium">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
