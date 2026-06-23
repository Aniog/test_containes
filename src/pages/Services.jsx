import React from 'react';
import { Shield, Factory, ClipboardCheck, Truck, FileCheck, Search, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: Search,
      title: 'Supplier Sourcing',
      description: 'We find verified manufacturers matching your exact requirements, quality standards, and budget.',
      details: [
        'Comprehensive market research',
        'Supplier identification and pre-screening',
        'Capability assessment',
        'Price negotiation',
        'MOQ optimization'
      ]
    },
    {
      icon: Shield,
      title: 'Factory Verification',
      description: 'On-site audits to confirm factory existence, production capacity, certifications, and compliance.',
      details: [
        'Factory existence verification',
        'Production capacity assessment',
        'Certification verification (ISO, CE, etc.)',
        'Business license validation',
        'Detailed audit reports with photos'
      ]
    },
    {
      icon: ClipboardCheck,
      title: 'Quality Control',
      description: 'Pre-shipment inspections ensuring your products meet specifications and quality standards.',
      details: [
        'Pre-shipment inspections (PSI)',
        'During production inspections (DPI)',
        'Initial production inspections (IPI)',
        'AQL-based sampling',
        'Detailed inspection reports'
      ]
    },
    {
      icon: Factory,
      title: 'Production Follow-up',
      description: 'Regular updates and on-site monitoring throughout the manufacturing process.',
      details: [
        'Production progress monitoring',
        'Quality issue identification',
        'Timeline management',
        'On-site factory visits',
        'Weekly status reports'
      ]
    },
    {
      icon: Truck,
      title: 'Shipping & Logistics',
      description: 'End-to-end freight coordination from factory to your designated warehouse or port.',
      details: [
        'Freight forwarding',
        'Customs clearance',
        'Documentation handling',
        'Door-to-door delivery',
        'Multi-modal transport options'
      ]
    },
    {
      icon: FileCheck,
      title: 'Sample Management',
      description: 'Handling sample requests, testing, and approval process with suppliers.',
      details: [
        'Sample sourcing and procurement',
        'Quality testing coordination',
        'Sample approval workflow',
        'Bulk production validation',
        'Shipping sample management'
      ]
    }
  ];

  const whyChooseUs = [
    'Verified suppliers with proven track records',
    'Transparent pricing with no hidden costs',
    'Professional quality inspection reports',
    'End-to-end project management',
    'Dedicated account manager',
    '24/7 communication support'
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Sourcing Services</h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            Comprehensive China sourcing solutions designed to help you find reliable suppliers, 
            ensure quality, and streamline your supply chain.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-blue-600 p-8 text-white">
                    <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                      <service.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold">{service.title}</h3>
                    <p className="text-blue-100 mt-2">{service.description}</p>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <h4 className="font-semibold text-slate-900 mb-4">What's Included:</h4>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center text-slate-600">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                          {detail}
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

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Choose Our Services
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We bring expertise, reliability, and transparency to every sourcing project
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="flex items-center p-4 bg-slate-50 rounded-lg">
                <CheckCircle className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" />
                <span className="text-slate-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Help with Your Sourcing Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get in touch to discuss your requirements and get a customized quote
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors"
          >
            Get a Free Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;