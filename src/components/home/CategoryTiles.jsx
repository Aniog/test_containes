import { Link } from "react-router-dom"
import { categories } from "@/data/products"

export default function CategoryTiles() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.25em] text-muted mb-3">Browse by</p>
          <h2 className="text-3xl md:text-4xl text-charcoal font-semibold" style={{ fontFamily: "Cormorant Garamond, Georgia, serif" }}>
            Categories
          </h2>
          <div className="w-12 h-[1px] bg-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/5] overflow-hidden bg-hairline/30"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/40 transition-all duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-2xl md:text-3xl font-semibold opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500" style={{ fontFamily: "Cormorant Garamond, Georgia, serif" }}>
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