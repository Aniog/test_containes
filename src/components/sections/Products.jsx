import { useEffect, useRef } from "react"
import { ArrowUpRight } from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import Reveal from "@/components/ui/Reveal"
import { products } from "@/data/site"

export default function Products() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="products" ref={containerRef} className="bg-cream py-20 md:py-28 lg:py-32">
      <div className="max-w-container mx-auto px-6 md:px-10">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-[11px] md:text-xs uppercase tracking-eyebrow text-brass-deep font-medium">
              <span className="inline-block w-8 h-px bg-brass align-middle mr-3" />
              The product line · 01 / 07
            </p>
            <h2 id="products-title" className="mt-5 font-display font-light text-ink text-3xl md:text-5xl leading-tight">
              Seven machines, one philosophy of precision.
            </h2>
            <p id="products-intro" className="mt-5 text-slate text-lg leading-relaxed max-w-2xl">
              From the workshop floor to the aerospace line, our range of double folding machines and sheet
              metal folder solutions is engineered around a single idea: the fold should disappear into the
              finished part.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((p, i) => (
            <Reveal
              key={p.id}
              delay={Math.min(i * 60, 360)}
              className="group bg-white border border-line rounded-sm overflow-hidden flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-cream-soft border-b border-line">
                <img
                  alt={`${p.name} — ${p.tagline}`}
                  data-strk-img-id={`product-img-${p.id}`}
                  data-strk-img={`[product-tagline-${p.id}] [product-name-${p.id}] [products-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <span
                  aria-hidden
                  className="absolute top-4 left-4 text-[10px] uppercase tracking-eyebrow text-cream-soft/90 bg-ink/85 px-2 py-1"
                >
                  {p.index} / 07
                </span>
              </div>
              <div className="p-6 md:p-7 flex flex-col flex-1">
                <p
                  id={`product-tagline-${p.id}`}
                  className="text-[11px] uppercase tracking-eyebrow text-brass-deep font-medium"
                >
                  {p.tagline}
                </p>
                <h3
                  id={`product-name-${p.id}`}
                  className="mt-3 font-display text-2xl md:text-[26px] text-ink leading-tight"
                >
                  {p.name}
                </h3>
                <p className="mt-3 text-sm text-slate leading-relaxed flex-1">
                  {p.description}
                </p>
                <dl className="mt-5 grid grid-cols-2 gap-y-3 gap-x-4 text-xs border-t border-line pt-4">
                  <div>
                    <dt className="uppercase tracking-eyebrow text-[10px] text-muted">Capacity</dt>
                    <dd className="mt-1 text-ink">{p.capacity}</dd>
                  </div>
                  <div>
                    <dt className="uppercase tracking-eyebrow text-[10px] text-muted">Material</dt>
                    <dd className="mt-1 text-ink">{p.material}</dd>
                  </div>
                </dl>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                  }}
                  className="mt-6 inline-flex items-center justify-between gap-2 text-[12px] uppercase tracking-cta font-medium text-ink border-t border-line pt-4 group-hover:text-brass-deep transition-colors"
                >
                  Request specifications
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
