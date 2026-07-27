import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import PageHero from '@/components/shared/PageHero'
import CTABand from '@/components/shared/CTABand'
import { CASE_STUDIES } from '@/data/content'
import strkImgConfig from '@/strk-img-config.json'

const CaseStudies = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
  <div ref={containerRef}>
    <PageHero eyebrow="Case studies" title="Sourcing programs we have run, with real numbers">
      <p>
        Client names are withheld for confidentiality, but every figure below comes
        from an actual engagement. Ask us about projects similar to yours.
      </p>
    </PageHero>

    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="space-y-14">
          {CASE_STUDIES.map((study) => (
            <article
              key={study.id}
              id={study.id}
              className="grid scroll-mt-24 gap-8 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm lg:grid-cols-5"
            >
              <div className="lg:col-span-2">
                <img
                  alt={study.title}
                  className="h-full w-full object-cover"
                  data-strk-img-id={`case-${study.id}-e5`}
                  data-strk-img={`[case-label-${study.id}] [case-title-${study.id}]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div className="p-6 md:p-10 lg:col-span-3">
                <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-800">
                  {study.tag}
                </span>
                <h2 id={`case-title-${study.id}`} className="mt-4 text-2xl font-bold tracking-tight text-slate-900">
                  {study.title}
                </h2>
                <p id={`case-label-${study.id}`} className="sr-only">{study.productLabel}</p>

                <div className="mt-6 space-y-6">
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">The challenge</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{study.challenge}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">Our approach</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{study.approach}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">Results</h3>
                    <ul className="mt-3 space-y-2.5">
                      {study.results.map((result) => (
                        <li key={result} className="flex items-start gap-2.5 text-sm text-slate-700">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-blue-800 hover:text-blue-900"
                >
                  Discuss a similar project <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    <CTABand
      title="Want results like these for your product line?"
      text="Tell us what you are sourcing and where you are stuck. We will respond with an honest assessment."
    />
  </div>
  )
}

export default CaseStudies
