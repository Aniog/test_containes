import React from 'react';
import { Link } from 'react-router-dom';

const CategoryTiles = () => {
  const categories = [
    {
      name: "Earrings",
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      path: "/shop?category=Earrings",
    },
    {
      name: "Necklaces",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      path: "/shop?category=Necklaces",
    },
    {
      name: "Huggies",
      image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80",
      path: "/shop?category=Huggies",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-12">
        <p className="uppercase tracking-[0.15em] text-xs text-[#6B645C] mb-2">Discover</p>
        <h2 className="font-serif text-4xl tracking-[0.05em]">Shop by Category</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {categories.map((cat) => (
          <Link 
            key={cat.name} 
            to={cat.path}
            className="category-tile aspect-[4/3] block"
          >
            <img 
              src={cat.image} 
              alt={cat.name}
              className="w-full h-full object-cover"
            />
            <div className="overlay" />
            <span className="label">{cat.name}</span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryTiles;