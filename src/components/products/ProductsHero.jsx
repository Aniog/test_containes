import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

export function ProductsHero() {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <section
      ref={ref}
      className="relative isolate overflow-hidden bg-ink text-bone"
    >
      <div
        aria-hidden="true"
        data-strk-bg-id="products-hero-bg"
        data-strk-bg="[products-hero-eyebrow] [products-hero-title] [products-hero-sub]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
        className="absolute inset-0 opacity-50"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/40 to-ink"
      />

      <div className="container-content relative pt-40 pb-24 md:pt-48 md:pb-32">
        <div className="max-w-3xl">
          <span id="products-hero-eyebrow" className="eyebrow-light">
            The Artitect catalogue
          </span>
          <h1
            id="products-hero-title"
            className="mt-6 font-serif text-5xl font-medium leading-[1.05] text-bone md:text-6xl lg:text-7xl text-balance"
          >
            Every folding machine we make,
            <br />
            <span className="text-brass">in one place.</span>
          </h1>
          <p
            id="products-hero-sub"
            className="mt-8 max-w-2xl text-base leading-relaxed text-bone/75 md:text-lg"
          >
            Double folding machines, sheet metal folder machines, and heavy duty
            metal folder systems — organised by series so you can compare
            capacity, automation, and footprint side by side.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/contact?topic=quote"
              className="btn-accent"
            >
              Request a quote
              <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
            </Link>
            <Link
              to="/contact?topic=spec"
              className="btn-outline-light"
            >
              Compare specifications
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
