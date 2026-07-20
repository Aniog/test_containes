import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    name: "Earrings",
    slug: "Earrings",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
  },
  {
    name: "Necklaces",
    slug: "Necklaces",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
  },
  {
    name: "Huggies",
    slug: "Huggies",
    image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80",
  },
];

const CategoryTiles = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-12">
        <span className="uppercase tracking-[0.2em] text-xs text-[var(--velmora-gold)]">Discover</span>
        <h2 className="font-serif text-4xl mt-2">Shop by Category</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {categories.map((cat) => (
          <Link 
            key={cat.slug} 
            to={`/shop?category=${cat.slug}`}
            className="category-tile group"
          >
            <img src={cat.image} alt={cat.name} />
            <div className="category-overlay">
              <span className="category-label">{cat.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryTiles;
