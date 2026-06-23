import { Link } from 'react-router-dom';
import { 
  Shield, Factory, ClipboardCheck, Truck, Package, Globe, 
  ArrowRight, CheckCircle, FileText, Users, Clock, Star
} from 'lucide-react';

const services = [
  {
    id: 'verification',
    icon: Shield,
    title: 'Supplier Verification',
    description: 'We verify factory credentials, business licenses, production capacity, and financial stability to ensure you work with legitimate partners.',
    features: [
      'Business license verification',
      'Factory facility inspection',
      'Production capacity assessment',
      'Financial stability check',
      'Certification verification (ISO, CE, etc.)',
      'Reference check from existing clients',
    ],
  },
  {
    id: 'audit',
    icon: Factory,
    title: 'Factory Audit',
    description: 'Comprehensive on-site audits covering facility conditions, equipment, worker conditions, and compliance with international standards.',
    features: [
      'Facility condition assessment',
      'Equipment and machinery inspection',
      'Worker conditions evaluation',
      'Production process review',
      'Quality management system check',
      'Compliance verification',
    ],
  },
  {
    id: 'quality',
    icon: ClipboardCheck,
    title: 'Quality Control',
    description: 'Pre-shipment inspections, during-production checks, and final random inspection services to ensure your products meet specifications.',
    features: [
      'Pre-shipment inspection (PSI)',
      'During production inspection (DPI)',
      'Initial production inspection (IPI)',
      'Final random inspection (FRI)',
      'CQL (Customer Quality Level) inspection',
      'Lab testing coordination',
    ],
  },
  {
    id: 'production',
    icon: Package,
    title: 'Production Follow-up',
    description: 'Regular progress updates, sample approval, and production monitoring to keep your order on track and on schedule.',
    features: [
      'Weekly progress reports',
      'Sample approval coordination',
      'Production schedule monitoring',
      'Raw material quality check',
      'Packaging verification',
      'Shipping mark inspection',
    ],
  },
  {
    id: 'shipping',
    icon: Truck,
    title: 'Shipping & Logistics',
    description: 'End-to-end logistics coordination including freight forwarding, customs clearance, and door-to-door delivery.',
    features: [
      'Freight forwarding',
      'Customs clearance',
      'Documentation handling',
      'Door-to-door delivery',
      'Insurance coordination',
      'Tracking and updates',
    ],
  },
  {
    id: 'sourcing',
    icon: Globe,
    title: 'Sourcing & Negotiation',
    description: 'We find the right suppliers, negotiate competitive pricing, and handle communication to bridge cultural and language gaps.',
    features: [
      'Supplier identification',
      'Price negotiation',
      'Contract review',
      'Communication management',
      'Cultural bridging',
      'Relationship management',
    ],
  },
];

const whyChooseUs = [
  {
    icon: Clock,
    title: 'Save Time',
    description: 'Skip the research and verification phase. We connect you with pre-vetted suppliers ready to do business.',
  },
  {
    icon: Shield,
    title: 'Reduce Risk',
    description: 'Our verification process protects you from scams, fraud, and unreliable suppliers.',
  },
  {
    icon: Star,
    title: 'Quality Assured',
    description: 'Professional QC inspections ensure your products meet your exact specifications.',
  },
  {
    icon: FileText,
    title: 'Transparent Process',
    description: 'Clear communication and detailed reports at every step of the sourcing process.',
  },
];

const Services = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1E3A5F] via-[#2D5A8A] to-[#1E3A5F] py-20 lg:py-28">
        <div className="max-w-1200px mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              Our Sourcing Services
            </h1>
            <p className="mt-6 text-xl text-gray-200">
              Comprehensive support for every stage of your China sourcing journey. 
              From supplier discovery to final delivery, we ensure quality and reliability.
            </p>
          </div>
        </div>
        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#F8FAFC"/>
          </svg>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-1200px mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-16 h-16 bg-[#1E3A5F] rounded-xl flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="mt-6 text-3xl font-bold text-gray-900">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-lg text-gray-600">
                    {service.description}
                  </p>
                  <ul className="mt-8 space-y-4">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="ml-3 text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`bg-white rounded-2xl p-8 shadow-lg ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="aspect-video bg-gradient-to-br from-[#1E3A5F]/10 to-[#1E3A5F]/5 rounded-xl flex items-center justify-center">
                    <service.icon className="w-24 h-24 text-[#1E3A5F]/30" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-1200px mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Why Work With Us
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We bring expertise, reliability, and transparency to every sourcing project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-16 h-16 bg-[#1E3A5F]/10 rounded-xl flex items-center justify-center mx-auto">
                  <item.icon className="w-8 h-8 text-[#1E3A5F]" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-[#1E3A5F]">
        <div className="max-w-1200px mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Ready to Start Sourcing?
          </h2>
          <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto">
            Get in touch with us today for a free consultation and quote. 
            We'll help you find the right suppliers and ensure quality delivery.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#F97316] text-white font-semibold rounded-lg hover:bg-[#EA580C] transition-colors"
            >
              Get a Free Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/how-it-works"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors"
            >
              Learn How It Works
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;