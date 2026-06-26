import { ClipboardList, Search, Building2, ClipboardCheck, PackageCheck, Ship } from 'lucide-react'
import SectionHeader from '@/components/shared/SectionHeader'

const steps = [
  {
    icon: ClipboardList,
    title: 'Submit your inquiry',
    description: 'Share product specs, quantity, target price, and destination.',
  },
  {
    icon: Search,
    title: 'Supplier shortlist',
    description: 'We identify 2–5 qualified manufacturers within 3–5 working days.',
  },
  {
    icon: Building2,
    title: 'Verify & quote',
    description: 'We audit factories and negotiate pricing, samples, and terms.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality control',
    description: 'Inspections during production and before shipment protect your order.',
  },
  {
    icon: PackageCheck,
    title: 'Prepare for export',
    description: 'We handle labeling, documentation, and consolidation.',
  },
  {
    icon: Ship,
    title: 'Ship & deliver',
    description: 'Freight coordination and updates until goods reach your warehouse.',
  },
]

export default function HomeProcess() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="How It Works"
          title="A simple, transparent sourcing process"
          description="We keep every step visible and practical, so you always know the status of your order."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative flex gap-5">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-brand-800 text-white flex items-center justify-center font-bold text-lg shrink-0">
                    {index + 1}
                  </div>
                  {index !== steps.length - 1 && (
                    <div className="hidden lg:block w-px flex-1 bg-slate-300 my-2" />
                  )}
                </div>
                <div className="pb-2">
                  <div className="w-10 h-10 rounded-lg bg-brand-50 text-brand-800 flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
