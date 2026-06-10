import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ArrowRight, ArrowUpRight, Phone } from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { cn } from "@/lib/utils"

export function Hero() {
  const ref = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <section
      ref={ref}
      className="relative isolate overflow-hidden bg-ink text-bone"
    >
      <div
        aria-hidden="true"
        data-strk-bg-id="hero-bg-atlas-factory"
        data-strk-bg="[hero-eyebrow] [hero-headline] [hero-sub]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
        className="absolute inset-0 bg-ink-soft"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/60 to-ink"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #c9a96a 1px, transparent 1px), linear-gradient(to bottom, #c9a96a 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="container-content relative pt-36 pb-24 md:pt-44 md:pb-32 lg:pt-52 lg:pb-40">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <span
              id="hero-eyebrow"
              className="eyebrow-light"
            >
              Sheet metal folding systems
            </span>
            <h1
              id="hero-headline"
              className="mt-6 font-serif text-5xl font-medium leading-[1.05] text-bone text-balance md:text-6xl lg:text-7xl"
            >
              Engineered folds.
              <br />
              <span className="text-brass">Honest tolerances.</span>
            </h1>
            <p
              id="hero-sub"
              className="mt-8 max-w-xl text-base leading-relaxed text-bone/75 md:text-lg"
            >
              From the compact Forge M100 to the 6-metre Titan H600 plate
              folder, Artitect builds double folding machines and sheet metal
              folder systems that hold their tolerance on shift three, year
              three, decade three.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link to="/products" className="btn-accent">
                Explore the range
                <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
              </Link>
              <Link
                to="/contact?topic=quote"
                className="btn-outline-light"
              >
                Request a quote
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
              </Link>
            </div>

            <dl className="mt-16 grid max-w-xl grid-cols-2 gap-y-6 sm:grid-cols-4">
              {[
                { k: "27+", v: "Years building" },
                { k: "6 200", v: "Units shipped" },
                { k: "48", v: "Countries" },
                { k: "98%", v: "Retention" },
              ].map((s) => (
                <div key={s.v}>
                  <dt className="font-serif text-3xl font-medium text-brass num-tabular">
                    {s.k}
                  </dt>
                  <dd className="mt-1 text-xs uppercase tracking-eyebrow text-bone/60">
                    {s.v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-5">
            <div className="relative h-full min-h-[420px] w-full overflow-hidden border border-white/10">
              <img
                alt="Artitect Atlas D series double folding machine in a fabrication shop"
                data-strk-img-id="hero-img-machine-portrait"
                data-strk-img="[hero-sub] [hero-headline] [hero-eyebrow]"
                data-strk-img-ratio="3x4"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                className="h-full w-full object-cover"
                loading="eager"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <p className="text-xs uppercase tracking-eyebrow text-brass">
                  Featured model
                </p>
                <p className="mt-2 font-serif text-2xl text-bone">
                  Atlas D320 — CNC double folding machine
                </p>
                <Link
                  to="/products/atlas-d320"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-bone hover:text-brass-light"
                >
                  View specifications
                  <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                </Link>
              </div>
            </div>

            <a
              href={`tel:${"+4971140008800"}`}
              className={cn(
                "mt-6 hidden items-center gap-3 border border-white/10 px-5 py-4 text-sm text-bone/80 transition-colors hover:border-brass/60 hover:text-bone lg:inline-flex",
              )}
            >
              <Phone className="h-4 w-4 text-brass" strokeWidth={1.5} />
              Speak with an engineer — +49 711 4000 8800
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
