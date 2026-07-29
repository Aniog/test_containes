import { Search, ClipboardCheck, Eye, Package, Ship, Headphones, FileText, BarChart3, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We identify and shortlist qualified suppliers based on your product specifications, budget, and quality requirements. Our team searches through manufacturer databases, trade shows, and our proprietary network.',
    features: ['Market research & supplier identification', 'Request for quotation (RFQ) management', 'Initial supplier screening', 'Sample coordination'],
  },
  {
    icon: ClipboardCheck,
    title: 'Factory Verification',
    description: 'On-site audits to verify factory capabilities, certifications, production capacity, and legal compliance. We send experienced auditors to physically inspect the facility.',
    features: ['Business license verification', 'Production capacity assessment', 'Equipment & facility inspection', 'Social compliance audit'],
  },
  {
    icon: Eye,
    title: 'Quality Inspection',
    description: 'Pre-shipment, during-production, and container-loading inspections to ensure your products meet standards. We follow internationally recognized AQL sampling standards.',
    features: ['Pre-shipment inspection (PSI)', 'During-production inspection (DUPRO)', 'Container loading supervision', 'AQL-based defect classification'],
  },
  {
    icon: Package,
    title: 'Production Monitoring',
    description: 'Regular factory visits and progress reports to keep your orders on schedule and within specifications. We catch issues early before they become expensive problems.',
    features: ['Weekly production reports', 'On-site progress checks', 'Material incoming inspection', 'Defect analysis & corrective actions'],
  },
  {
    icon: Ship,
    title: 'Shipping Coordination',
    description: 'We handle logistics, documentation, customs clearance, and coordinate with freight forwarders to get your goods delivered on time.',
    features: ['Freight forwarder coordination', 'Export documentation', 'Customs clearance support', 'Delivery tracking'],
  },
  {
    icon: Headphones,
    title: 'Ongoing Support',
    description: 'Dedicated account manager available throughout the sourcing process and beyond for continued assistance, reorders, and supplier relationship management.',
    features: ['Dedicated account manager', 'Reorder management', 'Supplier negotiation support', 'Issue resolution'],
  },
];

const additional = [
  {
    icon: FileText,
    title: 'Contract & Payment Support',
    description: 'We help review purchase contracts, payment terms, and advise on secure payment methods to protect your interests.',
  },
  {
    icon: BarChart3,
    title: 'Cost Analysis',
    description: 'Detailed breakdown of product costs, tooling, packaging, and logistics to help you understand true landed costs.',
  },
  {
    icon: ShieldCheck,
    title: 'Intellectual Property Protection',
    description: 'Guidance on NNN agreements, design protection, and factory confidentiality to safeguard your product ideas.',
  },
];

export default function Services() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-surface py-16 md:py-20">
        <div className="container-custom text-center max-w-3xl">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Our Services</p>
          <h1 className="text-3xl md:text-5xl font-bold text-text-primary mb-4">
            Full-Service China Sourcing
          </h1>
          <p className="text-text-secondary text-lg">
            From finding suppliers to delivering goods, we manage every step of the sourcing process so you can focus on growing your business.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid md:grid-cols-2 gap-10 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">{service.title}</h2>
                  <p className="text-text-secondary leading-relaxed mb-6">{service.description}</p>
                  <ul className="space-y-2.5">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2.5 text-sm text-text-primary">
                        <span className="w-1.5 h-1.5 bg-secondary rounded-full shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`bg-surface rounded-xl p-8 border border-border ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <div className="aspect-[4/3] bg-white rounded-lg border border-border flex items-center justify-center">
                    <service.icon className="w-20 h-20 text-primary/20" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-surface">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">Additional Services</h2>
            <p className="text-text-secondary">Extra support to protect your business and optimize costs.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {additional.map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 border border-border">
                <item.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold text-text-primary mb-2">{item.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Start Your Sourcing Project?
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Tell us what you need and we will put together a tailored sourcing plan for your business.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary-dark text-white font-semibold px-8 py-4 rounded-md transition-colors"
          >
            Get a Free Sourcing Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
