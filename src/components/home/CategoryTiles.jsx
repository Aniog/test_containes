import React, { useState } from "react";
import { Link } from "react-router-dom";

const categories = [
  {
    label: "Earrings",
    img: "https://images.unsplash.com/photo-1617038220319-18d1e0056721?w=800&auto=format&fit=crop&q=80",
  },
  {
    label: "Necklaces",
    img: "https://images.unsplash.com/photo-1599643478518-17488fbbcd75?w=800&auto=format&fit=crop&q=80",
  },
  {
    label: "Huggies",
    img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&auto=format&fit=crop&q=80",
  },
];

function CategoryCard({ label, img }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      to="/collection"
      className="relative block overflow-hidden rounded-sm aspect-[4/5] group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={img}
        alt={label}
        className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ${
          hovered ? "scale-105" : "scale-100"
        }`}
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/20 transition-opacity duration-500 group-hover:bg-black/35" />
      <div className="absolute inset-0 flex items-center justify-center">
        <span
          className={`font-serif text-xl sm:text-2xl tracking-[0.15em] uppercase text-white transition-all duration-500 ${
            hovered ? "opacity-100 translate-y-0" : "opacity-90 translate-y-0"
          }`}
        >
          {label}
        </span>
      </div>
    </Link>
  );
}

export default function CategoryTiles() {
  return (
    <section className="py-14 sm:py-20 bg-velmora-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {categories.map((c) => (
            <CategoryCard key={c.label} label={c.label} img={c.img} />
          ))}
        </div>
      </div>
    </section>
  );
}
