import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Factory, ShieldCheck, ClipboardCheck, Ship, ArrowRight } from 'lucide-react'

const services = [
  {
    title: 'Supplier Sourcing',
    icon: Factory,
    description: 'We identify manufacturers that match your product requirements, target price, and minimum order quantity.',
    details: [
      'Product category research and supplier shortlisting',
      'Price benchmarking and negotiation support',
      'Sample coordination and review',
      'Clear supplier profiles with capabilities and certifications',
    ],
  },
  {
    title: 'Factory Verification',
    icon: ShieldCheck,
    description: 'Before you place a large order, we verify that the factory is legitimate, capable, and compliant.',
    details: [
      'Business license and registration checks',
      'Factory audits and production line visits',
      'Capacity and quality system assessment',
      'Risk identification and mitigation recommendations',
    ],
  },
  {
    title: 'Quality Inspection',
    icon: ClipboardCheck,
    description: 'Independent inspections at key production stages to reduce defects and protect your investment.',
    details: [
      'Pre-production material and first-article checks',
      'In-line monitoring during production',
      'Final random inspection with pass/fail criteria',
      'Loading supervision and container sealing support',
    ],
  },
  {
    title: 'Shipping Coordination',
    icon: Ship,
    description: 'We manage logistics so your goods move from factory to destination efficiently and transparently.',
    details: [
      'Freight forwarding by sea, air, express, or rail',
      'Customs documentation and compliance support',
      'Insurance and cargo tracking',
      'Door-to-door delivery coordination',
    ],
  },
]

export default function Services() {
  return (
    <div>
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-3xl font-semibold text-slate-900">Services</h1>
          <p className="mt-3 max-w-2xl text-slate-600">
            End-to-end sourcing support from supplier discovery to final delivery. Each service can be booked separately or as part of a managed sourcing project.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((item) => (
            <div key={item.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <item.icon className="h-7 w-7 text-slate-900" />
                <h2 className="text-lg font-semibold text-slate-900">{item.title}</h2>
              </div>
              <p className="mt-3 text-sm text-slate-600">{item.description}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {item.details.map((detail) => (
                  <li key={detail} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-900" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Button asChild variant="outline" className="gap-2">
                  <Link to="/contact">Request this service <ArrowRight className="h-4 w-4" /></Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl font-semibold text-slate-900">How to choose the right service</h2>
          <p className="mt-2 text-slate-600">
            If you are not sure where to start, start with supplier sourcing. Once you have a shortlist, add factory verification and inspection. Shipping coordination is usually the final step after production is complete.
          </p>
          <div className="mt-8">
            <Button asChild>
              <Link to="/contact">Get a Free Sourcing Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
