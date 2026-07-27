import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, Shield, CheckCircle, Truck, FileCheck, Users, 
  ArrowRight, Globe, Clock, Award, BarChart3, Headphones,
  Factory, Package, Zap, Target, ClipboardCheck, Eye
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Search,
      title: 'Supplier Discovery & Sourcing',
      description: 'We identify and evaluate potential suppliers based on your specific product requirements, target pricing, quality standards, and production capacity needs.',
      features: [
        'Market research and supplier identification',
        'Initial screening and qualification',
        'Capability assessment and comparison',
        'Shortlisting of best-fit manufacturers'
      ],
      color: 'bg-blue-50 text-blue-600 border-blue-200'
    },
    {
      icon: Shield,
      title: 'Factory Verification & Audits',
      description: 'Our local team conducts comprehensive on-site factory audits to verify legitimacy, assess production capabilities, and ensure compliance with international standards.',
      features: [
        'Business license and registration verification',
        'Production capacity and equipment assessment',
        'Quality management system evaluation',
        'Worker conditions and compliance check',
        'Financial stability assessment'
      ],
      color: 'bg-emerald-50 text-emerald-600 border-emerald-200'
    },
    {
      icon: CheckCircle,
      title: 'Quality Control & Inspection',
      description: 'Multi-stage quality inspections to ensure your products meet specifications before they leave the factory, minimizing defects and returns.',
      features: [
        'Pre-production sample evaluation',
        'During production (DUPRO) inspection',
        'Pre-shipment inspection (PSI)',
        'Container loading supervision',
        'Defect classification and reporting'
      ],
      color: 'bg-purple-50 text-purple-600 border-purple-200'
    },
    {
      icon: BarChart3,
      title: 'Production Monitoring',
      description: 'Regular on-site oversight and progress tracking to ensure your orders stay on schedule and meet quality parameters throughout the production cycle.',
      features: [
        'Production timeline tracking',
        'Regular progress reports with photos',
        'Issue identification and resolution',
        'Schedule management and updates'
      ],
      color: 'bg-amber-50 text-amber-600 border-amber-200'
    },
    {
      icon: Truck,
      title: 'Shipping & Logistics',
      description: 'End-to-end logistics management from factory floor to your door, including customs clearance, documentation, and freight forwarding.',
      features: [
        'Freight forwarding (sea, air, rail)',
        'Customs clearance and documentation',
        'Warehousing and consolidation',
        'Door-to-door delivery coordination',
        'Insurance arrangement'
      ],
      color: 'bg-rose-50 text-rose-600 border-rose-200'
    },
    {
      icon: FileCheck,
      title: 'Compliance & Documentation',
      description: 'We ensure all products and shipments comply with destination country regulations and handle all necessary documentation.',
      features: [
        'Product certification assistance',
        'Export/import documentation',
        'Regulatory compliance guidance',
        'Certificate of origin processing'
      ],
      color: 'bg-indigo-50 text-indigo-600 border-indigo-200'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-900 via-brand-800 to-brand-900 text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-brand-300 font-semibold text-sm uppercase tracking-wide">Our Services</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
              Complete Sourcing Solutions for Global Buyers
            </h1>
            <p className="text-lg text-brand-200 leading-relaxed">
              From initial supplier discovery to final delivery, we provide end-to-end sourcing services that reduce risk, save time, and ensure quality.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-start ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <service.icon className="w-8 h-8" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`bg-gray-50 rounded-2xl p-8 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="aspect-square bg-gradient-to-br from-brand-100 to-brand-50 rounded-xl flex items-center justify-center">
                    <service.icon className="w-24 h-24 text-brand-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We combine local expertise with international standards to deliver reliable sourcing results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: 'Local Team, Global Standards',
                desc: 'Our China-based team understands local business culture while maintaining international quality and communication standards.'
              },
              {
                icon: Clock,
                title: 'Fast Response Times',
                desc: 'We respond to all inquiries within 24 hours and provide regular updates throughout the sourcing process.'
              },
              {
                icon: Award,
                title: 'Proven Track Record',
                desc: 'Over 500 successful projects completed for clients in 50+ countries across multiple industries.'
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-xl border border-gray-200 text-center">
                <div className="w-16 h-16 bg-brand-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-brand-800" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-brand-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need Help Sourcing from China?
          </h2>
          <p className="text-lg text-brand-200 mb-8">
            Contact us today for a free consultation and quote. Our team is ready to help you find the right suppliers and products.
          </p>
          <Link
            to="/contact"
            className="bg-white text-brand-800 px-8 py-4 rounded-lg font-bold text-lg hover:bg-brand-50 transition-colors inline-flex items-center"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;