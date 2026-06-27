import { Link } from "react-router-dom"
import { categories } from "@/data/products"

export default function CollectionsPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h1 className="text-3xl md:text-4xl text-charcoal font-semibold" style={{ fontFamily: "Cormorant Garamond, Georgia, serif" }}>
            Our Collections
          </h1>
          <div className="w-12 h-[1px] bg-gold mx-auto mt-4" />
          <p className="text-taupe text-sm mt-4 max-w-md mx-auto font-light">
            Explore our thoughtfully curated collections, each designed to celebrate a different facet of modern elegance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/5] overflow-hidden"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3
                  className="text-2xl md:text-3xl text-white font-semibold"
                  style={{ fontFamily: "Cormorant Garamond, Georgia, serif" }}
                >
                  {cat.name}
                </h3>
                <p className="text-white/60 text-sm mt-1 font-light">Shop the collection</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}