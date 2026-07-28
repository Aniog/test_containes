import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import { ArrowUpRight } from 'lucide-react'
import strkImgConfig from '@/strk-img-config.json'
import { getStrkImageUrl } from '@/lib/strk-image-utils.js'
import CTAButton from '@/components/common/CTAButton.jsx?ssourcing=20260728'
import SectionHeading from '@/components/common/SectionHeading.jsx?ssourcing=20260728'
import { caseStudies } from '@/data/siteContent.js'

const CaseStudiesSection = ({ showCta = true }) => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="bg-slate-50 py-16 text-slate-950 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Case studies"
            title="Examples of practical sourcing support"
            description="Representative project scenarios showing how local checks and clear reporting support buyer decisions."
          />
          {showCta && <CTAButton href="/case-studies" variant="secondary">View case studies</CTAButton>}
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {caseStudies.map((study, index) => {
            const titleId = `case-study-${index + 1}-title`
            const descId = `case-study-${index + 1}-desc`
            return (
              <article key={study.title} className="overflow-hidden rounded-2xl border border-slate-200 bg-white text-slate-950 shadow-sm">
                <img
                  alt={study.title}
                  className="h-48 w-full object-cover"
                  data-strk-img-id={`case-study-${index + 1}-img-a62d${index}`}
                  data-strk-img={`[${descId}] [${titleId}]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="700"
                  src={getStrkImageUrl(`case-study-${index + 1}-img-a62d${index}`)}
                />
                <div className="p-6">
                  <p className="text-sm font-semibold text-blue-700">{study.industry}</p>
                  <h3 id={titleId} className="mt-3 text-xl font-bold text-slate-950">{study.title}</h3>
                  <p id={descId} className="mt-3 text-sm leading-7 text-slate-700">{study.challenge}</p>
                  <div className="mt-5 rounded-xl bg-blue-50 p-4 text-sm leading-7 text-blue-950">
                    <span className="font-bold">Result:</span> {study.result}
                  </div>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-blue-700">
                    Read scenario <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default CaseStudiesSection
