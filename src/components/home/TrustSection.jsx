import { ShieldCheck, Users, Globe, Clock, Award, Headphones } from 'lucide-react'

const trustPoints = [
  { icon: Globe, value: '15+', label: 'Industries Covered' },
  { icon: Users, value: '500+', label: 'Verified Suppliers' },
  { icon: ShieldCheck, value: '10+', label: 'Years on the Ground' },
  { icon: Clock, value: '24h', label: 'Quote Response' },
  { icon: Award, value: 'ISO', label: 'Standard Inspections' },
  { icon: Headphones, value: 'Bilingual', label: 'Account Support' },
]

export default function TrustSection() {
  return (
    <section className="bg-slate-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 id="trust-title" className="text-3xl font-bold text-slate-900 md:text-4xl">
            Why Buyers Trust Us
          </h2>
          <p id="trust-subtitle" className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            A local team with international standards, focused on transparency and accountability.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {trustPoints.map((point) => {
            const Icon = point.icon
            return (
              <div
                key={point.label}
                className="flex flex-col items-center rounded-xl border border-slate-100 bg-white p-8 text-center shadow-sm transition hover:shadow-md"
              >
                <Icon className="h-8 w-8 text-primary" />
                <div className="mt-4 text-3xl font-extrabold text-slate-900">{point.value}</div>
                <div className="mt-1 text-sm font-medium text-slate-500">{point.label}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
