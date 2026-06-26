import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PageHero from '../components/shared/PageHero'

const steps = [
  {
    n: '01',
    title: 'Share your requirements',
    description:
      'Tell us about your product, target price, quantity, specifications and any reference samples or images. We can sign an NDA before you share sensitive details.',
    items: [
      'Submit the inquiry form or send an email',
      'Discovery call to clarify the brief',
      'NDA signed if required',
    ],
  },
  {
    n: '02',
    title: 'Supplier search & shortlist',
    description:
      'We search our existing network and the wider market for factories that genuinely match your product, then verify they are real businesses with the right capability.',
    items: [
      'Search across 600+ vetted factories and beyond',
      'Filter by capacity, certifications, MOQ and price level',
      'Deliver 3–5 shortlisted suppliers with company profiles',
    ],
  },
  {
    n: '03',
    title: 'Factory verification & samples',
    description:
      'For shortlisted suppliers we run on-site visits and arrange samples. This is when we confirm what is real and what is just a website.',
    items: [
      'On-site factory audit',
      'Quote comparison and negotiation',
      'Sample shipment to you for approval',
    ],
  },
  {
    n: '04',
    title: 'Order placement & production follow-up',
    description:
      'Once you approve a supplier and sample, we help structure the order, deposit, and timeline, then monitor production until goods are ready.',
    items: [
      'Purchase order and contract review',
      'Weekly production updates with photos',
      'Risk flags and corrective actions',
    ],
  },
  {
    n: '05',
    title: 'Quality inspection',
    description:
      'We carry out independent inspections at the agreed stages, so problems are found in the factory — not in your warehouse.',
    items: [
      'Pre-production raw material check',
      'During-production (DUPRO) inspection',
      'Pre-shipment inspection report with photos and video',
    ],
  },
  {
    n: '06',
    title: 'Shipping & delivery',
    description:
      'We organize export-side logistics so the goods leave China efficiently and arrive in your country with complete documentation.',
    items: [
      'Consolidation, export packing and labelling',
      'Sea or air freight booking with trusted forwarders',
      'Full documentation: invoice, packing list, BOL, CO',
    ],
  },
]

export default function HowItWorks() {
  return (
    <>
      <PageHero
        eyebrow="How it works"
        titleId="how-page-title"
        descId="how-page-desc"
        title="A clear, six-step process from inquiry to delivery"
        description="Everything we do is documented in writing — from supplier shortlist to shipping documents — so you always know what is happening."
      />

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <ol className="relative border-l border-slate-200 ml-3 md:ml-4 space-y-10">
            {steps.map((step) => (
              <li key={step.n} className="ml-6 md:ml-8">
                <span className="absolute -left-3.5 md:-left-4 flex h-7 w-7 items-center justify-center rounded-full bg-blue-700 text-xs font-bold text-white ring-4 ring-white">
                  {step.n}
                </span>
                <div className="rounded-xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-base text-slate-600 leading-relaxed">{step.description}</p>
                  <ul className="mt-5 grid sm:grid-cols-3 gap-3">
                    {step.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-md bg-slate-50 border border-slate-200 px-3 py-2.5 text-sm text-slate-700"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-14 rounded-2xl bg-slate-900 text-white p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-xl md:text-2xl font-bold tracking-tight">
                Ready to start? Send us your product brief.
              </h3>
              <p className="mt-2 text-sm md:text-base text-slate-300">
                We typically reply within one business day with a tailored proposal.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-600 px-6 py-3.5 text-base font-semibold text-white hover:bg-blue-500 transition"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
