import { useEffect, useRef } from 'react'
import * as Icons from 'lucide-react'
import { processSteps } from '@/data/content'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import PageHeader from '@/components/sections/PageHeader'
import CtaBanner from '@/components/sections/CtaBanner'
import Button from '@/components/ui/Button'

export default function HowItWorks() {
  const ref = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (ref.current) {
        ImageHelper.loadImages(strkImgConfig, ref.current)
      }
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <>
      <PageHeader
        eyebrow="How It Works"
        title="A transparent sourcing process, step by step"
        subtitle="From your first message to delivered goods, here is exactly what happens at each stage of working with us."
      />

      <section className="bg-surface">
        <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid gap-6 md:grid-cols-2">
            {processSteps.map((step) => {
              const Icon = Icons[step.icon] || Icons.Circle
              return (
                <div
                  key={step.step}
                  className="relative rounded-xl border border-border-base bg-white p-7 shadow-sm"
                >
                  <div className="flex items-start gap-5">
                    <span className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-primary text-white">
                      <Icon className="h-7 w-7" />
                    </span>
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-bold text-action">
                          Step {step.step}
                        </span>
                      </div>
                      <h3 className="mt-1 text-lg font-semibold text-ink">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-body">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section ref={ref} className="bg-white">
        <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-ink">
                What you receive at each stage
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-body">
                Transparency is built into our process. At every milestone you
                get clear documentation so you can make decisions with
                confidence.
              </p>
              <ul className="mt-6 space-y-4">
                {[
                  'A shortlist of vetted suppliers with pricing and MOQ comparison',
                  'Factory audit reports with photos and capacity details',
                  'Sample evaluation notes and negotiation summaries',
                  'Production milestone updates with progress photos',
                  'AQL inspection reports with pass/fail results',
                  'Shipping documents and tracking information',
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-slate-body"
                  >
                    <Icons.CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0 text-action" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button to="/contact" size="lg">
                  Start Your Sourcing Project
                </Button>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl border border-border-base bg-slate-100 shadow-sm">
              <div className="aspect-[4/3]">
                <img
                  alt="Factory production floor in China"
                  data-strk-img-id="howitworks-floor-9a8b7c"
                  data-strk-img="factory production floor China manufacturing"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
