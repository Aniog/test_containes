import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Search, Shield, ClipboardCheck, Package, Truck, Clock, FileText, Eye, Users, BarChart3, Globe, Camera, Scale, Boxes } from 'lucide-react'

const HeroBanner = () => (
  <section className="bg-primary py-16 md:py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <span className="text-sm font-semibold text-secondary uppercase tracking-widest">Our Services</span>
      <h1 className="mt-3 text-4xl md:text-5xl font-bold text-white tracking-tight">Complete China Sourcing Services</h1>
      <p className="mt-4 text-lg text-neutral-300 max-w-2xl mx-auto">
        From finding suppliers to delivering goods, we manage every step of your China supply chain with professional oversight.
      </p>
    </div>
  </section>
)

const services = [
  {
    icon: Search,
    title: 'Supplier Identification & Matching',
    desc: 'We search our verified database of over 500 Chinese suppliers to find manufacturers that match your exact product requirements, quality standards, target pricing, and production capacity needs.',
    features: ['Custom supplier shortlist', 'Competitive pricing comparison', 'Capacity and MOQ assessment', 'Export history verification'],
    imgLabel: 'factory-search',
  },
  {
    icon: Shield,
    title: 'Factory Verification & Audits',
    desc: 'Our team visits factories on-site to verify business legitimacy, production capabilities, quality management systems, and compliance standards. You receive a comprehensive audit report.',
    features: ['Business license verification', 'On-site facility inspection', 'Equipment and capacity assessment', 'Management and worker evaluation', 'Quality system review'],
    imgLabel: 'factory-audit',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'We conduct thorough product inspections at every production stage using international AQL standards. Each inspection includes detailed photography and a same-day report.',
    features: ['Pre-production sample review', 'During production inspection (DPI)', 'Pre-shipment inspection (PSI)', 'Container loading supervision', 'AQL-based sampling'],
    imgLabel: 'quality-inspection',
  },
  {
    icon: Clock,
    title: 'Production Follow-up',
    desc: 'We monitor your orders throughout the production cycle, tracking progress against milestones and resolving issues before they become problems. Weekly status reports keep you informed.',
    features: ['Weekly progress reports', 'Milestone tracking', 'Issue escalation and resolution', 'Timeline management', 'Communication bridge with factory'],
    imgLabel: 'production-monitoring',
  },
  {
    icon: Package,
    title: 'Product Sourcing & Development',
    desc: 'End-to-end product sourcing from concept to mass production. We handle technical specifications, prototype development, packaging design, and labeling compliance for your target market.',
    features: ['Technical specification development', 'Prototype and sample management', 'Packaging and labeling design', 'Compliance and certification guidance', 'Cost optimization recommendations'],
    imgLabel: 'product-development',
  },
  {
    icon: Truck,
    title: 'Shipping & Logistics Coordination',
    desc: 'Complete logistics management from factory to your door. We arrange freight forwarding, handle all customs documentation, supervise container loading, and provide shipment tracking.',
    features: ['Sea freight and air freight', 'Customs documentation', 'Container loading supervision', 'Shipment tracking', 'Door-to-door delivery coordination'],
    imgLabel: 'shipping-logistics',
  },
]

const ServiceCard = ({ service, index }) => {
  const isEven = index % 2 === 0
  return (
    <div className={`py-12 md:py-16 ${isEven ? 'bg-white' : 'bg-neutral-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${!isEven ? 'lg:grid-flow-dense' : ''}`}>
          <div className={!isEven ? 'lg:col-start-2' : ''}>
            <div className="inline-flex items-center gap-2 bg-primary/5 rounded-full px-4 py-1.5 mb-4">
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">Service {String(index + 1).padStart(2, '0')}</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 tracking-tight mb-4">{service.title}</h2>
            <p className="text-base text-neutral-600 leading-relaxed mb-6">{service.desc}</p>
            <ul className="space-y-3 mb-6">
              {service.features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-success shrink-0 mt-0.5" />
                  <span className="text-sm text-neutral-700">{f}</span>
                </li>
              ))}
            </ul>
            <Link to="/contact" className="btn-primary text-sm inline-flex">
              Get a Quote <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
          <div className={!isEven ? 'lg:col-start-1' : ''}>
            <div className="bg-neutral-100 rounded-2xl aspect-[4/3] flex items-center justify-center border border-neutral-200">
              <div className="text-center p-8">
                <service.icon className="w-16 h-16 text-primary/30 mx-auto mb-3" />
                <p className="text-sm text-neutral-400 font-medium">{service.title}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const WhyUsSection = () => (
  <section className="py-20 md:py-28 bg-primary">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">Why Choose SSourcing China?</h2>
      <p className="text-lg text-neutral-300 max-w-2xl mx-auto mb-12">We combine local expertise with international business standards to deliver reliable results.</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { icon: Eye, label: 'Local Presence', desc: 'Team based in Shenzhen, close to major manufacturing hubs in Guangdong province.' },
          { icon: Globe, label: 'International Standards', desc: 'We follow ISO inspection protocols and international trade best practices.' },
          { icon: Users, label: 'Dedicated Support', desc: 'Each client gets a dedicated account manager for consistent communication.' },
          { icon: BarChart3, label: 'Transparent Reporting', desc: 'Detailed reports with photos, data, and actionable recommendations for every service.' },
        ].map((item) => (
          <div key={item.label} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <item.icon className="w-10 h-10 text-secondary mx-auto mb-3" />
            <h3 className="text-base font-semibold text-white mb-2">{item.label}</h3>
            <p className="text-sm text-neutral-300">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default function Services() {
  return (
    <div>
      <HeroBanner />
      {services.map((service, i) => (
        <ServiceCard key={service.title} service={service} index={i} />
      ))}
      <WhyUsSection />
      <section className="py-16 md:py-20 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mb-4">Need a Custom Sourcing Solution?</h2>
          <p className="text-lg text-neutral-500 mb-8">Every project is unique. Tell us your requirements and we will create a tailored sourcing plan for your business.</p>
          <Link to="/contact" className="btn-primary text-base px-8 py-4">
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}
