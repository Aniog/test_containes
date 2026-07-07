import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    text: 'The quality is incredible for the price. I wear my huggies every day and they still look brand new.',
    name: 'Sarah M.',
    rating: 5,
  },
  {
    id: 2,
    text: 'Bought the Royal Heirloom Set as a birthday gift and she absolutely loved it. The packaging felt so premium.',
    name: 'Emily R.',
    rating: 5,
  },
  {
    id: 3,
    text: 'Finally, demi-fine jewelry that doesn\'t turn my ears green. Elegant, minimal, and exactly as pictured.',
    name: 'Priya K.',
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28 bg-cream-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs uppercase tracking-brand text-gold-dark font-sans mb-3">Reviews</p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink">Loved by You</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-cream p-8 md:p-10 border border-sand flex flex-col"
            >
              <div className="flex gap-0.5 mb-5">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={14} className="fill-gold text-gold" />
                ))}
              </div>
              <blockquote className="font-serif text-xl md:text-2xl text-ink leading-snug mb-6 flex-1">
                “{t.text}”
              </blockquote>
              <p className="font-sans text-sm text-taupe uppercase tracking-brand">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
