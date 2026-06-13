import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, Shield, ClipboardCheck, Truck, Ship, Warehouse, 
  ArrowRight, CheckCircle, ChevronRight
} from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'Finding the right supplier is the foundation of successful sourcing. We conduct comprehensive market research to identify manufacturers that match your specific requirements.',
    details: [
      'Product-specific supplier database search',
      'Capability and capacity assessment',
      'Price benchmarking and negotiation support',
      'Business license and certification verification',
      'Shortlisted suppliers with detailed profiles',
    ],
  },
  {
    icon: Shield,
    title: 'Factory Verification',
    description: 'We physically visit and audit factories to verify they are legitimate, capable, and compliant. Our audits go beyond paperwork.',
    details: [
      'On-site factory visit and assessment',
      'Production line and equipment inspection',
      'Quality management system review',
      'Workforce and capacity evaluation',
      'Social compliance and environmental check',
      'Detailed audit report with photos',
    ],
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Catch defects before they reach your customers. Our inspections follow international AQL standards and cover every stage of production.',
    details: [
      'Raw material inspection',
      'In-process production inspection',
      'Pre-shipment inspection (AQL sampling)',
      'Container loading supervision',
      'Product testing and lab coordination',
      'Professional inspection reports',
    ],
  },
  {
    icon: Truck,
    title: 'Production Follow-up',
    description: 'We act as your on-the-ground project manager, ensuring production stays on schedule and any issues are resolved quickly.',
    details: [
      'Weekly production progress tracking',
      'Real-time issue reporting and escalation',
      'Supplier communication management',
      'Timeline and milestone monitoring',
      'Photo and video progress updates',
    ],
  },
  {
    icon: Ship,
    title: 'Shipping & Logistics',
    description: 'From factory to your door, we handle all logistics so you can focus on your business.',
    details: [
      'Freight forwarding (sea, air, rail, express)',
      'Export documentation and customs clearance',
      'Cargo consolidation and warehousing',
      'Insurance coordination',
      'Door-to-door delivery tracking',
    ],
  },
  {
    icon: Warehouse,
    title: 'Sample Sourcing',
    description: 'Validate product quality and specifications before committing to full production with our efficient sample sourcing service.',
    details: [
      'Sample request coordination',
      'Sample quality evaluation',
      'Cost and lead time estimation',
      'Multiple sample comparison',
      'Pre-production sample approval',
    ],
  },
];

const serviceImages = [
  'supplier-sourcing-visual',
  'factory-verification-visual',
  'quality-inspection-visual',
  'production-followup-visual',
  'shipping-logistics-visual',
  'sample-sourcing-visual',
];

export default function Services() {
  const bannerRef = useRef(null);

  useEffect(() => {
    if (bannerRef.current) ImageHelper.loadImages(strkImgConfig, bannerRef.current);
  }, []);

  return (
    <div>
      {/* Banner */}
      <section ref={bannerRef} className="relative bg-slate-900 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          data-strk-bg-id="services-banner-bg"
          data-strk-bg="[banner-subtitle] [banner-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <p id="banner-subtitle" className="text-brand-400 font-semibold text-sm mb-3">Our Services</p>
          <h1 id="banner-title" className="text-4xl md:text-5xl font-bold text-white mb-4">
            Comprehensive Sourcing Services
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl">
            End-to-end support covering every step of the sourcing journey — from supplier discovery 
            to final delivery.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={service.title} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 items-center`}>
                <div className="flex-1">
                  <div className="w-14 h-14 bg-brand-50 rounded-xl flex items-center justify-center mb-4">
                    <service.icon className="w-7 h-7 text-brand-600" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-3">{service.title}</h2>
                  <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2.5">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2.5">
                        <CheckCircle className="w-4 h-4 text-emerald-600 mt-1 shrink-0" />
                        <span className="text-sm text-slate-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1 w-full">
                  <div 
                    className="rounded-xl bg-slate-100 h-64 md:h-80 w-full"
                    data-strk-bg-id={`services-${serviceImages[index]}-bg`}
                    data-strk-bg={`[services-${index}-title] [services-banner]`}
                    data-strk-bg-ratio="4x3"
                    data-strk-bg-width="800"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-brand-600">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Sourcing?
          </h2>
          <p className="text-lg text-brand-100 mb-8 max-w-xl mx-auto">
            Tell us about your product requirements and we will prepare a free sourcing proposal.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white text-brand-600 hover:bg-brand-50 font-semibold rounded-lg px-8 py-4 text-base transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}