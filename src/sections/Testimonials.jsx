import React from 'react';
import Stars from '../components/ui/Stars';

const testimonials = [
  {
    id: 't1',
    name: 'Sarah L.',
    text: 'I wear my Golden Sphere Huggies every single day. They still look brand new after six months, and I get compliments constantly.',
  },
  {
    id: 't2',
    name: 'Maya R.',
    text: 'The packaging alone made me feel like I was unboxing something truly luxurious. The necklace is even more beautiful in person.',
  },
  {
    id: 't3',
    name: 'Elena K.',
    text: 'Finally, demi-fine jewelry that feels elevated without the crazy price tag. Already planning my next purchase.',
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-stone-50 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="font-serif text-3xl md:text-5xl font-light text-velmora-dark mb-3">
            Loved by You
          </h2>
          <p className="text-velmora-muted text-sm md:text-base">
            Real moments from the Velmora community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-stone-200 p-8 md:p-10 flex flex-col"
            >
              <Stars rating={5} size={14} />
              <p className="mt-5 font-serif text-lg md:text-xl text-velmora-dark leading-relaxed flex-1">
                "{item.text}"
              </p>
              <p className="mt-6 text-xs uppercase tracking-widest text-velmora-muted">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
