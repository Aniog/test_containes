import React from 'react';
import { Link } from 'react-router-dom';

const CategoryTiles = () => {
  const categories = [
    { title: "Earrings", slug: "earrings" },
    { title: "Necklaces", slug: "necklaces" },
    { title: "Huggies", slug: "huggies" }
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <span id="cat-context" className="hidden">jewelry photography</span>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <Link 
            key={cat.title} 
            to={`/shop?category=${cat.title}`}
            className="group relative aspect-square overflow-hidden bg-brand-beige"
          >
            <img
              data-strk-img-id={`cat-${cat.slug}`}
              data-strk-img={`[cat-label-${cat.slug}] [cat-context]`}
              data-strk-img-ratio="1x1"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E"
              alt={cat.title}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span id={`cat-label-${cat.slug}`} className="text-white uppercase tracking-[0.3em] text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white py-3 px-8">
                {cat.title}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryTiles;
