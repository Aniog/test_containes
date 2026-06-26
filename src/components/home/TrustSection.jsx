import { useEffect, useRef } from "react"
import { CheckCircle2 } from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import SectionHeader from "../shared/SectionHeader"
import { trustPoints, stats } from "../../data/siteData"

export default function TrustSection() {
  const ref = useRef(null)
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <section ref={ref} className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-2xl border border-brand-line shadow-sm">
              <img
                alt="Sourcing team meeting at a Chinese factory"
                className="h-full w-full object-cover"
                data-strk-img-id="trust-section-img-d3b51a"
                data-strk-img="[trust-section-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-2">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-brand-line bg-brand-soft p-4 text-center"
                >
                  <div className="text-2xl font-extrabold text-brand-navy md:text-3xl">
                    {s.value}
                  </div>
                  <div className="mt-1 text-xs font-medium text-brand-muted">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-accent">
              Why buyers work with us
            </p>
            <h2
              id="trust-section-title"
              className="mt-3 text-3xl font-bold tracking-tight text-brand-ink md:text-4xl"
            >
              A practical sourcing partner, not a marketing pitch
            </h2>
            <p className="mt-4 text-base leading-relaxed text-brand-body md:text-lg">
              We are based in China, independent from suppliers, and report in
              writing. No commissions from factories, no surprise fees, no
              over-promises.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {trustPoints.map((t) => (
                <div key={t.title} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                    <CheckCircle2 className="h-4 w-4" />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-brand-ink">{t.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-brand-body">
                      {t.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
