import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    { id: 1, name: 'CLARA H.', text: 'The weight of the Golden Sphere Huggies is just perfect. They look far more expensive than they are. My new daily essentials.' },
    { id: 2, name: 'SARAH L.', text: 'Fast shipping and beautiful packaging. You can tell so much care goes into the design and the presentation of each piece.' },
    { id: 3, name: 'MARIA G.', text: 'I wore the Amber Lace earrings to a wedding and received so many compliments. They are delicate but make such a statement.' }
  ];

  return (
    <section className="py-28 bg-neutral-50 border-y border-black/5">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
          {reviews.map((rev) => (
            <div key={rev.id} className="text-center space-y-8 max-w-sm mx-auto">
              <div className="flex justify-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-2.5 h-2.5 fill-accent text-accent" />
                ))}
              </div>
              <p className="font-serif text-xl leading-relaxed italic font-light">"{rev.text}"</p>
              <div className="pt-4">
                 <p className="text-[9px] uppercase tracking-[0.3em] font-bold text-muted-foreground">— {rev.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
