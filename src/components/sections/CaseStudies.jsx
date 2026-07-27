import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { CASE_STUDIES } from "@/data/site"
import SectionHeader from "@/components/ui/SectionHeader"

export default function CaseStudies({ limit }) {
  const containerRef = useRef(null)
  const items = limit ? CASE_STUDIES.slice(0, limit) : CASE_STUDIES

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Case studies"
          title="Real sourcing projects, real outcomes"
          description="A few examples of how we've helped buyers source, verify, inspect, and ship — with measurable results."
        />

        <div className="mt-14 space-y-8">
          {items.map((study) => (
            <article
              key={study.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
            >
              <div className="lg:col-span-5 relative aspect-[4/3] lg:aspect-auto bg-slate-100">
                <img
                  alt={study.client}
                  data-strk-img-id={study.imgId}
                  data-strk-img={`[${study.descId}] [${study.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="lg:col-span-7 p-6 md:p-8 lg:p-10 flex flex-col">
                <span className="inline-flex w-fit items-center rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                  {study.industry}
                </span>
                <h3 id={study.titleId} className="mt-4 text-xl md:text-2xl font-bold text-slate-900">
                  {study.client}
                </h3>
                <p id={study.descId} className="sr-only">{study.challenge}</p>

                <div className="mt-5 space-y-4 text-sm text-slate-600 leading-relaxed">
                  <div>
                    <p className="font-semibold text-slate-900">Challenge</p>
                    <p className="mt-1">{study.challenge}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Our approach</p>
                    <p className="mt-1">{study.approach}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Result</p>
                    <p className="mt-1">{study.result}</p>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-4 border-t border-slate-100 pt-6">
                  {study.metrics.map((metric) => (
                    <div key={metric.label}>
                      <p className="text-xl md:text-2xl font-bold text-brand-700">{metric.value}</p>
                      <p className="mt-1 text-xs text-slate-500">{metric.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {limit && (
          <div className="mt-12 text-center">
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-800"
            >
              Read all case studies
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
