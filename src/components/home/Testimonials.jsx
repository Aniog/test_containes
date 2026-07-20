import React from 'react';
import Stars from '@/components/ui/Stars';

const reviews = [
  {
    name: 'Sarah M.',
    text: 'The quality is incredible for the price. I wear my huggies every day and they still look brand new.',
    rating: 5,
  },
  {
    name: 'Emily R.',
    text: 'Bought the Royal Heirloom Set as a birthday gift and she absolutely loved it. Beautiful packaging too.',
    rating: 5,
  },
  {
    name: 'Priya K.',
    text: 'Quiet luxury is exactly right. These pieces feel special without being flashy. Highly recommend.',
    rating: 5,
  },
];

const Testimonials = () => (
  <section className="py-16 md:py-24 bg-champagne">
    <div className="max-w-7xl mx-auto px-5 md:px-8">
      <div className="text-center mb-10 md:mb-14">
        <p className="font-sans text-xs uppercase tracking-widest text-gold-600 mb-2">
          Loved by Customers
        </p>
        <h2 className="font-serif text-3xl md:text-5xl text-stone-900">What They Say</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white p-8 md:p-10 shadow-soft flex flex-col"
          >
            <Stars rating={review.rating} size={14} />
            <p className="font-sans text-stone-700 leading-relaxed mt-5 mb-6 flex-1">
              “{review.text}”
            </p>
            <p className="font-serif text-base text-stone-900">{review.name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
