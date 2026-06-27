import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    name: 'Earrings',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=900&q=80',
    slug: 'Earrings',
  },
  {
    name: 'Necklaces',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=900&q=80',
    slug: 'Necklaces',
  },
  {
    name: 'Huggies',
    image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=900&q=80',
    slug: 'Huggies',
  },
];

const CategoryTiles = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
      <div className="text-center mb-10">
        <span className="text-xs tracking-[0.15em] uppercase text-velmora-gold">Discover</span>
        <h2 className="font-serif text-4xl md:text-5xl tracking-tight mt-1">Shop by Category</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {categories.map((cat) => (
          <Link 
            key={cat.slug} 
            to={`/shop?category=${cat.slug}`}
            className="category-tile group"
          >
            <img src={cat.image} alt={cat.name} loading="lazy" />
            <div className="category-tile-label">
              {cat.name}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryTiles;
