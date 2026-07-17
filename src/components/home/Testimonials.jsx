import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    text: 'The quality is remarkable for the price. I have worn my huggies every day for two months and they still look brand new.',
    name: 'Emily K.',
  },
  {
    text: 'Packaging felt so luxurious — like unwrapping a gift from a high-end boutique. The necklace is even more beautiful in person.',
    name: 'Sophia R.',
  },
  {
    text: 'Finally, demi-fine jewelry that does not feel like a compromise. The gold tone is perfect — warm but not brassy.',
    name: 'Olivia M.',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-cream">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-14">
          <p className="text-[10px] tracking-ultra uppercase text-warm-gray mb-3">Reviews</p>
          <h2 className="font-serif text-3xl lg:text-4xl text-charcoal">From Our Clients</h2>
          <div className="w-12 h-px bg-gold mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {reviews.map((review, i) => (
            <div key={i} className="text-center">
              <div className="flex justify-center gap-1 mb-5">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-sm text-warm-gray leading-relaxed italic mb-5">
                &ldquo;{review.text}&rdquo;
              </p>
              <p className="text-xs tracking-widest uppercase font-medium text-charcoal">
                {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
