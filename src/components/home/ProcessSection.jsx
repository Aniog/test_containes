import SectionHeader from '../SectionHeader'
import { MessageSquare, Search, Building2, ClipboardCheck, Ship, Package } from 'lucide-react'

const steps = [
  {
    step: '01',
    icon: MessageSquare,
    title: 'Tell Us Your Needs',
    desc: 'Share your product requirements, target price, quantity, and any specific standards or certifications needed.',
  },
  {
    step: '02',
    icon: Search,
    title: 'Supplier Research',
    desc: 'We scan our network and market databases to identify 3-5 qualified manufacturers that match your criteria.',
  },
  {
    step: '03',
    icon: Building2,
    title: 'Factory Verification',
    desc: 'Our team conducts on-site audits to verify factory licenses, equipment, capacity, and working conditions.',
  },
  {
    step: '04',
    icon: ClipboardCheck,
    title: 'Quality Control',
    desc: 'We perform pre-production, in-line, and pre-shipment inspections to ensure every batch meets your standards.',
  },
  {
    step: '05',
    icon: Ship,
    title: 'Shipping & Logistics',
    desc: 'We coordinate freight booking, customs documentation, and delivery scheduling to your chosen destination.',
  },
  {
    step: '06',
    icon: Package,
    title: 'Delivery & Support',
    desc: 'You receive your goods. We remain available for reorders, supplier relationship management, and issue resolution.',
  },
]

export default function ProcessSection() {
  return (
    <section className="py-20 md:py-24 bg-bg-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          caption="Our Process"
          title="How Sourcing Works With Us"
          subtitle="A proven 6-step process designed to minimize risk, save time, and deliver reliable results for your business."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((s) => (
            <div key={s.step} className="relative p-6 lg:p-8 rounded-xl bg-white border border-border hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl font-extrabold text-secondary/30">{s.step}</span>
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <s.icon className="w-5 h-5 text-primary" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">{s.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
