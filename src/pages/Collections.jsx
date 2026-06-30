import { Link } from 'react-router-dom'
import { categories } from '../data/products'

export default function Collections() {
  return (
    <main className="bg-cream-50 min-h-screen pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-12 lg:pt-20">
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl md:text-4xl text-brand-900 tracking-wide">
            Collections
          </h1>
          <div className="w-12 h-px bg-gold-500/50 mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[3/4] overflow-hidden rounded-sm bg-brand-200"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <h2 className="font-display text-2xl text-white tracking-wider">
                  {cat.name}
                </h2>
                <span className="text-xs text-brand-200 font-sans tracking-wider uppercase mt-2 inline-block border-b border-cream-50/30 pb-0.5">
                  Shop Now
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}