import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      quote: "The quality is absolutely unmatched for the price point. My Vivid Aura ear cuff hasn't tarnished after months of daily wear.",
      name: "Eleanor T."
    },
    {
      id: 2,
      quote: "Finally found the perfect chunky huggies that don't weigh down my ears. The packaging was so luxurious, making it feel incredibly special.",
      name: "Sarah M."
    },
    {
      id: 3,
      quote: "Stunning design and exceptional customer service. I wore the flora necklace to my wedding rehearsal and received endless compliments.",
      name: "Jessica R."
    }
  ];

  return (
    <section className="py-24 bg-stone-50 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-serif tracking-wide text-stone-900 mb-16">
          Words from Our Community
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {reviews.map((review) => (
            <div key={review.id} className="flex flex-col items-center text-center">
              <div className="flex space-x-1 mb-6 text-stone-800">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-stone-600 font-serif text-lg leading-relaxed flex-grow italic mb-6">
                "{review.quote}"
              </p>
              <p className="text-sm font-medium uppercase tracking-widest text-stone-900">
                {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
