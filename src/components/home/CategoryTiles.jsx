import React from 'react';
import { Link } from 'react-router-dom';

export function CategoryTiles() {
  const categories = [
    {
      name: "Earrings",
      img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=800&h=1000",
      link: "/collections/earrings"
    },
    {
      name: "Necklaces",
      img: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&q=80&w=800&h=1000",
      link: "/collections/necklaces"
    },
    {
      name: "Huggies",
      img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=800&h=1000",
      link: "/collections/huggies"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <Link key={idx} to={cat.link} className="group relative block aspect-[4/5] overflow-hidden bg-muted">
              <img 
                src={cat.img} 
                alt={cat.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 group-hover:bg-black/40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white text-3xl font-serif tracking-widest uppercase opacity-90 group-hover:opacity-100 transition-opacity drop-shadow-md">
                  {cat.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
