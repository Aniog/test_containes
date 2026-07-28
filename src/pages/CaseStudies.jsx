import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { caseStudies } from '@/lib/siteData'
import PageHero from '@/components/shared/PageHero'
import InquirySection from '@/components/home/InquirySection'

const CaseStudies = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <main ref={containerRef}>
      <PageHero
        eyebrow="Case studies"
        title="Sourcing project examples with practical outcomes"
        description="These scenarios show how overseas buyers use SSourcing China to verify suppliers, coordinate samples, follow production, and inspect goods before shipment."
      >
        <p className="text-lg font-semibold text-white">Representative examples</p>
        <p className="mt-3 text-sm leading-6 text-slate-200">
          Each sourcing project is different. We adapt the level of support to product complexity, risk, quantity, and buyer experience.
        </p>
      </PageHero>
      <section className="bg-slate-50 py-16 text-slate-950 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:px-8">
          {caseStudies.map((study, index) => (
            <article key={study.id} className="grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm lg:grid-cols-[0.85fr_1.15fr]">
              <img
                alt={study.title}
                className="h-72 w-full object-cover lg:h-full"
                data-strk-img-id={`case-page-${study.imgId}`}
                data-strk-img={`[case-page-desc-${study.id}] [case-page-title-${study.id}] [case-page-heading]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="1000"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="p-7 md:p-10">
                <p className="text-sm font-semibold text-blue-700">Project {index + 1}</p>
                <h2 id={`case-page-title-${study.id}`} className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">{study.title}</h2>
                <p id={`case-page-desc-${study.id}`} className="mt-5 text-base leading-7 text-slate-600">{study.detail}</p>
                <div className="mt-6 rounded-3xl bg-teal-50 p-5 text-sm leading-6 text-teal-900">
                  <span className="font-semibold">Support provided: </span>
                  {study.result}
                </div>
              </div>
            </article>
          ))}
        </div>
        <h2 id="case-page-heading" className="sr-only">China sourcing supplier verification and quality inspection case studies</h2>
      </section>
      <InquirySection />
    </main>
  )
}

export default CaseStudies
