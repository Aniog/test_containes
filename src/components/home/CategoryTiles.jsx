import React from 'react';
import { Link } from 'react-router-dom';

const CategoryTiles = () => {
  const categories = [
    {
      name: "Earrings",
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      path: "/shop?category=Earrings"
    },
    {
      name: "Necklaces",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      path: "/shop?category=Necklaces"
    },
    {
      name: "Huggies",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80",
      path: "/shop?category=Huggies"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-12">
        <span className="text-xs tracking-[0.15em] uppercase text-velmora-gold">Find your piece</span>
        <h2 className="heading-serif text-4xl mt-2">Shop by Category</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {categories.map((cat, index) => (
          <Link key={index} to={cat.path} className="category-tile group">
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