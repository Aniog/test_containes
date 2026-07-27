import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Search, Factory, ClipboardCheck, Shield, Ship, HeadphonesIcon, CheckCircle, ArrowRight, ChevronRight, FileText, Users, Star } from 'lucide-react';
import Button from '@/components/ui/button';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const servicesDetail = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    subtitle: 'Find the right manufacturers for your products',
    desc: 'We leverage our extensive database and on-the-ground network to identify suppliers that match your specific requirements. Our team evaluates product capabilities, pricing, lead times, and minimum order quantities before presenting you with qualified options.',
    features: ['Market research and supplier mapping', 'Capability and capacity assessment', 'Pricing and MOQ negotiation', 'Sample coordination and evaluation'],
    imgId: 'service-sourcing-4b7c2d',
  },
  {
    icon: Factory,
    title: 'Factory Verification',
    subtitle: 'On-site audits to confirm capabilities',
    desc: 'Our trained auditors visit factories in person to verify production capacity, quality management systems, certifications, and working conditions. We provide detailed reports with photos and actionable recommendations.',
    features: ['Production line assessment', 'Quality management system audit', 'Certification verification', 'Social compliance evaluation'],
    imgId: 'service-factory-5c8d3e',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    subtitle: 'Catch defects before they reach your customers',
    desc: 'Comprehensive inspection services at every stage of production. Our QC inspectors follow AQL standards and provide detailed reports with photos, measurements, and pass/fail decisions.',
    features: ['Raw material inspection', 'During-production inspection', 'Pre-shipment inspection', 'Container loading supervision'],
    imgId: 'service-qc-6d9e4f',
  },
  {
    icon: Shield,
    title: 'Production Monitoring',
    subtitle: 'Real-time oversight of your manufacturing',
    desc: 'We keep a close eye on your production schedule, raw material quality, and assembly processes. Regular updates and milestone reports ensure you always know where your order stands.',
    features: ['Production schedule tracking', 'Raw material quality checks', 'Assembly process monitoring', 'Progress reporting and photos'],
    imgId: 'service-production-7e0f5a',
  },
  {
    icon: Ship,
    title: 'Shipping & Logistics',
    subtitle: 'End-to-end freight and customs management',
    desc: 'We handle the entire logistics chain from factory to your doorstep. Our team manages documentation, customs clearance, and freight booking to ensure timely, cost-effective delivery.',
    features: ['Freight booking and consolidation', 'Export documentation and compliance', 'Customs clearance support', 'Door-to-door delivery tracking'],
    imgId: 'service-shipping-8f1a6b',
  },
  {
    icon: HeadphonesIcon,
    title: 'Ongoing Support',
    subtitle: 'Dedicated account management throughout',
    desc: 'Each client is assigned a dedicated account manager who serves as your single point of contact. We provide regular updates, proactive issue resolution, and post-delivery support.',
    features: ['Dedicated account manager', 'Regular progress updates', 'Issue resolution and escalation', 'Post-delivery follow-up'],
    imgId: 'service-support-9a2b7c',
  },
];

export default function Services() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, []);

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-primary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-accent/20 text-accent text-sm font-semibold px-4 py-1 rounded-full mb-4">Our Services</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Comprehensive Sourcing Services</h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Every step of the China sourcing process, managed by experienced professionals who know the market.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {servicesDetail.map((service, idx) => (
              <div key={idx} className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center`}>
                <div className="flex-1">
                  <service.icon className="w-12 h-12 text-primary mb-4" />
                  <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">{service.title}</h2>
                  <p className="text-accent font-semibold mb-4">{service.subtitle}</p>
                  <p className="text-gray-600 leading-relaxed mb-6">{service.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feat, fi) => (
                      <li key={fi} className="flex items-start gap-2 text-gray-600">
                        <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1 w-full">
                  <div className="aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden">
                    <img
                      data-strk-img-id={service.imgId}
                      data-strk-img={`[service-title-${idx}] [service-subtitle-${idx}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="700"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span id={`service-title-${idx}`} className="hidden">{service.title}</span>
                  <span id={`service-subtitle-${idx}`} className="hidden">{service.subtitle}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">Need a Specific Service?</h2>
          <p className="text-lg text-gray-300 mb-8">Contact us to discuss your requirements and get a customized service plan.</p>
          <Link to="/contact">
            <Button variant="accent" size="lg">
              Get a Free Quote
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}