import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    { name: 'Sarah L.', text: 'The quality is unmatched for the price. I wear my huggies every single day and they still look brand new.' },
    { name: 'Elena R.', text: 'Beautiful packaging and even more beautiful jewelry. The Royal Heirloom Set was the perfect gift for my sister.' },
    { name: 'Maya K.', text: 'I love the weight of these pieces. They feel expensive and substantial without being too heavy.' }
  ];

  return (
    <section className="py-24 bg-primary-bg">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {reviews.map((rev, idx) => (
            <div key={idx} className="space-y-6">
              <div className="flex justify-center space-x-1 text-gold">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p className="text-xl font-serif italic text-accent leading-relaxed">"{rev.text}"</p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted">— {rev.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
