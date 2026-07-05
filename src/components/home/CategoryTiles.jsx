import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  { name: 'Earrings', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80' },
  { name: 'Necklaces', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80' },
  { name: 'Huggies', image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80' },
];

export default function CategoryTiles() {
  return (
    <section className="py-20 md:py-32">
      <div className="container-luxury">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl mb-4">Shop by Category</h2>
          <div className="w-16 h-0.5 bg-velmora-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {categories.map((category, index) => (
            <Link
              key={category.name}
              to="/shop"
              className="group relative overflow-hidden aspect-[4/5] bg-velmora-sand"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-velmora-soft-black/20 group-hover:bg-velmora-soft-black/40 transition-colors duration-500" />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white font-serif text-3xl md:text-4xl tracking-wider opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  {category.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
