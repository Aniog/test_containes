import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    { name: 'Sophia R.', text: 'The quality of the Golden Sphere Huggies is incredible. I wear them every single day and they haven’t tarnished at all. Truly premium quality.' },
    { name: 'Elena M.', text: 'The most beautiful packaging I’ve ever seen. The Royal Heirloom Set was the perfect gift for my sister, and she was absolutely thrilled!' },
    { name: 'Isabella K.', text: 'Finally, jewelry that doesn’t irritate my sensitive ears. The pieces are lightweight, elegant, and feel much more expensive than they are.' }
  ];

  return (
    <section className="py-32 px-6 md:px-12 bg-white flex justify-center">
      <div className="max-w-4xl w-full text-center">
        <h2 className="font-serif text-3xl md:text-4xl tracking-wide mb-20 uppercase">In Your Words</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          {reviews.map((review, index) => (
            <div key={index} className="flex flex-col items-center space-y-6">
              <div className="flex gap-1 text-accent">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              
              <blockquote className="text-muted-foreground text-sm leading-relaxed italic">
                "{review.text}"
              </blockquote>
              
              <cite className="not-italic uppercase tracking-[0.2em] text-[10px] font-semibold text-foreground border-t pt-4 w-12 border-accent/30 mx-auto">
                {review.name}
              </cite>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
