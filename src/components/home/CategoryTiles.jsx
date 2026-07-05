import { Link } from 'react-router-dom'
import { categories } from '@/data/products'

export default function CategoryTiles() {
  return (
    <section className="py-16 md:py-24 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.25em] text-velmora-gold mb-3">
            Shop by Category
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-velmora-ink">
            Find Your Piece
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.slice(0, 3).map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-velmora-sand"
            >
              <div
                data-strk-bg-id={`category-${category.id}`}
                data-strk-bg={`[category-${category.id}-label]`}
                data-strk-bg-ratio="3x4"
                data-strk-bg-width="800"
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 strk-placeholder"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E")`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent md:bg-black/20 md:group-hover:bg-black/30 transition-colors duration-500" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-velmora-cream opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500">
                <h3
                  id={`category-${category.id}-label`}
                  className="font-serif text-3xl md:text-4xl tracking-wide mb-2"
                >
                  {category.label}
                </h3>
                <span className="text-xs uppercase tracking-[0.2em] border-b border-velmora-cream pb-1">
                  Explore
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
