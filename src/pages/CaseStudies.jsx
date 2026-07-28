import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ArrowRight, TrendingUp, ShieldCheck, Clock } from "lucide-react"
import PageHeader from "@/components/ui/page-header"
import { Button } from "@/components/ui/button"
import CTASection from "@/components/sections/CTASection"
import { caseStudies } from "@/data/content"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

const metrics = [
  { icon: TrendingUp, value: "18%", label: "Average cost reduction" },
  { icon: ShieldCheck, value: "99.2%", label: "Orders passing final QC" },
  { icon: Clock, value: "1 day", label: "Average response time" },
]

export default function CaseStudies() {
  const ref = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <>
      <PageHeader
        eyebrow="Case Studies"
        title="How buyers source better with us"
        description="Real examples of how structured sourcing, factory verification, and quality control delivered measurable results."
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {metrics.map((m) => (
              <div
                key={m.label}
                className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-6"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <m.icon className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-2xl font-bold text-ink">{m.value}</p>
                  <p className="text-sm text-muted">{m.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={ref} className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="space-y-8">
            {caseStudies.map((cs, idx) => (
              <div
                key={cs.id}
                className="grid grid-cols-1 gap-0 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm lg:grid-cols-2"
              >
                <div
                  className={
                    "relative aspect-[16/10] overflow-hidden bg-slate-100 lg:aspect-auto " +
                    (idx % 2 === 1 ? "lg:order-2" : "lg:order-1")
                  }
                >
                  <img
                    alt={cs.title}
                    data-strk-img-id={cs.imgId}
                    data-strk-img={`[cases-${cs.id}-title] [cases-${cs.id}-industry]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="900"
                    className="h-full w-full object-cover"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <div
                  className={
                    "flex flex-col justify-center p-6 md:p-8 lg:p-10 " +
                    (idx % 2 === 1 ? "lg:order-1" : "lg:order-2")
                  }
                >
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand">
                    <span id={`cases-${cs.id}-industry`}>{cs.industry}</span>
                    <span className="text-slate-300">·</span>
                    <span className="text-slate-400">{cs.location}</span>
                  </div>
                  <h2 id={`cases-${cs.id}-title`} className="mt-2 text-2xl font-bold text-ink">
                    {cs.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{cs.summary}</p>

                  <div className="mt-6 grid grid-cols-3 gap-4">
                    {cs.metrics.map((r) => (
                      <div key={r.label} className="rounded-xl bg-slate-50 p-3 text-center">
                        <p className="text-lg font-bold text-brand">{r.value}</p>
                        <p className="mt-0.5 text-xs text-muted">{r.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button as={Link} to="/contact" variant="secondary">
              Get similar results for your product
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
