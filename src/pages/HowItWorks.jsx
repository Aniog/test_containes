import { useEffect, useRef } from 'react'
import PageHero from '@/components/shared/PageHero'
import { processSteps } from '@/data/site'
import SectionHeading from '@/components/shared/SectionHeading'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { CheckCircle2 } from 'lucide-react'

const deliverables = [
  'Shortlist of 2–4 verified suppliers with price & MOQ',
  'On-site factory audit report with photos',
  'Coordinated samples and approved proforma invoice',
  'Weekly production progress reports',
  'Pre-shipment inspection report (AQL)',
  'Shipping docs, customs clearance, door-to-door delivery',
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
    <>
      <PageHero
        eyebrow="How It Works"
        title="A clear, checkpointed sourcing process"
        subtitle="Six steps from your first message to goods at your door — each with a defined deliverable so you always know what you are paying for."
        bgQueryId="howitworks-hero-bg-3c4d5e"
        bgQueryText="warehouse logistics shipping containers China"
      />

      <section className="section-pad bg-canvas">
        <div className="container-page">
          <div className="relative">
            <div className="absolute left-[27px] top-2 bottom-2 hidden w-px bg-slate-200 md:block" />
            <ol className="space-y-8">
              {processSteps.map((step) => (
                <li key={step.id} className="relative md:pl-20">
                  <div className="absolute left-0 top-0 hidden h-14 w-14 items-center justify-center rounded-full border-4 border-canvas bg-navy text-white md:flex">
                    <span className="text-sm font-bold">{step.no}</span>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-white p-6">
                    <div className="flex items-center gap-3">
                      <span className="md:hidden flex h-9 w-9 items-center justify-center rounded-full bg-navy text-sm font-bold text-white">
                        {step.no}
                      </span>
                      <h2 className="text-xl font-bold text-ink">{step.title}</h2>
                    </div>
                    <p className="mt-3 text-muted leading-relaxed">{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section ref={containerRef} className="section-pad bg-white">
        <div className="container-page">
          <SectionHeading
            eyebrow="Deliverables"
            title="What you receive at each stage"
            subtitle="Every step produces a tangible output you can review, share, and keep on file."
            align="center"
          />
          <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2">
            {deliverables.map((d) => (
              <div key={d} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-canvas p-5">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-verified" />
                <span className="text-sm font-medium text-ink">{d}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
