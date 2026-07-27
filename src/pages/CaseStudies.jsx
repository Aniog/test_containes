import React, { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { ArrowRight, ChevronLeft, MapPin, Tag } from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import PageHero from "@/components/layout/PageHero"
import Badge from "@/components/ui/Badge"
import Button from "@/components/ui/Button"
import StrkImage from "@/components/sections/StrkImage"
import InquiryCTA from "@/components/sections/InquiryCTA"
import { caseStudies } from "@/data/site"

const CaseStudies = () => {
  const containerRef = useRef(null)
  const [activeId, setActiveId] = useState(caseStudies[0].id)

  useEffect(() => {
    if (!containerRef.current) return
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const active = caseStudies.find((c) => c.id === activeId) || caseStudies[0]

  return (
    <div ref={containerRef}>
      <PageHero
        eyebrow="Case studies"
        title="How we have helped buyers ship from China with confidence"
        description="A selection of recent projects, the problems we solved, and the numbers behind the outcome. Names are anonymized where requested."
      />

      <section className="bg-warm-100">
        <div className="container-content py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <aside className="lg:col-span-4">
              <ul className="flex lg:flex-col gap-2 lg:gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
                {caseStudies.map((cs) => {
                  const isActive = cs.id === activeId
                  return (
                    <li key={cs.id} className="shrink-0 lg:shrink">
                      <button
                        type="button"
                        onClick={() => setActiveId(cs.id)}
                        className={`w-full text-left px-4 py-3.5 rounded-[4px] border transition-colors ${
                          isActive
                            ? "bg-navy text-ink-onDark border-navy"
                            : "bg-white border-warm-300 text-ink hover:border-navy/40"
                        }`}
                      >
                        <div
                          className={`text-[11px] font-semibold uppercase tracking-eyebrow ${
                            isActive ? "text-teal-light" : "text-teal"
                          }`}
                        >
                          {cs.industry}
                        </div>
                        <div
                          className={`mt-1 text-[14px] font-semibold leading-snug ${
                            isActive ? "text-ink-onDark" : "text-ink"
                          }`}
                        >
                          {cs.title.split(" ").slice(0, 9).join(" ")}
                          {cs.title.split(" ").length > 9 ? "…" : ""}
                        </div>
                      </button>
                    </li>
                  )
                })}
              </ul>
            </aside>

            <article className="lg:col-span-8">
              <div className="bg-white border border-warm-300 rounded-[6px] overflow-hidden">
                <StrkImage
                  imgId={`casestudy-${active.id}-e5a8d2`}
                  query={active.imgQuery}
                  ratio="16x9"
                  width={1100}
                  alt={active.title}
                  ratioClass="aspect-[16/9]"
                  containerClassName="border-b border-warm-300"
                />
                <div className="p-7 md:p-9">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="teal">{active.industry}</Badge>
                    <Badge variant="outline">
                      <span className="inline-flex items-center gap-1">
                        <MapPin size={12} />
                        {active.region}
                      </span>
                    </Badge>
                  </div>
                  <h2 className="mt-4 text-2xl md:text-3xl font-semibold leading-tight text-ink">
                    {active.title}
                  </h2>
                  <p className="mt-4 text-[16px] leading-relaxed text-ink-secondary">
                    {active.summary}
                  </p>

                  <div className="mt-7 grid grid-cols-3 gap-4 border-y border-warm-300 py-5">
                    {active.stats.map((s) => (
                      <div key={s.label}>
                        <div className="text-xl md:text-2xl font-semibold text-navy leading-tight">
                          {s.value}
                        </div>
                        <div className="text-[12px] text-ink-muted leading-snug mt-1">
                          {s.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-7 flex flex-col gap-6">
                    {active.sections.map((s) => (
                      <div key={s.heading}>
                        <h3 className="text-[13px] font-semibold uppercase tracking-eyebrow text-teal">
                          {s.heading}
                        </h3>
                        <p className="mt-2 text-[15px] leading-relaxed text-ink-secondary">
                          {s.body}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-warm-200 border-y border-warm-300">
        <div className="container-content py-16 md:py-20">
          <div className="max-w-3xl">
            <span className="eyebrow">A project like yours</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold leading-tight tracking-[-0.015em] text-ink">
              Tell us about your product and we will share a similar example
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-ink-secondary">
              We will reply within one business day with a sourcing plan and
              references from buyers in your industry or region.
            </p>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Button as={Link} to="/contact#inquiry" variant="primary" size="lg">
              Get a Free Sourcing Quote
              <ArrowRight size={18} />
            </Button>
            <Button as={Link} to="/services" variant="secondary" size="lg">
              See our services
            </Button>
          </div>
        </div>
      </section>

      <InquiryCTA />
    </div>
  )
}

export default CaseStudies
