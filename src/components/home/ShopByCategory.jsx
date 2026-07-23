import { Link } from "react-router-dom"
import { useStrkImages } from "@/lib/useStrkImages"
import { categories } from "@/data/products"

export default function ShopByCategory() {
  const ref = useStrkImages([])

  return (
    <section ref={ref} className="max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-28">
      <div className="text-center mb-12 md:mb-16">
        <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-3">
          Explore
        </p>
        <h2 className="font-serif text-4xl md:text-5xl font-light">
          Shop by Category
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            to={`/shop?category=${cat.name}`}
            className="group relative overflow-hidden aspect-[4x5] bg-sand"
          >
            <img
              data-strk-img-id={cat.imgId}
              data-strk-img={`[${cat.descId}] [${cat.titleId}] warm gold jewelry editorial`}
              data-strk-img-ratio="4x5"
              data-strk-img-width="600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={cat.name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-espresso/20 group-hover:bg-espresso/40 transition-colors duration-500" />
            <div className="absolute inset-0 flex items-end justify-center pb-10">
              <div className="text-center text-ivory translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <h3
                  id={cat.titleId}
                  className="font-serif text-3xl uppercase tracking-[0.15em]"
                >
                  {cat.name}
                </h3>
                <p id={cat.descId} className="sr-only">
                  {cat.name} collection
                </p>
                <span className="inline-block mt-3 text-[11px] uppercase tracking-[0.2em] border-b border-ivory/60 pb-1">
                  Shop Now
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
