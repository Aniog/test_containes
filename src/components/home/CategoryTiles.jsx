import React from "react";
import { Link } from "react-router-dom";

const categories = [
  {
    id: "earrings",
    label: "Earrings",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
    description: "From delicate studs to sculptural cuffs"
  },
  {
    id: "necklaces",
    label: "Necklaces",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
    description: "Layered chains and crystal pendants"
  },
  {
    id: "huggies",
    label: "Huggies",
    image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80",
    description: "Everyday essentials, reimagined"
  }
];

const CategoryTiles = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-12">
        <span className="text-xs tracking-[3px] text-[#B89778]">EXPLORE</span>
        <h2 className="font-serif text-4xl tracking-[1px] mt-1">Shop by Category</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            to={`/shop?category=${cat.id}`}
            className="category-tile group block aspect-[4/3] bg-[#E5DFD6] overflow-hidden relative"
          >
            <img
              src={cat.image}
              alt={cat.label}
              className="w-full h-full object-cover"
            />
            <div className="category-label absolute inset-x-0 bottom-0 bg-white/95 px-6 py-5">
              <h3 className="font-serif text-xl tracking-[1px] mb-1">{cat.label}</h3>
              <p className="text-xs text-[#9A8F82] group-hover:text-white/90 transition-colors">
                {cat.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryTiles;
