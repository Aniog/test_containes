import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    rating: 5,
    text: 'I\'ve been wearing my Golden Sphere Huggies every single day for three months. Zero tarnishing, zero irritation. They look as good as the day I got them. Worth every penny.',
    product: 'Golden Sphere Huggies',
  },
  {
    id: 2,
    name: 'Jessica L.',
    rating: 5,
    text: 'Bought the Royal Heirloom Set as a birthday gift for my sister. The packaging was absolutely beautiful — she cried when she opened it. The jewelry itself is stunning and high quality.',
    product: 'Royal Heirloom Set',
  },
  {
    id: 3,
    name: 'Amanda K.',
    rating: 5,
    text: 'Finally, jewelry that looks expensive but doesn\'t break the bank. The Majestic Flora necklace gets me compliments everywhere I go. Already planning my next Velmora purchase.',
    product: 'Majestic Flora Nectar',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-overline text-gilded-600 mb-3">What They Say</p>
          <h2 className="text-heading text-velvet-950">Customer Love</h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white p-8 lg:p-10 border border-velvet-100 hover:border-velvet-200 transition-colors duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gilded-500 text-gilded-500" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-body text-velvet-700 leading-relaxed mb-6">
                "{t.text}"
              </blockquote>

              {/* Author */}
              <div className="border-t border-velvet-100 pt-4">
                <p className="font-medium text-sm text-velvet-900">{t.name}</p>
                <p className="text-xs text-velvet-500 mt-0.5">Purchased: {t.product}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
