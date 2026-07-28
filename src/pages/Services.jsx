import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Factory, Shield, Ship, ClipboardCheck, Package, Truck, FileText } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Search,
      title: 'Supplier Sourcing',
      description: 'We identify and connect you with reliable Chinese manufacturers that match your product specifications, quality requirements, and budget.',
      features: [
        'Product requirement analysis',
        'Supplier database search',
        'Initial supplier vetting',
        'Price negotiation support',
        'Sample coordination',
      ],
    },
    {
      icon: Factory,
      title: 'Factory Verification',
      description: 'On-site factory audits to verify business legitimacy, production capacity, quality systems, and compliance with your standards.',
      features: [
        'Business license verification',
        'Factory capacity assessment',
        'Quality system audit',
        'Production line inspection',
        'Reference checks',
      ],
    },
    {
      icon: Shield,
      title: 'Quality Inspection',
      description: 'Comprehensive inspection services at every stage of production to ensure your products meet specifications and quality standards.',
      features: [
        'Pre-production inspection',
        'During production inspection',
        'Pre-shipment inspection',
        'Container loading supervision',
        'Detailed inspection reports',
      ],
    },
    {
      icon: Ship,
      title: 'Shipping Coordination',
      description: 'End-to-end logistics management from factory to your warehouse, including consolidation, customs clearance, and delivery.',
      features: [
        'Freight forwarding',
        'Customs documentation',
        'Consolidation services',
        'Insurance coordination',
        'Last-mile delivery',
      ],
    },
    {
      icon: ClipboardCheck,
      title: 'Product Sourcing Strategy',
      description: 'Strategic planning for your sourcing needs, including market research, cost analysis, and supplier relationship management.',
      features: [
        'Market research',
        'Cost analysis',
        'Supplier relationship management',
        'Risk assessment',
        'Sourcing roadmap',
      ],
    },
    {
      icon: Package,
      title: 'Order Management',
      description: 'Full order management from PO to delivery, including production monitoring, quality control, and logistics coordination.',
      features: [
        'Production monitoring',
        'Quality control',
        'Logistics coordination',
        'Documentation handling',
        'Issue resolution',
      ],
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Our Sourcing Services
            </h1>
            <p className="text-lg text-slate-600 mb-8">
              Comprehensive sourcing solutions designed to help you source from China with confidence. 
              From finding suppliers to delivering goods, we handle every step.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Need a Custom Sourcing Solution?
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Every business has unique sourcing needs. Contact us to discuss how we can tailor our services to your requirements.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
