import { Link } from 'react-router-dom'
import { Button, Badge, Card, CardContent } from './ui.jsx'

const CASE_STUDIES = [
  {
    client: 'European Consumer Electronics Brand',
    industry: 'Consumer Electronics',
    challenge: 'A fast-growing electronics brand needed to reduce per-unit costs on their Bluetooth speaker line while maintaining European quality standards. Their existing supplier had inconsistent quality and rising prices.',
    solution: 'We identified and audited 7 PCB assembly and speaker driver factories in Shenzhen and Dongguan. After factory visits and sample testing, we shortlisted 3 factories. We negotiated volume pricing, established QC checkpoints, and set up bi-weekly production monitoring.',
    results: [
      '35% reduction in per-unit manufacturing cost',
      '99.2% first-pass quality rate vs. 91% with previous supplier',
      'Production lead time reduced from 45 to 30 days',
      'Annual savings of approximately €180,000',
    ],
    testimonial: 'SSourcing China transformed our supply chain. The cost savings alone paid for their service in the first quarter.',
  },
  {
    client: 'US Home Goods Retailer',
    industry: 'Home Goods & Furniture',
    challenge: 'A US-based retailer wanted to launch a private-label furniture line but had never sourced from China. They needed 3 product SKUs (solid wood dining tables, chairs, and bookshelves) with consistent quality for their 40+ store locations.',
    solution: 'We visited furniture manufacturing clusters in Foshan and Dongguan, audited 12 factories, and narrowed down to 3 based on woodworking capability, finishing quality, and export experience. We managed sample development, negotiated FOB pricing, and supervised the first 3 production runs with full QC.',
    results: [
      'Launched private-label line 6 months ahead of internal projections',
      '40% higher margin vs. buying from domestic wholesalers',
      '3 container shipments delivered on schedule',
      'Zero customer returns due to quality issues in first year',
    ],
    testimonial: 'We couldn\'t have launched our private label without SSourcing China. Their factory audits gave us confidence we were working with the right partners.',
  },
  {
    client: 'Australian Industrial Machinery Importer',
    industry: 'Industrial Machinery',
    challenge: 'An Australian importer of hydraulic components was experiencing 12% defect rates from their Chinese supplier. The supplier blamed "normal manufacturing tolerances" but the defects were causing assembly line stoppages in Australia.',
    solution: 'We conducted a comprehensive factory audit that revealed outdated testing equipment and insufficient QC processes. We sourced 4 alternative factories with modern CNC and testing capabilities, arranged benchmark sample production, and implemented a rigorous multi-stage inspection protocol at the selected factory.',
    results: [
      'Zero defects on first shipment from new supplier',
      'Defect rate maintained below 0.5% for 18 months',
      '30% increase in production capacity at new factory',
      'Supplier now holds ISO 9001:2015 and ASME certifications',
    ],
    testimonial: 'The detailed factory audit report was eye-opening. SSourcing China found issues we never would have discovered remotely.',
  },
  {
    client: 'UK Sustainable Packaging Startup',
    industry: 'Sustainable Packaging',
    challenge: 'A UK startup developing biodegradable food packaging needed a manufacturer that could produce custom-molded fiber packaging at competitive costs. They needed eco-certifications and had challenging MOQ requirements for a new product.',
    solution: 'We identified specialized eco-packaging manufacturers in Zhejiang province, negotiated trial production runs with low MOQs, arranged for compostability certification testing, and managed the iterative sampling process over 3 rounds of mold adjustments.',
    results: [
      'Launched with 5,000-unit trial production at startup-friendly MOQ',
      'Achieved EN 13432 compostability certification',
      'Unit cost 60% below European manufacturer quotes',
      'Scaled to 50,000 units/month within 6 months',
    ],
    testimonial: 'SSourcing China understood our startup constraints and found a factory willing to grow with us. That flexibility was crucial for our launch.',
  },
  {
    client: 'Middle Eastern Automotive Parts Distributor',
    industry: 'Automotive Parts',
    challenge: 'A distributor serving 6 countries in the Middle East needed a reliable source for aftermarket brake pads and filters. They had been burned by two suppliers who shipped substandard products and refused refunds.',
    solution: 'We audited brake pad and filter manufacturers in Shandong and Hebei, verified material composition through third-party lab testing, implemented pre-production approval samples, and set up mandatory pre-shipment inspection with AQL 2.5 for every order.',
    results: [
      'Established stable supply from 3 factories across 120+ SKUs',
      'Customer complaints reduced by 85%',
      'Consistent 30-day production lead times maintained',
      'Negotiated net-60 payment terms after 3 successful orders',
    ],
    testimonial: 'After two bad experiences, we were hesitant to try China again. SSourcing China restored our confidence with their rigorous vetting process.',
  },
  {
    client: 'Canadian Medical Supply Company',
    industry: 'Medical Supplies',
    challenge: 'During supply chain disruptions, a Canadian company needed to rapidly qualify alternative sources for nitrile examination gloves and isolation gowns while ensuring FDA and Health Canada compliance.',
    solution: 'We identified 8 manufacturers with existing FDA 510(k) clearances, conducted urgent facility audits focused on cleanroom standards and sterilization protocols, verified regulatory documentation, and expedited sample testing through accredited labs.',
    results: [
      'Qualified 2 factories within 3 weeks (vs. typical 8-12 weeks)',
      'First shipment of 2 million gloves delivered in 6 weeks',
      'Full FDA and Health Canada compliance maintained',
      '30% cost reduction vs. previous distributor pricing',
    ],
    testimonial: 'When we needed speed without compromising compliance, SSourcing China delivered. Their regulatory knowledge was impressive.',
  },
]

export default function CaseStudiesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-blue-900 text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <Badge variant="blue" className="mb-4 bg-white/10 text-blue-200 border-0">Case Studies</Badge>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Real Results for Real Clients</h1>
            <p className="text-lg text-blue-100 leading-relaxed mb-8">
              Detailed examples of how we have helped businesses across industries overcome sourcing challenges and achieve measurable outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="space-y-12">
            {CASE_STUDIES.map((cs, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
                <div className="p-8 md:p-10">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <Badge variant="blue">{cs.industry}</Badge>
                    <span className="text-sm text-gray-400">Case Study #{i + 1}</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">{cs.client}</h2>

                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div>
                      <h3 className="text-sm font-semibold text-red-600 uppercase tracking-wide mb-2">Challenge</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{cs.challenge}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">Solution</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{cs.solution}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-green-600 uppercase tracking-wide mb-2">Results</h3>
                      <ul className="space-y-2">
                        {cs.results.map((r, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                            <span className="text-green-500 mt-0.5">✓</span>
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                    <p className="text-gray-700 italic leading-relaxed text-sm">"{cs.testimonial}"</p>
                    <p className="text-gray-400 text-xs mt-2">— Client Testimonial</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Write Your Success Story</h2>
          <p className="text-blue-100 mb-8 text-lg">Every great partnership starts with a conversation. Tell us about your sourcing challenge.</p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 border-0 shadow-lg">
              Get a Free Sourcing Quote
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}