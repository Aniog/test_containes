import React from 'react';
import { Link } from 'react-router-dom';

const CategoryTiles = () => {
  const categories = [
    { 
      name: "Earrings", 
      path: "/shop?category=Earrings",
      query: "gold earrings on model elegant editorial"
    },
    { 
      name: "Necklaces", 
      path: "/shop?category=Necklaces",
      query: "gold necklace on neck close up elegant"
    },
    { 
      name: "Huggies", 
      path: "/shop?category=Huggies",
      query: "gold huggie hoop earrings detail"
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-12">
        <p className="text-xs tracking-[0.15em] text-[#B89778] mb-2">DISCOVER</p>
        <h2 className="font-serif text-4xl tracking-wide">Shop by Category</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {categories.map((cat) => (
          <Link key={cat.name} to={cat.path} className="category-tile group block aspect-[4/3] overflow-hidden">
            <img
              data-strk-img-id={`cat-${cat.name.toLowerCase()}`}
              data-strk-img={`${cat.query} warm gold jewelry`}
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={cat.name}
              className="w-full h-full object-cover"
            />
            <div className="category-label">
              <span className="font-serif text-2xl tracking-wide">{cat.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryTiles;
