import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  Search, ShieldCheck, ClipboardCheck, Truck, Clock,
  ArrowRight, CheckCircle2, FileText, Users, BarChart3
} from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and shortlist qualified suppliers from our verified network across China, matched to your product specifications and quality requirements.',
    details: [
      'Product-specific supplier identification from our database of 500+ verified factories',
      'Initial capability assessment and quotation comparison',
      'Supplier background checks including business registration and export history',
      'NDA arrangement and initial communication setup',
    ],
    imgId: 'svc-source-e1f2g3',
    titleId: 'svc-source-title',
    descId: 'svc-source-desc',
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    desc: 'On-site factory audits covering business licenses, production capacity, quality systems, and compliance certifications before you commit.',
    details: [
      'On-site factory audit with detailed photo and video documentation',
      'Business license and registration verification',
      'Production capacity and equipment assessment',
      'Quality management system evaluation (ISO, etc.)',
      'Social compliance and working condition review',
      'Certification verification (CE, FDA, RoHS, etc.)',
    ],
    imgId: 'svc-verify-h4i5j6',
    titleId: 'svc-verify-title',
    descId: 'svc-verify-desc',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Pre-production, during-production, and pre-shipment inspections following AQL standards to catch issues before they ship.',
    details: [
      'Pre-Production Inspection (PPI): raw materials and components check',
      'During Production Inspection (DPI): in-process quality monitoring',
      'Pre-Shipment Inspection (PSI): final AQL-based inspection before dispatch',
      'Container Loading Supervision: verify correct loading and sealing',
      'Detailed inspection reports with photos and defect classification',
    ],
    imgId: 'svc-inspect-k7l8m9',
    titleId: 'svc-inspect-title',
    descId: 'svc-inspect-desc',
  },
  {
    icon: Clock,
    title: 'Production Follow-up',
    desc: 'Regular production monitoring and status updates so you stay informed on timelines, delays, and milestones throughout manufacturing.',
    details: [
      'Production schedule planning and milestone tracking',
      'Weekly status updates with progress photos',
      'Delay risk identification and mitigation planning',
      'Direct communication with factory production managers',
      'Issue escalation and resolution management',
    ],
    imgId: 'svc-follow-n1o2p3',
    titleId: 'svc-follow-title',
    descId: 'svc-follow-desc',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    desc: 'End-to-end logistics management including freight booking, customs documentation, and door-to-door delivery coordination.',
    details: [
      'Freight quotation comparison (sea, air, rail)',
      'Booking and shipment scheduling',
      'Customs documentation and compliance preparation',
      'Cargo insurance arrangement',
      'Shipment tracking and delivery confirmation',
      'Consolidation services for multiple suppliers',
    ],
    imgId: 'svc-ship-q4r5s6',
    titleId: 'svc-ship-title',
    descId: 'svc-ship-desc',
  },
];

const Services = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-neutral-800 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Our Services</h1>
            <p className="text-lg text-neutral-300 leading-relaxed">
              End-to-end China sourcing services designed to reduce risk, save time, and ensure product quality from supplier selection to delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 md:space-y-24">
            {services.map((svc, idx) => (
              <div key={svc.title} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-brand-50 rounded-lg flex items-center justify-center">
                      <svc.icon className="w-5 h-5 text-brand-500" />
                    </div>
                    <h2 id={svc.titleId} className="text-2xl md:text-3xl font-bold text-neutral-800">{svc.title}</h2>
                  </div>
                  <p id={svc.descId} className="text-neutral-600 leading-relaxed mb-6">{svc.desc}</p>
                  <ul className="space-y-3">
                    {svc.details.map((d) => (
                      <li key={d} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-neutral-700 text-sm leading-relaxed">{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={idx % 2 === 1 ? 'lg:order-1' : ''}>
                  <img
                    alt={svc.title}
                    data-strk-img-id={svc.imgId}
                    data-strk-img={`[${svc.descId}] [${svc.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full rounded-xl bg-neutral-100"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-brand-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need a Custom Sourcing Solution?
          </h2>
          <p className="text-lg text-brand-100 mb-8 max-w-2xl mx-auto">
            Every sourcing project is different. Tell us about your requirements and we will propose a tailored service plan.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-accent-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-accent-600 transition-colors"
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
