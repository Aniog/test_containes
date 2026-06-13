import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Shield, ClipboardCheck, Factory, Ship, TrendingUp, ArrowRight, CheckCircle } from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Product Sourcing',
    description: 'We identify and connect you with the right manufacturers for your specific product needs. Our team searches through our extensive network of verified suppliers to find the best match for your requirements.',
    features: [
      'Comprehensive supplier database with 2,000+ verified manufacturers',
      'Multi-supplier comparison for pricing and capabilities',
      'Sample procurement and evaluation',
      'Custom manufacturing and OEM/ODM support',
      'Ongoing supplier relationship management'
    ]
  },
  {
    icon: Shield,
    title: 'Supplier Verification',
    description: 'Before you commit to any supplier, we conduct thorough verification to ensure they are legitimate, capable, and reliable. This protects you from fraud and quality issues.',
    features: [
      'Business license and registration verification',
      'Factory audits with detailed reports and photos',
      'Production capacity assessment',
      'Reference checks with existing clients',
      'Financial stability evaluation'
    ]
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Our quality control team conducts inspections at every critical stage of production to ensure your products meet specifications and quality standards.',
    features: [
      'Pre-production inspection (materials and components)',
      'During-production inspection (manufacturing process)',
      'Pre-shipment inspection (final quality check)',
      'Container loading supervision',
      'Detailed inspection reports with photos'
    ]
  },
  {
    icon: Factory,
    title: 'Production Monitoring',
    description: 'We keep a close eye on your production progress, providing regular updates and addressing issues before they become problems.',
    features: [
      'Regular factory visits and progress reports',
      'Production timeline tracking',
      'Issue identification and resolution',
      'Communication coordination with factory',
      'Milestone verification'
    ]
  },
  {
    icon: Ship,
    title: 'Shipping Coordination',
    description: 'From factory door to your warehouse, we handle the entire logistics process to ensure your goods arrive safely and on time.',
    features: [
      'Freight forwarding coordination',
      'Customs documentation preparation',
      'Cargo consolidation from multiple suppliers',
      'Shipping method optimization (air, sea, express)',
      'Real-time shipment tracking'
    ]
  },
  {
    icon: TrendingUp,
    title: 'Price Negotiation',
    description: 'Our local market knowledge and language skills help you get the best possible pricing and favorable payment terms from Chinese suppliers.',
    features: [
      'Market price analysis and benchmarking',
      'Direct negotiation with suppliers',
      'Payment term optimization',
      'Volume discount negotiation',
      'Long-term pricing strategy'
    ]
  }
];

export default function ServicesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-16 md:py-24">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-blue-400 font-semibold text-sm uppercase tracking-wide">Our Services</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-4">Complete China Sourcing Services</h1>
            <p className="text-lg text-slate-300">From finding suppliers to delivering goods, we provide end-to-end sourcing support for global buyers.</p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                    <service.icon className="w-7 h-7 text-blue-600" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">{service.title}</h2>
                  <p className="text-slate-600 text-lg mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`bg-slate-100 rounded-2xl p-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="aspect-video bg-gradient-to-br from-blue-100 to-slate-200 rounded-xl flex items-center justify-center">
                    <service.icon className="w-20 h-20 text-blue-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-50">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Need Help with Sourcing?</h2>
            <p className="text-slate-600 text-lg mb-8">Contact us for a free consultation. We will assess your needs and recommend the right services.</p>
            <Link to="/contact" className="btn-accent text-lg px-8 py-4">
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
