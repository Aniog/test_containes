import { useEffect, useRef } from 'react'
import { Quote, Target, Wrench, TrendingUp } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import CtaBand from '@/components/shared/CtaBand'
import { CASE_STUDIES } from '@/data/site'

export default function CaseStudies() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="relative overflow-hidden bg-primary-950">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          data-strk-bg-id="cases-hero-bg-s1t2u3"
          data-strk-bg="[cases-hero-subtitle] [cases-hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent-200">Case Studies</p>
          <h1 id="cases-hero-title" className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            What Working With Us Looks Like in Practice
          </h1>
          <p id="cases-hero-subtitle" className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
            Three recent projects — the situation, what we did, and the measurable result. Client names are withheld for confidentiality; details are from real engagements.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl space-y-16 px-4 sm:px-6 lg:px-8">
          {CASE_STUDIES.map((cs, i) => {
            const flip = i % 2 === 1
            return (
              <article
                key={cs.id}
                className="grid items-start gap-10 lg:grid-cols-5"
              >
                <div className={`lg:col-span-2 ${flip ? 'lg:order-2' : ''}`}>
                  <img
                    alt={`${cs.industry} sourcing project for a client in ${cs.region}`}
                    className="w-full rounded-2xl object-cover shadow-lg"
                    data-strk-img-id={`case-img-${cs.id}`}
                    data-strk-img={`[case-title-${cs.id}] [case-industry-${cs.id}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                  <div className="mt-6 grid grid-cols-3 gap-3">
                    {cs.results.map((r) => (
                      <div key={r.label} className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-center">
                        <p className="text-xl font-bold text-primary-700">{r.metric}</p>
                        <p className="mt-1 text-xs leading-snug text-slate-600">{r.label}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 rounded-xl bg-primary-50 p-5">
                    <Quote className="h-5 w-5 text-primary-600" />
                    <p className="mt-2 text-sm italic leading-relaxed text-slate-700">"{cs.quote}"</p>
                    <p className="mt-2 text-xs font-semibold text-slate-600">— {cs.quoteAuthor}</p>
                  </div>
                </div>

                <div className={`lg:col-span-3 ${flip ? 'lg:order-1' : ''}`}>
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider">
                    <span id={`case-industry-${cs.id}`} className="rounded-full bg-primary-50 px-3 py-1 text-primary-700">{cs.industry}</span>
                    <span className="text-slate-500">{cs.region}</span>
                  </div>
                  <h2 id={`case-title-${cs.id}`} className="mt-4 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                    {cs.title}
                  </h2>

                  <div className="mt-8 space-y-6">
                    <div className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-50 text-red-600">
                        <Target className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900">The Challenge</h3>
                        <p className="mt-1.5 leading-relaxed text-slate-600">{cs.challenge}</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-600">
                        <Wrench className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900">Our Approach</h3>
                        <p className="mt-1.5 leading-relaxed text-slate-600">{cs.approach}</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-50 text-green-600">
                        <TrendingUp className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900">The Outcome</h3>
                        <p className="mt-1.5 leading-relaxed text-slate-600">{cs.summary}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      <CtaBand
        title="Want results like these for your products?"
        text="Every project above started with a short product brief. Send yours — we'll reply with a plan and a fee proposal within one business day."
      />
    </div>
  )
}
