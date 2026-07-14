import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    { name: "Sarah", initial: "L", text: "The quality surpassed my expectations. I haven't taken these huggies off since they arrived." },
    { name: "Elena", initial: "M", text: "Beautifully packaged and even more stunning in person. Perfect for gifting." },
    { name: "Jessica", initial: "K", text: "Finding jewelry that doesn't irritate my skin is rare. Velmora's 18K gold pieces are a dream." }
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto text-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        {reviews.map((rev, i) => (
          <div key={i} className="flex flex-col items-center space-y-6">
            <div className="flex gap-1 text-accent">
              {[...Array(5)].map((_, j) => <Star key={j} size={14} fill="currentColor" />)}
            </div>
            <p className="font-serif text-lg italic leading-relaxed text-gray-700">
              "{rev.text}"
            </p>
            <div className="uppercase tracking-[0.2em] text-[10px] font-bold">
              {rev.name} {rev.initial}.
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
