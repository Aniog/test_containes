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
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
      to: "/shop?category=Huggies",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-12">
        <p className="text-xs tracking-[0.2em] text-[#B89778] mb-2">DISCOVER</p>
        <h2 className="serif text-4xl tracking-wide">Shop by Category</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {categories.map((cat) => (
          <Link 
            key={cat.name} 
            to={cat.to} 
            className="category-tile group block aspect-[16/10] overflow-hidden relative"
          >
            <img 
              src={cat.image} 
              alt={cat.name}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="category-overlay absolute inset-0 bg-black/40 flex items-center justify-center">
              <span className="text-white text-2xl tracking-[0.15em] font-light group-hover:tracking-[0.2em] transition-all duration-300">
                {cat.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryTiles;
