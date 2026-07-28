import { CheckCircle2, TrendingDown, TrendingUp, Clock } from "lucide-react"
import PageHeader from "@/components/shared/PageHeader"
import CtaBanner from "@/components/shared/CtaBanner"
import { caseStudies } from "@/data/case-studies"
import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

const resultIcons = {
  "Landed cost reduction": TrendingDown,
  "Defect rate": TrendingDown,
  "Lead time saved": Clock,
  "New audited suppliers": TrendingUp,
  "QC pass rate": TrendingUp,
  "Returns reduced": TrendingDown,
  "Units delivered": TrendingUp,
  "On-time delivery": TrendingUp,
}

export default function CaseStudies() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current)
      }
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <>
      <PageHeader
        breadcrumb="Case Studies"
        eyebrow="Case Studies"
        title="Sourcing projects and the results they delivered"
        description="Real examples of how our process helped buyers reduce cost, improve quality, and ship on time. Names are withheld for client confidentiality."
      />

      <section className="py-16 md:py-24" ref={containerRef}>
        <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((cs, index) => {
              const reversed = index % 2 === 1
              return (
                <article
                  key={cs.id}
                  className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center lg:gap-12"
                >
                  <div className={reversed ? "lg:order-2" : ""}>
                    <div className="overflow-hidden rounded-xl border border-border bg-white shadow-sm">
                      <div className="relative aspect-[16/9] overflow-hidden bg-muted">
                        <img
                          alt={cs.title}
                          data-strk-img-id={cs.imgId}
                          data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                          data-strk-img-ratio="16x9"
                          data-strk-img-width="900"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="grid grid-cols-3 divide-x divide-border border-t border-border">
                        {cs.results.map((r) => {
                          const Icon = resultIcons[r.label] ?? CheckCircle2
                          return (
                            <div key={r.label} className="p-4 text-center">
                              <Icon className="mx-auto h-5 w-5 text-accent-600" />
                              <p className="mt-2 text-xl font-bold text-primary">
                                {r.value}
                              </p>
                              <p className="mt-0.5 text-[11px] leading-tight text-muted-foreground">
                                {r.label}
                              </p>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>

                  <div className={reversed ? "lg:order-1" : ""}>
                    <span className="inline-flex items-center rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary">
                      {cs.industry}
                    </span>
                    <h2 id={cs.titleId} className="mt-3 text-2xl font-bold tracking-tight text-foreground">
                      {cs.title}
                    </h2>
                    <p id={cs.descId} className="mt-3 text-base leading-relaxed text-muted-foreground">
                      {cs.summary}
                    </p>
                    <ul className="mt-5 space-y-2.5">
                      {cs.results.map((r) => (
                        <li
                          key={r.label}
                          className="flex items-center gap-2.5 text-sm text-foreground"
                        >
                          <CheckCircle2 className="h-5 w-5 shrink-0 text-success" />
                          <span className="font-semibold">{r.value}</span>
                          <span className="text-muted-foreground">{r.label}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Want results like these for your product?"
        description="Tell us your goals and current pain points. We'll show you where our process can make the biggest difference."
      />
    </>
  )
}
