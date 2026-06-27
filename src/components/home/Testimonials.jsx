import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      name: 'Elena S.',
      content: 'The quality of the Golden Sphere Huggies is incredible. They have a weight to them that feels so premium.',
      rating: 5
    },
    {
      name: 'Sarah M.',
      content: 'I wore the Royal Heirloom Set to a wedding and received so many compliments. Truly beautiful craftsmanship.',
      rating: 5
    },
    {
      name: 'Jessica K.',
      content: 'Finally, gold jewelry that doesn\'t irritate my skin! The hypoallergenic claim is 100% true. Highly recommend.',
      rating: 5
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-white border-y border-base-dark">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {reviews.map((review, idx) => (
            <div key={idx} className="flex flex-col items-center text-center space-y-6">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="font-serif text-lg md:text-xl italic leading-relaxed">
                "{review.content}"
              </p>
              <p className="font-sans text-[10px] uppercase tracking-widest text-gray-500">
                — {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
