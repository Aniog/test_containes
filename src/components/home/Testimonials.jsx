import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    { name: "Sarah", initial: "L", text: "The quality is simply unmatched for this price. My Golden Sphere Huggies haven't left my ears in three months and still shine like new." },
    { name: "Elena", initial: "M", text: "Beautifully packaged and even more stunning in person. Perfect for gifting—though I ended up keeping the Royal Heirloom Set for myself!" },
    { name: "Jessica", initial: "K", text: "Finally, jewelry that doesn't irritate my sensitive skin. The 18K gold plating is thick and the designs are so sophisticated." }
  ];

  return (
    <section className="py-24 bg-white border-y">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {reviews.map((rev, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <div className="flex gap-1 mb-6 text-gold">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p className="text-stone-600 italic mb-8 leading-relaxed font-light">"{rev.text}"</p>
              <div className="flex items-center gap-2">
                <div className="w-8 h-[1px] bg-stone-200" />
                <span className="text-xs uppercase tracking-widest text-primary">{rev.name} {rev.initial}.</span>
                <div className="w-8 h-[1px] bg-stone-200" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
