import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Sarah M.',
    text: 'The quality is incredible for the price. I wear my huggies every single day and they still look brand new after 6 months.',
    stars: 5,
  },
  {
    name: 'Jessica L.',
    text: 'Bought the Royal Heirloom Set as a gift and my sister absolutely loved it. The packaging felt so premium.',
    stars: 5,
  },
  {
    name: 'Amanda R.',
    text: 'Finally, demi-fine jewelry that does not turn my skin green. These are my go-to earrings for work and weekends.',
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding py-16 md:py-24 bg-border/30">
      <div className="text-center mb-12 md:mb-16">
        <p className="font-sans text-xs tracking-[0.3em] uppercase text-gold mb-3">
          What Our Customers Say
        </p>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light">
          Loved by Thousands
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
        {reviews.map((review) => (
          <div
            key={review.name}
            className="bg-cream p-8 md:p-10 border border-border"
          >
            <div className="flex items-center gap-1 mb-4">
              {Array.from({ length: review.stars }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-gold text-gold" strokeWidth={0} />
              ))}
            </div>
            <p className="font-sans text-sm text-stone leading-relaxed mb-6">
              "{review.text}"
            </p>
            <p className="font-serif text-sm tracking-wide text-charcoal">
              {review.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
