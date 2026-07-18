import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Sophia M.',
    text: 'The quality exceeded my expectations. I wear my Golden Sphere Huggies every single day — they still look brand new after months.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Emily R.',
    text: 'Bought the Royal Heirloom Set as a gift and my sister cried. The packaging alone feels like a luxury experience.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Olivia T.',
    text: 'Finally, demi-fine jewelry that does not turn my skin green. The Amber Lace Earrings are stunning and so lightweight.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-background border-t border-border">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl">What Our Customers Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {reviews.map((review) => (
            <div key={review.id} className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed text-sm md:text-base">
                "{review.text}"
              </p>
              <p className="mt-4 text-sm font-medium text-muted">{review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
