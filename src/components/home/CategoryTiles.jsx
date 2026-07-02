import { Link } from 'react-router-dom'
import { categories } from '@/data/products'

const bgColors = ['bg-velmora-blush', 'bg-velmora-sand', 'bg-velmora-warmwhite']

export default function CategoryTiles() {
  return (
    <section className="py-20 md:py-28 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <p className="section-subtitle mb-3">Discover</p>
          <h2 className="section-title">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat, i) => (
            <Link
              key={cat.slug}
              to={`/shop?category=${cat.name}`}
              className="group relative aspect-[4/5] overflow-hidden"
            >
              <div className={`absolute inset-0 ${bgColors[i]} flex items-center justify-center`}>
                <span className="text-velmora-stone/30 font-serif text-2xl tracking-wider uppercase">
                  {cat.name}
                </span>
              </div>
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <span className="font-serif text-2xl md:text-3xl text-white tracking-wider border-b border-white/40 pb-2">
                  {cat.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}