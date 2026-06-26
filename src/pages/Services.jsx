import { Link } from 'react-router-dom';
import { 
  Search, Factory, ClipboardCheck, Package, Truck, FileCheck,
  ArrowRight, CheckCircle, Users, Shield, Clock, BarChart3
} from 'lucide-react';

const services = [
  {
    icon: <Search className="w-10 h-10" />,
    title: 'Supplier Search & Matching',
    description: 'We identify and pre-screen manufacturers based on your specific product requirements, quality standards, and budget parameters.',
    features: [
      'Custom supplier search based on your criteria',
      'Background verification and credential checking',
      'Capability assessment and capacity evaluation',
      'Initial communication and negotiation support',
    ],
  },
  {
    icon: <Factory className="w-10 h-10" />,
    title: 'Factory Verification & Audits',
    description: 'On-site inspections to verify factory legitimacy, capabilities, certifications, and production capacity.',
    features: [
      'Business license and registration verification',
      'Production facility inspection',
      'Equipment and workforce assessment',
      'Quality management system evaluation',
      'Social compliance audit (BSCI, SEDEX, etc.)',
    ],
  },
  {
    icon: <ClipboardCheck className="w-10 h-10" />,
    title: 'Quality Control & Inspection',
    description: 'Professional QC inspections at any stage of production to ensure your products meet specifications.',
    features: [
      'Pre-production sample approval',
      'During-production inspection (DPI)',
      'Pre-shipment inspection (PSI)',
      'Container loading supervision',
      'AQL-based sampling and reporting',
    ],
  },
  {
    icon: <Package className="w-10 h-10" />,
    title: 'Production Follow-up',
    description: 'Regular monitoring of production progress with detailed updates, photos, and status reports.',
    features: [
      'Production schedule tracking',
      'Weekly progress updates with photos',
      'Issue identification and escalation',
      'Timeline management',
      'Client reporting dashboard',
    ],
  },
  {
    icon: <Truck className="w-10 h-10" />,
    title: 'Shipping & Logistics',
    description: 'End-to-end shipping coordination from factory to your destination, handling all logistics complexities.',
    features: [
      'Freight forwarding (sea, air, express)',
      'Customs clearance documentation',
      'Consolidation services',
      'Track and trace updates',
      'Insurance coordination',
    ],
  },
  {
    icon: <FileCheck className="w-10 h-10" />,
    title: 'Documentation & Compliance',
    description: 'Complete handling of export/import documents, certifications, and compliance paperwork.',
    features: [
      'Commercial invoices and packing lists',
      'Certificate of Origin processing',
      'Product certifications (CE, FCC, etc.)',
      'Customs declaration support',
      'Legalization and notarization',
    ],
  },
];

const whyChooseServices = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Risk Mitigation',
    description: 'Comprehensive verification reduces the risk of working with unreliable suppliers.',
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: 'Time Efficiency',
    description: 'We handle the time-consuming aspects of sourcing so you can focus on sales.',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Expert Team',
    description: 'Bilingual professionals with deep knowledge of Chinese manufacturing.',
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: 'Cost Effective',
    description: 'Our relationships with suppliers help negotiate better pricing.',
  },
];

const Services = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Sourcing Services
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Comprehensive solutions to help you source products from China with confidence. 
              From supplier verification to final delivery.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Request a Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-[var(--color-bg-alt)]">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={`grid lg:grid-cols-2 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={`p-8 lg:p-12 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="w-16 h-16 bg-blue-50 text-[var(--color-primary)] rounded-xl flex items-center justify-center mb-6">
                      {service.icon}
                    </div>
                    <h2 className="text-2xl font-bold mb-4 text-[var(--color-text)]">
                      {service.title}
                    </h2>
                    <p className="text-[var(--color-text-secondary)] mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-[var(--color-text-secondary)]">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`bg-gradient-to-br from-blue-50 to-slate-100 flex items-center justify-center p-12 ${
                    index % 2 === 1 ? 'lg:order-1' : ''
                  }`}>
                    <div className="w-32 h-32 bg-[var(--color-primary)] rounded-2xl flex items-center justify-center text-white opacity-20">
                      {service.icon}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <h2 className="section-title">Why Choose Our Services</h2>
          <p className="section-subtitle">
            What sets us apart in China sourcing
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {whyChooseServices.map((item, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-14 h-14 bg-blue-50 text-[var(--color-primary)] rounded-xl flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="font-semibold mb-2 text-[var(--color-text)]">
                  {item.title}
                </h3>
                <p className="text-[var(--color-text-secondary)] text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[var(--color-primary)] text-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Sourcing Project?
            </h2>
            <p className="text-xl text-blue-200 mb-8">
              Get a free consultation and customized quote for your sourcing needs.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-[var(--color-primary)] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
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

export default Services;
