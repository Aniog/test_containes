import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: 'Elena R.',
      text: "The quality is unmatched for the price. I've been wearing my Golden Sphere Huggies every day for months and they still look brand new.",
      rating: 5,
    },
    {
      id: 2,
      name: 'Sarah M.',
      text: "The packaging was so elegant, it felt like a true luxury experience. The Majestic Flora necklace is even more stunning in person.",
      rating: 5,
    },
    {
      id: 3,
      name: 'Jessica T.',
      text: "Fast shipping and such beautiful designs. I always get compliments whenever I wear my Velmora pieces.",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-secondary">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl mb-16">The Velmora Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {reviews.map((review) => (
            <div key={review.id} className="flex flex-col items-center">
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={14} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="text-primary italic mb-6 leading-relaxed">"{review.text}"</p>
              <span className="text-xs uppercase tracking-widestest font-bold">— {review.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
