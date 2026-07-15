import React from 'react';
import { Link } from 'react-router-dom';
const CategoryTiles = () => {
  const categories = [
    { name: "Earrings", path: "/shop?category=Earrings", imgQuery: "gold earrings elegant background" },
    { name: "Necklaces", path: "/shop?category=Necklaces", imgQuery: "gold necklace statement piece" },
    { name: "Huggies", path: "/shop?category=Huggies", imgQuery: "small gold huggie earrings closeup" }
  ];
  return (
    <section className="py-24 px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
      {categories.map((cat, idx) => (
        <Link key={idx} to={cat.path} className="relative aspect-[4/5] overflow-hidden group">
          <div
            className="absolute inset-0 z-0 transition-transform duration-1000 group-hover:scale-110"
            data-strk-bg-id={`cat-bg-${idx}`}
            data-strk-bg={`[cat-name-${idx}] gold jewelry luxury backdrop`}
            data-strk-bg-ratio="4x5"
            data-strk-bg-width="800"
          >
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h3 id={`cat-name-${idx}`} className="text-white font-serif text-3xl tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              {cat.name}
            </h3>
          </div>
          <div className="absolute bottom-10 left-10">
            <span className="text-white font-serif text-2xl tracking-[0.2em] group-hover:opacity-0 transition-opacity duration-500 uppercase">
              {cat.name}
            </span>
          </div>
        </Link>
      ))}
    </section>
  );
};
export default CategoryTiles;
