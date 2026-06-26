import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ArrowRight, Target, Lightbulb, TrendingUp } from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import PageHero from "@/components/sections/PageHero"
import { Card } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import CtaBand from "@/components/sections/CtaBand"
import { CASE_STUDIES } from "@/lib/content"

export default function CaseStudies() {
  const ref = useRef(null)
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <>
      <PageHero
        eyebrow="Case studies"
        title="Sourcing outcomes, not just promises"
        description="Real examples of how our verification, QC, and logistics work translated into measurable results for global buyers. Names are anonymized at client request."
        ctaLabel="Start your case study"
      />

      <section className="py-20 md:py-28">
        <div ref={ref} className="mx-auto max-w-7xl space-y-12 px-4 md:px-6 lg:px-8">
          {CASE_STUDIES.map((cs, idx) => (
            <Card key={cs.id} className="overflow-hidden">
              <div className="grid lg:grid-cols-5">
                <div className="relative aspect-[16/9] overflow-hidden bg-page lg:col-span-2 lg:aspect-auto">
                  <img
                    alt={cs.client}
                    data-strk-img-id={cs.imgId}
                    data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6 md:p-10 lg:col-span-3">
                  <span className="text-xs font-semibold uppercase tracking-wide text-brand">
                    {cs.industry}
                  </span>
                  <h2
                    id={cs.titleId}
                    className="mt-2 text-2xl font-bold text-ink"
                  >
                    {cs.client}
                  </h2>

                  <div className="mt-6 space-y-5">
                    <div className="flex gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent-warm/10 text-accent-warm">
                        <Target className="h-4 w-4" />
                      </span>
                      <div>
                        <p className="text-sm font-bold text-ink">
                          Challenge
                        </p>
                        <p className="mt-1 text-sm leading-relaxed text-slate-body">
                          {cs.challenge}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-light text-brand">
                        <Lightbulb className="h-4 w-4" />
                      </span>
                      <div>
                        <p className="text-sm font-bold text-ink">
                          Our approach
                        </p>
                        <p className="mt-1 text-sm leading-relaxed text-slate-body">
                          {cs.approach}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                        <TrendingUp className="h-4 w-4" />
                      </span>
                      <div>
                        <p className="text-sm font-bold text-ink">Result</p>
                        <p
                          id={cs.descId}
                          className="mt-1 text-sm leading-relaxed text-slate-body"
                        >
                          {cs.result}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-3 gap-3 border-t border-border-soft pt-6">
                    {cs.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="rounded-xl bg-page p-3 text-center"
                      >
                        <p className="text-xl font-extrabold text-brand">
                          {m.value}
                        </p>
                        <p className="mt-1 text-[11px] leading-tight text-muted">
                          {m.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <CtaBand
        title="Want results like these?"
        description="Tell us your product and your biggest sourcing headache. We will show you exactly how we would handle it."
        buttonText="Get a Free Sourcing Quote"
      />
    </>
  )
}
