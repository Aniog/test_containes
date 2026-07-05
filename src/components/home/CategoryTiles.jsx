import { Link } from "react-router-dom"
import { categories } from "@/data/products"
import { useStrkImages } from "@/hooks/useStrkImages"
import { useReveal } from "@/hooks/useReveal"

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export default function CategoryTiles() {
  const containerRef = useStrkImages([])
  const revealRef = useReveal([])

  return (
    <section
      ref={(node) => {
        containerRef.current = node
        revealRef.current = node
      }}
      className="mx-auto max-w-8xl px-5 py-20 md:px-10 md:py-28"
    >
      <div className="reveal mb-12 text-center">
        <p className="font-sans text-[11px] uppercase tracking-ultra text-gold-600">
          Explore
        </p>
        <h2 className="mt-3 font-serif text-4xl text-espresso-900 md:text-5xl">
          Shop by Category
        </h2>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            to={`/shop?category=${cat.id}`}
            className="reveal group relative aspect-[4/5] overflow-hidden bg-espresso-100"
          >
            <img
              alt={cat.name}
              data-strk-img-id={cat.imgId}
              data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
              data-strk-img-ratio="4x5"
              data-strk-img-width="700"
              src={PLACEHOLDER}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/70 via-espresso-950/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7 text-cream">
              <h3
                id={cat.titleId}
                className="font-sans text-sm uppercase tracking-ultra"
              >
                {cat.name}
              </h3>
              <p
                id={cat.descId}
                className="mt-1 max-w-[14rem] translate-y-2 font-serif text-base italic text-cream/80 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
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
