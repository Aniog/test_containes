import React from 'react';
import { Star } from 'lucide-react';

const REVIEWS = [
  {
    id: 1,
    name: 'Sarah M.',
    text: 'The quality is incredible for the price. I wear my huggies every single day and they still look brand new after 6 months.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Jessica T.',
    text: 'Bought the Royal Heirloom Set as a gift for my sister. The packaging alone made it feel so premium. She absolutely loved it.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Amanda K.',
    text: 'Finally found jewelry that does not irritate my sensitive skin. The gold plating is beautiful and the designs are so elegant.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-deep text-text-on-dark">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="font-sans text-xs uppercase tracking-[0.2em] text-text-on-dark/50 mb-3">
            Reviews
          </p>
          <h2 className="font-serif text-3xl md:text-4xl">
            Loved By Our Customers
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {REVIEWS.map(review => (
            <div key={review.id} className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent-gold text-accent-gold" />
                ))}
              </div>
              <p className="text-text-on-dark/80 leading-relaxed mb-4 text-sm md:text-base">
                &ldquo;{review.text}&rdquo;
              </p>
              <p className="font-sans text-xs uppercase tracking-widest text-text-on-dark/50">
                {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
