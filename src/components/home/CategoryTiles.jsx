import { Link } from 'react-router-dom'
import { CATEGORIES } from '@/data/products'

export default function CategoryTiles() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3 font-sans">
            Browse by
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-foreground">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/5] overflow-hidden bg-muted"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-xl md:text-2xl font-serif tracking-[0.08em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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