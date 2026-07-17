import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { categories } from '@/data/products'

export default function CategoryTiles() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="section-subheading">Browse By</p>
          <h2 className="section-heading mt-3">Shop by Category</h2>
          <div className="w-12 h-[1px] bg-gold-400 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/5] overflow-hidden bg-ink-100"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <span className="text-xs uppercase tracking-[0.2em] text-gold-300 font-medium">
                  {cat.count} {cat.count === 1 ? 'Piece' : 'Pieces'}
                </span>
                <h3 className="text-2xl md:text-3xl text-white font-serif font-light mt-1">
                  {cat.name}
                </h3>
                <div className="flex items-center gap-2 text-white/70 text-xs uppercase tracking-widest mt-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <span>Shop Now</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}