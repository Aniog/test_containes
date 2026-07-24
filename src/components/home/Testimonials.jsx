import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Sophie M.',
    rating: 5,
    text: 'I bought the Amber Lace earrings for myself and received so many compliments. The quality is incredible for the price — they feel genuinely luxurious.',
  },
  {
    id: 2,
    name: 'Claire W.',
    rating: 5,
    text: 'Ordered the Royal Heirloom Set as a birthday gift for my sister. The packaging alone made her cry. She hasn\'t taken the necklace off since.',
  },
  {
    id: 3,
    name: 'Maya R.',
    rating: 5,
    text: 'The Golden Sphere Huggies are my everyday earrings now. They\'re the perfect weight, stay on all day, and go with absolutely everything.',
  },
];

const Stars = ({ count }) => (
  <div className="flex items-center gap-0.5">
    {Array.from({ length: count }).map((_, i) => (
      <Star key={i} size={12} fill="#C9A96E" className="text-gold" />
    ))}
  </div>
);

const Testimonials = () => (
  <section className="py-20 md:py-28 bg-parchment border-t border-divider">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <div className="text-center mb-14">
        <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-gold mb-3">
          Reviews
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-ink font-300">
          What Our Customers Say
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
        {reviews.map(review => (
          <div key={review.id} className="flex flex-col gap-4">
            <Stars count={review.rating} />
            <p className="font-serif text-lg md:text-xl text-ink font-300 leading-relaxed italic">
              "{review.text}"
            </p>
            <div className="flex items-center gap-3 mt-auto pt-4 border-t border-divider">
              <div className="w-8 h-8 rounded-full bg-linen flex items-center justify-center">
                <span className="font-serif text-sm text-muted">
                  {review.name.charAt(0)}
                </span>
              </div>
              <span className="font-sans text-xs tracking-widest uppercase text-muted">
                {review.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
