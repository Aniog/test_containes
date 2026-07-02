import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    { name: 'Sarah L.', text: "The quality is unmatched for this price. My huggies haven't left my ears since I got them." },
    { name: 'Elena R.', text: "Wrapped so beautifully, it felt like a true gift to myself. The gold tone is perfect." },
    { name: 'Jessica M.', text: "Velmora is my new go-to for gifting. Every piece is so classic and versatile." },
  ];

  return (
    <section className="py-32 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex justify-center gap-1 mb-10">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={14} fill="currentColor" className="text-accent" />
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 lg:gap-24">
          {reviews.map((rev, i) => (
            <div key={i} className="flex flex-col items-center">
              <p className="text-lg md:text-xl font-serif italic mb-8 leading-relaxed text-zinc-800">
                "{rev.text}"
              </p>
              <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-accent">
                {rev.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
