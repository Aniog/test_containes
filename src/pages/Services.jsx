import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, FileCheck, ClipboardCheck, Package, Truck, Users,
  CheckCircle, ArrowRight, Phone, Mail, Building, Clock, Shield
} from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Services = () => {
  const containerRef = useRef(null);

  React.useEffect(() => {
    const cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current);
    return cleanup;
  }, []);

  const services = [
    {
      icon: Search,
      title: 'Supplier Search & Verification',
      description: 'We identify and verify reliable manufacturers that match your product specifications, quality requirements, and budget.',
      features: [
        'Extensive manufacturer database across multiple industries',
        'Background checks on business licenses and registrations',
        'On-site factory visits to verify capabilities',
        'Capacity assessment and production capability analysis',
        'Reference checks from existing clients',
      ],
    },
    {
      icon: FileCheck,
      title: 'Factory Audits',
      description: 'Comprehensive on-site inspections to verify factory capabilities, certifications, production capacity, and compliance with ethical standards.',
      features: [
        'Business license and legal entity verification',
        'Factory size and facility assessment',
        'Production line and equipment evaluation',
        'Quality management system review',
        'Social compliance and ethical audits',
        'ISO and industry certifications verification',
      ],
    },
    {
      icon: ClipboardCheck,
      title: 'Quality Control Inspections',
      description: 'Pre-shipment inspections, during-production checks, and loading supervision to ensure your standards are met consistently.',
      features: [
        'Pre-shipment inspection (PSI)',
        'During production inspection (DPI)',
        'Initial production inspection (IPI)',
        'Loading supervision',
        'AQL sampling and defect classification',
        'Detailed inspection reports with photos',
      ],
    },
    {
      icon: Package,
      title: 'Production Follow-up',
      description: 'Regular updates on production progress, sample approvals, and proactive issue resolution throughout the manufacturing process.',
      features: [
        'Daily or weekly production progress reports',
        'Sample approval coordination',
        'Material quality monitoring',
        'Production scheduling oversight',
        'Issue identification and resolution',
        'Timeline management',
      ],
    },
    {
      icon: Truck,
      title: 'Shipping Coordination',
      description: 'End-to-end logistics management including consolidation, customs documentation, and freight forwarding to your destination.',
      features: [
        'Sea freight (LCL/FCL) arrangements',
        'Air freight coordination',
        'Express shipping (DHL, FedEx, UPS)',
        'Customs documentation handling',
        'Cargo consolidation services',
        'Door-to-door delivery options',
      ],
    },
    {
      icon: Users,
      title: 'Sample Management',
      description: 'Sourcing, approval, and shipping of product samples to help you make informed decisions before committing to bulk orders.',
      features: [
        'Sample sourcing from manufacturers',
        'Sample quality verification',
        'Modification and customization coordination',
        'International shipping arrangements',
        'Sample approval tracking',
        'Cost optimization advice',
      ],
    },
  ];

  const whyChooseUs = [
    {
      icon: Building,
      title: 'Local Expertise',
      description: 'Our team is based in China, enabling regular factory visits and real-time oversight of your production.',
    },
    {
      icon: Shield,
      title: 'Risk Mitigation',
      description: 'We identify potential issues early, protecting you from costly mistakes and defective products.',
    },
    {
      icon: Clock,
      title: 'Time Savings',
      description: 'Skip the research and travel—we handle logistics while you focus on your core business.',
    },
    {
      icon: CheckCircle,
      title: 'Quality Assurance',
      description: 'Multiple inspection checkpoints ensure consistent quality throughout the production process.',
    },
  ];

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20 md:py-28">
        <div className="section-container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-blue-100">
              Comprehensive China sourcing solutions designed to protect your interests and streamline your procurement process.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-start ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
                  <p className="text-gray-600 text-lg mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`bg-gray-100 rounded-2xl p-8 min-h-[300px] flex items-center justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <service.icon className="w-32 h-32 text-blue-200" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gray-50">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Work With Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our local presence and expertise give you advantages that remote communication simply cannot match.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-5">
                  <item.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-blue-600 text-white">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-blue-100 text-lg mb-8">
              Contact us for a free consultation. We'll discuss your sourcing needs and provide actionable recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Get a Free Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="mailto:contact@ssourcingchina.com"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                <Mail className="w-5 h-5" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
