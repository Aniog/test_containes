import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ArrowRight, CheckCircle2, FileText, Search, ShieldCheck } from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

const HIGHLIGHTS = [
  { icon: Search, label: "Supplier sourcing" },
  { icon: ShieldCheck, label: "Factory verification" },
  { icon: FileText, label: "Quality inspection" },
]

export default function Hero() {
  const ref = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-b from-white via-page to-page"
    >
      <div className="container-x grid items-center gap-12 py-16 md:grid-cols-[1.05fr_1fr] md:py-20 lg:py-24">
        <div>
          <p className="eyebrow" id="hero-eyebrow">Independent Sourcing Agent in China</p>
          <h1
            id="hero-title"
            className="mt-4 text-4xl font-semibold tracking-tight text-ink-900 md:text-5xl lg:text-[3.5rem] lg:leading-[1.05]"
          >
            China Sourcing Agent for Global Buyers
          </h1>
          <p
            id="hero-subtitle"
            className="mt-5 max-w-xl text-base text-ink-700 md:text-lg"
          >
            We help overseas buyers find reliable Chinese factories, verify
            them on the ground, inspect quality during production and
            coordinate shipping to your destination. Practical, transparent
            and on your side of the table.
          </p>

          <ul className="mt-6 flex flex-wrap gap-2.5">
            {HIGHLIGHTS.map(({ icon: Icon, label }) => (
              <li key={label} className="chip">
                <Icon className="h-3.5 w-3.5 text-navy" aria-hidden />
                {label}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/contact" className="btn-primary">
              Get a Free Sourcing Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/how-it-works" className="btn-secondary">
              See How It Works
            </Link>
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-border-soft pt-6">
            {[
              { k: "11+", v: "Years on the ground" },
              { k: "1,800+", v: "Factories vetted" },
              { k: "3,600+", v: "Shipments coordinated" },
            ].map((m) => (
              <div key={m.v}>
                <dt className="text-2xl font-semibold text-ink-900 md:text-3xl">
                  {m.k}
                </dt>
                <dd className="mt-1 text-xs text-ink-500 md:text-sm">{m.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div
            className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border-soft bg-slate-100 shadow-sm"
            data-strk-bg-id="hero-image-7d2c91"
            data-strk-bg="[hero-eyebrow] [hero-subtitle] [hero-title]"
            data-strk-bg-ratio="4x3"
            data-strk-bg-width="900"
          >
            <img
              alt="Factory floor with workers assembling products in a Chinese manufacturing facility"
              className="h-full w-full object-cover"
              data-strk-img-id="hero-image-7d2c91-img"
              data-strk-img="[hero-eyebrow] [hero-subtitle] [hero-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>

          <div className="absolute -bottom-6 -left-6 hidden max-w-xs rounded-xl border border-border-soft bg-white p-4 shadow-md md:block">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 grid h-9 w-9 place-items-center rounded-lg bg-emerald-50 text-emerald-700">
                <CheckCircle2 className="h-4 w-4" />
              </span>
              <div>
                <p className="text-sm font-semibold text-ink-900">
                  Pre-shipment QC passed
                </p>
                <p className="mt-0.5 text-xs text-ink-500">
                  AQL 1.5 · 98% pass rate over the last 6 orders
                </p>
              </div>
            </div>
          </div>

          <div className="absolute -right-4 top-6 hidden max-w-[210px] rounded-xl border border-border-soft bg-white p-4 shadow-md md:block">
            <p className="text-xs font-semibold uppercase tracking-wide text-accent">
              Factory verified
            </p>
            <p className="mt-1 text-sm font-semibold text-ink-900">
              3 qualified suppliers
            </p>
            <p className="mt-0.5 text-xs text-ink-500">
              Shortlist ready in 3–7 working days
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
