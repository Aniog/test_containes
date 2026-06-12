import PageHeader from '../components/PageHeader'
import CTASection from '../components/CTASection'
import {
  FileText, ListChecks, FlaskConical, Handshake, Factory, ShieldCheck, Ship, PackageCheck,
} from 'lucide-react'

const phases = [
  {
    n: '01',
    icon: FileText,
    title: 'Brief & feasibility',
    when: 'Day 0–2',
    desc: 'You share product specs, target price, quantity and certifications. We confirm scope, indicative pricing and timeline, and propose a service fee.',
    deliverables: ['Project brief signed off', 'Service agreement & NDA (optional)', 'Initial budget and timeline'],
  },
  {
    n: '02',
    icon: ListChecks,
    title: 'Supplier shortlist',
    when: 'Week 1–2',
    desc: 'We identify 3–5 verified factories from our network and offline channels. Quotes are compared in a single side-by-side table.',
    deliverables: ['Shortlist with company profiles', 'Comparison spreadsheet', 'Recommended supplier with rationale'],
  },
  {
    n: '03',
    icon: FlaskConical,
    title: 'Sampling',
    when: 'Week 2–4',
    desc: 'We request samples from selected suppliers, evaluate them against your specs, and ship the best ones to you for final approval.',
    deliverables: ['Sample evaluation report', 'Photo / video records', 'Consolidated courier shipment'],
  },
  {
    n: '04',
    icon: Handshake,
    title: 'Negotiation & PO',
    when: 'Week 4–5',
    desc: 'We negotiate price, MOQ, tooling, packaging and payment terms. Once aligned, we issue or review the PO and supplier contract.',
    deliverables: ['Final itemized quote', 'Signed PO / sales contract', 'Payment schedule confirmed'],
  },
  {
    n: '05',
    icon: Factory,
    title: 'Production follow-up',
    when: 'Week 5–10+',
    desc: 'We monitor production with the factory, share weekly photo updates, and flag any timeline or quality risks early.',
    deliverables: ['Weekly production reports', 'Mid-production photos', 'Issue logs with proposed actions'],
  },
  {
    n: '06',
    icon: ShieldCheck,
    title: 'Quality inspection',
    when: 'Before shipment',
    desc: 'Independent inspection at AQL 2.5 (or your custom standard). Goods only ship after the report is approved by you.',
    deliverables: ['Pre-shipment inspection report', 'Defect photos & video', 'Container loading supervision'],
  },
  {
    n: '07',
    icon: Ship,
    title: 'Shipping & customs',
    when: 'Final phase',
    desc: 'We coordinate freight, export documents and customs handling. Choose FOB, CIF or DDP based on your operation.',
    deliverables: ['Booking confirmation', 'Bill of Lading / AWB', 'Commercial invoice & packing list'],
  },
  {
    n: '08',
    icon: PackageCheck,
    title: 'Delivery & feedback',
    when: 'After arrival',
    desc: 'Once goods arrive, we collect your feedback, log lessons learned, and prepare for your next reorder if needed.',
    deliverables: ['Delivery confirmation', 'Reorder plan if applicable', 'Supplier scorecard'],
  },
]

export default function HowItWorks() {
  return (
    <>
      <PageHeader
        eyebrow="How it works"
        title="A clear, eight-phase sourcing process"
        subtitle="From your first brief to delivered goods. Each phase has defined deliverables, so you always know what you are paying for."
      />

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {phases.map((p) => {
              const Icon = p.icon
              return (
                <div
                  key={p.n}
                  className="rounded-xl border border-brand-border bg-white p-6 md:p-7 hover:shadow-md transition"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand-surface text-brand-blue">
                        <Icon className="h-5 w-5" strokeWidth={1.75} />
                      </span>
                      <div>
                        <p className="text-2xl font-bold text-brand-blue leading-none">{p.n}</p>
                        <p className="mt-1 text-xs uppercase tracking-wider font-semibold text-brand-muted">
                          {p.when}
                        </p>
                      </div>
                    </div>
                  </div>
                  <h2 className="mt-4 text-lg md:text-xl font-semibold text-brand-navy">{p.title}</h2>
                  <p className="mt-2 text-sm text-brand-muted leading-relaxed">{p.desc}</p>
                  <div className="mt-4 pt-4 border-t border-brand-border">
                    <p className="text-xs uppercase tracking-wider font-semibold text-brand-navy">
                      Deliverables
                    </p>
                    <ul className="mt-2 space-y-1.5">
                      {p.deliverables.map((d) => (
                        <li key={d} className="flex items-start gap-2 text-sm text-brand-ink">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-blue flex-shrink-0" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-brand-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] font-semibold text-brand-blue">
                Typical timeline
              </p>
              <h2 className="mt-3 text-2xl md:text-3xl font-bold text-brand-navy">
                From brief to delivered goods in 6–14 weeks
              </h2>
              <p className="mt-4 text-sm text-brand-muted leading-relaxed">
                Most B2B sourcing projects close in around 8–12 weeks, depending on complexity,
                certifications and freight method. We confirm a realistic timeline before you commit.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-brand-ink">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-blue flex-shrink-0" />
                  <span><strong className="text-brand-navy">Sourcing &amp; sampling:</strong> 2–4 weeks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-blue flex-shrink-0" />
                  <span><strong className="text-brand-navy">Production:</strong> 3–8 weeks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-blue flex-shrink-0" />
                  <span><strong className="text-brand-navy">QC &amp; shipping:</strong> 1–6 weeks</span>
                </li>
              </ul>
            </div>
            <div className="rounded-2xl overflow-hidden border border-brand-border aspect-[4/3] bg-slate-100">
              <img
                alt="Production timeline meeting between buyer and supplier"
                className="w-full h-full object-cover"
                data-strk-img-id="how-timeline-img"
                data-strk-img="[how-timeline-title] sourcing project timeline meeting"
                data-strk-img-ratio="4x3"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <span id="how-timeline-title" className="sr-only">Sourcing project timeline meeting</span>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
