import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    name: "Earrings",
    slug: "Earrings",
    image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80",
  },
  {
    name: "Necklaces",
    slug: "Necklaces",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
  },
  {
    name: "Huggies",
    slug: "Huggies",
    image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80",
  },
];

const CategoryTiles = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
      <div className="text-center mb-10">
        <span className="text-xs tracking-[0.15em] text-[var(--color-gold)] uppercase">Find Your Piece</span>
        <h2 className="heading-display text-4xl md:text-5xl mt-1">Shop by Category</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {categories.map((cat) => (
          <Link 
            key={cat.slug} 
            to={`/shop?category=${cat.slug}`}
            className="category-tile group block"
          >
            <img src={cat.image} alt={cat.name} />
            <div className="category-label">
              <span className="text-white text-xl font-serif tracking-wide">{cat.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryTiles;
