import { Link } from "react-router-dom"
import { categories } from "../../data/products"

export default function CategoryTiles() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-xs uppercase tracking-[0.15em] text-warm-gold font-medium mb-3">
            Find Your Style
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-dark-charcoal font-light">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/5] sm:aspect-[3/4] overflow-hidden bg-ivory"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <h3 className="font-serif text-2xl sm:text-3xl text-ivory font-light mb-1">
                  {cat.name}
                </h3>
                <p className="text-ivory/60 text-xs uppercase tracking-[0.1em]">
                  {cat.count}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}