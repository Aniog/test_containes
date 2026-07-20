import React from "react";
import { Link } from "react-router-dom";

const CategoryTiles = () => {
  const categories = [
    { name: "Earrings", id: "earrings", img: "luxury gold earrings" },
    { name: "Necklaces", id: "necklaces", img: "luxury gold necklace" },
    { name: "Huggies", id: "huggies", img: "luxury gold huggie earrings" },
  ];

  return (
    <section className="py-24 container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((cat) => (
          <Link 
            key={cat.id} 
            to={`/category/${cat.id}`}
            className="group relative aspect-[4/5] overflow-hidden bg-slate-100"
          >
            <img 
              data-strk-img-id={`cat-${cat.id}`}
              data-strk-img={`[cat-name-${cat.id}] ${cat.img}`}
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              alt={cat.name}
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 id={`cat-name-${cat.id}`} className="text-white text-3xl font-serif opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                {cat.name}
              </h3>
            </div>
            {/* Mobile label */}
            <div className="absolute bottom-6 left-6 md:hidden">
              <h3 className="text-white text-2xl font-serif">{cat.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryTiles;
