import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    text: 'The Golden Sphere Huggies are my absolute favorite. I wear them every single day and get so many compliments. The quality is incredible for the price.',
    rating: 5,
    product: 'Golden Sphere Huggies',
  },
  {
    id: 2,
    name: 'Emily R.',
    text: 'I bought the Royal Heirloom Set for my sister\'s birthday and she cried happy tears. The packaging is beautiful and the jewelry itself is stunning.',
    rating: 5,
    product: 'Royal Heirloom Set',
  },
  {
    id: 3,
    name: 'Jessica L.',
    text: 'I\'ve been searching for affordable gold jewelry that doesn\'t look cheap, and Velmora is it. The Amber Lace Earrings are so delicate and beautiful.',
    rating: 5,
    product: 'Amber Lace Earrings',
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-stone-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-cream-50 mb-3">
            What Our Customers Say
          </h2>
          <div className="w-12 h-px bg-gold-400 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-stone-900/50 border border-stone-800/50 p-6 md:p-8 rounded-sm"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={12}
                    className={
                      i < t.rating
                        ? 'fill-gold-400 text-gold-400'
                        : 'fill-stone-700 text-stone-700'
                    }
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="font-sans text-sm text-stone-300 leading-relaxed mb-6">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="border-t border-stone-800 pt-4">
                <p className="font-sans text-xs font-medium text-cream-100 tracking-wide">
                  {t.name}
                </p>
                <p className="font-sans text-[10px] text-stone-500 mt-0.5">
                  on {t.product}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
