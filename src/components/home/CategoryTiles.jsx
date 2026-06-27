import React from 'react';
import { Link } from 'react-router-dom';

const CategoryTiles = () => {
  const categories = [
    {
      name: "Earrings",
      path: "/shop?category=Earrings",
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=900&q=80",
      description: "Delicate drops & sculptural cuffs"
    },
    {
      name: "Necklaces",
      path: "/shop?category=Necklaces",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=900&q=80",
      description: "Layered chains & pendants"
    },
    {
      name: "Huggies",
      path: "/shop?category=Huggies",
      image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=900&q=80",
      description: "Everyday essentials"
    }
  ];

  return (
    <section className="max-w-[1400px] mx-auto px-6 py-16 md:py-20">
      <div className="text-center mb-10">
        <span className="text-xs tracking-[3px] text-[#C5A46E]">DISCOVER</span>
        <h2 className="font-serif text-3xl md:text-4xl tracking-[-0.5px] text-[#2C2823] mt-1">Shop by Category</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {categories.map((cat, index) => (
          <Link 
            key={index} 
            to={cat.path}
            className="group relative block aspect-[16/10] md:aspect-[4/3] overflow-hidden bg-[#E8E4DC]"
          >
            <img 
              src={cat.image} 
              alt={cat.name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/50" />
            
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
              <h3 className="font-serif text-white text-3xl tracking-[3px] mb-2 transition-opacity group-hover:opacity-90">
                {cat.name}
              </h3>
              <p className="text-white/80 text-sm tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {cat.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryTiles;