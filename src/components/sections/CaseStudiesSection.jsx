import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import { caseStudies } from '../../data'
import strkImgConfig from '../../strk-img-config.json'
import SectionHeader from '../common/SectionHeader'

export default function CaseStudiesSection({ showHeader = true }) {
  const sectionRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, sectionRef.current)
  }, [])

  return (
    <section ref={sectionRef} className="bg-stone-50 py-16 text-slate-900 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {showHeader && <SectionHeader eyebrow="Case studies" title="Examples of practical sourcing support" text="Every project is different. These examples show how local coordination can help buyers clarify risk and move forward carefully." align="center" />}
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <article key={study.title} className="overflow-hidden rounded-3xl border border-slate-200 bg-white text-slate-900 shadow-xl">
              <img
                alt={`${study.industry} sourcing case study`}
                className="aspect-[4/3] w-full object-cover"
                data-strk-img-id={study.imageId}
                data-strk-img={`[case-${study.imageId}-challenge] [case-${study.imageId}-title]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="p-6">
                <p className="text-sm font-bold uppercase tracking-wide text-sky-700">{study.industry}</p>
                <h3 id={`case-${study.imageId}-title`} className="mt-3 text-xl font-bold text-slate-900">{study.title}</h3>
                <p id={`case-${study.imageId}-challenge`} className="mt-4 text-sm leading-7 text-slate-600"><strong className="text-slate-900">Challenge:</strong> {study.challenge}</p>
                <p className="mt-3 text-sm leading-7 text-slate-600"><strong className="text-slate-900">Support:</strong> {study.result}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
