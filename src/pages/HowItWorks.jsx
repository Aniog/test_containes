import { useEffect } from 'react'
import { SectionHeading } from '@/components/SectionHeading'
import { processSteps } from '@/data/siteData'

const pageTitle = 'How It Works | SSourcing China'

export default function HowItWorks() {
  useEffect(() => {
    document.title = pageTitle
  }, [])

  return (
    <div className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="How It Works"
          title="Your Sourcing Journey, Step by Step"
          description="We have refined a clear workflow that keeps you informed and in control from inquiry to shipment."
        />

        <div className="mt-16 grid gap-12">
          {processSteps.map((step, index) => (
            <div
              key={step.id}
              className={`flex flex-col gap-6 md:flex-row md:items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl bg-primary text-4xl font-bold text-white md:h-32 md:w-32">
                {step.number}
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 md:p-8">
                <h3 className="text-xl font-semibold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-3 text-slate-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
