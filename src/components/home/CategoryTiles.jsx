import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { categories } from "@/data/products"
import SectionHeading from "@/components/home/SectionHeading"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

export default function CategoryTiles() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="mx-auto max-w-8xl px-5 py-20 md:px-8 md:py-28">
      <SectionHeading
        eyebrow="Find Your Edit"
        title="Shop by Category"
        subtitle="From everyday huggies to statement drops."
      />
      <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            to={`/shop?category=${cat.id}`}
            className="group relative aspect-[4/5] overflow-hidden bg-cream md:aspect-[3/4]"
          >
            <img
              alt={cat.name}
              data-strk-img-id={`${cat.imgId}-tile`}
              data-strk-img={`[${cat.descId}] [${cat.titleId}] gold jewelry editorial`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="700"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-center">
              <h3
                id={cat.titleId}
                className="font-serif text-3xl uppercase tracking-wider text-ivory"
              >
                {cat.name}
              </h3>
              <p id={cat.descId} className="mt-1 text-sm text-ivory/80">
                {cat.tagline}
              </p>
              <span className="mt-3 inline-block text-xs uppercase tracking-widest2 text-gold-light opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Shop Now →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
