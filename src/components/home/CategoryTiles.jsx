import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 'earrings',
    label: 'Earrings',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=800&fit=crop',
  },
  {
    id: 'necklaces',
    label: 'Necklaces',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=800&fit=crop',
  },
  {
    id: 'huggies',
    label: 'Huggies',
    image: 'https://images.unsplash.com/photo-1629224316810-9d8805b95e76?w=600&h=800&fit=crop',
  },
];

export default function CategoryTiles() {
  return (
    <section className="section-padding py-20 md:py-28">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <p className="font-sans text-caption uppercase tracking-widest-2xl text-gold mb-3">
            Explore
          </p>
          <h2 className="font-serif text-heading-xl text-velmora-dark">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[3/4] md:aspect-[2/3] overflow-hidden bg-velmora-cream"
            >
              <img
                src={cat.image}
                alt={cat.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-velmora-black/20 group-hover:bg-velmora-black/35 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-end justify-center pb-10 md:pb-14">
                <div className="text-center">
                  <h3 className="font-serif text-heading-lg text-white mb-2">
                    {cat.label}
                  </h3>
                  <span className="font-sans text-caption uppercase tracking-widest-xl text-white/80 border-b border-white/40 pb-1 group-hover:border-gold group-hover:text-gold transition-colors duration-300">
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
