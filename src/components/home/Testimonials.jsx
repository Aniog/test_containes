import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      name: 'Elena M.',
      text: 'Absolutely stunning quality. The weight of the Golden Sphere Huggies feels so premium, and they haven’t tarnished at all after weeks of wear.',
      stars: 5
    },
    {
      name: 'Sarah K.',
      text: 'The packaging was so editorial. It felt like I was unboxing something three times the price. Perfect for gifting myself!',
      stars: 5
    },
    {
      name: 'Jessica L.',
      text: 'I haven’t taken off the Majestic Flora Nectar since it arrived. It’s the perfect statement piece that still feels subtle and elegant.',
      stars: 5
    }
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto border-y border-stone-100">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        {reviews.map((review, i) => (
          <div key={review.name} className="flex flex-col items-center text-center">
            <div className="flex gap-1 mb-6">
              {[...Array(review.stars)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-xl font-serif italic mb-8 leading-relaxed">
              "{review.text}"
            </p>
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-stone-400">
              — {review.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
