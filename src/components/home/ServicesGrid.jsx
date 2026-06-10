export const SERVICES = [
  {
    id: 'supplier-sourcing',
    title: 'Supplier Sourcing',
    desc: 'We identify multiple qualified manufacturers for your product, compare quotations, and shortlist factories that match your specs, MOQ, and target price.',
    bullets: ['Market research & supplier shortlist', 'Quotation comparison', 'Sample coordination'],
  },
  {
    id: 'factory-verification',
    title: 'Factory Verification',
    desc: 'On-site visits, document checks, and capability audits to confirm a factory is real, capable, and compliant — before you place a large order.',
    bullets: ['On-site factory audit', 'Business license verification', 'Production capacity review'],
  },
  {
    id: 'price-negotiation',
    title: 'Price Negotiation',
    desc: 'Local-language negotiation that focuses on a transparent price breakdown — material, labor, tooling, packaging — not just the headline number.',
    bullets: ['Cost breakdown analysis', 'MOQ & payment terms', 'Tooling & mold negotiation'],
  },
  {
    id: 'quality-inspection',
    title: 'Quality Inspection',
    desc: 'Independent inspections during and before shipment, with clear photo and video reports against your approved sample and AQL standard.',
    bullets: ['During-production check (DUPRO)', 'Pre-shipment inspection (PSI)', 'AQL 2.5 / customer standard'],
  },
  {
    id: 'production-followup',
    title: 'Production Follow-up',
    desc: 'Weekly updates on production milestones, sample approvals, and material readiness — so you always know where your order stands.',
    bullets: ['Weekly progress reports', 'Sample approval tracking', 'Risk flagging & mitigation'],
  },
  {
    id: 'shipping-logistics',
    title: 'Shipping & Logistics',
    desc: 'Door-to-door coordination by sea, air, or rail, with consolidation and customs documentation handled by experienced freight partners.',
    bullets: ['Sea / air / rail freight', 'Consolidation & warehousing', 'Customs documentation'],
  },
]

export default function ServicesGrid() {
  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue">Services</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-brand-navy">
            One sourcing partner, end-to-end coverage
          </h2>
          <p className="mt-4 text-ink-700 text-lg">
            From the first supplier search to the final container loaded at the port — we manage
            every step locally so you can focus on selling.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s) => (
            <article key={s.id} className="rounded-xl border border-ink-200 bg-white p-6 md:p-7 shadow-sm hover:shadow-md hover:border-brand-blue/30 transition">
              <h3 className="text-lg font-semibold text-brand-navy">{s.title}</h3>
              <p className="mt-2.5 text-sm text-ink-700 leading-relaxed">{s.desc}</p>
              <ul className="mt-4 space-y-1.5">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-ink-700">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-blue shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
