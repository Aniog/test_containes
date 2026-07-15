import { Link } from "react-router-dom"
import { categories } from "@/data/products"
import { useStrkImages } from "@/lib/useStrkImages"

export default function CategoryTiles() {
  const ref = useStrkImages([])

  return (
    <section ref={ref} className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs uppercase tracking-widest2 text-champagne mb-3">
            Explore
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.name}`}
              className="group relative overflow-hidden aspect-[4/5] bg-sand"
            >
              <img
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.descId}] [${cat.titleId}] gold jewelry editorial`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-ink/20 group-hover:bg-ink/40 transition-colors duration-500" />
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-10 text-center">
                <h3
                  id={cat.titleId}
                  className="font-serif text-cream text-3xl uppercase tracking-widest3 mb-2"
                >
                  {cat.name}
                </h3>
                <p
                  id={cat.descId}
                  className="text-cream/80 text-xs uppercase tracking-widest2 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                >
                  {cat.blurb}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
