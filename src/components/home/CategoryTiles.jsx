import React from 'react';
import { Link } from 'react-router-dom';

const CategoryTiles = () => {
  const categories = [
    {
      name: "Earrings",
      path: "/shop?category=Earrings",
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
    },
    {
      name: "Necklaces",
      path: "/shop?category=Necklaces",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
    },
    {
      name: "Huggies",
      path: "/shop?category=Huggies",
      image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-12">
        <p className="text-xs tracking-[3px] text-[#B89778] mb-2">DISCOVER</p>
        <h2 className="font-serif text-4xl tracking-[1px] text-[#2C2825]">Shop by Category</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {categories.map((cat) => (
          <Link 
            key={cat.name} 
            to={cat.path}
            className="group relative aspect-[16/10] overflow-hidden bg-[#F5F2ED]"
          >
            <img 
              src={cat.image} 
              alt={cat.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-serif text-3xl tracking-[3px] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {cat.name.toUpperCase()}
              </span>
            </div>
            <div className="absolute bottom-6 left-6">
              <span className="text-white text-sm tracking-[2px] border-b border-white/60 pb-0.5 group-hover:border-white transition-colors">
                SHOP NOW
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryTiles;
