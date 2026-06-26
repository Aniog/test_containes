import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Shield, ClipboardCheck, Factory, Truck, ArrowRight, CheckCircle, Users, FileText, Globe } from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We identify and evaluate manufacturers across China that match your product requirements, quality standards, and budget constraints.',
    features: [
      'Comprehensive supplier database with 500+ verified factories',
      'Product-specific manufacturer matching',
      'Initial capability assessment and quotation comparison',
      'Background checks and reference verification',
    ],
  },
  {
    icon: Shield,
    title: 'Factory Verification',
    description: 'On-site audits to confirm that suppliers are legitimate, capable, and compliant with your requirements.',
    features: [
      'Business license and registration verification',
      'Production capacity and equipment assessment',
      'Quality management system evaluation',
      'Social compliance and working condition checks',
    ],
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Professional inspections at every stage of production to ensure your products meet specifications and quality standards.',
    features: [
      'Pre-production inspection of raw materials',
      'During-production checks at 20-30% completion',
      'Pre-shipment inspection (AQL sampling)',
      'Container loading supervision',
    ],
  },
  {
    icon: Factory,
    title: 'Production Monitoring',
    description: 'Regular factory visits and progress tracking to keep you informed and address issues before they become problems.',
    features: [
      'Weekly production progress reports',
      'On-site monitoring during critical production phases',
      'Real-time communication with factory management',
      'Issue identification and resolution support',
    ],
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    description: 'End-to-end logistics management from factory pickup to delivery at your destination port or warehouse.',
    features: [
      'Freight forwarding (sea, air, express)',
      'Customs documentation and clearance support',
      'Consolidation services for multiple suppliers',
      'Real-time shipment tracking',
    ],
  },
  {
    icon: FileText,
    title: 'Sample Management',
    description: 'We handle sample requests, evaluation, and feedback communication to ensure the product meets your expectations before mass production.',
    features: [
      'Sample request coordination with factories',
      'Sample quality evaluation and testing',
      'Detailed feedback communication to suppliers',
      'Sample consolidation and international shipping',
    ],
  },
];

export default function ServicesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-gray-900 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Sourcing Services
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Comprehensive solutions to help you source confidently from China. From finding the right supplier to delivering quality products to your door.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors text-lg"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {services.map((service) => (
              <div
                key={service.title}
                className="p-6 lg:p-8 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-7 h-7 text-blue-700" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      {service.title}
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We combine local expertise with international standards to deliver reliable sourcing results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Users, title: 'Bilingual Team', desc: 'Our team speaks both English and Mandarin, ensuring clear communication with suppliers.' },
              { icon: Globe, title: 'Local Presence', desc: 'Based in Shenzhen with connections across all major manufacturing regions in China.' },
              { icon: Shield, title: 'Risk Reduction', desc: 'We verify every supplier and inspect every order to protect your investment.' },
            ].map((item) => (
              <div key={item.title} className="text-center p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-blue-700" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Sourcing?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Tell us what you need and we will provide a free, no-obligation sourcing quote within 24 hours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors text-lg"
          >
            Get Your Free Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
