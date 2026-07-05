import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { categories } from '@/data/products'

export default function CategoryTiles() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-gold text-xs uppercase tracking-[0.25em] mb-4 font-sans">Browse by</p>
          <h2 className="font-serif text-3xl md:text-4xl text-velvet-50">Categories</h2>
          <div className="w-12 h-[1px] bg-gold/40 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[4/5] overflow-hidden rounded-sm"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-500" />

              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h3 className="font-serif text-2xl md:text-3xl text-velvet-50 tracking-wider mb-2">
                  {category.name}
                </h3>
                <p className="text-velvet-50/60 text-sm font-sans">{category.count} Pieces</p>
                <div className="mt-6 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  <span className="inline-flex items-center gap-2 text-gold text-xs uppercase tracking-[0.2em] font-sans">
                    Shop Now <ArrowRight className="w-3.5 h-3.5" />
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