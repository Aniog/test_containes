import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CategoryTiles = () => {
  const categories = [
    { name: "Earrings", slug: "earrings", img: "earrings-tile" },
    { name: "Necklaces", slug: "necklaces", img: "necklaces-tile" },
    { name: "Huggies", slug: "huggies", img: "huggies-tile" },
  ];

  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((cat, idx) => (
          <Link key={cat.slug} to={`/shop?category=${cat.slug}`} className="relative aspect-[4/5] overflow-hidden group">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: idx * 0.2 }}
              className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
              data-strk-bg={`luxury gold ${cat.name} flatlay macro`}
              data-strk-bg-id={`category-tile-${cat.slug}`}
              data-strk-bg-ratio="4x5"
              data-strk-bg-width="800"
            />
            
            {/* Overlay label */}
            <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col items-center justify-center bg-gradient-to-t from-black/20 to-transparent">
                <span className="text-white uppercase tracking-widest text-sm font-bold opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    Explore
                </span>
                <h3 className="text-white text-3xl font-serif mt-2 ">{cat.name}</h3>
            </div>
            
            {/* Outline border effect on hover */}
            <div className="absolute inset-4 border border-white/40 opacity-0 group-hover:opacity-100 scale-105 group-hover:scale-100 transition-all duration-500" />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryTiles;
