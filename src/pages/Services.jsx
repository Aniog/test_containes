import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  Search,
  ShieldCheck,
  ClipboardCheck,
  Factory,
  Ship,
  FileText,
  MessageSquare,
  BarChart3,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    short: 'Find the right manufacturer for your product.',
    details: [
      'Product-market matching based on your specifications and budget',
      'Shortlist 3–5 qualified suppliers from our 500+ verified network',
      'Initial price and MOQ negotiations on your behalf',
      'Supplier capability assessment (equipment, certifications, export history)',
      'Backup supplier options for risk mitigation',
    ],
    imgId: 'svc-detail-sourcing',
    imgQuery: 'supplier sourcing factory search',
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    short: 'Confirm who you are really doing business with.',
    details: [
      'On-site factory audit with photo and video documentation',
      'Legal registration and business license verification',
      'Production capacity and equipment inspection',
      'Social compliance and environmental checks (available)',
      'Detailed audit report with risk score and recommendations',
    ],
    imgId: 'svc-detail-verification',
    imgQuery: 'factory audit verification inspection',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    short: 'Catch defects before they leave China.',
    details: [
      'Pre-production inspection (raw materials and components)',
      'During-production inspection (inline checks at 20%, 50%, 80%)',
      'Pre-shipment inspection (AQL sampling standard)',
      'Container loading supervision',
      'Full photo report with pass/fail conclusion and corrective actions',
    ],
    imgId: 'svc-detail-inspection',
    imgQuery: 'quality control inspection factory',
  },
  {
    icon: Factory,
    title: 'Production Follow-Up',
    short: 'Stay informed without micromanaging from abroad.',
    details: [
      'Weekly progress reports with photos and status updates',
      'Sample approval coordination (pre-production and golden samples)',
      'Deadline monitoring and delay escalation',
      'Packaging and labeling compliance checks',
      'Communication bridge between you and the factory',
    ],
    imgId: 'svc-detail-followup',
    imgQuery: 'production monitoring factory management',
  },
  {
    icon: Ship,
    title: 'Shipping Coordination',
    short: 'From factory floor to your warehouse.',
    details: [
      'Freight forwarding: sea, air, rail, and courier options',
      'Export documentation and customs clearance support',
      'Amazon FBA prep, labeling, and direct shipment',
      'Cargo insurance arrangement',
      'Real-time shipment tracking and delivery confirmation',
    ],
    imgId: 'svc-detail-shipping',
    imgQuery: 'shipping logistics container freight',
  },
  {
    icon: FileText,
    title: 'Contract & Negotiation Support',
    short: 'Protect your interests in every agreement.',
    details: [
      'Purchase order and contract review in English and Chinese',
      'Payment term negotiation (T/T, L/C, Alibaba Trade Assurance)',
      'Intellectual property and NDA advice',
      'Penalty clause and warranty term structuring',
      'Dispute mediation support if issues arise',
    ],
    imgId: 'svc-detail-contract',
    imgQuery: 'business contract negotiation document',
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
      <section className="bg-primary-dark text-white py-16 md:py-24">
        <div className="container">
          <span className="text-primary-light text-xs font-semibold uppercase tracking-wider">Services</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
            What We Do
          </h1>
          <p className="text-white/80 max-w-2xl text-lg leading-relaxed">
            Comprehensive sourcing services built for international buyers who need reliable results without the risk of managing China suppliers alone.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-white">
        <div className="container space-y-20">
          {services.map((svc, i) => (
            <div
              key={i}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
                i % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <img
                  data-strk-img-id={svc.imgId}
                  data-strk-img={`[svc-${i}-title]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={svc.title}
                  className="w-full h-64 md:h-80 object-cover rounded-lg shadow-sm"
                  id={`svc-${i}-title`}
                />
              </div>
              <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="w-14 h-14 bg-primary-light rounded-lg flex items-center justify-center mb-6">
                  <svc.icon className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-neutral-nearblack mb-3">
                  {svc.title}
                </h2>
                <p className="text-neutral-mediumgray text-lg mb-6">{svc.short}</p>
                <ul className="space-y-3">
                  {svc.details.map((d, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-success shrink-0 mt-0.5" />
                      <span className="text-sm text-neutral-darkgray">{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-neutral-offwhite">
        <div className="container text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-nearblack mb-4">
            Not Sure What You Need?
          </h2>
          <p className="text-neutral-mediumgray mb-8">
            Every project is different. Tell us about your product and goals, and we will recommend the right service mix — with a free quote and timeline.
          </p>
          <Link
            to="/contact"
            className="bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-md text-base font-semibold transition-colors inline-flex items-center gap-2"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
