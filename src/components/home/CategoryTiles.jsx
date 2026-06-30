import { Link } from "react-router-dom"
import { CATEGORIES } from "../../data/products"
import { ArrowRight } from "lucide-react"

export default function CategoryTiles() {
  return (
    <section className="py-16 lg:py-20 bg-brand-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-brand-gold text-xs font-sans uppercase tracking-[0.2em] mb-3">
            Browse by Category
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-dark font-light tracking-[0.05em]">
            Find Your Piece
          </h2>
          <div className="w-12 h-[1px] bg-brand-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {CATEGORIES.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[4/5] sm:aspect-[3/4] overflow-hidden bg-brand-warm"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

              {/* Label on hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-black/30">
                <div className="text-center">
                  <h3 className="font-serif text-2xl sm:text-3xl text-brand-white uppercase tracking-[0.15em] mb-2">
                    {category.name}
                  </h3>
                  <span className="inline-flex items-center gap-2 text-brand-gold text-sm font-sans uppercase tracking-wider">
                    Shop Now <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

              {/* Default label (mobile) */}
              <div className="absolute bottom-6 left-6 sm:hidden">
                <h3 className="font-serif text-xl text-brand-white uppercase tracking-[0.15em]">
                  {category.name}
                </h3>
                <span className="text-brand-gold text-xs font-sans uppercase tracking-wider">
                  {category.count} pieces
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}