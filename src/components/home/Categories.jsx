import { Link } from 'react-router-dom'
import { categories } from '@/data/products'

export default function Categories() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-wider uppercase text-charcoal-800 mb-4">
            Shop by Category
          </h2>
          <p className="text-charcoal-500 max-w-xl mx-auto">
            Find your perfect piece from our curated collections
          </p>
        </div>

        {/* Category Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[4/5] overflow-hidden bg-cream-200"
            >
              <img
                data-strk-img-id={`category-${category.id}`}
                data-strk-img={`[category-${category.id}-name] [category-${category.id}-desc] jewelry collection`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-charcoal-800/30 group-hover:bg-charcoal-800/50 transition-colors duration-300" />
              
              {/* Text elements for interpolation */}
              <span id={`category-${category.id}-name`} className="hidden">{category.name}</span>
              <span id={`category-${category.id}-desc`} className="hidden">{category.description}</span>

              {/* Label */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h3 className="font-serif text-3xl md:text-4xl text-white tracking-wider uppercase">
                  {category.name}
                </h3>
                <p className="text-white/80 mt-2 text-sm tracking-wide">
                  {category.description}
                </p>
                <span className="mt-4 text-sm text-white font-medium tracking-wider uppercase border-b border-white pb-1 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  Shop Now
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
