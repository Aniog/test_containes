import { Link } from 'react-router-dom'
import {
  Search,
  ShieldCheck,
  ClipboardCheck,
  Factory,
  Ship,
  Layers,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react'
import PageHero from '../components/shared/PageHero'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    summary:
      'We find and shortlist qualified factories for your product so you can choose with confidence.',
    deliverables: [
      '3–5 shortlisted suppliers with company background',
      'Itemized quote comparison (price, MOQ, lead time, payment terms)',
      'Sample arrangement and price negotiation',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    summary:
      'On-site audits that confirm the factory is real, capable, and a fit for your standards.',
    deliverables: [
      'Business license and export license check',
      'On-site visit with photo and video evidence',
      'Capacity, workforce and compliance assessment',
    ],
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    summary:
      'Independent QC at every critical stage of production using AQL sampling standards.',
    deliverables: [
      'Pre-production raw material check',
      'During-production (DUPRO) inspection',
      'Pre-shipment inspection with photo, video and detailed report',
    ],
  },
  {
    icon: Factory,
    title: 'Production Follow-up',
    summary:
      'Weekly updates on production progress so you stay informed without chasing the factory.',
    deliverables: [
      'Weekly progress reports with photos',
      'Material and sub-supplier status',
      'Early risk flags and mitigation suggestions',
    ],
  },
  {
    icon: Ship,
    title: 'Shipping & Logistics',
    summary:
      'Coordinated freight, export packing and customs documents from China to your warehouse.',
    deliverables: [
      'Multi-supplier consolidation in our warehouse',
      'Export packing, labelling and palletization',
      'Sea / air freight quotes and customs documentation',
    ],
  },
  {
    icon: Layers,
    title: 'Full Sourcing Service',
    summary:
      'End-to-end management of your China order under one transparent service fee.',
    deliverables: [
      'Dedicated sourcing manager',
      'All services above bundled',
      'Single point of contact and accountability',
    ],
  },
]

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        titleId="services-page-title"
        descId="services-page-desc"
        title="Sourcing services for serious buyers"
        description="Pick a single service such as factory verification or a pre-shipment inspection, or hand us your full China order from start to finish."
      />

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
          {services.map(({ icon: Icon, title, summary, deliverables }, idx) => (
            <div
              key={title}
              className="rounded-2xl border border-slate-200 bg-white p-6 md:p-10 shadow-sm grid lg:grid-cols-12 gap-8"
            >
              <div className="lg:col-span-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Service 0{idx + 1}
                  </span>
                </div>
                <h2 className="mt-5 text-2xl md:text-3xl font-bold tracking-tight text-slate-900">
                  {title}
                </h2>
                <p className="mt-3 text-base text-slate-600 leading-relaxed">{summary}</p>
              </div>
              <div className="lg:col-span-7">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                  What you get
                </h3>
                <ul className="mt-4 space-y-3">
                  {deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-3 text-sm text-slate-700">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          <div className="rounded-2xl bg-slate-900 text-white p-8 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
                Not sure which service fits your project?
              </h3>
              <p className="mt-2 text-slate-300 text-sm md:text-base max-w-2xl">
                Send us a short brief. We will recommend the right combination based on your
                product, budget and stage.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-600 px-6 py-3.5 text-base font-semibold text-white hover:bg-blue-500 transition"
            >
              Get a Free Quote
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
