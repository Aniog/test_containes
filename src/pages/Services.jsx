import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Shield, Eye, FileCheck, Truck, Headphones, CheckCircle, ArrowRight } from 'lucide-react';

const services = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We identify and evaluate qualified manufacturers across China that match your product requirements, quality standards, and budget.',
    features: [
      'Database of 5000+ verified suppliers',
      'Industry-specific supplier matching',
      'Price comparison from multiple factories',
      'Initial capability assessment',
      'Sample coordination and evaluation',
    ],
  },
  {
    id: 'factory-verification',
    icon: Shield,
    title: 'Factory Verification',
    description: 'Comprehensive on-site factory audits to verify capabilities, certifications, production capacity, and business legitimacy before you commit.',
    features: [
      'Business license verification',
      'Production capacity assessment',
      'Equipment and facility inspection',
      'Quality management system review',
      'Export certification confirmation',
      'Financial stability background check',
    ],
  },
  {
    id: 'quality-inspection',
    icon: Eye,
    title: 'Quality Inspection',
    description: 'Multi-stage quality control process to ensure products meet your specifications at every production phase.',
    features: [
      'Pre-production material inspection',
      'In-line production monitoring',
      'Pre-shipment final inspection',
      'AQL standard compliance',
      'Detailed photo documentation',
      'Defect classification and reporting',
    ],
  },
  {
    id: 'production-monitoring',
    icon: FileCheck,
    title: 'Production Monitoring',
    description: 'Track production progress, timelines, and milestones to ensure your orders are completed on schedule.',
    features: [
      'Weekly progress reports',
      'Timeline tracking and alerts',
      'Milestone verification',
      'Delay prevention and mitigation',
      'Direct factory communication',
      'Production schedule management',
    ],
  },
  {
    id: 'shipping',
    icon: Truck,
    title: 'Shipping Coordination',
    description: 'End-to-end logistics management from factory floor to your warehouse, including customs clearance and documentation.',
    features: [
      'Ocean, air, and rail freight options',
      'Competitive freight rate negotiation',
      'Customs documentation preparation',
      'Container loading supervision',
      'Shipment tracking and updates',
      'Door-to-door delivery coordination',
    ],
  },
  {
    id: 'support',
    icon: Headphones,
    title: 'Ongoing Support',
    description: 'Dedicated account management with responsive communication and regular updates throughout your sourcing journey.',
    features: [
      'Dedicated English-speaking account manager',
      '24-hour response time guarantee',
      'Regular status updates and reports',
      'Issue resolution and escalation',
      'Supplier relationship management',
      'Reorder coordination',
    ],
  },
];

const Services = () => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-900 to-brand-700 py-20">
        <div className="container-wide text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Comprehensive sourcing solutions covering every step from supplier identification to final delivery.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={service.id} id={service.id} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="w-14 h-14 bg-brand-50 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7 text-brand-500" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`bg-gray-50 rounded-2xl p-8 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="aspect-[4/3] bg-gradient-to-br from-brand-100 to-brand-50 rounded-xl flex items-center justify-center">
                    <service.icon className="w-20 h-20 text-brand-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gray-50">
        <div className="container-wide text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Need Customized Sourcing Support?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Contact us to discuss your specific requirements. We will create a tailored sourcing plan for your business.
          </p>
          <Link to="/contact" className="btn-primary text-lg">
            Get a Free Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
