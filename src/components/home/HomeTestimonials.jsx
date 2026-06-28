import React from 'react';
import { Star } from 'lucide-react';

const HomeTestimonials = () => {
  const testimonials = [
    { id: 1, name: "Elena R.", text: "The quality of the 18K plating is incredible. I've worn my huggies every day for months and they still look brand new. Truly quiet luxury.", rating: 5 },
    { id: 2, name: "Marcus T.", text: "Bought the heirloom set for my partner. The packaging alone was beautiful, and the jewelry itself is stunning and heavy in hand.", rating: 5 },
    { id: 3, name: "Sofia G.", text: "I love the editorial aesthetic of this brand. The pieces feel like they should be triple the price. Hypoallergenic gold that actually lasts.", rating: 5 },
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-white border-b border-brand-sand">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-sm font-sans uppercase tracking-[0.3em] text-brand-gold font-bold">Kind Words</h2>
          <h3 className="text-4xl font-serif">Loved by Our Community</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((t) => (
            <div key={t.id} className="flex flex-col items-center text-center space-y-6">
              <div className="flex space-x-1">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold" />
                ))}
              </div>
              <p className="text-lg font-serif italic text-brand-charcoal leading-relaxed">
                "{t.text}"
              </p>
              <div className="w-8 h-[1px] bg-brand-gold" />
              <p className="font-sans text-xs uppercase tracking-[0.2em] font-bold">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeTestimonials;