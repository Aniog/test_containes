import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { DollarSign, Clock, TrendingDown, ArrowRight } from "lucide-react"
import Section from "@/components/ui/Section"
import Button from "@/components/ui/Button"
import { caseStudies } from "@/data/content"

function resultIcon(label) {
  if (label.toLowerCase().includes("cost") || label.toLowerCase().includes("savings") || label.toLowerCase().includes("price")) return DollarSign
  if (label.toLowerCase().includes("lead") || label.toLowerCase().includes("time") || label.toLowerCase().includes("market")) return Clock
  return TrendingDown
}

export default function CaseStudies() {
  const ref = useRef(null)
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <>
      <Section background="light" className="pt-12 md:pt-20" id="top">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent-500">
            Case Studies
          </p>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold text-navy-600 tracking-tight">
            Recent client work, with the actual numbers
          </h1>
          <p className="mt-5 text-lg text-slate-600 leading-relaxed">
            A selection of recent sourcing, audit, QC, and shipping projects
            delivered for buyers across North America, Europe, the Middle
            East, and Australia.
          </p>
        </div>
      </Section>

      <Section background="white" className="pt-0">
        <div ref={ref} className="space-y-16">
          {caseStudies.map((c) => (
            <article
              key={c.id}
              id={c.id}
              className="scroll-mt-24 grid lg:grid-cols-12 gap-8 items-start"
            >
              <div className="lg:col-span-5">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-card">
                  <img
                    alt={`${c.industry} case study`}
                    data-strk-img-id={`case-page-${c.id}-b7d2c4`}
                    data-strk-img={`[case-${c.id}-industry] [case-${c.id}-title] case study product factory`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute top-3 left-3 inline-flex items-center rounded-full bg-white/95 px-2.5 py-1 text-xs font-semibold text-navy-600">
                    <span id={`case-${c.id}-industry`}>{c.industry}</span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-7">
                <h2
                  id={`case-${c.id}-title`}
                  className="text-2xl md:text-3xl font-bold text-navy-600 tracking-tight"
                >
                  {c.title}
                </h2>
                <p className="mt-3 text-base text-slate-600 leading-relaxed">
                  {c.summary}
                </p>
                <ul className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {c.results.map((r) => {
                    const Icon = resultIcon(r.label)
                    return (
                      <li
                        key={r.label}
                        className="rounded-lg border border-slate-200 bg-slate-50 p-4"
                      >
                        <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500 uppercase tracking-wide">
                          <Icon className="h-3.5 w-3.5 text-accent-500" />
                          {r.label}
                        </div>
                        <p className="mt-1.5 text-base font-semibold text-navy-600">
                          {r.value}
                        </p>
                      </li>
                    )
                  })}
                </ul>
                <div className="mt-5 space-y-3 text-sm text-slate-700 leading-relaxed">
                  {c.body.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section background="navy">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Your project could be the next case study
            </h2>
            <p className="mt-3 text-lg text-slate-200 leading-relaxed max-w-2xl">
              Share your sourcing brief and we will come back with a sourcing
              plan, indicative pricing, and a list of next steps.
            </p>
          </div>
          <div className="lg:col-span-4 flex lg:justify-end">
            <Button to="/contact" variant="primary" size="lg">
              Get a Free Sourcing Quote
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Section>
    </>
  )
}
