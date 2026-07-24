import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    { name: "Sarah L.", text: "Absolutely stunning quality. The weight of the huggies feels premium and they haven't tarnished after months of wear." },
    { name: "Jessica M.", text: "The perfect gift! The packaging was so beautiful I didn't even need to wrap it. My sister loved the necklace." },
    { name: "Elena G.", text: "I've finally found my go-to brand for gold jewelry. Elegance with an accessible price point is a dream come true." },
  ];

  return (
    <section className="py-24 bg-cream">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-gold fill-gold" />
            ))}
          </div>
          <h2 id="testimonials-title" className="font-serif text-3xl md:text-5xl text-charcoal">Voices of Velmora</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {reviews.map((rev, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-8 bg-white/50 backdrop-blur-sm rounded-sm shadow-sm border border-charcoal/5">
              <p className="font-sans text-charcoal/80 text-sm italic mb-8 leading-relaxed">
                "{rev.text}"
              </p>
              <h4 className="font-serif text-charcoal font-bold tracking-widest text-sm uppercase">
                {rev.name}
              </h4>
              <span className="font-sans text-[9px] tracking-[0.2em] text-gold font-bold uppercase mt-2">Verified Purchase</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
