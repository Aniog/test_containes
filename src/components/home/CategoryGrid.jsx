import React from 'react';
import { Link } from 'react-router-dom';

export const CategoryGrid = () => {
  const categories = [
    { title: "Earrings", slug: "Earrings", id: "cat-ears" },
    { title: "Necklaces", slug: "Necklaces", id: "cat-neck" },
    { title: "Huggies", slug: "Huggies", id: "cat-hug" },
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-muted/30">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((cat) => (
          <Link 
            key={cat.id}
            to={`/shop?cat=${cat.slug}`}
            className="group relative aspect-[4/5] overflow-hidden bg-muted"
          >
             <img
              alt={cat.title}
              data-strk-img-id={`cat-img-${cat.id}`}
              data-strk-img={`luxury gold ${cat.title} jewelry display minimalism`}
              data-strk-img-ratio="4x5"
              data-strk-img-width="600"
              src="/placeholder.svg"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/90 backdrop-blur-md px-10 py-5 translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-xl border border-border/50">
                <h3 className="text-xl font-serif uppercase tracking-[0.2em]">{cat.title}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
