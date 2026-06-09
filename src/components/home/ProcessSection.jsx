import { ClipboardList, Search, ShieldCheck, FileCheck, Truck, Handshake } from 'lucide-react'

const steps = [
  {
    num: '01',
    icon: ClipboardList,
    title: 'Share Your Requirements',
    desc: 'Tell us what you need: product specs, target price, quantity, and timeline. We review and confirm feasibility within 24 hours.',
  },
  {
    num: '02',
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We shortlist 3-5 verified suppliers matching your criteria, request samples, and compile a detailed comparison report.',
  },
  {
    num: '03',
    icon: ShieldCheck,
    title: 'Factory Verification',
    desc: 'Our team visits the factory to audit production lines, check certifications, and assess capacity and working conditions.',
  },
  {
    num: '04',
    icon: FileCheck,
    title: 'Quality Control',
    desc: 'We conduct inspections at pre-production, during production, and pre-shipment stages with photo reports for every batch.',
  },
  {
    num: '05',
    icon: Truck,
    title: 'Shipping & Delivery',
    desc: 'We coordinate freight forwarding, handle customs documentation, and track shipments until they reach your warehouse.',
  },
  {
    num: '06',
    icon: Handshake,
    title: 'Ongoing Support',
    desc: 'We remain your on-ground partner for reorders, new product development, and continuous supplier relationship management.',
  },
]

export default function ProcessSection() {
  return (
    <section className="w-full bg-slate-50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">How We Work</h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-500">
            A transparent, step-by-step process designed to minimize risk and maximize results.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon
            return (
              <div key={step.num} className="relative rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100">
                    <Icon className="h-5 w-5 text-navy-950" />
                  </div>
                  <span className="text-2xl font-extrabold text-slate-200">{step.num}</span>
                </div>
                <h3 className="mb-2 text-lg font-semibold">{step.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
