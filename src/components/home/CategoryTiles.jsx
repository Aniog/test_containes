import { Link } from 'react-router-dom'
import { categories } from '@/data/products'
import { ArrowRight } from 'lucide-react'

export default function CategoryTiles() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <p className="section-subtitle mb-3">Shop by Category</p>
          <h2 className="section-title">Find Your Perfect Piece</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/3] md:aspect-square overflow-hidden rounded-sm bg-dark-50"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-dark-900/30 group-hover:bg-dark-900/40 transition-all duration-300" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-cream">
                <h3 className="font-serif text-2xl md:text-3xl tracking-wider mb-2">{cat.name}</h3>
                <p className="text-sm text-cream/80 tracking-wider uppercase font-sans flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Shop Now <ArrowRight size={14} />
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}