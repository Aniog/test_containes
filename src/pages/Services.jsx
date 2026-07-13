import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, Shield, Eye, Truck, FileCheck, Users, Package, Globe,
  ArrowRight, CheckCircle, Target, BarChart3, Settings, Headphones
} from 'lucide-react';

const mainServices = [
  {
    icon: Search,
    title: 'Supplier Sourcing & Identification',
    description: 'We leverage our extensive network and industry expertise to find the right suppliers for your specific needs.',
    features: [
      'Access to 500+ verified manufacturers across China',
      'Industry-specific supplier matching',
      'Competitive pricing from multiple suppliers',
      'Supplier capability assessment',
      'Initial quotation and comparison',
    ],
  },
  {
    icon: Shield,
    title: 'Factory Verification & Audits',
    description: 'Comprehensive on-site evaluations to ensure supplier legitimacy, capability, and reliability.',
    features: [
      'Business license and registration verification',
      'Production capacity and equipment assessment',
      'Quality management system review',
      'Financial stability evaluation',
      'Reference checks with existing clients',
    ],
  },
  {
    icon: Eye,
    title: 'Quality Control & Inspection',
    description: 'Multi-stage quality assurance to ensure products meet your specifications before shipment.',
    features: [
      'Pre-production sample approval',
      'In-line production inspections',
      'Pre-shipment inspections (AQL standards)',
      'Container loading supervision',
      'Detailed inspection reports with photos',
    ],
  },
  {
    icon: FileCheck,
    title: 'Production Monitoring',
    description: 'Real-time oversight of manufacturing progress to keep your projects on schedule.',
    features: [
      'Weekly production status updates',
      'Milestone tracking and reporting',
      'Issue identification and resolution',
      'Timeline management and coordination',
      'Photo and video documentation',
    ],
  },
  {
    icon: Truck,
    title: 'Shipping & Logistics',
    description: 'End-to-end logistics coordination from factory floor to your warehouse door.',
    features: [
      'Sea, air, and rail freight coordination',
      'Customs clearance and documentation',
      'Freight forwarding partnerships',
      'Door-to-door delivery options',
      'Shipment tracking and updates',
    ],
  },
  {
    icon: Users,
    title: 'Supplier Relationship Management',
    description: 'Ongoing management of supplier relationships to ensure long-term success.',
    features: [
      'Regular supplier performance reviews',
      'Contract negotiation and management',
      'Dispute resolution and mediation',
      'Supplier development programs',
      'Strategic sourcing planning',
    ],
  },
];

const additionalServices = [
  { icon: Package, title: 'Product Development', description: 'Custom product design, prototyping, and sample coordination.' },
  { icon: Target, title: 'Market Research', description: 'Industry analysis, competitor benchmarking, and pricing intelligence.' },
  { icon: BarChart3, title: 'Cost Optimization', description: 'Identify cost-saving opportunities through supplier consolidation and negotiation.' },
  { icon: Settings, title: 'Process Consulting', description: 'Supply chain optimization and best practices implementation.' },
  { icon: Headphones, title: 'After-Sales Support', description: 'Warranty claims, returns management, and ongoing quality support.' },
  { icon: Globe, title: 'Compliance Assistance', description: 'Product certification, labeling requirements, and regulatory compliance.' },
];

const ServicesPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">What We Offer</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Comprehensive Sourcing Services
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            From initial supplier discovery to final delivery, we provide end-to-end sourcing solutions tailored to your business needs.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {mainServices.map((service, index) => (
              <div 
                key={service.title}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold text-text-primary mb-4">{service.title}</h2>
                  <p className="text-lg text-text-secondary mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-text-secondary">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`bg-bg-light rounded-2xl p-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="aspect-video bg-white rounded-xl flex items-center justify-center border border-border-light">
                    <service.icon className="w-24 h-24 text-primary/20" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">Additional Services</h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Beyond core sourcing, we offer specialized services to support your entire supply chain.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service) => (
              <div key={service.title} className="bg-white rounded-xl p-6 shadow-sm border border-border-light">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">{service.title}</h3>
                <p className="text-text-secondary text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Streamline Your Sourcing?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Let us handle the complexity of sourcing from China while you focus on growing your business.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 shadow-lg"
          >
            Get a Free Consultation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
