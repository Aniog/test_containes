import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import PageHero from '@/components/shared/PageHero';
import CTASection from '@/components/shared/CTASection';
import {
  Search, ShieldCheck, ClipboardCheck, Eye, Truck, Users,
  CheckCircle2, FileText, Camera, Wrench, Ship, Headphones
} from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and shortlist qualified suppliers from our network of 500+ verified factories across China.',
    details: [
      'Product-specific supplier search based on your requirements',
      'Initial screening for capability, capacity, and compliance',
      'Price comparison across multiple qualified suppliers',
      'Supplier shortlist with detailed profiles and recommendations',
    ],
    imgId: 'svc-sourcing-a1b2c3',
    titleId: 'svc-sourcing-title',
    descId: 'svc-sourcing-desc',
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    desc: 'On-site factory audits to verify business legitimacy, production capabilities, and quality management systems.',
    details: [
      'Business license and registration verification',
      'On-site production capacity and equipment assessment',
      'Quality management system evaluation (ISO, etc.)',
      'Worker conditions and environmental compliance check',
      'Past client reference verification',
    ],
    imgId: 'svc-verify-d4e5f6',
    titleId: 'svc-verify-title',
    descId: 'svc-verify-desc',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Multi-stage quality inspections to catch defects early and ensure your products meet agreed specifications.',
    details: [
      'Pre-production inspection (PPI) — materials and components check',
      'During-production inspection (DPI) — process and quality monitoring',
      'Pre-shipment inspection (PSI) — final product check before dispatch',
      'Detailed photo and video reports with defect classification',
    ],
    imgId: 'svc-qc-g7h8i9',
    titleId: 'svc-qc-title',
    descId: 'svc-qc-desc',
  },
  {
    icon: Eye,
    title: 'Production Follow-up',
    desc: 'Regular monitoring of your production orders with proactive communication and issue resolution.',
    details: [
      'Production schedule tracking and milestone updates',
      'On-site visits during critical production phases',
      'Proactive issue identification and resolution',
      'Weekly progress reports with photos and status updates',
    ],
    imgId: 'svc-production-j1k2l3',
    titleId: 'svc-production-title',
    descId: 'svc-production-desc',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    desc: 'End-to-end logistics management from factory to your warehouse, including customs and documentation.',
    details: [
      'Freight booking (sea, air, rail) at competitive rates',
      'Consolidation of shipments from multiple suppliers',
      'Customs documentation and declaration preparation',
      'Real-time shipment tracking and delivery coordination',
    ],
    imgId: 'svc-shipping-m4n5o6',
    titleId: 'svc-shipping-title',
    descId: 'svc-shipping-desc',
  },
  {
    icon: Users,
    title: 'Dedicated Support',
    desc: 'A dedicated sourcing specialist assigned to your project for consistent communication and accountability.',
    details: [
      'Single point of contact for all sourcing activities',
      'Regular communication in your preferred language',
      'Time zone-friendly meeting schedules',
      'Escalation path for urgent issues',
    ],
    imgId: 'svc-support-p7q8r9',
    titleId: 'svc-support-title',
    descId: 'svc-support-desc',
  },
];

export default function Services() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <PageHero
        title="Our Sourcing Services"
        subtitle="End-to-end sourcing support from supplier discovery to delivery. We handle the complexity so you can focus on growing your business."
        breadcrumb="Services"
      />

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="space-y-20">
            {services.map((svc, i) => (
              <div key={svc.title} className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                    <svc.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 id={svc.titleId} className="text-2xl font-bold text-slate-900 mb-3">{svc.title}</h3>
                  <p id={svc.descId} className="text-slate-600 mb-6 leading-relaxed">{svc.desc}</p>
                  <ul className="space-y-3">
                    {svc.details.map((d) => (
                      <li key={d} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-slate-700 text-sm">{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`aspect-[4/3] bg-slate-100 rounded-xl overflow-hidden ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <img
                    alt={svc.title}
                    data-strk-img-id={svc.imgId}
                    data-strk-img={`[${svc.descId}] [${svc.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Need a Sourcing Partner You Can Trust?"
        subtitle="Tell us about your project and get a free sourcing assessment."
      />
    </div>
  );
}
