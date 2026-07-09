import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      name: 'Emma S.',
      content: 'The quality surpassed my expectations. I haven\'t taken these huggies off in weeks and they still look brand new.',
      rating: 5
    },
    {
      name: 'Sophia L.',
      content: 'Absolutely stunning packaging and the necklace is the perfect length for layering. My new go-to boutique.',
      rating: 5
    },
    {
      name: 'Isabella M.',
      content: 'Found Velmora through Instagram and I\'m so glad I did. Affordable luxury that actually feels premium.',
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-parchment">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif">Kind Words</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {reviews.map((review, idx) => (
            <div key={idx} className="flex flex-col items-center text-center space-y-6">
              <div className="flex space-x-1">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-lg font-serif italic text-charcoal/80 leading-relaxed">
                "{review.content}"
              </p>
              <span className="text-xs uppercase tracking-[0.2em] font-medium text-stone-500">
                — {review.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
