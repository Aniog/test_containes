import { useEffect, useRef } from "react"
import { Section, SectionHeader } from "@/components/shared/Section"
import { caseStudies } from "@/data/content"
import { Link } from "react-router-dom"
import { ArrowRight, TrendingUp } from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

export default function CaseStudiesPreview() {
  const ref = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (ref.current) ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  const items = caseStudies.slice(0, 3)

  return (
    <Section id="case-studies" className="bg-bg-alt">
      <SectionHeader
        eyebrow="Case Studies"
        title="Real Results for Real Buyers"
        subtitle="A look at how we have helped global companies source smarter, reduce risk, and ship on time."
      />

      <div ref={ref} className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <article
            key={item.id}
            className="rounded-2xl overflow-hidden border border-line bg-surface shadow-sm flex flex-col"
          >
            <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
              <img
                alt={item.client}
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.descId}] [${item.titleId}]`}
                data-strk-img-ratio="16x9"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
              <span className="absolute top-3 left-3 rounded-full bg-white/95 text-primary px-3 py-1 text-xs font-semibold">
                {item.industry}
              </span>
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3 id={item.titleId} className="text-lg font-bold text-ink">
                {item.client}
              </h3>
              <p id={item.descId} className="mt-2 text-sm text-muted leading-relaxed flex-1">
                {item.challenge}
              </p>
              <div className="mt-4 flex items-start gap-2 rounded-lg bg-blue-50 p-3">
                <TrendingUp className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <p className="text-sm font-medium text-ink">{item.result}</p>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          to="/case-studies"
          className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
        >
          Read all case studies <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </Section>
  )
}
