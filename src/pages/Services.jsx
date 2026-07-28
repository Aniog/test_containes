import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Shield, ClipboardCheck, Factory, Ship, Globe, ArrowRight, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Search,
      title: 'Supplier Sourcing',
      description: 'We identify and vet reliable manufacturers in China that match your product requirements, budget, and quality standards. Our extensive network and local presence give us access to thousands of verified suppliers.',
      features: ['Product matching', 'Supplier database', 'Price negotiation', 'MOQ optimization'],
    },
    {
      icon: Shield,
      title: 'Factory Verification',
      description: 'On-site factory audits to verify business licenses, production capacity, quality systems, and social compliance. We ensure your suppliers are legitimate and capable of meeting your requirements.',
      features: ['Business license check', 'Production capacity audit', 'Quality system review', 'Reference verification'],
    },
    {
      icon: ClipboardCheck,
      title: 'Quality Inspection',
      description: 'Professional pre-production, during-production, and pre-shipment inspections to ensure products meet your specifications. Our inspectors are trained to international quality standards.',
      features: ['Pre-production inspection', 'During-production inspection', 'Pre-shipment inspection', 'Container loading supervision'],
    },
    {
      icon: Factory,
      title: 'Production Monitoring',
      description: 'Regular factory visits and progress reports to keep your production on schedule and within budget. We act as your eyes and ears on the ground throughout the manufacturing process.',
      features: ['Progress tracking', 'Issue resolution', 'Schedule management', 'Regular reporting'],
    },
    {
      icon: Ship,
      title: 'Shipping Coordination',
      description: 'End-to-end logistics support including freight forwarding, customs documentation, and delivery tracking. We coordinate with reliable logistics partners to ensure safe and timely delivery.',
      features: ['Freight forwarding', 'Customs clearance', 'Insurance coordination', 'Delivery tracking'],
    },
    {
      icon: Globe,
      title: 'Sourcing Strategy',
      description: 'Market research, cost analysis, and supplier negotiation to optimize your China sourcing strategy. We help you make informed decisions that balance cost, quality, and risk.',
      features: ['Market analysis', 'Cost optimization', 'Supplier negotiation', 'Risk assessment'],
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">Our Sourcing Services</h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Comprehensive China sourcing solutions designed to reduce risk, ensure quality, and optimize costs for global buyers.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div key={index} className="border border-slate-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-start">
                  <div className="w-14 h-14 bg-slate-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-7 h-7 text-slate-700" />
                  </div>
                  <div className="ml-6">
                    <h2 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h2>
                    <p className="text-slate-600 leading-relaxed mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-slate-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
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

      {/* CTA */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Need a Custom Sourcing Solution?</h2>
          <p className="text-lg text-slate-600 mb-8">
            Every sourcing project is unique. Contact us to discuss your specific requirements and get a tailored proposal.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition-colors"
          >
            Contact Us
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
