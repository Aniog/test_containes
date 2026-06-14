import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ClipboardCheck, ShieldCheck, TrendingUp, Truck, Package, CheckCircle, ArrowRight } from 'lucide-react';
import { services } from '../data/content';

const iconMap = {
  Search,
  ClipboardCheck,
  ShieldCheck,
  TrendingUp,
  Truck,
  Package,
};

const serviceDetails = {
  'supplier-identification': {
    features: [
      'Comprehensive supplier database across China',
      'Background checks and credential verification',
      'Factory visits and capacity assessment',
      'Business license and legal entity verification',
      'Reference checks from existing clients',
      'Price negotiation support',
    ],
  },
  'factory-audits': {
    features: [
      'ISO compliance verification',
      'Production capacity assessment',
      'Quality management system evaluation',
      'Environmental compliance checks',
      'Social responsibility audits',
      'Detailed audit reports with photos',
    ],
  },
  'quality-control': {
    features: [
      'Pre-production inspections',
      'During-production inspections',
      'Pre-shipment inspections',
      'AQL sampling methodology',
      'Product testing coordination',
      'Detailed inspection reports',
    ],
  },
  'production-followup': {
    features: [
      'Regular production monitoring',
      'Progress tracking and reporting',
      'Timeline management',
      'Issue resolution and escalation',
      'Sample approval coordination',
      'Production milestone verification',
    ],
  },
  'shipping-logistics': {
    features: [
      'Freight forwarding coordination',
      'Customs documentation handling',
      'Container consolidation services',
      'Track and trace updates',
      'Insurance coordination',
      'Last-mile delivery coordination',
    ],
  },
  'custom-sourcing': {
    features: [
      'Product specification development',
      'Custom tooling coordination',
      'Multi-component order management',
      'Prototype development support',
      'Supplier qualification for new products',
      'Complex project management',
    ],
  },
};

const Services = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1E3A5F] to-[#2D5A87] py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1 bg-white/10 text-white text-sm font-semibold rounded-full mb-4">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Comprehensive China Sourcing Solutions
            </h1>
            <p className="text-xl text-white/80 mb-8">
              From initial supplier identification to final delivery, we provide end-to-end services that make sourcing from China reliable, efficient, and risk-free.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#E67E22] hover:bg-[#D35400] text-white font-semibold rounded-lg transition-all duration-200"
            >
              Get a Free Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="space-y-20">
            {services.map((service, index) => {
              const IconComponent = iconMap[service.icon] || Package;
              const details = serviceDetails[service.id];
              const isEven = index % 2 === 0;

              return (
                <div
                  key={service.id}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}
                >
                  {/* Content */}
                  <div className={!isEven ? 'lg:order-2' : ''}>
                    <div className="w-16 h-16 bg-[#E67E22]/10 rounded-2xl flex items-center justify-center mb-6">
                      <IconComponent className="w-8 h-8 text-[#E67E22]" />
                    </div>
                    <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                    <p className="text-lg text-[#6B7280] mb-8">{service.description}</p>
                    
                    {details && (
                      <div className="space-y-3">
                        <h3 className="font-semibold text-[#1E3A5F] mb-4">What We Provide:</h3>
                        {details.features.map((feature, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-[#059669] flex-shrink-0 mt-0.5" />
                            <span className="text-[#1F2937]">{feature}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Visual */}
                  <div className={!isEven ? 'lg:order-1' : ''}>
                    <div className="aspect-square bg-gradient-to-br from-[#F8FAFC] to-[#E5E7EB] rounded-2xl flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 opacity-30">
                        <div className="absolute inset-0" style={{
                          backgroundImage: `linear-gradient(90deg, rgba(30,58,95,0.1) 1px, transparent 1px),
                            linear-gradient(rgba(30,58,95,0.1) 1px, transparent 1px)`,
                          backgroundSize: '40px 40px',
                        }} />
                      </div>
                      <div className="text-center p-8">
                        <IconComponent className="w-24 h-24 text-[#1E3A5F]/20 mx-auto mb-4" />
                        <p className="text-[#1E3A5F]/40 font-semibold">{service.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-[#F8FAFC]">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Work With Us?
            </h2>
            <p className="text-lg text-[#6B7280]">
              Our combination of local expertise, professional processes, and commitment to quality sets us apart.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Local Expertise',
                description: 'Our team is based in China with deep understanding of local business practices, language, and culture.',
              },
              {
                title: 'Professional Standards',
                description: 'We follow internationally recognized quality standards and provide detailed documentation for every service.',
              },
              {
                title: 'Transparent Communication',
                description: 'Regular updates, clear reporting, and responsive communication throughout your project.',
              },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm">
                <div className="text-4xl font-bold text-[#E67E22]/20 mb-4">0{index + 1}</div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-[#6B7280]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[#E67E22] to-[#D35400]">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and quote. Tell us about your product needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#E67E22] font-semibold rounded-lg hover:bg-[#F8FAFC] transition-all duration-200"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
