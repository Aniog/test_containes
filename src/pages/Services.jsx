import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, ClipboardCheck, Factory, Truck, CheckCircle, 
  FileText, Shield, Users, ArrowRight, Building2, Package
} from 'lucide-react';

const services = [
  {
    id: 'verification',
    icon: Search,
    title: 'Supplier Verification',
    description: 'We verify factory existence, capabilities, licenses, and business legitimacy before you commit.',
    features: [
      'Business license verification',
      'On-site factory visits',
      'Production capability assessment',
      'Financial stability check',
      'Reference verification',
      'Third-party database cross-check',
    ],
    process: [
      'Submit supplier details or let us find suppliers',
      'We conduct comprehensive background checks',
      'Receive detailed verification report',
      'Make informed decisions with confidence',
    ],
  },
  {
    id: 'inspection',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Professional QC inspections during and after production to ensure your standards are met.',
    features: [
      'Pre-production inspection',
      'During-production inspection',
      'Pre-shipment inspection',
      'Container loading supervision',
      'AQL sampling per ISO 2859',
      'Detailed inspection reports with photos',
    ],
    process: [
      'Define your quality standards',
      'Schedule inspection at production stage',
      'Our inspector visits the factory',
      'Receive comprehensive QC report',
    ],
  },
  {
    id: 'production',
    icon: Factory,
    title: 'Production Follow-up',
    description: 'Regular updates on production progress, samples, and timeline management.',
    features: [
      'Weekly progress updates',
      'Sample approval management',
      'Production timeline tracking',
      'Issue resolution and escalation',
      'Material sourcing assistance',
      'Packaging and labeling oversight',
    ],
    process: [
      'Establish production schedule',
      'Regular factory visits and updates',
      'Sample approval workflow',
      'Final production confirmation',
    ],
  },
  {
    id: 'shipping',
    icon: Truck,
    title: 'Shipping Coordination',
    description: 'End-to-end logistics support from factory to your doorstep, including customs clearance.',
    features: [
      'Freight forwarding services',
      'Customs documentation',
      'Port handling and consolidation',
      'Insurance coordination',
      'Track and trace updates',
      'Last-mile delivery coordination',
    ],
    process: [
      'Determine shipping requirements',
      'Get competitive freight quotes',
      'Coordinate pickup and transport',
      'Track shipment to destination',
    ],
  },
];

const additionalServices = [
  {
    icon: FileText,
    title: 'Product Development',
    description: 'From concept to production, we help develop your custom products with Chinese manufacturers.',
  },
  {
    icon: Shield,
    title: 'IP Protection',
    description: 'Protect your intellectual property with NDA agreements and secure manufacturing processes.',
  },
  {
    icon: Users,
    title: 'Negotiation Support',
    description: 'Our team assists with supplier negotiations to get you the best terms and pricing.',
  },
  {
    icon: Building2,
    title: 'Factory Audit',
    description: 'Comprehensive factory audits including social compliance, environmental, and security standards.',
  },
];

const Services = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-lg lg:text-xl text-blue-100">
              Comprehensive China sourcing solutions designed to help you find reliable suppliers, maintain quality, and streamline your supply chain.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="space-y-16 lg:space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-start ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-blue-700" />
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold mb-4">{service.title}</h2>
                  <p className="text-slate-600 mb-6">{service.description}</p>
                  
                  <h3 className="text-lg font-semibold mb-4">What's Included</h3>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className="inline-flex items-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors"
                  >
                    Request This Service
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>

                <div className={`bg-white p-6 lg:p-8 rounded-xl shadow-sm border border-slate-100 ${
                  index % 2 === 1 ? 'lg:order-1' : ''
                }`}>
                  <h3 className="text-lg font-semibold mb-6">How It Works</h3>
                  <div className="space-y-6">
                    {service.process.map((step, idx) => (
                      <div key={idx} className="flex gap-4">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-sm font-semibold text-blue-700">{idx + 1}</span>
                        </div>
                        <p className="text-slate-700 pt-1">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Additional Services</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Beyond our core services, we offer specialized support for complex sourcing needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="bg-slate-50 p-6 rounded-xl border border-slate-100"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-blue-700" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-slate-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-blue-900 text-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-blue-100 mb-8">
              Contact us today for a free consultation and customized quote for your sourcing needs.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold text-lg rounded-lg transition-colors"
            >
              Get a Free Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
