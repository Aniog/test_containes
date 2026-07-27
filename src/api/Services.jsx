import { Link } from 'react-router-dom'
import { Search, ShieldCheck, PackageCheck, Factory, Ship, ClipboardCheck, FileText, Truck, ArrowRight } from 'lucide-react'

export default function Services() {
  return (
    <div>
      <PageHero />
      <AllServices />
      <WhyOurServices />
      <CTABanner />
    </div>
  )
}

function PageHero() {
  return (
    <section className="bg-navy py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-gold font-semibold text-sm tracking-wider uppercase">Our Services</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">End-to-End China Sourcing Services</h1>
          <p className="text-gray-300 text-lg leading-relaxed">From supplier discovery to final delivery, our comprehensive services cover every stage of the sourcing journey.</p>
        </div>
      </div>
    </section>
  )
}

function AllServices() {
  const services = [
    {
      icon: Search, title: 'Supplier Sourcing & Identification',
      desc: 'We search our network of 5,000+ verified factories and use local trade knowledge to find the best manufacturers for your product. You receive a shortlist of 3-5 qualified suppliers with detailed profiles.',
      details: ['Product-specific supplier research', 'Supplier capability assessment', 'Detailed supplier profiles & comparison', 'Initial communication & quotation collection'],
    },
    {
      icon: ShieldCheck, title: 'Factory Audit & Verification',
      desc: 'Our team conducts comprehensive on-site factory audits to verify production capacity, quality systems, certifications, and business legitimacy — so you never work with an unverified supplier.',
      details: ['On-site factory visit & inspection', 'Business license & certification verification', 'Production capacity assessment', 'Quality management system audit', 'Financial stability & trade history check'],
    },
    {
      icon: ClipboardCheck, title: 'Quality Control & Inspection',
      desc: 'We implement rigorous quality control protocols at every stage: pre-production, during production, and pre-shipment. Inspections follow AQL standards based on your specifications.',
      details: ['Pre-production inspection (PPI)', 'During production inspection (DPI)', 'Pre-shipment inspection (PSI)', 'Container loading supervision', 'Detailed inspection reports with photos'],
    },
    {
      icon: Factory, title: 'Production Monitoring',
      desc: 'Stay informed with regular production updates, timeline tracking, and progress reports. We identify and resolve issues before they cause delays.',
      details: ['Weekly production status reports', 'Progress photos & videos', 'Timeline tracking & milestone alerts', 'Issue identification & resolution', 'Production capacity monitoring'],
    },
    {
      icon: FileText, title: 'Sampling & Product Development',
      desc: 'We coordinate the sampling process from initial prototype to pre-production samples, ensuring your specifications are met before mass production begins.',
      details: ['Sample request & coordination', 'Design file & specification review', 'Sample evaluation & feedback', 'Revision management', 'Pre-production sample approval'],
    },
    {
      icon: Truck, title: 'Shipping & Logistics Coordination',
      desc: 'Full logistics management including freight forwarding, customs documentation, and delivery coordination. We ensure your products arrive on time and on budget.',
      details: ['Freight forwarder selection & negotiation', 'Shipping documentation preparation', 'Customs clearance coordination', 'Cargo insurance arrangement', 'Delivery tracking & coordination'],
    },
  ]
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {services.map((svc, i) => (
            <div key={i} className={`flex flex-col ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-12 items-start`}>
              <div className="lg:w-1/3 flex-shrink-0">
                <div className="w-16 h-16 bg-navy rounded-xl flex items-center justify-center mb-6">
                  <svc.icon className="w-8 h-8 text-gold" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">{svc.title}</h2>
                <p className="text-text-secondary leading-relaxed">{svc.desc}</p>
              </div>
              <div className="lg:w-2/3 bg-surface rounded-xl p-6 md:p-8">
                <h3 className="font-semibold text-navy mb-4 text-sm uppercase tracking-wider">What's Included</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {svc.details.map((d, j) => (
                    <li key={j} className="flex items-start gap-2 text-text-secondary text-sm">
                      <ShieldCheck className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function WhyOurServices() {
  const points = [
    { value: 'On-Site', label: 'Local team based in Shenzhen, visiting factories in person' },
    { value: 'Transparent', label: 'Clear pricing, detailed reports, no hidden fees' },
    { value: 'Experienced', label: '12+ years sourcing across dozens of industries' },
    { value: 'Bilingual', label: 'Fluent in English and Mandarin — no communication gaps' },
  ]
  return (
    <section className="py-16 md:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-gold font-semibold text-sm tracking-wider uppercase">Why Our Services Stand Out</span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mt-2 mb-4">What Makes Our Approach Different</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((p, i) => (
            <div key={i} className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100">
              <div className="text-2xl font-bold text-gold mb-2">{p.value}</div>
              <p className="text-text-secondary text-sm">{p.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTABanner() {
  return (
    <section className="py-16 md:py-24 bg-navy">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Need a Custom Sourcing Solution?</h2>
        <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">Every project is different. Contact us to discuss your specific requirements and get a tailored sourcing plan.</p>
        <Link to="/contact" className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-white font-semibold px-8 py-3.5 rounded-lg transition-colors text-base">
          Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  )
}
