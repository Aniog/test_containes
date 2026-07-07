import React from 'react';
import { Link } from 'react-router-dom';

const CategoryTiles = () => {
  const categories = [
    {
      name: "Earrings",
      path: "/shop?category=Earrings",
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=900&q=80"
    },
    {
      name: "Necklaces",
      path: "/shop?category=Necklaces",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=900&q=80"
    },
    {
      name: "Huggies",
      path: "/shop?category=Huggies",
      image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=900&q=80"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
      <div className="mb-8 md:mb-10">
        <div className="uppercase tracking-[0.12em] text-xs text-velmora-text-light mb-1">Find Your Piece</div>
        <h2 className="font-serif text-4xl tracking-[-0.01em]">Shop by Category</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {categories.map((cat) => (
          <Link 
            key={cat.name} 
            to={cat.path}
            className="category-tile group rounded-sm overflow-hidden"
          >
            <img src={cat.image} alt={cat.name} />
            <div className="category-label">
              {cat.name}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryTiles;
