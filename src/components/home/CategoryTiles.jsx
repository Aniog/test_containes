import React from "react";
import { Link } from "react-router-dom";

export const CategoryTiles = () => {
  const categories = [
    { name: "Earrings", id: "earrings", imgRef: "gold earrings model" },
    { name: "Necklaces", id: "necklaces", imgRef: "gold necklace model" },
    { name: "Huggies", id: "huggies", imgRef: "gold huggie earrings" },
  ];

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <Link 
              key={cat.id} 
              to={`/shop?category=${cat.name}`}
              className="group relative aspect-[4/5] overflow-hidden bg-secondary"
            >
              <div 
                className="absolute inset-0 z-0 scale-100 group-hover:scale-110 transition-transform duration-1000"
                data-strk-bg-id={`cat-bg-${cat.id}`}
                data-strk-bg={`[cat-title-${cat.id}] ${cat.imgRef}`}
                data-strk-bg-ratio="4x5"
                data-strk-bg-width="800"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 z-10" />
              
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <h3 
                  id={`cat-title-${cat.id}`}
                  className="text-white font-serif text-3xl md:text-4xl tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                >
                  {cat.name}
                </h3>
              </div>
              
              <div className="absolute bottom-10 left-10 z-20 group-hover:opacity-0 transition-opacity duration-500">
                <span className="text-white font-serif text-xl tracking-widest uppercase">
                  {cat.name}
                </span>
                <div className="h-[1px] bg-white w-12 mt-2" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
