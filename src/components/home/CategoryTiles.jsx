import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { categories } from '@/data/products'

export default function CategoryTiles() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-gold text-xs uppercase tracking-[0.2em] font-medium mb-3">Browse by</p>
          <h2 className="font-serif text-3xl md:text-4xl text-cream-900">Shop by Category</h2>
          <div className="w-12 h-[1px] bg-gold/40 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[4/5] overflow-hidden bg-cream-100"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 transition-all duration-500 group-hover:bg-black/40" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <h3 className="font-serif text-3xl md:text-4xl tracking-wide opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  {category.name}
                </h3>
                <p className="text-xs uppercase tracking-wider text-white/70 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75">
                  {category.count}
                </p>
                <span className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-white/90 mt-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 border-b border-white/40 pb-0.5">
                  Shop Now <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}