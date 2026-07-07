import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      name: 'Elena R.',
      text: 'The quality of the Golden Sphere Huggies is exceptional. They have a lovely weight to them and haven\'t tarnished even with daily wear.',
      stars: 5
    },
    {
      name: 'Sarah M.',
      text: 'I bought the Royal Heirloom Set as a gift for my sister, and she was absolutely mesmerized by the packaging and the delicate design.',
      stars: 5
    },
    {
      name: 'Juliet K.',
      text: 'Perfect minimalist staples. I love how these pieces feel both modern and vintage at the same time. Truly timeless.',
      stars: 5
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-[0.4em] text-velmora-gold mb-4">A Note From Our Muses</h2>
          <h3 className="text-4xl font-serif">Community Stories</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {reviews.map((review, i) => (
            <div key={review.name} className="flex flex-col items-center text-center space-y-6 p-8 bg-parchment rounded-sm shadow-sm md:shadow-none transition-all duration-300 hover:shadow-md">
              <div className="flex space-x-1 text-velmora-gold">
                {[...Array(review.stars)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <blockquote className="text-charcoal/70 leading-relaxed italic font-serif text-lg">
                "{review.text}"
              </blockquote>
              <div className="pt-4 border-t border-velmora-divider w-12 mx-auto" />
              <cite className="text-xs uppercase tracking-[0.2em] font-medium not-italic">
                {review.name}
              </cite>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
