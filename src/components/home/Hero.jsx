import * as React from "react"
import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ArrowRight, ChevronRight } from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { Button } from "@/components/ui/Button"

export function Hero() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative isolate overflow-hidden bg-ink"
    >
      <div
        className="absolute inset-0 -z-10"
        data-strk-bg-id="hero-bg-artitect-1f3a2b"
        data-strk-bg="[hero-eyebrow] [hero-title] [hero-subtitle]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />

      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/40 via-ink/75 to-ink" />
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-copper-500/40 to-transparent" />

      <div className="container-x pt-24 pb-28 md:pt-32 md:pb-40">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-7">
            <span className="h-px w-10 bg-copper-500" />
            <span id="hero-eyebrow" className="eyebrow">
              Folding Machinery · Est. 1986
            </span>
          </div>
          <h1
            id="hero-title"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] text-text text-balance"
          >
            The metal folder,
            <br className="hidden sm:block" />
            <span className="text-copper-400"> perfected.</span>
          </h1>
          <p
            id="hero-subtitle"
            className="mt-7 max-w-2xl text-base md:text-lg text-text-muted leading-relaxed"
          >
            ARTITECT builds precision-engineered double folding machines, sheet
            metal folders and metal folding systems for fabricators who can't
            afford a second chance.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <Button asChild={false} size="lg" className="group">
              <Link to="/products">
                Explore the machines
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button variant="secondary" size="lg">
              <Link to="/contact" className="flex items-center gap-2">
                Request a quote
                <ChevronRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          <dl className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-y-8 gap-x-6 max-w-2xl">
            {[
              { k: "0.01", unit: "mm", v: "Bend repeatability" },
              { k: "120", unit: "ton", v: "Press capacity" },
              { k: "38", unit: "yrs", v: "In service" },
              { k: "62", unit: "+", v: "Countries served" },
            ].map((s) => (
              <div key={s.v}>
                <dt className="text-xs text-text-dim tracking-eyebrow uppercase">
                  {s.v}
                </dt>
                <dd className="mt-2 text-2xl md:text-3xl font-semibold text-text tabular">
                  {s.k}
                  <span className="ml-1 text-copper-400 text-base font-medium">
                    {s.unit}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
