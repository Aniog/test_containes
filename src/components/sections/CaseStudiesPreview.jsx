import React, { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import SectionHeader from "@/components/ui/SectionHeader"
import Badge from "@/components/ui/Badge"
import StrkImage from "./StrkImage"
import { caseStudies } from "@/data/site"

const CaseStudiesPreview = () => {
  const containerRef = useRef(null)
  useEffect(() => {
    if (!containerRef.current) return
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const featured = caseStudies.slice(0, 3)

  return (
    <section ref={containerRef} className="bg-warm-200 border-y border-warm-300">
      <div className="container-content py-20 md:py-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeader
            eyebrow="Case studies"
            title="Real projects, real numbers, real outcomes"
            description="A few examples of how we have helped buyers get the right product, at the right quality, on the right timeline."
          />
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-teal hover:text-teal-hover"
          >
            See all case studies
            <ArrowRight size={16} />
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
          {featured.map((cs, idx) => (
            <article
              key={cs.id}
              className="bg-white border border-warm-300 rounded-[6px] overflow-hidden flex flex-col hover:shadow-cardHover transition-shadow"
            >
              <StrkImage
                imgId={`home-case-${idx}-b4d9e7`}
                query={cs.imgQuery}
                ratio="3x2"
                width={700}
                alt={cs.title}
                ratioClass="aspect-[3/2]"
                containerClassName="border-b border-warm-300"
              />
              <div className="p-6 flex flex-col gap-4 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="teal">{cs.industry}</Badge>
                  <Badge variant="outline">{cs.region}</Badge>
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-ink leading-snug">
                  {cs.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-ink-secondary">
                  {cs.summary}
                </p>
                <div className="mt-auto pt-4 border-t border-warm-300 grid grid-cols-3 gap-3">
                  {cs.stats.map((s) => (
                    <div key={s.label}>
                      <div className="text-base font-semibold text-navy leading-tight">
                        {s.value}
                      </div>
                      <div className="text-[11px] text-ink-muted leading-snug mt-0.5">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CaseStudiesPreview
