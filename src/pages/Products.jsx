import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ArrowRight, Check } from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { products } from "@/data/products"

const PageHeader = () => (
  <section className="bg-graphite text-bone">
    <div className="max-w-7xl mx-auto px-6 md:px-10 pt-24 pb-20 md:pt-32 md:pb-28">
      <div className="flex items-center gap-4 mb-6">
        <span className="h-px w-12 bg-accent" />
        <p className="text-xs uppercase tracking-[0.35em] text-accent">Machines</p>
      </div>
      <h1 className="font-serif font-light text-5xl md:text-7xl leading-[1.05] tracking-tight max-w-4xl">
        Folders, double folders, and metal benders — <span className="italic text-accent">all Artitect.</span>
      </h1>
      <p className="mt-8 text-bone/70 leading-relaxed max-w-2xl">
        Choose the Artitect machine that matches your shop's typical sheet size,
        material gauge and daily volume. Every model is built on the same precision
        philosophy and supported for decades.
      </p>
    </div>
  </section>
)

const Products = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <PageHeader />

      <section className="bg-bone">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28 space-y-20 md:space-y-28">
          {products.map((p, idx) => {
            const reverse = idx % 2 === 1
            return (
              <article
                key={p.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                  reverse ? "lg:[&>div:first-child]:order-2" : ""
                }`}
              >
                <div className="lg:col-span-7">
                  <div className="relative aspect-[4/3] w-full overflow-hidden border border-hairline bg-cloud">
                    <img
                      alt={p.name}
                      data-strk-img-id={p.imgId}
                      data-strk-img={`[${p.descId}] [${p.titleId}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="1200"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-accent">{p.category}</p>
                  <h2 id={p.titleId} className="mt-3 font-serif font-light text-4xl md:text-5xl text-graphite leading-tight">
                    {p.name}
                  </h2>
                  <p className="mt-3 font-serif italic text-xl text-muted-ink">{p.tagline}</p>
                  <p id={p.descId} className="mt-6 text-muted-ink leading-relaxed">
                    {p.description}
                  </p>

                  <dl className="mt-8 border-t border-hairline divide-y divide-hairline">
                    {p.specs.map((s) => (
                      <div key={s.label} className="grid grid-cols-2 py-3 text-sm">
                        <dt className="text-muted-ink">{s.label}</dt>
                        <dd className="text-graphite font-medium">{s.value}</dd>
                      </div>
                    ))}
                  </dl>

                  <Link
                    to="/contact"
                    state={{ machine: p.name }}
                    className="mt-8 inline-flex items-center gap-3 bg-graphite text-bone px-6 py-3 text-xs uppercase tracking-[0.25em] rounded-sm hover:bg-steel transition-colors"
                  >
                    Request this machine
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      <section className="bg-graphite text-bone">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="h-px w-12 bg-accent" />
                <p className="text-xs uppercase tracking-[0.35em] text-accent">What's included</p>
              </div>
              <h2 className="font-serif font-light text-3xl md:text-5xl leading-tight">
                Every Artitect arrives with the same promise.
              </h2>
            </div>
            <ul className="space-y-4 text-sm md:text-base text-bone/80">
              {[
                "On-site installation and commissioning",
                "Two days of operator training",
                "Lifetime telephone & video support",
                "Annual calibration service contract",
                "Genuine Artitect tooling and consumables",
                "Five-year frame warranty",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 border-b border-bone/10 pb-4">
                  <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Products
