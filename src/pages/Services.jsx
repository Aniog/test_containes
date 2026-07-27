import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import { Link } from 'react-router-dom'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import strkImgConfig from '@/strk-img-config.json'
import SectionHeading from '@/components/shared/SectionHeading'
import CtaBand from '@/components/shared/CtaBand'

const services = [
  {
    id: 'supplier-sourcing',
    title: 'Supplier Sourcing',
    intro:
      'Finding a supplier is easy. Finding the right manufacturer — reliable, capable, and honest — is the hard part. We combine our vetted factory network with structured screening of major B2B platforms to build a shortlist you can trust.',
    points: [
      'Requirement briefing and feasibility check within 1 business day',
      'Screening of 20–40 candidate factories per project',
      'Shortlist of 3–5 verified manufacturers with compared quotes, MOQs, and lead times',
      'Sample coordination and side-by-side evaluation support',
      'Price and contract term negotiation on your behalf',
    ],
    deliverable: 'Deliverable: supplier shortlist report with quotes, audit notes, and our recommendation.',
    imgId: 'svc-sourcing-7a24c1',
  },
  {
    id: 'factory-verification',
    title: 'Factory Verification & Audit',
    intro:
      'Before you send a deposit, know exactly who you are paying. Our auditors visit the site in person and verify the company behind the storefront — registration, ownership, production lines, and real capacity.',
    points: [
      'Business license and legal registration checks',
      'Manufacturer vs. trading company verification',
      'On-site review of production lines, equipment, and workforce',
      'Quality management system assessment (ISO 9001 and industry-specific)',
      'Verification of certifications and past export records',
    ],
    deliverable: 'Deliverable: written audit report with photos and a clear verdict within 3 business days of the visit.',
    imgId: 'svc-audit-3f85e9',
  },
  {
    id: 'quality-inspection',
    title: 'Quality Control Inspection',
    intro:
      'Quality is checked in China — not discovered at your warehouse. Our inspectors follow AQL sampling standards and your approved golden sample, at every stage where problems can still be fixed.',
    points: [
      'Pre-production checks of materials and components',
      'During-production inspection when 20–50% of the order is complete',
      'Pre-shipment inspection with AQL sampling and on-site tests',
      'Container loading supervision to prevent wrong or damaged cargo',
      'Defect documentation with photos, videos, and measurements',
    ],
    deliverable: 'Deliverable: detailed inspection report within 24 hours, with a clear pass/fail recommendation. Goods ship only with your approval.',
    imgId: 'svc-qc-9d12b4',
  },
  {
    id: 'production-followup',
    title: 'Production Follow-up',
    intro:
      'Once the deposit is paid, many suppliers go quiet. We stay on the factory floor so your order stays on schedule — and you hear about problems while there is still time to solve them.',
    points: [
      'Production schedule confirmation and milestone tracking',
      'Weekly written updates with photos from the factory floor',
      'On-site visits at critical production stages',
      'Issue escalation and resolution directly with factory management',
      'Balance payment released only after passed inspection',
    ],
    deliverable: 'Deliverable: weekly status reports and a final production summary before shipment.',
    imgId: 'svc-production-4e67d8',
  },
  {
    id: 'shipping-logistics',
    title: 'Shipping & Logistics Coordination',
    intro:
      'Getting goods out of the factory is only half the journey. We coordinate the entire export process so your cargo moves on time, with the right documents, at a fair freight rate.',
    points: [
      'Freight forwarder selection and rate comparison (sea, air, rail)',
      'Consolidation of orders from multiple factories into shared containers',
      'Export documentation: commercial invoice, packing list, bill of lading, certificates of origin',
      'HS code and customs compliance support',
      'Shipment tracking and delivery coordination to your port or warehouse',
    ],
    deliverable: 'Deliverable: a complete, accurate document package and tracked shipment from factory to destination.',
    imgId: 'svc-shipping-5b39f2',
  },
]

const Services = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-paper py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Services"
            title="Sourcing, verification, QC, and shipping — handled on the ground"
            description="Book a single service or let us manage your entire China supply chain. Every service comes with documented evidence and a named specialist responsible for your project."
          />
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {services.map((service, index) => (
            <article
              key={service.id}
              className={`grid items-center gap-10 border-b border-line py-16 last:border-b-0 md:py-20 lg:grid-cols-2 ${
                index % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
              }`}
            >
              <div className="overflow-hidden rounded-xl border border-line shadow-sm">
                <img
                  alt={service.title}
                  className="aspect-[4/3] w-full object-cover"
                  data-strk-img-id={service.imgId}
                  data-strk-img={`[svc-${service.id}-intro] [svc-${service.id}-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
                  Service {String(index + 1).padStart(2, '0')}
                </p>
                <h2
                  id={`svc-${service.id}-title`}
                  className="mt-2 text-2xl font-bold tracking-tight text-ink md:text-3xl"
                >
                  {service.title}
                </h2>
                <p id={`svc-${service.id}-intro`} className="mt-4 text-base leading-relaxed text-slate-body">
                  {service.intro}
                </p>
                <ul className="mt-6 space-y-3">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                      <span className="text-base leading-relaxed text-slate-body">{point}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 rounded-lg bg-brand-50 px-4 py-3 text-sm font-medium text-brand-800">
                  {service.deliverable}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-paper py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-ink md:text-3xl">
            Not sure which service you need?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-body md:text-lg">
            Tell us where you are in your sourcing journey — first order, switching
            suppliers, or scaling up — and we will recommend the smallest engagement
            that actually solves your problem.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-brand-600 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-brand-700"
          >
            Ask for a recommendation <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      <CtaBand />
    </div>
  )
}

export default Services
