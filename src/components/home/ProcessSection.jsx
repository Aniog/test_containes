import { ClipboardList, Search, FileCheck, Boxes, Ship, HeadphonesIcon } from 'lucide-react'
import SectionLabel from '@/components/shared/SectionLabel'

const steps = [
  {
    number: '01',
    icon: ClipboardList,
    title: 'Tell Us Your Needs',
    description: 'Share product details, target price, quantity, and any supplier requirements through our inquiry form or a call.',
  },
  {
    number: '02',
    icon: Search,
    title: 'Supplier Research',
    description: 'We shortlist 3-5 qualified manufacturers and provide clear comparisons of capabilities, pricing, and lead time.',
  },
  {
    number: '03',
    icon: FileCheck,
    title: 'Verification & Sampling',
    description: 'We audit the selected factory, confirm certifications, and coordinate samples for your approval.',
  },
  {
    number: '04',
    icon: Boxes,
    title: 'Production Monitoring',
    description: 'We follow the order through material preparation, production, inline checks, and final pre-shipment inspection.',
  },
  {
    number: '05',
    icon: Ship,
    title: 'Shipping & Documentation',
    description: 'We help arrange freight, prepare export paperwork, and track the shipment until it reaches you.',
  },
  {
    number: '06',
    icon: HeadphonesIcon,
    title: 'After-Sales Support',
    description: 'If issues arise after delivery, we work with the supplier to resolve claims and support future reorders.',
  },
]

export default function ProcessSection() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <SectionLabel>How It Works</SectionLabel>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            A Clear Sourcing Process
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            We keep every stage transparent and documented, so you always know where your order stands.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <span className="absolute right-6 top-6 text-5xl font-extrabold text-slate-100 select-none">
                {step.number}
              </span>
              <div className="relative">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                  <step.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
