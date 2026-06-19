import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { categories } from '@/data/products'

export default function CategoryTiles() {
  return (
    <section className="py-16 md:py-24 bg-[#F0E9DF]">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center mb-10 md:mb-14">
          <p className="font-sans text-[11px] tracking-[0.12em] uppercase text-[#C69C6D] mb-3">
            Browse by
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2D2A24]">
            Shop by Category
          </h2>
          <div className="w-16 h-[1px] bg-[#C69C6D] mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/5] overflow-hidden bg-[#1C1A17]"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-white tracking-[0.08em] uppercase">
                  {cat.name}
                </h3>
                <span className="inline-flex items-center gap-1.5 text-white/70 font-sans text-xs tracking-[0.08em] uppercase mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Shop Now <ArrowRight size={12} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}