import { Link } from 'react-router-dom'
import { categories } from '../../data/products'

export function CategoryTiles() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-gold-600 text-sm tracking-extra-wide uppercase mb-2">
            Curated Collections
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal-900">
            Shop by Category
          </h2>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[4/5] overflow-hidden rounded-lg"
            >
              {/* Background Image */}
              <img
                src={category.image}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 via-charcoal-900/20 to-transparent transition-opacity duration-300" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                <h3 className="font-serif text-2xl md:text-3xl text-cream-50 mb-2 transform translate-y-0 group-hover:translate-y-[-4px] transition-transform duration-300">
                  {category.name}
                </h3>
                <p className="text-cream-100/80 text-sm mb-4 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 delay-75">
                  {category.description}
                </p>
                <span className="inline-flex items-center gap-2 text-cream-50 text-sm font-medium tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
                  <span>Shop Now</span>
                  <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
