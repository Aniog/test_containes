import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    { name: "Elena R.", quote: "The quality surpassed my expectations. I haven't taken off my Golden Sphere Huggies since they arrived." },
    { name: "Sarah M.", quote: "Absolutely stunning packaging. It felt like receiving a gift from a dear friend. The 18K plating is so rich." },
    { name: "Julianne T.", quote: "The perfect balance of modern and classic. I've received so many compliments on my Amber Lace earrings." }
  ];

  return (
    <section className="py-24 bg-accent/5">
      <div className="px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {reviews.map((rev, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="flex gap-1 mb-6 text-accent">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p className="font-serif text-xl italic mb-8 leading-relaxed">
                "{rev.quote}"
              </p>
              <span className="font-sans text-xs uppercase tracking-[0.3em] font-medium">
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
