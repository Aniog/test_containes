import React from "react"
import { Link } from "react-router-dom"

const categories = [
  {
    id: "earrings",
    name: "Earrings",
    image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&h=600&fit=crop&crop=center",
  },
  {
    id: "necklaces",
    name: "Necklaces",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&h=600&fit=crop&crop=center",
  },
  {
    id: "huggies",
    name: "Huggies",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&h=600&fit=crop&crop=center",
  },
]

export default function CategoryTiles() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-velmora-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <p className="font-sans text-[11px] tracking-[0.2em] uppercase text-velmora-gold mb-3">
            Explore
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-velmora-text font-normal">
            Shop by Category
          </h2>
          <div className="w-12 h-px bg-velmora-gold mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/collection?category=${cat.id}`}
              className="group relative aspect-[4/3] overflow-hidden"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="font-serif text-2xl sm:text-3xl text-white tracking-wide mb-3">
                    {cat.name}
                  </h3>
                  <span className="font-sans text-[11px] tracking-[0.15em] uppercase text-white/80 border-b border-white/40 pb-1 group-hover:border-white group-hover:text-white transition-colors">
                    Shop Now
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
