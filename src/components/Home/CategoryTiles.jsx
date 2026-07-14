import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  { name: 'Earrings', image: 'https://via.placeholder.com/800x600/FFF8F0/1a1a1a?text=Earrings' },
  { name: 'Necklaces', image: 'https://via.placeholder.com/800x600/FFF8F0/1a1a1a?text=Necklaces' },
  { name: 'Huggies', image: 'https://via.placeholder.com/800x600/FFF8F0/1a1a1a?text=Earrings' },
];

export default function CategoryTiles() {
  return (
    <section className="py-20 px-4">
      <div className="container-velmora">
        <div className="text-center mb-12">
          <h2
            className="text-4xl md:text-5xl font-light mb-4"
            style={{ fontFamily: 'Cormorant Garamond', serif: true }}
          >
            Shop by Category
          </h2>
          <div className="hairline w-24 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              to="/shop"
              className="category-tile relative h-[500px] overflow-hidden group cursor-pointer block"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3
                  className="text-white text-3xl font-light tracking-widest uppercase"
                  style={{ fontFamily: 'Cormorant Garamond', serif: true }}
                >
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