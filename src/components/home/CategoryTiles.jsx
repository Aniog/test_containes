import React from 'react';
import { Link } from 'react-router-dom';

const CategoryTiles = () => {
  const categories = [
    {
      name: "Earrings",
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      to: "/shop?category=Earrings"
    },
    {
      name: "Necklaces",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      to: "/shop?category=Necklaces"
    },
    {
      name: "Huggies",
      image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80",
      to: "/shop?category=Huggies"
    }
  ];

  return (
    <section className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <p className="text-xs tracking-[0.15em] uppercase text-[var(--color-text-muted)] mb-2">Discover</p>
          <h2 className="section-title">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {categories.map((cat) => (
            <Link key={cat.name} to={cat.to} className="category-tile group">
              <img src={cat.image} alt={cat.name} loading="lazy" />
              <div className="category-tile-label">
                <span>{cat.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryTiles;
