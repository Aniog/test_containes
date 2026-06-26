import PageHeader from '@/components/PageHeader.jsx'
import ServicesGrid from '@/components/sections/ServicesGrid.jsx'
import TrustPoints from '@/components/sections/TrustPoints.jsx'
import InquiryForm from '@/components/sections/InquiryForm.jsx'

const DETAIL = [
  {
    title: 'Supplier search',
    body: 'We start from your specs, target unit price and quality requirements. Within 5–7 business days you receive a shortlist of 3–5 pre-screened suppliers, with their quotes, capacity notes and any risk flags we found.',
    deliverables: [
      'Buyer brief & scope document',
      'Pre-screened supplier shortlist',
      'Comparison table with quotes & terms',
    ],
  },
  {
    title: 'Factory verification',
    body: 'For shortlisted or existing suppliers, we visit the factory in person. We check the business license, production line, capacity, certifications and overall workshop conditions. You receive a written report with photos and a clear recommendation.',
    deliverables: [
      'Business license & company info check',
      'On-site audit (production lines, QA, workshop)',
      'Written verification report with photos',
    ],
  },
  {
    title: 'Sample management',
    body: 'We collect samples from one or several factories, document specs, and ship them to your office. Once you approve a golden sample, we lock specs with the chosen supplier before mass production starts.',
    deliverables: [
      'Sample collection & consolidation',
      'Spec sheet & golden sample lock',
      'International courier coordination',
    ],
  },
  {
    title: 'Price negotiation',
    body: 'Negotiation is done by our bilingual team in Chinese, on your behalf, with full transparency. We push on unit price, MOQ, payment terms, lead time and packaging.',
    deliverables: [
      'Transparent supplier quotes',
      'Negotiation summary & terms',
      'Recommended payment structure',
    ],
  },
  {
    title: 'Production follow-up',
    body: 'We track production weekly: materials, labor, schedule. You receive structured updates with photos so you always know where your order stands. We flag risks early rather than at the last minute.',
    deliverables: [
      'Weekly progress report (photos + status)',
      'Risk flags on schedule or quality',
      'Coordination on engineering changes',
    ],
  },
  {
    title: 'Quality inspection',
    body: 'On-site QC at pre-production, during-production and pre-shipment stages. We use AQL 2.5 sampling by default (adjustable) with photo and video evidence and a clear pass/fail decision.',
    deliverables: [
      'AQL inspection report (photo + video)',
      'Defect log with severity',
      'Pass / hold / fail recommendation',
    ],
  },
  {
    title: 'Shipping & logistics',
    body: 'Booking sea, air or rail freight with vetted forwarders, preparing customs documentation, and consolidating shipments across multiple suppliers. DDP to your warehouse on request.',
    deliverables: [
      'Freight booking (FOB / CIF / DDP)',
      'Customs documents preparation',
      'Container consolidation & tracking',
    ],
  },
]

export default function Services() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Sourcing services for serious overseas buyers"
        description="Use any single service or hand over the whole project. Pricing is fixed-fee or percentage of order value, agreed upfront."
      />

      <ServicesGrid />

      <section className="border-b border-slate-200 bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            {DETAIL.map((d) => (
              <article
                key={d.title}
                className="rounded-xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-slate-900">{d.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">
                  {d.body}
                </p>
                <div className="mt-5 border-t border-slate-200 pt-5">
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                    Deliverables
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-700">
                    {d.deliverables.map((x) => (
                      <li key={x} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-700" />
                        <span>{x}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <TrustPoints />
      <InquiryForm />
    </>
  )
}
