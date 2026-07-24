import { Link } from 'react-router-dom'
import { categories } from '@/data/products.js'

export default function CategoryTiles() {
  return (
    <section className="py-16 md:py-24 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <h2 className="font-serif text-3xl md:text-4xl text-velmora-charcoal text-center mb-12">
          Shop by Category
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/5] overflow-hidden bg-velmora-sand"
            >
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                data-strk-img-id={`category-${cat.id}`}
                data-strk-img={`[category-name-${cat.id}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
              />
              <span id={`category-name-${cat.id}`} className="sr-only">
                {cat.name} gold jewelry collection
              </span>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />

              {/* Label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-2xl md:text-3xl text-white tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500 drop-shadow-lg">
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