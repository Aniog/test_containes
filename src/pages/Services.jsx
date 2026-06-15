import { useEffect, useRef } from 'react';
import { Search, ShieldCheck, ClipboardCheck, Truck, Factory, BarChart3, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import SectionHeader from '../components/shared/SectionHeader';
import CtaBanner from '../components/shared/CtaBanner';
import { AccentButton } from '../components/shared/Buttons';

const services = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    tagline: 'Find the right manufacturer for your product',
    description: 'We research and shortlist qualified Chinese manufacturers based on your product specifications, target price, MOQ, and required certifications. Our supplier network spans all major manufacturing regions in China.',
    includes: [
      'Product specification review',
      'Supplier database search',
      'Initial supplier screening (3–5 candidates)',
      'Supplier profile reports',
      'Price and MOQ comparison',
    ],
  },
  {
    id: 'factory-verification',
    icon: Factory,
    title: 'Factory Verification & Audit',
    tagline: 'Know who you\'re buying from before you commit',
    description: 'Our team visits factories in person to verify their business registration, production capacity, equipment, workforce, and quality management systems. You receive a detailed audit report with photos.',
    includes: [
      'Business license verification',
      'On-site factory visit',
      'Production capacity assessment',
      'Certification and compliance check',
      'Detailed audit report with photos',
    ],
  },
  {
    id: 'quality-inspection',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    tagline: 'Catch problems before goods leave the factory',
    description: 'We conduct inspections at key stages of production — during manufacturing and before shipment — to verify that products meet your specifications, approved samples, and applicable standards.',
    includes: [
      'Pre-shipment inspection (PSI)',
      'During-production inspection (DUPRO)',
      'Container loading supervision',
      'AQL sampling methodology',
      'Detailed inspection report with photos',
    ],
  },
  {
    id: 'production-followup',
    icon: BarChart3,
    title: 'Production Follow-up',
    tagline: 'Stay informed throughout the production cycle',
    description: 'We monitor your order from placement to completion, tracking production milestones and communicating with the factory on your behalf. You receive regular status updates in English.',
    includes: [
      'Order confirmation and milestone planning',
      'Regular production status updates',
      'Issue escalation and resolution',
      'Lead time management',
      'Pre-shipment readiness confirmation',
    ],
  },
  {
    id: 'shipping-coordination',
    icon: Truck,
    title: 'Shipping Coordination',
    tagline: 'Get your goods shipped correctly and on time',
    description: 'We coordinate with freight forwarders, verify export documentation, and ensure your goods are packed, labeled, and shipped according to your requirements and destination country regulations.',
    includes: [
      'Freight forwarder coordination',
      'Export documentation review',
      'Packing and labeling verification',
      'Booking confirmation follow-up',
      'Shipping timeline management',
    ],
  },
  {
    id: 'supplier-negotiation',
    icon: ShieldCheck,
    title: 'Supplier Negotiation',
    tagline: 'Get better terms with local market knowledge',
    description: 'We negotiate directly with factories in Chinese, using our knowledge of local pricing benchmarks, supplier relationships, and market conditions to secure better prices, payment terms, and lead times.',
    includes: [
      'Price benchmarking',
      'Payment term negotiation',
      'Lead time optimization',
      'MOQ reduction negotiation',
      'Contract and PO review',
    ],
  },
];

export default function Services() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-primary-dark py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-gold mb-3">Our Services</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">China Sourcing Services</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            End-to-end sourcing support — from finding the right supplier to getting your goods delivered.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 md:space-y-24">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              return (
                <div key={service.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={!isEven ? 'lg:order-2' : ''}>
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-primary-dark mb-2">{service.title}</h2>
                    <p className="text-primary font-medium mb-4">{service.tagline}</p>
                    <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.includes.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-gray-700 text-sm">
                          <ArrowRight className="w-4 h-4 text-primary flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <AccentButton to="/contact" size="md">Request This Service</AccentButton>
                  </div>
                  <div className={`rounded-2xl overflow-hidden shadow-lg ${!isEven ? 'lg:order-1' : ''}`}>
                    <img
                      data-strk-img-id={`service-img-${service.id}`}
                      data-strk-img={`[service-desc-${service.id}] [service-title-${service.id}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={service.title}
                      className="w-full h-64 md:h-80 object-cover"
                    />
                    <span id={`service-title-${service.id}`} className="sr-only">{service.title}</span>
                    <span id={`service-desc-${service.id}`} className="sr-only">{service.tagline}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Not Sure Which Service You Need?"
        subtitle="Tell us about your project and we'll recommend the right combination of services for your situation."
        buttonText="Get a Free Consultation"
      />
    </div>
  );
}
