import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=750&fit=crop',
    strkQuery: 'gold earrings jewelry editorial warm light',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=750&fit=crop',
    strkQuery: 'gold necklace jewelry editorial warm light',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    image: 'https://images.unsplash.com/photo-1629224316810-9d8805b95e76?w=600&h=750&fit=crop',
    strkQuery: 'gold huggie hoop earrings jewelry editorial',
  },
];

export default function Categories() {
  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="container-wide">
        <div className="text-center mb-12">
          <span className="text-overline uppercase tracking-overline text-gold block mb-3">
            Explore
          </span>
          <h2 className="font-serif text-3xl md:text-heading-2 text-velmora-900">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat, i) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-sm animate-fade-up"
              style={{ animationDelay: `${i * 0.15}s`, opacity: 0 }}
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-luxury"
                loading="lazy"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-velmora-950/20 group-hover:bg-velmora-950/40 transition-colors duration-500" />
              {/* Label */}
              <div className="absolute inset-0 flex items-end justify-center pb-10">
                <div className="text-center">
                  <h3 className="font-serif text-2xl md:text-3xl text-white tracking-wide">
                    {cat.name}
                  </h3>
                  <span className="inline-block mt-2 text-xs uppercase tracking-overline text-white/80 border-b border-white/40 pb-0.5 group-hover:border-gold group-hover:text-gold transition-colors duration-300">
                    Shop Now
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
