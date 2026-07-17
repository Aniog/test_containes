import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      name: 'Elena R.',
      text: 'The quality of the Golden Sphere Huggies is unmatched. They are my absolute daily staple now.',
      rating: 5,
    },
    {
      name: 'Sophie M.',
      text: 'Bought the Royal Heirloom Set as a gift for my sister, and she hasn’t taken it off. Beautifully packaged.',
      rating: 5,
    },
    {
      name: 'Maya K.',
      text: 'Fast shipping and even better in person. The jewelry feels substantial and high-end.',
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-[#FDFDFB]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl font-serif mb-16 tracking-widest uppercase text-xs font-bold text-gray-400">What Our Community Says</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {reviews.map((review, idx) => (
            <div key={idx} className="flex flex-col items-center space-y-6">
              <div className="flex space-x-1">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={14} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="text-lg font-serif italic text-gray-700 leading-relaxed max-w-xs">
                "{review.text}"
              </p>
              <span className="text-xs uppercase tracking-widest font-bold">— {review.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
