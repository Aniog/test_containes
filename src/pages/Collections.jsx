import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { categories } from "@/data/products"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

export default function Collections() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef} className="pt-20">
      <div className="border-b border-sand bg-cream">
        <div className="mx-auto max-w-8xl px-5 py-14 text-center md:px-8 md:py-20">
          <p className="text-xs uppercase tracking-widest3 text-gold">Curated Edits</p>
          <h1 className="mt-3 font-serif text-5xl text-ink md:text-6xl">Collections</h1>
          <p className="mx-auto mt-4 max-w-md text-base text-stone">
            Explore our curated edits — each designed around a moment, a mood, a way to wear.
          </p>
        </div>
      </div>

      <section className="mx-auto max-w-8xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[3/4] overflow-hidden bg-cream"
            >
              <img
                alt={cat.name}
                data-strk-img-id={`${cat.imgId}-coll`}
                data-strk-img={`[${cat.descId}] [${cat.titleId}] gold jewelry editorial collection`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-8 text-center">
                <h2
                  id={cat.titleId}
                  className="font-serif text-3xl uppercase tracking-wider text-ivory"
                >
                  {cat.name}
                </h2>
                <p id={cat.descId} className="mt-2 text-sm text-ivory/80">
                  {cat.tagline}
                </p>
                <span className="mt-4 inline-block text-xs uppercase tracking-widest2 text-gold-light">
                  Explore →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
