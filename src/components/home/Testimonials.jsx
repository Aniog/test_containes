import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    { name: 'Elena R.', text: 'The Golden Sphere Huggies are my new daily staple. They feel so high-quality and the weight is perfect.' },
    { name: 'Sarah M.', text: 'Absolutely fast shipping and beautiful packaging. The Royal Heirloom set was the perfect gift for my sister.' },
    { name: 'Julia K.', text: 'I have very sensitive skin and was worried, but these pieces have been amazing. No tarnishing and no irritation.' },
  ];

  return (
    <section className="py-24 px-6 lg:px-12 bg-background">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="font-serif text-3xl mb-16">Talk of the Town</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {reviews.map((rev, idx) => (
            <div key={idx} className="space-y-4">
              <div className="flex justify-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground italic font-light leading-relaxed">"{rev.text}"</p>
              <h4 className="text-xs uppercase tracking-widest font-semibold">{rev.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
