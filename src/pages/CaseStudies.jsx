import PageHeader from '../components/PageHeader'
import CTASection from '../components/CTASection'

const cases = [
  {
    id: 'eu-kitchenware-brand',
    industry: 'Home & Kitchen',
    region: 'European brand',
    title: 'Switching kitchenware supplier without losing a season',
    challenge:
      'A European housewares brand had been working with the same Chaozhou supplier for three years. After two consecutive shipments arrived with chipped finishes and inconsistent colors, retail partners started complaining. The brand needed an alternative supplier — fast — without missing the upcoming season.',
    approach:
      'We identified four candidate factories from our network in the Chaozhou ceramic cluster, audited two of them on-site within a week, and ran a parallel sample comparison. After negotiation we placed a 2 × 40HQ order with the strongest candidate and ran a full pre-shipment inspection at AQL 2.5.',
    results: [
      'Defect rate reduced from 6.2% to under 1.5%',
      'Unit cost reduced 8% versus the previous supplier',
      'Order shipped 4 days ahead of the season deadline',
      'New backup supplier qualified for future orders',
    ],
    titleId: 'cases-eu-kitchenware-brand-title',
    descId: 'cases-eu-kitchenware-brand-desc',
  },
  {
    id: 'us-amazon-seller',
    industry: 'Consumer Electronics',
    region: 'US Amazon seller',
    title: 'Private-label launch with FBA-ready packaging',
    challenge:
      'An Amazon seller was launching their first private-label Bluetooth speaker line. They needed FCC and CE certifications, retail-ready packaging and direct shipping to US fulfilment centers — but had limited experience with Chinese suppliers.',
    approach:
      'We shortlisted four Shenzhen factories with proven export track records. After sample comparison and a factory audit, we negotiated tooling fees, logo printing and FBA-prep packaging. We managed certification testing through a third-party lab and ran a pre-shipment inspection.',
    results: [
      '4 verified suppliers shortlisted within 10 days',
      'FCC and CE certifications obtained on time',
      'Pre-shipment inspection AQL 2.5 passed first try',
      'Door-to-FBA delivery completed in 38 days',
    ],
    titleId: 'cases-us-amazon-seller-title',
    descId: 'cases-us-amazon-seller-desc',
  },
  {
    id: 'au-promotional-distributor',
    industry: 'Promotional Gifts',
    region: 'Australian distributor',
    title: 'Consolidating 12 SKUs from multiple suppliers',
    challenge:
      'An Australian promotional products distributor was managing 12 SKUs across 7 different Yiwu suppliers. Coordination was eating up internal time and the company was losing margin to inefficient LCL shipments.',
    approach:
      'We took over communication with all seven suppliers, aligned production schedules, and consolidated the goods at our warehouse for a single mixed-container inspection. We then booked one FCL shipment from Ningbo and managed export documents centrally.',
    results: [
      '7 suppliers managed under one PO process',
      '1 consolidated 40HQ shipment vs. 4 LCL bookings',
      'Logistics cost reduced by approximately 22%',
      'Internal admin time reduced significantly',
    ],
    titleId: 'cases-au-promotional-distributor-title',
    descId: 'cases-au-promotional-distributor-desc',
  },
  {
    id: 'mena-hospitality-group',
    industry: 'Furniture',
    region: 'MENA hospitality group',
    title: 'Hotel furniture package for a 180-room property',
    challenge:
      'A hospitality group was opening a 180-room property and needed coordinated supply of guest-room furniture, lighting and decor. The architect had specific finish requirements and a hard handover date.',
    approach:
      'We split the package across three Foshan factories based on capability, ran sample approvals with the architect, and managed staggered production to match the hotel handover schedule. Two on-site QC visits ensured finish consistency. Goods shipped DDP to the destination port with customs support.',
    results: [
      'Three suppliers coordinated under one project',
      'Finishes approved against architect samples',
      'Delivered DDP one week before hotel handover',
      'Reorder pipeline secured for second property',
    ],
    titleId: 'cases-mena-hospitality-group-title',
    descId: 'cases-mena-hospitality-group-desc',
  },
  {
    id: 'uk-outdoor-startup',
    industry: 'Outdoor & Sports',
    region: 'UK startup',
    title: 'OEM camping gear from prototype to first 5,000 units',
    challenge:
      'A UK outdoor startup had a CAD design for a modular camping stove but no manufacturer. They needed a partner that could prototype, tool, and produce a first run of 5,000 units while meeting EU safety standards.',
    approach:
      'We identified two qualified factories in Ningbo, ran a paid prototyping round at both, then chose the partner with stronger QA. We coordinated tooling, pilot run, EU compliance testing and packaging design. Final order shipped FOB Ningbo.',
    results: [
      'Working prototype in 6 weeks',
      'EU safety testing passed at first attempt',
      '5,000-unit pilot run delivered on schedule',
      'Tooling rights secured for the buyer',
    ],
    titleId: 'cases-uk-outdoor-startup-title',
    descId: 'cases-uk-outdoor-startup-desc',
  },
  {
    id: 'latam-beauty-brand',
    industry: 'Beauty & Personal Care',
    region: 'Latin America brand',
    title: 'Cosmetic brush set with custom retail packaging',
    challenge:
      'A Latin American beauty brand wanted to launch a 7-piece brush set with branded handles and retail-ready packaging, with a tight unit cost target.',
    approach:
      'We sourced two candidate factories in Guangzhou specializing in cosmetic brushes, ran a side-by-side sample evaluation, negotiated MOQ and tooling, and managed packaging artwork with a local printer for higher print quality.',
    results: [
      'Hit target unit price within 5%',
      'MOQ negotiated down by 30%',
      'Retail-ready packaging approved on first proof',
      'Reorder placed within 4 months',
    ],
    titleId: 'cases-latam-beauty-brand-title',
    descId: 'cases-latam-beauty-brand-desc',
  },
]

export default function CaseStudies() {
  return (
    <>
      <PageHeader
        eyebrow="Case studies"
        title="Real sourcing projects, documented outcomes"
        subtitle="A few representative examples of recent client work. Names and figures are anonymized — we can share more details under NDA."
      />

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 space-y-10">
          {cases.map((c, idx) => (
            <article
              key={c.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start rounded-2xl border border-brand-border bg-white p-6 md:p-8"
            >
              <div className={`lg:col-span-5 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="aspect-[4/3] rounded-xl overflow-hidden bg-slate-100">
                  <img
                    alt={c.title}
                    className="w-full h-full object-cover"
                    data-strk-img-id={`cases-${c.id}-img`}
                    data-strk-img={`[${c.descId}] [${c.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
              </div>
              <div className={`lg:col-span-7 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <span className="font-semibold text-brand-blue uppercase tracking-wider">{c.industry}</span>
                  <span className="text-brand-muted">·</span>
                  <span className="text-brand-muted">{c.region}</span>
                </div>
                <h2 id={c.titleId} className="mt-2 text-2xl font-bold tracking-tight text-brand-navy">
                  {c.title}
                </h2>
                <p id={c.descId} className="mt-3 text-sm md:text-base text-brand-muted leading-relaxed">
                  <span className="font-semibold text-brand-navy">Challenge: </span>
                  {c.challenge}
                </p>
                <p className="mt-3 text-sm md:text-base text-brand-muted leading-relaxed">
                  <span className="font-semibold text-brand-navy">Approach: </span>
                  {c.approach}
                </p>
                <div className="mt-5">
                  <p className="text-xs uppercase tracking-wider font-semibold text-brand-navy">Results</p>
                  <ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                    {c.results.map((r) => (
                      <li key={r} className="flex items-start gap-2 text-sm text-brand-ink">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-blue flex-shrink-0" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  )
}
