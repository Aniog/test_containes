import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  Search, ShieldCheck, ClipboardCheck, Truck, Factory, PackageCheck,
  CheckCircle, ArrowRight, FileText, BarChart3, Headphones
} from 'lucide-react';

const allServices = [
  {
    icon: Search,
    title: 'Supplier Sourcing & Identification',
    subtitle: 'Find the right factory, not just any factory.',
    desc: 'We don\'t just search Alibaba. Our team leverages 12 years of on-the-ground experience to identify and shortlist qualified manufacturers that genuinely match your requirements.',
    details: [
      'Product specification analysis and sourcing strategy',
      'Supplier database search across 5,000+ pre-vetted factories',
      'Initial supplier screening and capability assessment',
      'RFQ management and quotation comparison',
      'Sample collection and evaluation',
      'Detailed supplier shortlist with comparison report',
    ],
    imgId: 'sourcing-hero-8f2a9c',
    titleId: 'sourcing-title',
    descId: 'sourcing-subtitle',
  },
  {
    icon: Factory,
    title: 'Factory Audit & Verification',
    subtitle: 'Know exactly who you\'re working with.',
    desc: 'Our team visits factories in person to verify their claims. We check business licenses, production capacity, quality systems, certifications, and financial stability.',
    details: [
      'Business license and legal registration verification',
      'Production facility tour and equipment inspection',
      'Quality management system audit (ISO, BSCI, SEDEX)',
      'Production capacity and lead time assessment',
      'Worker conditions and social compliance review',
      'Financial health and stability evaluation',
    ],
    imgId: 'factory-audit-b1c2d3',
    titleId: 'audit-title',
    descId: 'audit-subtitle',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Control & Inspection',
    subtitle: 'Ship with confidence, every time.',
    desc: 'We follow AQL (Acceptable Quality Limit) standards for all inspections. Our QC team checks your goods at critical stages — from raw materials to finished products.',
    details: [
      'Pre-production inspection (raw materials, components)',
      'During production inspection (DUPRO) at 20-50% completion',
      'Pre-shipment inspection (PSI) at 100% completion',
      'Container loading supervision (CLS)',
      'Detailed inspection reports with photos and data',
      'Corrective action management when issues are found',
    ],
    imgId: 'qc-inspection-e4f5g6',
    titleId: 'qc-title',
    descId: 'qc-subtitle',
  },
  {
    icon: ShieldCheck,
    title: 'Production Monitoring',
    subtitle: 'Stay informed at every stage of production.',
    desc: 'We track your order from purchase order to shipment. Regular factory visits, progress photos, and milestone reports keep you informed without the need to travel.',
    details: [
      'Production schedule development and tracking',
      'Weekly production status reports with photos',
      'Milestone verification and sign-off',
      'Delay risk identification and mitigation',
      'Material and component availability checks',
      'Final production completion verification',
    ],
    imgId: 'production-monitor-h7i8j9',
    titleId: 'monitor-title',
    descId: 'monitor-subtitle',
  },
  {
    icon: PackageCheck,
    title: 'Product Development & Prototyping',
    subtitle: 'Turn your idea into a manufacturable product.',
    desc: 'We help you develop new products from concept to prototype. Our team works with industrial designers and engineers to optimize your design for manufacturing in China.',
    details: [
      'Design review for manufacturability (DFM)',
      'Material selection and sourcing',
      'Prototype development and iteration',
      'Tooling and mold management',
      'Packaging design and sourcing',
      'Compliance testing coordination (CE, FDA, FCC, etc.)',
    ],
    imgId: 'product-dev-k1l2m3',
    titleId: 'dev-title',
    descId: 'dev-subtitle',
  },
  {
    icon: Truck,
    title: 'Shipping & Logistics Management',
    subtitle: 'Get your goods from factory floor to your door.',
    desc: 'We coordinate the entire logistics chain — freight forwarding, customs clearance, documentation, and door-to-door delivery. No surprises, no hidden costs.',
    details: [
      'Freight rate negotiation (FCL, LCL, air, express)',
      'Shipping documentation preparation',
      'Customs clearance in China and destination country',
      'Cargo insurance arrangement',
      'Real-time shipment tracking',
      'Warehouse and fulfillment center coordination',
    ],
    imgId: 'shipping-logistics-n4o5p6',
    titleId: 'shipping-title',
    descId: 'shipping-subtitle',
  },
];

export default function Services() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-navy py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <span className="text-brand-orange font-semibold text-sm uppercase tracking-wider">Our Services</span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-3 mb-6">
              Complete Sourcing Solutions for International Buyers
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              From supplier identification to final delivery, we provide end-to-end services that eliminate 
              the risks and complexity of sourcing from China.
            </p>
          </div>
        </div>
      </section>

      {/* Service Detail Sections */}
      {allServices.map((service, index) => (
        <section key={service.title} className={`py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
          <div className="max-w-7xl mx-auto px-4">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Image side */}
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    alt={service.title}
                    data-strk-img-id={service.imgId}
                    data-strk-img={`[${service.descId}] [${service.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content side */}
              <div>
                <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-5">
                  <service.icon className="w-7 h-7 text-brand-blue" />
                </div>
                <h2 id={service.titleId} className="text-2xl md:text-3xl font-bold text-navy mb-3">{service.title}</h2>
                <p id={service.descId} className="text-brand-blue font-medium mb-4">{service.subtitle}</p>
                <p className="text-gray-500 leading-relaxed mb-6">{service.desc}</p>
                <ul className="space-y-3">
                  {service.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">Additional Services</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Beyond our core sourcing services, we offer specialized support for your business needs.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: FileText, title: 'Trade Compliance', desc: 'Ensure your products meet destination market regulations, labeling requirements, and safety standards.' },
              { icon: BarChart3, title: 'Market Intelligence', desc: 'Get competitive pricing data, industry trend analysis, and supplier benchmarking reports.' },
              { icon: Headphones, title: 'After-Sales Support', desc: 'We handle warranty claims, rework coordination, and ongoing supplier relationship management.' },
            ].map((item) => (
              <div key={item.title} className="bg-white p-6 rounded-lg border border-gray-200 text-center">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-brand-blue" />
                </div>
                <h3 className="font-semibold text-navy mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-blue">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Tell us about your project and we'll recommend the right service mix for your specific needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-orange text-white font-semibold rounded-md hover:bg-brand-orange-hover transition-colors text-lg shadow-lg"
          >
            Get a Free Consultation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}