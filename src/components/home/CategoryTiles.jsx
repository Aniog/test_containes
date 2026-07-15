import { Link } from "react-router-dom"
import { categories } from "@/data/products"
import { useStrkImages } from "@/lib/useStrkImages"

const CATEGORY_LINKS = {
  earrings: "/shop?category=Earrings",
  necklaces: "/shop?category=Necklaces",
  huggies: "/shop?category=Huggies",
}

export default function CategoryTiles() {
  const ref = useStrkImages([])

  return (
    <section ref={ref} className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
      <div className="mb-12 flex flex-col items-center text-center">
        <p className="text-[11px] uppercase tracking-widest3 text-gold">Explore</p>
        <h2 className="mt-3 font-serif text-4xl text-charcoal md:text-5xl">Shop by Category</h2>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            to={CATEGORY_LINKS[cat.id]}
            className="group relative aspect-[4/5] overflow-hidden bg-cream-deep"
          >
            <img
              alt={cat.name}
              data-strk-img-id={cat.imgId}
              data-strk-img={`[${cat.descId}] [${cat.titleId}] gold jewelry editorial`}
              data-strk-img-ratio="4x5"
              data-strk-img-width="600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-7">
              <h3
                id={cat.titleId}
                className="font-serif text-2xl uppercase tracking-widest2 text-cream md:text-3xl"
              >
                {cat.name}
              </h3>
              <p
                id={cat.descId}
                className="mt-1 max-w-xs translate-y-2 text-sm text-cream/80 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
              >
                {cat.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
