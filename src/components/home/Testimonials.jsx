import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah L.",
    stars: 5,
    text: "The Golden Sphere Huggies are my new everyday staple. They feel heavy and high-end, but I can wear them all day comfortably. Worth every penny."
  },
  {
    name: "Elena R.",
    stars: 5,
    text: "I bought the Majestic Necklace for a wedding, and I haven't taken it off since. The crystal sparkle is incredible in real life. Such a beautiful find."
  },
  {
    name: "Maya T.",
    stars: 5,
    text: "Beautifully packaged and even more stunning in person. Finally found a brand that offers luxury quality without the insane markups."
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 md:py-32 bg-[#FDFCFB] border-y border-neutral-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <p className="text-[#C5A059] uppercase tracking-widest text-[10px] font-bold mb-12">Customer Reflections</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {testimonials.map((t, index) => (
            <div key={index} className="flex flex-col items-center space-y-6">
              <div className="flex space-x-1">
                {[...Array(t.stars)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#C5A059] text-[#C5A059]" />
                ))}
              </div>
              <p className="text-lg md:text-xl font-serif italic text-neutral-700 leading-relaxed max-w-xs">
                "{t.text}"
              </p>
              <p className="text-xs uppercase tracking-[0.2em] font-bold text-neutral-400">
                — {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
