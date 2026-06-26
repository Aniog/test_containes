import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import PageHeader from '@/components/common/PageHeader'
import SectionHeading from '@/components/ui/SectionHeading'
import Icon from '@/components/ui/Icon'
import CtaBanner from '@/components/common/CtaBanner'
import { PROCESS_STEPS, TRUST_POINTS } from '@/data/siteContent'

const PLACEHOLDER =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E'

export default function HowItWorks() {
  const ref = useRef(null)
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <div ref={ref}>
      <PageHeader
        eyebrow="How It Works"
        title="From first message to delivered goods"
        description="A transparent, step-by-step process. You stay informed at every milestone and keep control of the key decisions."
        breadcrumbs={[{ label: 'How It Works' }]}
      />

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <ol className="relative space-y-10 border-l-2 border-slate-200 pl-8">
            {PROCESS_STEPS.map((step) => (
              <li key={step.step} className="relative">
                <span className="absolute -left-[2.6rem] flex h-10 w-10 items-center justify-center rounded-full bg-brand text-sm font-bold text-white ring-4 ring-white">
                  {step.step}
                </span>
                <h3 className="text-xl font-bold text-ink">{step.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-ink-muted">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-surface py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="On The Ground"
                title="Real people, at real factories"
                description="We do not rely on emails and video calls alone. Our teams visit factories in person to verify capacity, check production, and resolve issues face to face."
              />
              <ul className="mt-6 space-y-3">
                {[
                  'On-site factory audits with photos and video',
                  'In-person quality inspections at key milestones',
                  'Local teams who speak the language and know the market',
                ].map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <Icon name="CheckCircle2" className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                    <span className="text-sm text-ink">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
              <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  alt="Sourcing team visiting a factory floor in China"
                  data-strk-img-id="howit-visit-img-9c2f4a"
                  data-strk-img="[howit-visit-desc] [howit-visit-title]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src={PLACEHOLDER}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="bg-white p-4">
                <p id="howit-visit-title" className="text-sm font-semibold text-ink">
                  Factory visit and audit
                </p>
                <p id="howit-visit-desc" className="mt-1 text-xs text-ink-muted">
                  Our team on a production floor verifying equipment, capacity, and quality systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            align="center"
            eyebrow="Why It Works"
            title="Built on transparency and follow-through"
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TRUST_POINTS.map((t) => (
              <div
                key={t.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Icon name={t.icon} className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-base font-bold text-ink">{t.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{t.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Start with a free sourcing quote"
        description="Share your product requirements and we will map out the process and timeline for your project."
      />
    </div>
  )
}
