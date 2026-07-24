import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    { name: "Sophia", initial: "L.", text: "The quality is beyond what I expected for the price. The Golden Sphere Huggies haven't left my ears since they arrived." },
    { name: "Isabella", initial: "M.", text: "Absolutely stunning packaging. It felt like a true luxury experience from unboxing to wearing. Simply beautiful." },
    { name: "Emma", initial: "R.", text: "Customer service was so helpful with my sizing questions. I'm obsessed with my new Royal Heirloom Set." }
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-velmora-cream">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
          {reviews.map((rev, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-velmora-gold text-velmora-gold" />
                ))}
              </div>
              <p className="font-serif text-xl italic mb-8 leading-relaxed opacity-80">
                "{rev.text}"
              </p>
              <p className="font-sans text-xs uppercase tracking-widest-lg opacity-40">
                {rev.name} {rev.initial}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
