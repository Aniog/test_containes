import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ArrowUpRight } from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { products } from "@/data/products"

const featured = products.slice(0, 3)

const HomeFeatured = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="bg-bone">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-4 mb-5">
              <span className="h-px w-12 bg-accent" />
              <p id="featured-eyebrow" className="text-xs uppercase tracking-[0.35em] text-accent">The Collection</p>
            </div>
            <h2 id="featured-title" className="font-serif font-light text-4xl md:text-5xl leading-tight text-graphite max-w-2xl">
              Folding machines, shaped around your workshop.
            </h2>
          </div>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.25em] text-graphite hover:text-accent transition-colors"
          >
            View all machines
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-hairline border border-hairline">
          {featured.map((p) => (
            <article key={p.id} className="group bg-cloud p-0 flex flex-col">
              <div className="relative aspect-[4/3] overflow-hidden bg-bone">
                <img
                  alt={p.name}
                  data-strk-img-id={p.imgId}
                  data-strk-img={`[${p.descId}] [${p.titleId}] [featured-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="900"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-7 flex-1 flex flex-col">
                <p className="text-[10px] uppercase tracking-[0.3em] text-accent">{p.category}</p>
                <h3 id={p.titleId} className="mt-3 font-serif text-2xl text-graphite">{p.name}</h3>
                <p id={p.descId} className="mt-3 text-sm text-muted-ink leading-relaxed flex-1">
                  {p.tagline} {p.description}
                </p>
                <Link
                  to="/products"
                  className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-graphite group-hover:text-accent transition-colors"
                >
                  Details
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomeFeatured
