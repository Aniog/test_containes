import React from 'react';
import { Link } from 'react-router-dom';

const CategoryTiles = () => {
  const categories = [
    { title: "Earrings", slug: "earrings", count: "42 pieces" },
    { title: "Necklaces", slug: "necklaces", count: "28 pieces" },
    { title: "Huggies", slug: "huggies", count: "15 pieces" }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <Link 
              key={idx}
              to={`/shop?category=${cat.slug}`}
              className="relative aspect-[3/4] group overflow-hidden bg-stone-100"
            >
              <img
                data-strk-img-id={`cat-tile-${cat.slug}`}
                data-strk-img={`gold jewelry ${cat.title} collection editorial aesthetic`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-black/20 transition-colors duration-500" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-white">
                <h3 className="text-3xl font-serif mb-2 tracking-wide translate-y-2 group-hover:translate-y-0 transition-transform duration-500">{cat.title}</h3>
                <span className="text-[10px] uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-opacity duration-500">{cat.count}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryTiles;
