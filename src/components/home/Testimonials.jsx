import React from 'react';
import StarRating from '@/components/ui/StarRating';

const reviews = [
  {
    name: 'Sarah M.',
    text: 'The quality exceeded my expectations. I have sensitive ears and these are the first gold-plated earrings I can wear all day without irritation. Absolutely gorgeous.',
    rating: 5,
  },
  {
    name: 'Jessica L.',
    text: 'Bought the Royal Heirloom Set as a gift for my sister and she cried. The packaging alone feels like a luxury unboxing experience. Will be ordering again.',
    rating: 5,
  },
  {
    name: 'Amanda K.',
    text: 'Quiet luxury at its finest. The huggies are my everyday staple — they go with everything and still look brand new after months of wear.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-parchment">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-gold font-medium mb-3">
            Reviews
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-cream rounded p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <StarRating rating={review.rating} size={14} />
              <p className="mt-5 text-taupe leading-relaxed text-sm">
                "{review.text}"
              </p>
              <p className="mt-6 text-xs uppercase tracking-[0.15em] text-charcoal font-medium">
                {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
