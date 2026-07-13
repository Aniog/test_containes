import { ShieldCheck, Users, Globe2, Clock, Award, FileText } from 'lucide-react'
import SectionLabel from '@/components/shared/SectionLabel'

const trustPoints = [
  {
    icon: ShieldCheck,
    title: 'Verified Suppliers',
    description: 'We visit factories, review licenses, and confirm production capacity before recommending any supplier.',
  },
  {
    icon: Users,
    title: 'Bilingual Team',
    description: 'Our team speaks English and Chinese, bridging language and cultural gaps during negotiations.',
  },
  {
    icon: Globe2,
    title: 'Global Reach',
    description: 'We support buyers across North America, Europe, Australia, the Middle East, and beyond.',
  },
  {
    icon: Clock,
    title: 'Fast Response',
    description: 'Receive a tailored supplier shortlist or quote response within 24-48 hours.',
  },
  {
    icon: Award,
    title: 'Transparent Pricing',
    description: 'Clear service fees and cost breakdowns. No surprise charges added at the last minute.',
  },
  {
    icon: FileText,
    title: 'Detailed Reporting',
    description: 'Inspection and audit reports include photos, measurements, and clear pass/fail conclusions.',
  },
]

export default function TrustSection() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <SectionLabel>Trust Points</SectionLabel>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Built for Reliable Partnerships
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            We are judged by the suppliers we recommend and the quality of the goods that reach your warehouse.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {trustPoints.map((point) => (
            <div
              key={point.title}
              className="flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <point.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{point.title}</h3>
              <p className="text-sm leading-relaxed text-slate-600">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
