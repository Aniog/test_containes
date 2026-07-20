import React from "react";
import { Link } from "react-router-dom";
import { categories } from "@/data/products";

const Categories = () => {
  return (
    <section className="section-container py-16 md:py-24">
      <div className="text-center">
        <p className="eyebrow">Explore</p>
        <h2 className="mt-2 font-serif text-3xl md:text-4xl text-ink">Shop by category</h2>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/shop?category=${category.id}`}
            className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-2xl bg-background"
          >
            <img
              src={category.image}
              alt={category.label}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-black/30" />
            <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
              <p className="font-serif text-xl md:text-2xl text-white">{category.label}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories;
