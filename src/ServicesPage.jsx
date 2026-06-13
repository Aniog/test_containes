import { Link } from 'react-router-dom'
import { Button, Card, CardContent, Badge } from './ui.jsx'

const ALL_SERVICES = [
  {
    icon: '🔍',
    title: 'Supplier Identification & Matching',
    tagline: 'Find the right manufacturers, fast.',
    details: [
      'In-depth requirement analysis and product specification review',
      'Database search across 500+ pre-vetted factories',
      'Supplier shortlisting with capability and capacity assessment',
      'Detailed comparison reports with pricing and MOQ breakdowns',
      'Reference and background checks on shortlisted suppliers',
    ],
  },
  {
    icon: '🏭',
    title: 'Factory Verification & Audits',
    tagline: 'Know exactly who you are working with.',
    details: [
      'On-site factory visits by our Guangzhou-based inspection team',
      'Business license and certification verification',
      'Production line and equipment assessment',
      'Workforce evaluation and management system review',
      'Quality management system audit (ISO 9001, BSCI, etc.)',
      'Comprehensive audit report with photos and video',
    ],
  },
  {
    icon: '✅',
    title: 'Quality Control Inspections',
    tagline: 'Ship only products that meet your standards.',
    details: [
      'Pre-production inspection — raw materials and components check',
      'During production inspection (DUPRO) — identify issues early',
      'Pre-shipment inspection (PSI) — final random sampling per AQL standards',
      'Container loading supervision — verify correct loading and quantities',
      'Lab testing coordination for regulatory compliance (CE, FCC, FDA, etc.)',
      'Detailed inspection reports with photos within 24 hours',
    ],
  },
  {
    icon: '📋',
    title: 'Production Follow-Up & Monitoring',
    tagline: 'Stay informed at every stage of production.',
    details: [
      'Weekly progress reports with production floor photos',
      'Milestone tracking against agreed production schedules',
      'Proactive delay alerts with root cause analysis',
      'On-site presence during critical production phases',
      'Change order management and renegotiation support',
    ],
  },
  {
    icon: '🚢',
    title: 'Shipping & Logistics Coordination',
    tagline: 'Get your products delivered on time and on budget.',
    details: [
      'Freight forwarding — sea, air, rail, and express options',
      'Consolidation services for multi-supplier orders',
      'Customs documentation preparation and review',
      'Incoterms advisory and negotiation',
      'Shipment tracking and delivery confirmation',
      'Warehousing and fulfillment partner coordination',
    ],
  },
  {
    icon: '📐',
    title: 'Product Development & Prototyping',
    tagline: 'Turn your concept into a manufacturable product.',
    details: [
      'Design for manufacturability (DFM) review',
      'Material sourcing and cost optimization',
      'Prototype coordination and iteration management',
      'Packaging design and sourcing',
      'MOQ negotiation for new products',
    ],
  },
]

export default function ServicesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-blue-900 text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <Badge variant="blue" className="mb-4 bg-white/10 text-blue-200 border-0">Services</Badge>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Complete China Sourcing Services</h1>
            <p className="text-lg text-blue-100 leading-relaxed mb-8">
              End-to-end solutions from supplier discovery to final delivery — managed by our experienced team on the ground in China.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 border-0 shadow-lg">
                Get a Free Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-12">
            {ALL_SERVICES.map((svc, i) => (
              <div key={i} className={`grid lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={`${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="text-4xl mb-4">{svc.icon}</div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-3">{svc.title}</h2>
                  <p className="text-lg text-blue-700 font-medium mb-6">{svc.tagline}</p>
                  <ul className="space-y-3">
                    {svc.details.map((d, j) => (
                      <li key={j} className="flex items-start gap-3 text-gray-600">
                        <span className="flex-shrink-0 w-5 h-5 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-xs mt-0.5">✓</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`bg-gray-100 rounded-2xl aspect-video flex items-center justify-center text-gray-400 text-lg ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="text-center">
                    <div className="text-5xl mb-2">{svc.icon}</div>
                    <div className="text-sm">Service illustration</div>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need a Custom Sourcing Solution?</h2>
          <p className="text-blue-100 mb-8 text-lg">Every business is different. Contact us for a tailored sourcing plan that fits your needs.</p>
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