import React from 'react';
import { Link } from 'react-router-dom';

const CategoryTiles = () => {
  const categories = [
    { name: 'Earrings', path: '/shop?category=Earrings', img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80' },
    { name: 'Necklaces', path: '/shop?category=Necklaces', img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80' },
    { name: 'Huggies', path: '/shop?category=Huggies', img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80' },
  ];

  return (
    <section className="max-w-[1440px] mx-auto px-6 py-20">
      <div className="text-center mb-12">
        <div className="font-serif text-3xl tracking-[1px] text-[#2C2522]">Shop by Category</div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {categories.map((cat) => (
          <Link key={cat.name} to={cat.path} className="group relative aspect-[16/10] overflow-hidden bg-[#EDE7DC]">
            <img 
              src={cat.img} 
              alt={cat.name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-serif text-white text-3xl tracking-[3px] opacity-0 group-hover:opacity-100 transition-opacity">
                {cat.name.toUpperCase()}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryTiles;
