import { useEffect, useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { caseStudies } from '@/lib/siteData'
import SectionHeader from '@/components/shared/SectionHeader'

const CaseStudiesSection = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="bg-slate-50 py-16 text-slate-950 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            eyebrow="Case studies"
            title="Examples of practical sourcing support"
            description="Representative project scenarios showing how buyers use sourcing, verification, inspection, and production follow-up services."
          />
          <Link to="/case-studies" className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-slate-100">
            View case studies
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <article key={study.id} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <img
                alt={study.title}
                className="h-56 w-full object-cover"
                data-strk-img-id={study.imgId}
                data-strk-img={`[${study.descId}] [${study.titleId}] [case-studies-heading]`}
                data-strk-img-ratio="16x9"
                data-strk-img-width="850"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="p-6">
                <h3 id={study.titleId} className="text-xl font-semibold text-slate-950">{study.title}</h3>
                <p id={study.descId} className="mt-3 text-sm leading-6 text-slate-600">{study.detail}</p>
                <div className="mt-5 rounded-2xl bg-teal-50 p-4 text-sm leading-6 text-teal-900">
                  {study.result}
                </div>
              </div>
            </article>
          ))}
        </div>
        <h2 id="case-studies-heading" className="sr-only">Factory verification quality inspection and sourcing case studies</h2>
      </div>
    </section>
  )
}

export default CaseStudiesSection
