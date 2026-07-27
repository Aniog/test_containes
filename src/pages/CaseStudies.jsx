import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import PageHero from "@/components/sections/PageHero"
import { Card } from "@/components/ui/card"
import CtaBanner from "@/components/layout/CtaBanner"
import { caseStudies } from "@/data/content"

export default function CaseStudies() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <PageHero
        eyebrow="Case studies"
        title="Sourcing projects and the results behind them"
        description="Examples of how we have helped buyers source, verify, and ship products from China — and the outcomes they achieved."
      />

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8">
            {caseStudies.map((c) => (
              <Card key={c.id} className="overflow-hidden">
                <div className="grid gap-0 md:grid-cols-5">
                  <div className="aspect-[16/9] w-full overflow-hidden bg-slate-100 md:col-span-2 md:aspect-auto">
                    <img
                      alt={c.title}
                      data-strk-img-id={`cases-page-${c.imgId}`}
                      data-strk-img={`[${c.descId}] [${c.titleId}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="700"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:col-span-3 md:p-8">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#f59e0b]">
                      {c.industry}
                    </span>
                    <h2 id={c.titleId} className="mt-2 text-xl font-bold text-slate-900">
                      {c.title}
                    </h2>
                    <p id={c.descId} className="mt-1 text-sm text-slate-500">{c.desc}</p>

                    <dl className="mt-5 space-y-3 text-sm">
                      <div>
                        <dt className="font-semibold text-slate-900">Client</dt>
                        <dd className="text-slate-600">{c.client}</dd>
                      </div>
                      <div>
                        <dt className="font-semibold text-slate-900">Challenge</dt>
                        <dd className="text-slate-600">{c.challenge}</dd>
                      </div>
                      <div>
                        <dt className="font-semibold text-slate-900">Solution</dt>
                        <dd className="text-slate-600">{c.solution}</dd>
                      </div>
                      <div className="rounded-lg bg-green-50 p-3">
                        <dt className="font-semibold text-green-800">Result</dt>
                        <dd className="text-green-900">{c.result}</dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  )
}
