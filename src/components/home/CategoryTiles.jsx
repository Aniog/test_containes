import React from 'react';
import { Link } from 'react-router-dom';

const CategoryTiles = () => {
  const categories = [
    {
      name: "Earrings",
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      to: "/shop?category=Earrings",
    },
    {
      name: "Necklaces",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      to: "/shop?category=Necklaces",
    },
    {
      name: "Huggies",
      image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80",
      to: "/shop?category=Huggies",
    },
  ];

  return (
    <section className="section max-w-7xl mx-auto px-6">
      <div className="mb-10">
        <p className="text-xs tracking-[0.15em] text-text-muted mb-2">EXPLORE</p>
        <h2 className="serif text-4xl tracking-tight">Shop by Category</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {categories.map((cat) => (
          <Link 
            key={cat.name} 
            to={cat.to}
            className="category-tile group block aspect-[16/10] md:aspect-[4/3] overflow-hidden bg-bg-dark"
          >
            <img 
              src={cat.image} 
              alt={cat.name}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="category-label">
              <span className="serif text-2xl tracking-wide">{cat.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryTiles;