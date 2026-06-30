import { Link } from 'react-router-dom'
import { categories } from '../../data/products'

export default function CategoryTiles() {
  return (
    <section className="py-16 lg:py-20 bg-cream-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-xs tracking-[0.15em] uppercase text-brand-400 font-sans mb-3">
            Find your style
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-brand-900 tracking-wide">
            Shop by Category
          </h2>
          <div className="w-12 h-px bg-gold-500/50 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/3] md:aspect-[3/4] overflow-hidden rounded-sm bg-brand-200"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-brand-950/0 group-hover:bg-brand-950/40 transition-all duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-display text-2xl md:text-3xl text-white tracking-wider opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
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