import { Link } from "react-router-dom"
import { categories } from "@/data/products"
import { useStrkImages } from "@/components/ui/StrkImage"

export default function CategoryTiles() {
  const ref = useStrkImages([])

  return (
    <section ref={ref} className="py-20 md:py-28">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs uppercase tracking-widest3 text-gold mb-3">Explore</p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink font-light">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.name}`}
              className="group relative overflow-hidden aspect-[4x5] md:aspect-[3x4]"
            >
              <img
                alt={cat.name}
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.descId}] [${cat.titleId}] gold jewelry editorial`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-luxury group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-ink/20 group-hover:bg-ink/35 transition-colors duration-500" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                <h3
                  id={cat.titleId}
                  className="font-serif text-cream text-3xl md:text-4xl uppercase tracking-widest2"
                >
                  {cat.name}
                </h3>
                <p id={cat.descId} className="sr-only">
                  {cat.desc}
                </p>
                <span className="mt-3 text-cream/90 text-[11px] uppercase tracking-widest2 border-b border-cream/50 pb-1 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-luxury">
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
