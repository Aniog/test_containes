import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Search, Factory, ClipboardCheck, ShieldCheck, Truck, Package,
  ArrowRight, CheckCircle
} from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import InquiryForm from '@/components/home/InquiryForm';

const services = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    subtitle: 'Find the right manufacturer for your product',
    description: 'We research and identify qualified Chinese manufacturers that match your product specifications, quality standards, MOQ, and budget. Our sourcing process goes beyond Alibaba — we tap into our verified supplier network and industry contacts to find factories that are genuinely capable of producing your product.',
    features: [
      'Product specification analysis',
      'Supplier research across 20+ industries',
      'Shortlist of 3–5 qualified manufacturers',
      'Initial supplier communication in Mandarin',
      'Price and MOQ comparison report',
    ],
    imgId: 'svc-sourcing-img-4a1b2c',
    titleId: 'svc-sourcing-title',
    descId: 'svc-sourcing-desc',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  {
    id: 'factory-verification',
    icon: Factory,
    title: 'Factory Verification & Audit',
    subtitle: 'Know who you are buying from',
    description: 'Before you commit to a supplier, we verify their legitimacy and capability through document checks and on-site audits. We assess business licenses, export certifications, production equipment, workforce size, and quality management systems.',
    features: [
      'Business license and registration verification',
      'Export license and certification checks',
      'On-site factory visit and audit report',
      'Production capacity assessment',
      'Quality management system review',
    ],
    imgId: 'svc-audit-img-7d3e4f',
    titleId: 'svc-audit-title',
    descId: 'svc-audit-desc',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
  },
  {
    id: 'quality-inspection',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    subtitle: 'Catch defects before they reach your warehouse',
    description: 'Our trained QC inspectors conduct inspections at key stages of production. We check products against your specifications, take photos and videos, and provide detailed inspection reports so you can make informed decisions before shipment.',
    features: [
      'Pre-production inspection (materials & components)',
      'During-production inspection (DUPRO)',
      'Pre-shipment inspection (PSI)',
      'Container loading supervision',
      'Detailed photo/video inspection reports',
    ],
    imgId: 'svc-qc-img-2c5f8a',
    titleId: 'svc-qc-title',
    descId: 'svc-qc-desc',
    color: 'text-orange-600',
    bg: 'bg-orange-50',
  },
  {
    id: 'production-followup',
    icon: ShieldCheck,
    title: 'Production Follow-up',
    subtitle: 'Stay informed throughout the production cycle',
    description: 'Once production begins, we act as your eyes and ears on the ground. We communicate with the factory regularly, track production milestones, and escalate any issues early — before they become costly delays or quality problems.',
    features: [
      'Weekly production status updates',
      'Factory communication in Mandarin',
      'Timeline monitoring and delay alerts',
      'Issue escalation and resolution support',
      'Photo and video progress reports',
    ],
    imgId: 'svc-production-img-9b1e3d',
    titleId: 'svc-production-title',
    descId: 'svc-production-desc',
    color: 'text-purple-600',
    bg: 'bg-purple-50',
  },
  {
    id: 'shipping',
    icon: Truck,
    title: 'Shipping Coordination',
    subtitle: 'From factory floor to your door',
    description: 'We coordinate with freight forwarders, prepare export documentation, and manage the logistics process from factory to port. Whether you need FCL, LCL, air freight, or express delivery, we help you choose the right option and ensure goods are shipped correctly.',
    features: [
      'Freight forwarder coordination',
      'Export documentation preparation',
      'FCL, LCL, and air freight options',
      'Customs declaration support',
      'Shipment tracking and updates',
    ],
    imgId: 'svc-shipping-img-6f4a7c',
    titleId: 'svc-shipping-title',
    descId: 'svc-shipping-desc',
    color: 'text-sky-600',
    bg: 'bg-sky-50',
  },
  {
    id: 'private-label',
    icon: Package,
    title: 'Private Label & OEM',
    subtitle: 'Build your own branded product line',
    description: 'We support buyers who want to develop custom products or private label existing ones. From product design input and material selection to sample development and branded packaging, we manage the full OEM process with vetted manufacturing partners.',
    features: [
      'Product design and specification support',
      'Material and component sourcing',
      'Sample development and review',
      'Custom packaging and branding',
      'Full OEM production management',
    ],
    imgId: 'svc-oem-img-3e8b1f',
    titleId: 'svc-oem-title',
    descId: 'svc-oem-desc',
    color: 'text-rose-600',
    bg: 'bg-rose-50',
  },
];

export default function Services() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div>
      {/* Page Header */}
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="section-container text-center">
          <p className="text-brand-orange text-sm font-semibold uppercase tracking-widest mb-3">Our Services</p>
          <h1 className="text-white text-4xl md:text-5xl font-bold tracking-tight mb-5">
            End-to-End China Sourcing Services
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            From finding the right supplier to coordinating your shipment, we handle every step of the sourcing process so you can focus on your business.
          </p>
          <Link to="/contact" className="btn-primary">
            Get a Free Quote
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Services Detail */}
      <div ref={containerRef}>
        {services.map((service, index) => {
          const Icon = service.icon;
          const isEven = index % 2 === 0;
          return (
            <section
              key={service.id}
              className={`section-padding ${isEven ? 'bg-white' : 'bg-brand-blue-light'}`}
            >
              <div className="section-container">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={!isEven ? 'lg:order-2' : ''}>
                    <div className={`w-12 h-12 ${service.bg} rounded-xl flex items-center justify-center mb-5`}>
                      <Icon className={`w-6 h-6 ${service.color}`} />
                    </div>
                    <p className="section-label mb-2">{service.subtitle}</p>
                    <h2 id={service.titleId} className="section-heading mb-4">{service.title}</h2>
                    <p id={service.descId} className="text-brand-muted leading-relaxed mb-6">{service.description}</p>
                    <ul className="flex flex-col gap-2.5">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5 text-brand-text text-sm">
                          <CheckCircle className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`rounded-2xl overflow-hidden shadow-md ${!isEven ? 'lg:order-1' : ''}`}>
                    <img
                      alt={service.title}
                      data-strk-img-id={service.imgId}
                      data-strk-img={`[${service.descId}] [${service.titleId}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-72 object-cover"
                    />
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <InquiryForm />
    </div>
  );
}
