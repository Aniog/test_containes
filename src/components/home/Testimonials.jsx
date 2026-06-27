import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    { id: 1, name: "Elena R.", rating: 5, text: "The Golden Sphere Huggies are even more beautiful in person. The weight feels premium and they haven't tarnished after months of wear." },
    { id: 2, name: "Sophia L.", rating: 5, text: "I bought the Royal Heirloom Set as a gift for myself and I'm obsessed. The packaging was stunning, felt like a true luxury experience." },
    { id: 3, name: "Marcus W.", rating: 5, text: "Exquisite craftsmanship at an accessible price point. Shipping was fast and the jewelry is hypoallergenic, which is rare to find." }
  ];

  return (
    <section className="py-32 px-6 md:px-12 bg-white border-y border-black/5">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
        {reviews.map((review) => (
          <div key={review.id} className="text-center flex flex-col items-center">
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-gold text-gold" />
              ))}
            </div>
            <p className="font-serif text-lg md:text-xl italic leading-relaxed mb-8 text-black/80">
              "{review.text}"
            </p>
            <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-black/40">
              — {review.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
