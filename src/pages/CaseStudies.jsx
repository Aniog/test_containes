import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import SectionHeader from '../components/SectionHeader.jsx'
import CTASection from '../components/CTASection.jsx'
import { caseStudies } from '../content.js'
import strkImgConfig from '../strk-img-config.json'

export default function CaseStudies() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <main ref={containerRef}>
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Case studies" title="Realistic examples of sourcing support">
            Every project is different, but most successful sourcing work depends on clear requirements, supplier checks, quality visibility, and coordinated communication.
          </SectionHeader>
          <div className="mt-12 grid gap-8">
            {caseStudies.map((study) => (
              <article key={study.id} className="grid overflow-hidden rounded-3xl border border-brand-border bg-brand-page text-brand-ink shadow-sm lg:grid-cols-2">
                <img
                  className="h-72 w-full object-cover lg:h-full"
                  alt={study.title}
                  data-strk-img-id={`detail-${study.imgId}`}
                  data-strk-img={`[detail-${study.descId}] [detail-${study.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="900"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="p-7 md:p-10">
                  <p className="text-sm font-semibold uppercase tracking-widest text-brand-blue">{study.sector}</p>
                  <h2 id={`detail-${study.titleId}`} className="mt-3 text-3xl font-semibold text-brand-navy">{study.title}</h2>
                  <p id={`detail-${study.descId}`} className="mt-5 leading-8 text-brand-muted">{study.desc}</p>
                  <div className="mt-6 rounded-2xl bg-white p-5 text-brand-ink">
                    <strong className="text-brand-green">Outcome: </strong>{study.result}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </main>
  )
}
