import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    { name: "Sophia R.", text: "The quality is breathtaking. I haven't taken these huggies off since they arrived. Truly premium feel at an accessible price.", rating: 5 },
    { name: "Emma L.", text: "Beautifully packaged and even more stunning in person. Perfect for gifting (or self-gifting!). The gold tone is so warm and rich.", rating: 5 },
    { name: "Jessica M.", text: "Finally found gold plated jewelry that doesn't irritate my skin. Hypoallergenic and high-end. I'm obsessed with the filigree detail.", rating: 5 },
  ];

  return (
    <section className="py-24 bg-velmora-cream/50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {reviews.map((rev, i) => (
            <div key={i} className="text-center space-y-6 flex flex-col items-center">
              <div className="flex space-x-1">
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" className="text-velmora-gold" />
                ))}
              </div>
              <p className="font-serif italic text-lg leading-relaxed text-velmora-charcoal">"{rev.text}"</p>
              <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-muted-foreground">{rev.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
