import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  Search, Building2, ClipboardCheck, Truck, ShieldCheck,
  Globe, FileText, Users, ArrowRight, CheckCircle
} from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing & Matching',
    subtitle: 'Find the right factory for your product',
    desc: 'We search our network of 5,000+ pre-screened factories to find suppliers that match your product specifications, quality requirements, and budget. We present a shortlist of 3-5 verified options with detailed profiles.',
    details: [
      'Product specification analysis & RFQ preparation',
      'Database search across 5,000+ pre-vetted factories',
      'Supplier shortlist with capability profiles',
      'Initial communication & quotation comparison',
      'Supplier recommendation with rationale',
    ],
    color: 'bg-blue-50 text-blue-600',
    imgId: 'service-sourcing-a1b2c3',
  },
  {
    icon: Building2,
    title: 'Factory Verification & Audits',
    subtitle: 'Know exactly who you are dealing with',
    desc: 'Our team visits factories in person to verify their legitimacy, production capacity, quality systems, certifications, and financial standing. We provide comprehensive audit reports with photos and documentation.',
    details: [
      'On-site factory visit & physical inspection',
      'Business license & certification verification',
      'Production line capacity assessment',
      'Quality management system review',
      'Detailed audit report with photos & scoring',
    ],
    color: 'bg-emerald-50 text-emerald-600',
    imgId: 'service-verification-d4e5f6',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Control & Inspection',
    subtitle: 'Ensure every shipment meets your standards',
    desc: 'We provide multi-stage quality control including initial production checks, in-line inspections, and pre-shipment inspections. Our inspectors use AQL sampling standards and provide detailed reports within 24 hours.',
    details: [
      'Initial Production Check (IPC)',
      'During Production Inspection (DPI / DUPRO)',
      'Pre-Shipment Inspection (PSI / FRI)',
      'Container Loading Supervision (CLS)',
      'Third-party lab testing coordination',
    ],
    color: 'bg-amber-50 text-amber-600',
    imgId: 'service-qc-g7h8i9',
  },
  {
    icon: Truck,
    title: 'Shipping & Logistics Management',
    subtitle: 'Door-to-door delivery without the hassle',
    desc: 'We coordinate freight forwarding, customs clearance, and final delivery. Whether FCL, LCL, air freight, or rail, we find the most cost-effective route and manage all documentation.',
    details: [
      'Freight forwarder coordination & rate comparison',
      'FCL, LCL, air freight & rail options',
      'Customs documentation & clearance',
      'Cargo insurance arrangement',
      'Door-to-door delivery tracking',
    ],
    color: 'bg-purple-50 text-purple-600',
    imgId: 'service-shipping-j0k1l2',
  },
  {
    icon: ShieldCheck,
    title: 'Contract & IP Protection',
    subtitle: 'Secure agreements that protect your interests',
    desc: 'We help structure contracts with clear terms on quality standards, delivery timelines, payment milestones, and IP ownership. NNN agreements are standard with every engagement.',
    details: [
      'NNN agreement drafting & execution',
      'Contract terms negotiation support',
      'IP ownership & protection clauses',
      'Payment milestone structuring',
      'Dispute resolution mechanisms',
    ],
    color: 'bg-red-50 text-red-600',
    imgId: 'service-contract-m3n4o5',
  },
  {
    icon: Globe,
    title: 'Ongoing Supply Chain Management',
    subtitle: 'Long-term partnership for growing businesses',
    desc: 'For clients with ongoing sourcing needs, we provide continuous production follow-up, supplier relationship management, and supply chain optimization at no additional service fee beyond our standard rate.',
    details: [
      'Weekly production status reports',
      'Supplier performance monitoring & scoring',
      'Continuous cost optimization',
      'New product development support',
      'Dedicated account manager',
    ],
    color: 'bg-teal-50 text-teal-600',
    imgId: 'service-supplychain-p6q7r8',
  },
];

export default function Services() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <section className="bg-gradient-to-br from-navy-900 to-navy-800 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-400 font-semibold text-sm uppercase tracking-wider">Our Services</p>
          <h1 id="services-page-title" className="mt-3 text-4xl sm:text-5xl font-extrabold text-white">
            Complete Sourcing Solutions
          </h1>
          <p id="services-page-subtitle" className="mt-4 text-lg text-steel-400 max-w-2xl mx-auto leading-relaxed">
            From supplier discovery to final delivery, we handle every aspect of sourcing from China so you can focus on growing your business.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, idx) => (
              <div
                key={service.title}
                id={`service-section-${idx}`}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className={`inline-flex rounded-lg p-3 ${service.color} mb-4`}>
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h2 id={`service-${idx}-title`} className="text-3xl font-extrabold text-steel-900">{service.title}</h2>
                  <p className="mt-2 text-lg font-medium text-brand-600">{service.subtitle}</p>
                  <p id={`service-${idx}-desc`} className="mt-4 text-steel-500 leading-relaxed">{service.desc}</p>
                  <ul className="mt-6 space-y-3">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-sm text-steel-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={idx % 2 === 1 ? 'lg:order-1' : ''}>
                  <img
                    alt={service.title}
                    data-strk-img-id={service.imgId}
                    data-strk-img={`[service-${idx}-desc] [service-${idx}-title] [services-page-subtitle] [services-page-title]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full rounded-xl shadow-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-brand-700">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Not Sure What You Need?
          </h2>
          <p className="mt-4 text-lg text-brand-200 max-w-xl mx-auto leading-relaxed">
            Every project is different. Contact us and we will recommend the right service package for your needs.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-base font-semibold text-brand-700 shadow-lg hover:bg-brand-50 transition-colors"
          >
            Get a Free Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
