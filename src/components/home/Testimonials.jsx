import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    { name: 'Sarah M.', content: "The Golden Sphere Huggies are my new everyday staple. The weight feels premium and the shine is stunning.", stars: 5 },
    { name: 'Elena R.', content: "Found Velmora through Instagram and haven't looked back. The packaging was beautiful and the quality is 10/10.", stars: 5 },
    { name: 'Sophia W.', content: "Majestic Flora Nectar is a literal work of art. I get compliments every time I wear it. Worth every penny.", stars: 5 },
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-velmora-cream/30">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
        {reviews.map((review, idx) => (
          <div key={idx} className="flex flex-col items-center text-center space-y-6 max-w-sm mx-auto">
            <div className="flex gap-1 text-velmora-gold">
              {[...Array(review.stars)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <p className="text-xl font-serif italic leading-relaxed text-velmora-charcoal/80">
              "{review.content}"
            </p>
            <span className="uppercase tracking-[0.2em] text-[10px] font-bold text-velmora-charcoal">
              {review.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
