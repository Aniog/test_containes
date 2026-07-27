import { useEffect, useRef, useState } from "react"
import { MapPin, ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { CASE_STUDIES } from "@/data/content"
import PageHeader from "@/components/common/PageHeader"
import CtaBanner from "@/components/common/CtaBanner"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function CaseStudies() {
  const containerRef = useRef(null)
  const [activeId, setActiveId] = useState(CASE_STUDIES[0].id)
  const active = CASE_STUDIES.find((s) => s.id === activeId)
  const index = CASE_STUDIES.findIndex((s) => s.id === activeId)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [activeId])

  return (
    <div ref={containerRef}>
      <PageHeader
        eyebrow="Case studies"
        title="Sourcing engagements and what they involved"
        description="Representative engagements showing how sourcing, verification, QC, and shipping work together in practice."
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <ul className="space-y-3">
                {CASE_STUDIES.map((study) => (
                  <li key={study.id}>
                    <button
                      type="button"
                      onClick={() => setActiveId(study.id)}
                      className={cn(
                        "w-full rounded-xl border p-4 text-left transition-colors",
                        study.id === activeId
                          ? "border-brand bg-brand-50"
                          : "border-slate-200 bg-white hover:border-slate-300",
                      )}
                    >
                      <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                        <span className="rounded-full bg-white px-2 py-0.5 text-brand">
                          {study.industry}
                        </span>
                      </div>
                      <h3 className="mt-2 text-sm font-semibold text-ink">
                        {study.title}
                      </h3>
                      <p className="mt-1 inline-flex items-center gap-1 text-xs text-slate-500">
                        <MapPin className="h-3 w-3" />
                        {study.location}
                      </p>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-8">
              <article className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
                  <img
                    alt={active.title}
                    className="h-full w-full object-cover"
                    data-strk-img-id={active.imgId}
                    data-strk-img={`[${active.descId}] [${active.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="1000"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-slate-500">
                    <span className="rounded-full bg-brand-50 px-2.5 py-1 text-brand">
                      {active.industry}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" />
                      {active.location}
                    </span>
                  </div>
                  <h2
                    id={active.titleId}
                    className="mt-4 text-2xl font-bold text-ink md:text-3xl"
                  >
                    {active.title}
                  </h2>
                  <p
                    id={active.descId}
                    className="mt-3 text-slate-600"
                  >
                    {active.summary}
                  </p>

                  <div className="mt-8 grid gap-6 md:grid-cols-3">
                    <Block label="Challenge" text={active.challenge} />
                    <Block label="Approach" text={active.approach} />
                    <Block label="Result" text={active.result} icon />
                  </div>

                  <div className="mt-8 flex items-center justify-between">
                    <Button
                      variant="outline"
                      onClick={() =>
                        setActiveId(
                          CASE_STUDIES[
                            (index - 1 + CASE_STUDIES.length) %
                              CASE_STUDIES.length
                          ].id,
                        )
                      }
                    >
                      <ArrowLeft className="h-4 w-4" />
                      Previous
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() =>
                        setActiveId(
                          CASE_STUDIES[(index + 1) % CASE_STUDIES.length].id,
                        )
                      }
                    >
                      Next
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  )
}

function Block({ label, text, icon }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-surface p-5">
      <div className="flex items-center gap-2">
        {icon && <CheckCircle2 className="h-4 w-4 text-accent" />}
        <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
          {label}
        </h3>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-slate-700">{text}</p>
    </div>
  )
}
