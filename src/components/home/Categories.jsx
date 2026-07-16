import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
  const categories = [
    { title: "Earrings", path: "/shop?category=Earrings" },
    { title: "Necklaces", path: "/shop?category=Necklaces" },
    { title: "Huggies", path: "/shop?category=Huggies" }
  ];

  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((cat, i) => (
          <Link 
            key={i} 
            to={cat.path}
            className="group relative aspect-[4/5] overflow-hidden"
          >
            <div 
              className="absolute inset-0 z-0 transition-transform duration-1000 group-hover:scale-110"
              data-strk-bg-id={`cat-bg-${i}`}
              data-strk-bg={`[cat-title-${i}] jewelry collection`}
              data-strk-bg-ratio="4x5"
              data-strk-bg-width="800"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors z-10" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-20">
              <h3 id={`cat-title-${i}`} className="font-serif text-3xl md:text-4xl uppercase tracking-widest mb-4">
                {cat.title}
              </h3>
              <span className="font-sans text-[10px] uppercase tracking-[0.3em] translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                Shop Selection
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories;
