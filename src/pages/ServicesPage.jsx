import { Link } from 'react-router-dom';
import { 
  Search, 
  ClipboardCheck, 
  Factory, 
  Truck, 
  Package, 
  MessageSquare,
  ArrowRight,
  CheckCircle,
  Shield,
  Clock,
  DollarSign,
  Globe,
  FileText,
  Users
} from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      id: 'verification',
      icon: Search,
      title: 'Supplier Verification',
      description: 'Our comprehensive supplier verification service ensures you work with legitimate, capable, and financially stable manufacturers in China.',
      features: [
        'Business license verification',
        'Factory实地考察 (on-site inspection)',
        'Production capacity assessment',
        'Quality management system review',
        'Financial stability check',
        'Reference verification from existing clients',
        'Certification verification (ISO, CE, FCC, etc.)',
      ],
      benefits: [
        'Avoid supplier scams and fraud',
        'Verify genuine production capabilities',
        'Ensure legal compliance',
        'Reduce sourcing risks',
      ],
    },
    {
      id: 'inspection',
      icon: ClipboardCheck,
      title: 'Quality Inspection',
      description: 'Professional quality control inspections at key stages of production to ensure your products meet specifications and quality standards.',
      inspectionTypes: [
        {
          name: 'Pre-Production Inspection (PPI)',
          description: 'Verify raw materials, components, and production setup before mass production begins.',
        },
        {
          name: 'During Production Inspection (DPI)',
          description: 'Monitor production progress and quality at 20-50% completion stage.',
        },
        {
          name: 'Pre-Shipment Inspection (PSI)',
          description: 'Final inspection of finished goods before shipping, typically at 100% production.',
        },
        {
          name: 'Container Loading Supervision',
          description: 'Ensure correct products, quantities, and proper loading to prevent damage.',
        },
      ],
      features: [
        'AQL-based sampling inspection',
        'Detailed photo and video reports',
        'Same-day inspection reports',
        'Defect classification and analysis',
        'Compliance verification',
        'Customizable inspection checklists',
      ],
    },
    {
      id: 'production',
      icon: Factory,
      title: 'Production Follow-up',
      description: 'Regular factory visits and production monitoring to ensure your order is on track, on time, and meets quality requirements.',
      features: [
        'Weekly progress updates',
        'Production schedule monitoring',
        'Quality issue identification and resolution',
        'Timeline management',
        'Factory communication and negotiation',
        'Sample approval coordination',
        'Production milestone tracking',
      ],
      benefits: [
        'Stay informed about production status',
        'Early detection of potential delays',
        'Ensure quality standards are maintained',
        'Reduce risk of production issues',
      ],
    },
    {
      id: 'shipping',
      icon: Truck,
      title: 'Shipping & Logistics',
      description: 'End-to-end logistics solutions from factory to your door, handling all aspects of international shipping and customs.',
      services: [
        'Freight forwarding (air, sea, land)',
        'Customs clearance documentation',
        'Incoterms consultation',
        'Insurance coordination',
        'Door-to-door delivery',
        'Consolidation services',
        'Tracking and monitoring',
      ],
      features: [
        'Multiple shipping options',
        'Competitive freight rates',
        'Expert customs knowledge',
        'Complete documentation handling',
        'Real-time shipment tracking',
      ],
    },
    {
      id: 'sourcing',
      icon: Package,
      title: 'Product Sourcing',
      description: 'Find the right suppliers based on your product specifications, quality requirements, budget, and timeline.',
      process: [
        'Requirements analysis',
        'Supplier identification and shortlisting',
        'RFQ preparation and distribution',
        'Supplier comparison and evaluation',
        'Negotiation support',
        'Sample coordination',
        'Supplier recommendation',
      ],
      features: [
        'Access to verified supplier network',
        'Market research and analysis',
        'Price negotiation',
        'MOQ (Minimum Order Quantity) optimization',
        'Product development support',
        'Supplier relationship management',
      ],
    },
    {
      id: 'communication',
      icon: MessageSquare,
      title: 'Communication & Negotiation',
      description: 'Professional bilingual communication services to ensure clear understanding between you and Chinese suppliers.',
      features: [
        'English-Chinese translation',
        'Technical documentation translation',
        'Meeting interpretation',
        'Contract review and negotiation',
        'Price and term negotiation',
        'Cultural bridge facilitation',
        'Ongoing communication support',
      ],
      benefits: [
        'Clear communication without language barriers',
        'Professional negotiation for better terms',
        'Cultural understanding',
        'Reduced misunderstandings',
      ],
    },
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: 'Verified Suppliers',
      description: 'Access our network of 10,000+ pre-verified Chinese suppliers',
    },
    {
      icon: Clock,
      title: 'Time Savings',
      description: 'Save 60%+ time on supplier search and verification',
    },
    {
      icon: DollarSign,
      title: 'Cost Effective',
      description: 'Competitive pricing with no hidden fees',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving clients in 50+ countries worldwide',
    },
    {
      icon: FileText,
      title: 'Professional Reports',
      description: 'Detailed inspection and verification reports',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Experienced professionals with industry expertise',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)] text-white py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Sourcing Services
            </h1>
            <p className="text-xl text-gray-200">
              Comprehensive solutions to help you source products from China with confidence. From supplier verification to final delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section bg-[var(--color-background)]">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card p-8">
                <div className="w-14 h-14 bg-[var(--color-primary)]/10 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-[var(--color-primary)]" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-[var(--color-text-secondary)] mb-6">
                  {service.description}
                </p>
                <Link
                  to={`#${service.id}`}
                  className="inline-flex items-center text-[var(--color-primary)] font-medium"
                >
                  Learn more <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      {services.map((service, index) => (
        <section 
          key={service.id} 
          id={service.id}
          className={`section ${index % 2 === 0 ? 'bg-white' : 'bg-[var(--color-background)]'}`}
        >
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="w-16 h-16 bg-[var(--color-primary)]/10 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-[var(--color-primary)]" />
                </div>
                <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                <p className="text-lg text-[var(--color-text-secondary)] mb-6">
                  {service.description}
                </p>
                
                {service.features && (
                  <div>
                    <h4 className="font-semibold mb-4">Key Features</h4>
                    <ul className="space-y-3">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-[var(--color-success)] flex-shrink-0 mt-0.5" />
                          <span className="text-[var(--color-text-secondary)]">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {service.benefits && (
                  <div className="mt-8">
                    <h4 className="font-semibold mb-4">Benefits</h4>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-[var(--color-success)] flex-shrink-0 mt-0.5" />
                          <span className="text-[var(--color-text-secondary)]">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="space-y-6">
                {service.inspectionTypes && (
                  <div className="card p-6">
                    <h4 className="font-semibold mb-4">Inspection Types</h4>
                    <div className="space-y-4">
                      {service.inspectionTypes.map((type, i) => (
                        <div key={i} className="border-l-4 border-[var(--color-primary)] pl-4">
                          <h5 className="font-medium mb-1">{type.name}</h5>
                          <p className="text-sm text-[var(--color-text-muted)]">{type.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {service.process && (
                  <div className="card p-6">
                    <h4 className="font-semibold mb-4">Sourcing Process</h4>
                    <ol className="space-y-3">
                      {service.process.map((step, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="w-6 h-6 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center text-sm flex-shrink-0">
                            {i + 1}
                          </span>
                          <span className="text-[var(--color-text-secondary)]">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                )}

                {service.services && (
                  <div className="card p-6">
                    <h4 className="font-semibold mb-4">Logistics Services</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {service.services.map((item, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-[var(--color-success)]" />
                          <span className="text-sm text-[var(--color-text-secondary)]">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Why Choose Us */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose SSourcing China</h2>
            <p className="text-lg text-[var(--color-text-secondary)]">
              We bring expertise, reliability, and efficiency to your China sourcing operations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="card p-6 text-center">
                <div className="w-14 h-14 bg-[var(--color-primary)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-[var(--color-primary)]" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-[var(--color-text-secondary)]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)] text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Contact us today to discuss your sourcing needs. We'll help you find the right suppliers in China.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[var(--color-secondary)] text-white px-10 py-4 rounded font-semibold text-lg hover:bg-[#9b2c2c] transition-colors"
            >
              Get a Free Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;