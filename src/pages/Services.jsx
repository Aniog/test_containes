import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Search, 
  ClipboardCheck, 
  Truck, 
  Package, 
  MessageCircle,
  ArrowRight,
  CheckCircle,
  Factory,
  FileText,
  TrendingUp,
  Handshake
} from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      icon: Search,
      title: 'Supplier Verification',
      description: 'We verify supplier credentials, business licenses, and factory capabilities to ensure legitimacy.',
      details: [
        'Business license verification',
        'Factory capacity assessment',
        'Financial stability check',
        'Reference verification',
        'Export/import license validation'
      ]
    },
    {
      icon: Factory,
      title: 'Factory Audit',
      description: 'Comprehensive on-site audits to assess production capacity, quality management systems, and working conditions.',
      details: [
        'Production facility inspection',
        'Quality management system review',
        'Worker conditions assessment',
        'Equipment and machinery verification',
        'Capacity and lead time analysis'
      ]
    },
    {
      icon: ClipboardCheck,
      title: 'Quality Control',
      description: 'Pre-shipment inspections and during-production checks to ensure your products meet specifications.',
      details: [
        'Pre-shipment inspection (PSI)',
        'During production inspection (DPI)',
        'Initial production check (IPC)',
        'AQL-based sampling',
        'Detailed inspection reports with photos'
      ]
    },
    {
      icon: Package,
      title: 'Production Follow-up',
      description: 'Regular updates on production progress, timeline tracking, and issue resolution throughout the manufacturing process.',
      details: [
        'Weekly production progress updates',
        'Timeline management',
        'Issue identification and resolution',
        'Sample approval coordination',
        'Production milestone tracking'
      ]
    },
    {
      icon: Truck,
      title: 'Shipping & Logistics',
      description: 'End-to-end logistics coordination including freight forwarding, customs clearance, and door-to-door delivery.',
      details: [
        'Sea freight and air freight',
        'Customs clearance documentation',
        'Freight consolidation options',
        'Door-to-door delivery',
        'Shipment tracking'
      ]
    },
    {
      icon: MessageCircle,
      title: 'Sourcing Consultation',
      description: 'Expert guidance on product sourcing, pricing negotiation, and market insights to optimize your procurement strategy.',
      details: [
        'Market research and analysis',
        'Pricing negotiation',
        'Supplier recommendation',
        'Product development support',
        'Cost optimization strategies'
      ]
    }
  ];

  const whyChooseUs = [
    {
      icon: ShieldCheck,
      title: 'Verified Network',
      description: 'Access our database of 2,500+ pre-verified suppliers across various industries.'
    },
    {
      icon: TrendingUp,
      title: 'Cost Efficiency',
      description: 'Negotiate better prices through our established supplier relationships and volume buying power.'
    },
    {
      icon: FileText,
      title: 'Quality Assurance',
      description: 'Rigorous QC processes ensure consistent product quality and reduced defect rates.'
    },
    {
      icon: Handshake,
      title: 'Risk Mitigation',
      description: 'Comprehensive verification and inspection services minimize sourcing risks.'
    }
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-[var(--primary)] py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-white mb-4">Our Services</h1>
            <p className="text-xl text-gray-200">
              Comprehensive China sourcing solutions designed to minimize risk, ensure quality, and optimize your supply chain.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 gap-12">
            {services.map((service, index) => (
              <div key={index} className="card">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-1">
                    <div className="w-16 h-16 bg-[var(--primary)]/10 rounded-lg flex items-center justify-center mb-4">
                      <service.icon className="w-8 h-8 text-[var(--primary)]" />
                    </div>
                    <h3 className="mb-2">{service.title}</h3>
                    <p className="text-[var(--text-secondary)]">{service.description}</p>
                  </div>
                  <div className="lg:col-span-2">
                    <h4 className="mb-4 text-[var(--text-muted)] uppercase text-sm font-semibold tracking-wide">What's Included</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[var(--accent)] flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section bg-[var(--background)]">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="mb-4">Why Choose SSourcing China</h2>
            <p className="max-w-2xl mx-auto text-[var(--text-secondary)]">
              We bring expertise, reliability, and efficiency to every step of your sourcing journey.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="card text-center">
                <div className="w-14 h-14 bg-[var(--primary)]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-[var(--primary)]" />
                </div>
                <h4 className="mb-2">{item.title}</h4>
                <p className="text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-[var(--primary)]">
        <div className="container text-center">
          <h2 className="text-white mb-4">Ready to Streamline Your Sourcing?</h2>
          <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
            Get expert assistance with your China sourcing. Our team is ready to help you find the right suppliers.
          </p>
          <Link to="/contact" className="btn btn-cta text-lg px-8 py-4">
            Get a Free Quote
          </Link>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;