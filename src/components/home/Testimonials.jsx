import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    text: "The Vivid Aura ear cuff is stunning. It feels high-end without the crazy markup. Gets me compliments daily.",
    name: "Sarah C."
  },
  {
    text: "I haven't taken off the Golden Sphere huggies since they arrived. Perfect weight, gorgeous color.",
    name: "Elena M."
  },
  {
    text: "Beautiful packaging and incredible quality. The Royal heirloom set made my anniversary so special.",
    name: "Rachel T."
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-velmora-light">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-y border-velmora-taupe/20 py-16">
          {testimonials.map((test, i) => (
            <div key={i} className="text-center px-4">
              <div className="flex justify-center mb-6 space-x-1">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={16} className="fill-velmora-gold text-velmora-gold" />
                ))}
              </div>
              <p className="font-serif text-lg md:text-xl italic text-primary mb-8 leading-relaxed">
                "{test.text}"
              </p>
              <p className="text-sm uppercase tracking-widest text-muted-foreground font-semibold">
                — {test.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;