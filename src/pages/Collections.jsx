import { Link } from "react-router-dom"
import { categories } from "@/data/products"
import StrkImage from "@/components/ui/StrkImage"
import { useStrkImages } from "@/hooks/useStrkImages"

export default function Collections() {
  const ref = useStrkImages([])
  return (
    <div ref={ref} className="pt-16 md:pt-20">
      <section className="py-16 md:py-24 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-[11px] uppercase tracking-[0.25em] text-gold mb-4">Curated Edits</p>
          <h1 className="font-serif text-4xl md:text-6xl font-light">Collections</h1>
          <p className="mt-5 text-stone">
            Thoughtfully grouped edits — from everyday essentials to gift-ready sets.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-10 pb-24 grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((c) => (
          <Link
            key={c.id}
            to={`/shop?category=${c.name}`}
            className="group relative overflow-hidden aspect-[3/4] bg-sand"
          >
            <StrkImage
              imgId={`${c.imgId}-col`}
              query={`[${c.titleId}] [${c.descId}]`}
              ratio="3x4"
              width={700}
              alt={c.name}
              className="transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7 text-cream">
              <h2 id={c.titleId} className="font-serif text-2xl md:text-3xl uppercase tracking-[0.14em]">
                {c.name}
              </h2>
              <p id={c.descId} className="text-xs uppercase tracking-[0.2em] text-champagne mt-1.5">
                {c.tagline}
              </p>
            </div>
          </Link>
        ))}
      </section>
    </div>
  )
}
