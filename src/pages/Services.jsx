import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Factory, 
  ShieldCheck, 
  PackageCheck, 
  Ship, 
  Globe, 
  ArrowRight,
  CheckCircle,
  FileText,
  Truck,
  ClipboardCheck,
  BarChart3
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Search,
      title: 'Supplier Sourcing',
      description: 'Find verified manufacturers and suppliers matching your product requirements, budget, and quality standards.',
      features: [
        'Product specification analysis',
        'Supplier database search',
        'Factory capability assessment',
        'Competitive pricing negotiation',
        'Multiple supplier options',
      ],
    },
    {
      icon: Factory,
      title: 'Factory Verification',
      description: 'Comprehensive on-site factory audits to verify business credentials, production capacity, and quality systems.',
      features: [
        'Business license verification',
        'Factory floor inspection',
        'Production capacity assessment',
        'Quality management system review',
        'Social compliance audit',
      ],
    },
    {
      icon: ShieldCheck,
      title: 'Quality Control',
      description: 'Professional inspection services at every stage of production to ensure your products meet specifications.',
      features: [
        'Pre-production inspections',
        'During-production inspections',
        'Pre-shipment inspections',
        'Container loading supervision',
        'Detailed inspection reports',
      ],
    },
    {
      icon: PackageCheck,
      title: 'Production Monitoring',
      description: 'Track production progress, manage timelines, and coordinate with factories to keep orders on schedule.',
      features: [
        'Production timeline tracking',
        'Regular progress updates',
        'Issue escalation management',
        'Schedule optimization',
        'Production milestone verification',
      ],
    },
    {
      icon: Ship,
      title: 'Shipping Coordination',
      description: 'End-to-end logistics management from factory to your warehouse, including customs clearance.',
      features: [
        'Freight forwarding arrangement',
        'Customs documentation',
        'Insurance coordination',
        'Port handling',
        'Last-mile delivery tracking',
      ],
    },
    {
      icon: Globe,
      title: 'Market Intelligence',
      description: "Gain valuable insights into China's supplier landscape, pricing trends, and regulatory requirements.",
      features: [
        'Supplier market analysis',
        'Pricing trend reports',
        'Regulatory compliance guidance',
        'Industry benchmarking',
        'Risk assessment reports',
      ],
    },
  ];

  const additionalServices = [
    {
      icon: FileText,
      title: 'Product Sourcing Research',
      description: 'Deep-dive research on product categories, including material options, manufacturing processes, and cost structures.',
    },
    {
      icon: ClipboardCheck,
      title: 'Compliance & Certification',
      description: 'Help with product certifications, testing requirements, and regulatory compliance for your target markets.',
    },
    {
      icon: BarChart3,
      title: 'Supplier Performance Tracking',
      description: 'Ongoing monitoring of supplier performance, quality trends, and delivery reliability for long-term partnerships.',
    },
    {
      icon: Truck,
      title: 'Consolidation Services',
      description: 'Combine shipments from multiple suppliers into single containers to reduce shipping costs and simplify logistics.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Sourcing Services
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Comprehensive China sourcing solutions tailored to your business needs. From supplier discovery to final delivery, we're your trusted partner every step of the way.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get a Free Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Core Services
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our end-to-end sourcing services cover every aspect of your China procurement needs.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <service.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">{service.title}</h3>
                    <p className="text-slate-600">{service.description}</p>
                  </div>
                </div>
                <ul className="space-y-2 ml-16">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-slate-600">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Beyond our core offerings, we provide specialized services to support your sourcing strategy.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:shadow-md transition-shadow text-center"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-slate-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Streamline Your China Sourcing?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact us today for a free consultation and discover how we can help you source better from China.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-slate-100 transition-colors"
          >
            Get Started
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
