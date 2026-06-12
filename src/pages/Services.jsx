import {
  Search, ClipboardCheck, Package, HandCoins, Eye, Factory, Ship, Tag, CheckCircle2,
} from 'lucide-react'
import PageHeader from '../components/PageHeader'
import CTASection from '../components/CTASection'

const services = [
  {
    icon: Search,
    title: 'Supplier Search & Verification',
    desc: 'We identify factories that match your specifications, then physically verify them on the ground.',
    bullets: [
      'Source from offline channels, trade fairs and our network — not just Alibaba',
      'Cross-check business licenses, registration and trade history',
      'Confirm whether a supplier is a real factory or a trading company',
      'Initial capacity, equipment and certification check',
    ],
  },
  {
    icon: ClipboardCheck,
    title: 'Factory Audit',
    desc: 'A structured on-site audit to confirm capacity, quality systems and compliance before you commit.',
    bullets: [
      'Production lines, machinery and capacity assessment',
      'QC processes, in-house testing and SOP review',
      'Social compliance and working conditions overview',
      'Photo, video and written report shared in 5–7 days',
    ],
  },
  {
    icon: Package,
    title: 'Sample Management',
    desc: 'Compare options before you buy — we collect, evaluate and ship samples on your behalf.',
    bullets: [
      'Collect samples from multiple shortlisted suppliers',
      'Side-by-side specification and quality comparison',
      'Consolidated shipping to reduce courier cost',
      'Golden samples kept on file for production reference',
    ],
  },
  {
    icon: HandCoins,
    title: 'Price Negotiation',
    desc: 'Local-market negotiation on price, MOQ, payment terms and lead time, on your behalf.',
    bullets: [
      'Itemized quote breakdown — no hidden costs',
      'Negotiate MOQ, tooling, packaging and certifications',
      'Payment term review (TT, LC, Trade Assurance, escrow)',
      'No supplier kickbacks or commission',
    ],
  },
  {
    icon: Factory,
    title: 'Production Follow-up',
    desc: 'Stay informed on every order milestone with weekly written updates from our team in China.',
    bullets: [
      'Production schedule confirmation with the factory',
      'Weekly progress photos and milestone updates',
      'Issue escalation with proposed solutions',
      'On-site visits during critical stages',
    ],
  },
  {
    icon: Eye,
    title: 'Quality Inspection',
    desc: 'Independent inspections at the right stages of production to catch issues before they ship.',
    bullets: [
      'Initial production check (IPC) on first articles',
      'During-production inspection (DUPRO)',
      'Pre-shipment inspection (PSI) at AQL 2.5 or your standard',
      'Container loading supervision and seal photos',
    ],
  },
  {
    icon: Ship,
    title: 'Shipping & Logistics',
    desc: 'Coordinated freight from factory to destination, with the right Incoterm for your operation.',
    bullets: [
      'Sea, air and rail freight via vetted forwarders',
      'FOB, CIF and DDP shipping options',
      'Export documents, fumigation, certificates of origin',
      'Customs clearance support in destination country',
    ],
  },
  {
    icon: Tag,
    title: 'Private Label / OEM',
    desc: 'End-to-end support for branded production — from artwork to barcoded retail-ready cartons.',
    bullets: [
      'Logo printing, embossing and custom packaging',
      'Manuals, hangtags, polybags and barcode labels',
      'FBA / 3PL prep packaging coordination',
      'IP protection and confidentiality agreements',
    ],
  },
]

export default function Services() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Sourcing services for B2B importers"
        subtitle="One sourcing partner across supplier search, quality control, production and shipping. Transparent pricing, documented work."
      />

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((s) => {
              const Icon = s.icon
              return (
                <article
                  key={s.title}
                  className="rounded-xl border border-brand-border bg-white p-6 md:p-7 hover:shadow-md transition"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand-surface text-brand-blue">
                    <Icon className="h-6 w-6" strokeWidth={1.75} />
                  </span>
                  <h2 className="mt-4 text-xl font-semibold text-brand-navy">{s.title}</h2>
                  <p className="mt-2 text-sm text-brand-muted leading-relaxed">{s.desc}</p>
                  <ul className="mt-4 space-y-2">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-brand-ink">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-brand-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="rounded-xl border border-brand-border bg-white p-6">
              <h3 className="text-lg font-semibold text-brand-navy">Project-based</h3>
              <p className="mt-2 text-sm text-brand-muted leading-relaxed">
                Best for buyers placing one or two orders. Flat service fee covering supplier
                shortlist, sampling, negotiation, QC and shipping coordination.
              </p>
            </div>
            <div className="rounded-xl border border-brand-border bg-white p-6">
              <h3 className="text-lg font-semibold text-brand-navy">Per-order commission</h3>
              <p className="mt-2 text-sm text-brand-muted leading-relaxed">
                Suited to repeat buyers with a stable supplier set. A small percentage on each
                shipment covers ongoing follow-up and inspection.
              </p>
            </div>
            <div className="rounded-xl border border-brand-border bg-white p-6">
              <h3 className="text-lg font-semibold text-brand-navy">Monthly retainer</h3>
              <p className="mt-2 text-sm text-brand-muted leading-relaxed">
                For brands with continuous sourcing needs. A dedicated project manager, multiple
                ongoing orders and supplier portfolio management.
              </p>
            </div>
          </div>
          <p className="mt-6 text-xs text-brand-muted">
            Service fees are agreed in writing before any work starts. We do not take commission
            from suppliers.
          </p>
        </div>
      </section>

      <CTASection />
    </>
  )
}
