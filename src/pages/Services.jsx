import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import {
  Search, ShieldCheck, ClipboardCheck, Truck, Package,
  ChevronRight, CheckCircle2, ArrowRight, FileText, Users, BarChart3
} from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import SectionHeader from '@/components/shared/SectionHeader.jsx';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and shortlist qualified suppliers from our verified network based on your product requirements, target price, and quality standards.',
    details: [
      'Product-specific supplier search across China\'s manufacturing hubs',
      'Initial screening for capability, capacity, and compliance',
      'Price comparison and negotiation support',
      'Sample arrangement and evaluation',
    ],
    imgId: 'svc-sourcing-e1f2g3',
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    desc: 'On-site factory audits to verify business licenses, production capacity, quality systems, and real manufacturing capabilities before you commit.',
    details: [
      'Business license and registration verification',
      'On-site factory audit with photo and video documentation',
      'Production capacity and equipment assessment',
      'Quality management system evaluation',
      'Worker welfare and compliance review',
    ],
    imgId: 'svc-verify-h4i5j6',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Pre-production, during-production, and pre-shipment inspections following international AQL standards to catch issues before they ship.',
    details: [
      'Pre-production inspection (PPI) for materials and components',
      'During-production inspection (DPI) at 20-30% completion',
      'Pre-shipment inspection (PSI) before container loading',
      'AQL sampling based on international standards',
      'Detailed photo and video reports with defect classification',
    ],
    imgId: 'svc-inspect-k7l8m9',
  },
  {
    icon: Package,
    title: 'Production Follow-up',
    desc: 'We monitor your orders throughout production, track milestones, and report progress so you stay informed without traveling to China.',
    details: [
      'Order milestone tracking and status updates',
      'Production schedule monitoring',
      'Material procurement oversight',
      'Issue escalation and resolution support',
      'Weekly progress reports with photos',
    ],
    imgId: 'svc-production-n1o2p3',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    desc: 'Consolidation, freight booking, customs documentation, and door-to-door logistics coordination for sea, air, or rail shipments.',
    details: [
      'Freight rate comparison across carriers',
      'Cargo consolidation for cost optimization',
      'Customs documentation and compliance',
      'Container loading supervision',
      'Door-to-door logistics coordination',
    ],
    imgId: 'svc-shipping-q4r5s6',
  },
  {
    icon: FileText,
    title: 'Order Management',
    desc: 'End-to-end order tracking from initial inquiry to delivery, with clear communication and documentation at every stage.',
    details: [
      'Centralized order tracking dashboard',
      'Supplier communication management',
      'Payment milestone coordination',
      'Document management and archiving',
      'Issue resolution and escalation',
    ],
    imgId: 'svc-order-t7u8v9',
  },
];

const Services = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
  <div>
    <section className="bg-navy py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">Our Services</h1>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          Comprehensive sourcing support from supplier discovery to delivered goods. Each service can be engaged individually or as part of a full-service package.
        </p>
      </div>
    </section>

    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={containerRef} className="space-y-20">
          {services.map((svc, i) => (
            <div
              key={svc.title}
              className={`flex flex-col lg:flex-row gap-10 lg:gap-16 items-center ${
                i % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="flex-1">
                <div className="w-14 h-14 bg-navy/5 rounded-xl flex items-center justify-center mb-5">
                  <svc.icon className="w-7 h-7 text-navy" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-charcoal mb-4">{svc.title}</h2>
                <p className="text-body leading-relaxed mb-6">{svc.desc}</p>
                <ul className="space-y-3">
                  {svc.details.map((d) => (
                    <li key={d} className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-body">{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1 w-full">
                <div className="aspect-[4/3] rounded-xl overflow-hidden bg-gray-100">
                  <img
                    alt={svc.title}
                    data-strk-img-id={svc.imgId}
                    data-strk-img={`[svc-${svc.imgId}-desc] [svc-${svc.imgId}-title]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p id={`svc-${svc.imgId}-title`} className="hidden">{svc.title}</p>
                <p id={`svc-${svc.imgId}-desc`} className="hidden">{svc.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 lg:py-28 bg-surface">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionHeader
          title="Need a Custom Service Package?"
          subtitle="Every sourcing project is different. Tell us what you need and we'll propose a tailored solution."
        />
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
        >
          Get a Free Sourcing Quote
          <ChevronRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  </div>
  );
};

export default Services;
