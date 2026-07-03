import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Sarah M.',
    text: 'I have sensitive ears and these are the first earrings I can wear all day without irritation. Absolutely gorgeous quality for the price.',
    rating: 5,
  },
  {
    name: 'Emily R.',
    text: 'Bought the Royal Heirloom Set as a birthday gift and she cried. The packaging is beautiful and the pieces feel so premium.',
    rating: 5,
  },
  {
    name: 'Jessica T.',
    text: 'I get compliments every time I wear my Golden Sphere Huggies. They go with everything and the gold hasnt faded in months.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs tracking-[0.2em] uppercase text-muted mb-3">Reviews</p>
          <h2 className="font-serif text-3xl md:text-4xl font-light">Loved by Thousands</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {reviews.map((review) => (
            <div key={review.name} className="text-center px-2 md:px-6">
              <div className="flex items-center justify-center gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-star text-star" />
                ))}
              </div>
              <p className="font-serif text-lg md:text-xl leading-relaxed text-foreground/90 mb-5">
                "{review.text}"
              </p>
              <p className="text-xs tracking-[0.15em] uppercase text-muted font-medium">
                {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
