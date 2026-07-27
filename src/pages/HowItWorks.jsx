import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import PageHero from '@/components/PageHero.jsx'
import SectionHeader from '@/components/SectionHeader.jsx'
import CtaBand from '@/components/CtaBand.jsx'
import Faq from '@/components/Faq.jsx'
import { PROCESS_STEPS } from '@/data/site.js'

const STEP_MEDIA = {
  'step-inquiry': { imgId: 'hiw-inquiry-img-e1', alt: 'Buyer sending product specifications' },
  'step-sourcing': { imgId: 'hiw-sourcing-img-f2', alt: 'Comparing factory quotes' },
  'step-verification': { imgId: 'hiw-verification-img-g3', alt: 'Auditor checking a factory' },
  'step-production': { imgId: 'hiw-production-img-h4', alt: 'Inspector checking goods on production line' },
  'step-shipping': { imgId: 'hiw-shipping-img-i5', alt: 'Container being loaded at port' },
}

const EXPECTATIONS = [
  'A dedicated, bilingual account manager from day one',
  'Written quotes with transparent fees before work begins',
  'Photo and video documentation at every key stage',
  'Weekly status updates during production — no chasing needed',
  'Your approval required before anything ships',
  'One team accountable from first quote to final delivery',
]

export default function HowItWorks() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <div ref={containerRef}>
      <PageHero
        eyebrow="How It Works"
        title="From inquiry to delivery in five clear steps"
        subtitle="No black box. You see each stage, each document, and each decision point before we move forward."
        id="hiw-title"
        subId="hiw-subtitle"
        bgId="hiw-hero-bg-j6"
      />

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-14">
            {PROCESS_STEPS.map((step, i) => {
              const media = STEP_MEDIA[step.id]
              const flip = i % 2 === 1
              return (
                <div key={step.id} className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
                  <div className={flip ? 'lg:order-2' : ''}>
                    <span className="text-sm font-bold uppercase tracking-widest text-brand-600">Step {step.num}</span>
                    <h2 id={`${step.id}-title`} className="mt-2 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                      {step.title}
                    </h2>
                    <p id={`${step.id}-detail`} className="mt-4 text-base leading-relaxed text-slate-600">
                      {step.detail}
                    </p>
                  </div>
                  <div className={`overflow-hidden rounded-xl border border-slate-200 shadow-sm ${flip ? 'lg:order-1' : ''}`}>
                    <img
                      alt={media.alt}
                      data-strk-img-id={media.imgId}
                      data-strk-img={`[${step.id}-detail] [${step.id}-title]`}
                      data-strk-img-ratio="16x9"
                      data-strk-img-width="900"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="aspect-[16/9] w-full object-cover"
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">What to Expect</p>
              <h2 id="hiw-expect-title" className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                Working with us, in practical terms
              </h2>
              <p id="hiw-expect-subtitle" className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
                The standards we hold every engagement to — regardless of order size.
              </p>
              <ul className="mt-8 space-y-4">
                {EXPECTATIONS.map((e) => (
                  <li key={e} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                    <span className="text-sm leading-relaxed text-slate-700 md:text-base">{e}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="mt-9 inline-flex items-center gap-2 rounded-lg bg-brand-600 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
              >
                Start with a free quote <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="overflow-hidden rounded-xl border border-slate-200 shadow-sm">
              <img
                alt="Sourcing team reviewing production reports"
                data-strk-img-id="hiw-team-img-k7"
                data-strk-img="[hiw-expect-subtitle] [hiw-expect-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="FAQ"
            title="Process questions, answered"
          />
          <div className="mt-12">
            <Faq />
          </div>
        </div>
      </section>

      <CtaBand />
    </div>
  )
}
