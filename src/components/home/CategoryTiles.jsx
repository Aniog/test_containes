import { Link } from "react-router-dom"
import { categories } from "@/data/products"
import { useStrkImages } from "@/hooks/useStrkImages"

export default function CategoryTiles() {
  const containerRef = useStrkImages([])

  return (
    <section ref={containerRef} className="bg-sand py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col items-center text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-champagne-deep">
            Explore
          </p>
          <h2 className="mt-3 font-serif text-3xl text-ink md:text-4xl">
            Shop by Category
          </h2>
          <div className="mt-5 h-px w-12 bg-champagne" />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${encodeURIComponent(cat.slug)}`}
              className="group relative aspect-[4/5] overflow-hidden bg-cream md:aspect-[3/4]"
            >
              <img
                alt={cat.name}
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent transition-opacity duration-500 group-hover:from-ink/80" />
              <div className="absolute inset-x-0 bottom-0 p-7 text-center">
                <h3
                  id={cat.titleId}
                  className="font-serif text-2xl uppercase tracking-[0.15em] text-cream"
                >
                  {cat.name}
                </h3>
                <p
                  id={cat.descId}
                  className="mt-1.5 translate-y-2 text-xs uppercase tracking-[0.15em] text-cream/0 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:text-cream/80 group-hover:opacity-100"
                >
                  {cat.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
