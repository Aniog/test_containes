import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      name: 'Elena R.',
      text: 'The quality of the Golden Sphere Huggies is unmatched. They have a weight and luster that makes them feel much more expensive than they are.',
    },
    {
      name: 'Sarah M.',
      text: 'I haven’t taken off my Amber Lace Earrings since they arrived. They are the perfect balance of vintage charm and modern minimal style.',
    },
    {
      name: 'Jessica T.',
      text: 'Velmora is my new go-to for gifting. The packaging and presentation are just as beautiful as the jewelry itself.',
    },
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-velmora-stone">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="flex justify-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} className="fill-velmora-gold text-velmora-gold" />
            ))}
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-dark italic">What You’re Saying</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="flex flex-col items-center text-center space-y-6">
              <p className="font-serif text-xl md:text-2xl text-velmora-dark leading-relaxed">
                "{review.text}"
              </p>
              <div className="pt-4">
                <p className="text-[10px] uppercase tracking-widest text-velmora-gold font-sans font-bold">
                  {review.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
