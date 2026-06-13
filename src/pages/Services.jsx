import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShieldCheck, ClipboardCheck, PackageCheck, Truck, ArrowRight } from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';
import CTASection from '@/components/shared/CTASection';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and shortlist qualified suppliers from our verified network based on your product requirements, target price, and quality standards.',
    details: [
      'Product-specific supplier search across China',
      'Initial screening for capability and reliability',
      'Price comparison from multiple qualified factories',
      'Supplier background checks and reference verification',
      'Detailed supplier profiles with recommendations',
    ],
    imgId: 'svc-sourcing-d4e5f6',
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    desc: 'On-site factory audits covering business licenses, production capacity, quality systems, and working conditions before you place an order.',
    details: [
      'On-site factory audit with detailed report',
      'Business license and registration verification',
      'Production capacity and equipment assessment',
      'Quality management system evaluation',
      'Working condition and compliance review',
    ],
    imgId: 'svc-verification-g7h8i9',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Pre-production, during-production, and pre-shipment inspections to catch issues early and ensure your products meet specifications.',
    details: [
      'Pre-production inspection (PPI)',
      'During-production inspection (DPI)',
      'Pre-shipment inspection (PSI) based on AQL standards',
      'Detailed reports with photos and measurements',
      'Defect classification and corrective action tracking',
    ],
    imgId: 'svc-inspection-j1k2l3',
  },
  {
    icon: PackageCheck,
    title: 'Production Follow-up',
    desc: 'We monitor production schedules, track milestones, and keep you informed so your orders are delivered on time.',
    details: [
      'Production schedule monitoring and milestone tracking',
      'Weekly progress reports with photos',
      'Early warning for potential delays',
      'Coordination with factory to resolve issues',
      'Transparent communication throughout the process',
    ],
    imgId: 'svc-production-m4n5o6',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    desc: 'End-to-end logistics support including freight booking, customs documentation, and door-to-door delivery coordination.',
    details: [
      'Sea freight, air freight, and rail options',
      'Freight rate comparison and booking',
      'Customs documentation and compliance',
      'Shipment tracking and status updates',
      'Door-to-door delivery coordination',
    ],
    imgId: 'svc-shipping-p7q8r9',
  },
];

export default function ServicesPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    const loadImages = async () => {
      try {
        const { ImageHelper } = await import('@strikingly/sdk');
        const strkImgConfig = (await import('@/strk-img-config.json')).default;
        if (containerRef.current) ImageHelper.loadImages(strkImgConfig, containerRef.current);
      } catch (e) {
        console.log('Image loading skipped:', e.message);
      }
    };
    loadImages();
  }, []);

  return (
    <>
      <section className="bg-navy py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Comprehensive sourcing support from supplier search to delivery. Each service can be used independently or as part of a full-service package.
          </p>
        </div>
      </section>

      <section ref={containerRef} className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {services.map((s, i) => (
            <div key={s.title} className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <s.icon className="w-10 h-10 text-gold mb-4" />
                <h2 className="text-2xl font-bold text-navy mb-3">{s.title}</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">{s.desc}</p>
                <ul className="space-y-3">
                  {s.details.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                <img
                  alt={s.title}
                  data-strk-img-id={s.imgId}
                  data-strk-img={`[svc-desc-${s.imgId}] [svc-title-${s.imgId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full rounded-xl bg-gray-200"
                />
                <h3 id={`svc-title-${s.imgId}`} className="hidden">{s.title}</h3>
                <p id={`svc-desc-${s.imgId}`} className="hidden">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
