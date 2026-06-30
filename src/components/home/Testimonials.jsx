import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    { name: 'Elena R.', text: 'The Golden Sphere Huggies are my new everyday favorites. So lightweight and they look so much more expensive than they are!' },
    { name: 'Sarah M.', text: 'Beautifully packaged and the quality is outstanding. I bought the Royal Heirloom Set for my sister and she was absolutely thrilled.' },
    { name: 'Jessica K.', text: 'The Crystal detail on the Vivid Aura cuff is stunning. It captures the light perfectly and doesn\'t irritate my sensitive skin at all.' },
  ];

  return (
    <section className="py-20 md:py-32 bg-white px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-serif text-center mb-16 italic">Words from our Muses</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {reviews.map((review, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-velmora-gold fill-velmora-gold" />
                ))}
              </div>
              <p className="font-serif italic text-lg md:text-xl text-neutral-600 mb-8 leading-relaxed">
                "{review.text}"
              </p>
              <span className="text-xs uppercase tracking-widest font-bold text-velmora-obsidian">
                — {review.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
