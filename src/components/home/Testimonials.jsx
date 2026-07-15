import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  { name: 'Elena R.', text: 'The Golden Sphere Huggies are my new daily staple. Lightweight, high-quality, and they look far more expensive than they are.', stars: 5 },
  { name: 'Marcus L.', text: 'Purchased the Royal Heirloom Set for my wife and she hasn’t taken it off. The packaging was stunning—felt very premium.', stars: 5 },
  { name: 'Sofia T.', text: 'Finding hypoallergenic jewelry that actually lasts is hard. VELMORA is a game changer. No tarnishing even after months.', stars: 5 },
];

const Testimonials = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-background border-y border-border/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {testimonials.map((t, idx) => (
            <div key={idx} className="flex flex-col items-center text-center space-y-6">
              <div className="flex space-x-1">
                {[...Array(t.stars)].map((_, i) => (
                  <Star key={i} size={14} className="fill-primary text-primary" />
                ))}
              </div>
              <blockquote className="font-serif italic text-xl md:text-2xl leading-relaxed">
                "{t.text}"
              </blockquote>
              <cite className="not-italic text-[10px] uppercase tracking-widestest font-bold text-muted-foreground">
                — {t.name}
              </cite>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
