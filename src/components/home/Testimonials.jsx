import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sophia L.",
      text: "The Amber Lace earrings are even more beautiful in person. They have that perfect vintage feel but still look modern and fresh. I get compliments every time I wear them!",
      rating: 5
    },
    {
      name: "Emma D.",
      text: "I've been wearing the Golden Sphere Huggies every day for three months. No fading, no irritation—just pure luxury. Exceptional quality for the price.",
      rating: 5
    },
    {
      name: "Olivia M.",
      text: "Velocity Fine Jewelry is my go-to for gifts and myself. The Royal Heirloom set I bought for my sister's birthday was so elegantly packaged. She was in tears!",
      rating: 5
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {testimonials.map((t, idx) => (
            <div key={idx} className="flex flex-col items-center text-center space-y-6">
              <div className="flex space-x-1">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={14} className="fill-secondary text-secondary" />
                ))}
              </div>
              <p className="font-serif italic text-lg text-primary/80 leading-relaxed px-4">
                "{t.text}"
              </p>
              <div className="space-y-1">
                <span className="text-[10px] tracking-[0.3em] font-bold uppercase text-muted-foreground">— {t.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
