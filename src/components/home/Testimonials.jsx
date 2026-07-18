import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah M.",
    text: "The quality is simply outstanding. I wear my huggies every day and they still look as bright as the day I bought them.",
    rating: 5
  },
  {
    name: "Elena G.",
    text: "Beautifully packaged and even more stunning in person. It feels much more expensive than it actually is.",
    rating: 5
  },
  {
    name: "Jessica P.",
    text: "I bought the Heirloom set for my sister's birthday and she hasn't taken it off. The perfect gift.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[10px] uppercase-extra text-accent mb-4 block">Kind Words</span>
          <h2 className="text-4xl font-serif">Customer Love</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((t, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <div className="flex gap-1 mb-6 text-accent">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-lg font-serif italic mb-6 leading-relaxed opacity-80">
                "{t.text}"
              </p>
              <span className="text-[11px] uppercase-extra font-medium">{t.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
