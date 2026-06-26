import { useEffect, useRef } from 'react'
import {
  ClipboardList,
  Search,
  Building2,
  ClipboardCheck,
  PackageCheck,
  Ship,
} from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import SectionHeader from '@/components/shared/SectionHeader'
import CtaBanner from '@/components/shared/CtaBanner'

const steps = [
  {
    id: 'step-inquiry',
    titleId: 'step-title-inquiry',
    descId: 'step-desc-inquiry',
    title: '1. Submit your inquiry',
    description:
      'Tell us what product you need, target quantity, budget range, delivery destination, and any certification or packaging requirements. The more detail, the faster we can move.',
    icon: ClipboardList,
    imgId: 'step-img-inquiry-1a2b',
  },
  {
    id: 'step-shortlist',
    titleId: 'step-title-shortlist',
    descId: 'step-desc-shortlist',
    title: '2. Receive a supplier shortlist',
    description:
      'We identify 2–5 qualified manufacturers and send you supplier profiles, estimated pricing, and lead times within 3–5 working days.',
    icon: Search,
    imgId: 'step-img-shortlist-2b3c',
  },
  {
    id: 'step-verify',
    titleId: 'step-title-verify',
    descId: 'step-desc-verify',
    title: '3. Verify & negotiate',
    description:
      'We audit selected factories, negotiate terms, arrange samples, and clarify production details before you place an order.',
    icon: Building2,
    imgId: 'step-img-verify-3c4d',
  },
  {
    id: 'step-qc',
    titleId: 'step-title-qc',
    descId: 'step-desc-qc',
    title: '4. Quality control',
    description:
      'Our inspectors check materials, workmanship, packaging, and quantities at agreed milestones. You receive photo reports and defect summaries.',
    icon: ClipboardCheck,
    imgId: 'step-img-qc-4d5e',
  },
  {
    id: 'step-export',
    titleId: 'step-title-export',
    descId: 'step-desc-export',
    title: '5. Prepare for export',
    description:
      'We help with labeling, carton marks, export documents, and consolidation so your cargo is ready for customs and freight.',
    icon: PackageCheck,
    imgId: 'step-img-export-5e6f',
  },
  {
    id: 'step-ship',
    titleId: 'step-title-ship',
    descId: 'step-desc-ship',
    title: '6. Ship & deliver',
    description:
      'We coordinate freight quotes, booking, and loading. You get tracking updates until the shipment arrives at your warehouse.',
    icon: Ship,
    imgId: 'step-img-ship-6f7g',
  },
]

export default function HowItWorks() {
  const ref = useRef(null)
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <div ref={ref}>
      <section className="bg-slate-900 py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold tracking-wide uppercase text-brand-300 mb-3">
            Our Process
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            How SSourcing China works
          </h1>
          <p className="mt-5 text-lg text-slate-300 leading-relaxed">
            A clear, six-step process that keeps your sourcing project on track
            from first contact to final delivery.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="From inquiry to delivery"
            description="We keep every milestone visible and practical, with regular updates and fast decisions when issues arise."
          />

          <div className="space-y-12 md:space-y-16">
            {steps.map((step, index) => {
              const Icon = step.icon
              const isEven = index % 2 === 1
              return (
                <article
                  key={step.id}
                  className={`flex flex-col ${
                    isEven ? 'md:flex-row-reverse' : 'md:flex-row'
                  } gap-8 items-center`}
                >
                  <div className="w-full md:w-1/2 rounded-2xl overflow-hidden bg-slate-100 aspect-[4/3]">
                    <img
                      alt={step.title}
                      className="w-full h-full object-cover"
                      data-strk-img-id={step.imgId}
                      data-strk-img={`[${step.descId}] [${step.titleId}] [page-how-title]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="700"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    />
                  </div>
                  <div className="w-full md:w-1/2">
                    <div className="w-12 h-12 rounded-full bg-brand-800 text-white flex items-center justify-center text-lg font-bold mb-4">
                      {index + 1}
                    </div>
                    <div className="w-10 h-10 rounded-lg bg-brand-50 text-brand-800 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h2
                      id={step.titleId}
                      className="text-2xl font-bold text-slate-900"
                    >
                      {step.title}
                    </h2>
                    <p
                      id={step.descId}
                      className="mt-3 text-slate-600 leading-relaxed"
                    >
                      {step.description}
                    </p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  )
}
