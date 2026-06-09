import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import PageMeta from '@/components/shared/PageMeta'
import SectionHeading from '@/components/shared/SectionHeading'
import PageIntro from '@/components/site/PageIntro'
import QuoteBanner from '@/components/site/QuoteBanner'
import { caseStudies } from '@/content/siteContent'

const CaseStudiesPage = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <>
      <PageMeta
        title="Case Studies | SSourcing China"
        description="Examples of how SSourcing China supports overseas buyers with supplier shortlisting, quality control, and shipping coordination."
      />
      <main ref={containerRef}>
        <PageIntro
          eyebrow="Case studies"
          title="Examples of buyer situations we help organize and support"
          description="These examples are intentionally practical. They show the type of sourcing challenges buyers bring to us and the kind of outcomes they want to improve."
        />

        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionHeading
              eyebrow="Buyer scenarios"
              title="Selected sourcing situations"
              description="Every project is different, but these examples reflect recurring buyer needs across supplier verification, quality control, and shipping readiness."
            />
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {caseStudies.map((study) => (
                <article key={study.slug} className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm">
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={study.title}
                    className="h-56 w-full object-cover"
                    data-strk-img-id={study.imgId}
                    data-strk-img={`[${study.descId}] [${study.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                  />
                  <div className="p-6 text-slate-900">
                    <h2 id={study.titleId} className="text-xl font-semibold tracking-tight text-slate-950">
                      {study.title}
                    </h2>
                    <p id={study.descId} className="mt-3 text-sm leading-7 text-slate-600">
                      {study.description}
                    </p>
                    <p className="mt-4 text-sm font-medium leading-7 text-slate-800">{study.result}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <QuoteBanner />
      </main>
    </>
  )
}

export default CaseStudiesPage
