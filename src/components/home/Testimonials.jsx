import React from 'react';
import StarRating from '@/components/ui/StarRating';

const reviews = [
  { name: 'Sophie M.', text: 'The quality is incredible for the price. I wear my huggies every single day and they still look brand new.', rating: 5 },
  { name: 'Aisha K.', text: 'I bought the Royal Heirloom Set as a gift and my sister literally gasped when she opened it. Stunning packaging too.', rating: 5 },
  { name: 'Emily R.', text: 'Quiet luxury vibes without the luxury price tag. The ear cuff is my new signature piece.', rating: 5 },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-16 md:py-24 border-t border-velmora-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs font-medium tracking-[0.25em] uppercase text-velmora-accent mb-2">Reviews</p>
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-dark">What Our Customers Say</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {reviews.map((r) => (
            <div key={r.name} className="text-center">
              <div className="flex justify-center mb-4">
                <StarRating rating={r.rating} size={16} />
              </div>
              <p className="font-serif text-lg md:text-xl text-velmora-dark italic leading-relaxed max-w-sm mx-auto">
                "{r.text}"
              </p>
              <p className="mt-4 text-xs font-semibold tracking-widest uppercase text-velmora-muted">
                {r.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
