import { ArrowRight, CheckCircle, Shield, Truck, Factory, Search, Package, Users, FileCheck, Globe, Clock } from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Supplier Verification',
    description: 'We conduct comprehensive verification of potential suppliers to ensure they are legitimate, financially stable, and capable of meeting your requirements.',
    features: [
      'Business license verification',
      'Factory visit and capacity assessment',
      'Financial stability check',
      'Reference verification',
      'Certification validation (ISO, CE, etc.)',
    ],
  },
  {
    icon: Shield,
    title: 'Quality Inspection',
    description: 'Professional quality control inspections at any stage of production to ensure your products meet specifications and quality standards.',
    features: [
      'Pre-production inspection',
      'During production inspection',
      'Pre-shipment inspection',
      'Container loading supervision',
      'Detailed inspection reports with photos',
    ],
  },
  {
    icon: Factory,
    title: 'Production Follow-up',
    description: 'Regular factory visits and progress updates to ensure production stays on schedule and quality standards are maintained.',
    features: [
      'Weekly progress reports',
      'Production milestone tracking',
      'Quality issue resolution',
      'Timeline management',
      'Factory liaison services',
    ],
  },
  {
    icon: Truck,
    title: 'Shipping & Logistics',
    description: 'End-to-end logistics coordination including freight forwarding, customs clearance, and documentation.',
    features: [
      'Freight forwarding',
      'Customs documentation',
      'Shipping route optimization',
      'Cargo tracking',
      'Door-to-door delivery',
    ],
  },
  {
    icon: Package,
    title: 'Product Sourcing',
    description: 'We find the right suppliers for your specific product requirements, handling the entire sourcing process from start to finish.',
    features: [
      'Supplier identification',
      'Price negotiation',
      'Sample management',
      'Contract review',
      'Order placement',
    ],
  },
  {
    icon: Users,
    title: 'Custom Solutions',
    description: 'Tailored services to meet unique business needs, including OEM/ODM, product development, and supply chain management.',
    features: [
      'OEM/ODM manufacturing',
      'Product development',
      'Supply chain optimization',
      'Inventory management',
      'Long-term partnership setup',
    ],
  },
];

const whyChooseUs = [
  {
    icon: FileCheck,
    title: 'Verified Suppliers',
    description: 'Every supplier in our network is thoroughly vetted and verified.',
  },
  {
    icon: Globe,
    title: 'Global Experience',
    description: 'Serving clients from 50+ countries across various industries.',
  },
  {
    icon: Clock,
    title: 'Time Zone Advantage',
    description: 'Based in China, we can respond quickly to any issues or changes.',
  },
  {
    icon: Shield,
    title: 'Risk Mitigation',
    description: 'We help minimize risks associated with international sourcing.',
  },
];

const Services = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] text-white py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-white/80">
              Comprehensive sourcing solutions designed to make China procurement simple, safe, and cost-effective.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="section bg-white">
        <div className="container">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={index} className={`grid-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-direction-reverse' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-16 h-16 bg-[var(--primary)] rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-[var(--primary)]">{service.title}</h2>
                  <p className="text-lg text-[var(--text-secondary)] mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-[var(--success)] flex-shrink-0" />
                        <span className="text-[var(--text-primary)]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`bg-gradient-to-br from-[var(--bg-light)] to-[var(--border)] rounded-2xl h-80 flex items-center justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <service.icon className="w-24 h-24 text-[var(--primary)]/20" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-[var(--bg-light)]">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title">Why Choose SSourcing China</h2>
            <p className="section-subtitle mx-auto">
              What sets us apart in the China sourcing industry
            </p>
          </div>
          
          <div className="grid-3">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="card text-center">
                <div className="w-14 h-14 bg-[var(--primary)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-[var(--primary)]">{item.title}</h3>
                <p className="text-[var(--text-secondary)]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-[var(--primary)] text-white">
        <div className="container text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Need Custom Sourcing Solutions?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Contact us to discuss your specific requirements. We'll tailor a solution that fits your business needs.
          </p>
          <a href="/contact" className="btn btn-white text-lg px-8 py-4">
            Get a Free Consultation
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;