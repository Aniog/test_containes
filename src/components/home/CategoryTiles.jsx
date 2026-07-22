import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    name: 'Earrings',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
    link: '/shop?category=Earrings',
  },
  {
    name: 'Necklaces',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
    link: '/shop?category=Necklaces',
  },
  {
    name: 'Huggies',
    image: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80',
    link: '/shop?category=Huggies',
  },
];

const CategoryTiles = () => {
  return (
    <section className="section bg-[var(--velmora-bg)]">
      <div className="container">
        <div className="text-center mb-10">
          <span className="text-xs tracking-[0.15em] uppercase text-[var(--velmora-gold-dark)]">Find Your Piece</span>
          <h2 className="heading-serif text-4xl mt-1">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {categories.map((cat) => (
            <Link key={cat.name} to={cat.link} className="category-tile group">
              <img src={cat.image} alt={cat.name} />
              <div className="category-tile-label">
                {cat.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryTiles;
