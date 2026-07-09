import { Link } from 'react-router-dom'
import { categories } from '@/data/products'
import { ArrowRight } from 'lucide-react'

export default function CategoryTiles() {
  return (
    <section className="py-16 md:py-24 bg-velmora-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.2em] text-velmora-gold mb-3 font-sans">
            Find Your Style
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-dark">
            Shop by Category
          </h2>
          <div className="w-12 h-px bg-velmora-gold/40 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map(cat => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-velmora-warm-light"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-serif text-xl md:text-2xl text-white mb-1">{cat.name}</h3>
                <p className="text-xs text-white/70 uppercase tracking-[0.1em]">{cat.count}</p>
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}