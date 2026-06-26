import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  Search, ShieldCheck, Eye, ClipboardCheck, Truck, Award,
  CheckCircle, ArrowRight, FileText, Users, Globe
} from 'lucide-react';
import CTASection from '@/components/shared/CTASection';

const services = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing & Shortlisting',
    desc: 'We search our verified supplier database and industry networks to find factories that match your product requirements, budget, and quality standards.',
    details: [
      'Custom supplier search based on your specifications',
      'Detailed supplier profiles with factory photos and capabilities',
      'Pricing comparison from multiple qualified sources',
      'Background checks on business licenses and certifications',
    ],
  },
  {
    id: 'factory-verification',
    icon: ShieldCheck,
    title: 'Factory Verification & Audits',
    desc: 'Our team visits factories in person to verify legitimacy, assess production capacity, check certifications, and ensure compliance with international standards.',
    details: [
      'On-site factory visits by our local team',
      'Business license and registration verification',
      'Production capacity and equipment assessment',
      'Quality management system evaluation',
      'Social compliance and environmental checks',
    ],
  },
  {
    id: 'quality-inspection',
    icon: Eye,
    title: 'Quality Inspection & QC',
    desc: 'We conduct inspections at key production stages to ensure your products meet specifications before they leave China.',
    details: [
      'Pre-production sample approval',
      'During production (DUPRO) inspections',
      'Pre-shipment inspections with AQL standards',
      'Container loading supervision',
      'Detailed inspection reports with photos and measurements',
    ],
  },
  {
    id: 'production-followup',
    icon: ClipboardCheck,
    title: 'Production Follow-up',
    desc: 'We maintain regular contact with factories throughout the manufacturing process, providing you with progress updates and resolving issues promptly.',
    details: [
      'Weekly production status reports',
      'Timeline tracking and milestone verification',
      'Issue identification and resolution management',
      'Coordination between multiple suppliers',
      'Change order management',
    ],
  },
  {
    id: 'sample-management',
    icon: Award,
    title: 'Sample Management',
    desc: 'We collect, evaluate, and ship product samples from multiple suppliers so you can compare quality and make informed decisions.',
    details: [
      'Sample requests from multiple suppliers',
      'Quality evaluation and comparison reports',
      'Consolidated international sample shipping',
      'Specification feedback relay to factories',
    ],
  },
  {
    id: 'shipping-logistics',
    icon: Truck,
    title: 'Shipping & Logistics',
    desc: 'We coordinate the entire shipping process from factory pickup to final delivery, including customs documentation and freight management.',
    details: [
      'Sea freight, air freight, and express shipping options',
      'Freight consolidation from multiple suppliers',
      'Export and import customs documentation',
      'Door-to-door delivery coordination',
      'Cargo insurance arrangement',
    ],
  },
];

const additionalServices = [
  { icon: FileText, title: 'Custom Packaging Design', desc: 'Branded packaging, retail-ready displays, and custom labeling.' },
  { icon: Users, title: 'Trade Show Assistance', desc: 'Accompany you at Canton Fair, Yiwu, and other major trade shows.' },
  { icon: Globe, title: 'Market Research', desc: 'Product trend analysis, competitor pricing research, and market entry guidance.' },
];

export default function Services() {
  const containerRef = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-primary py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-accent font-semibold text-sm tracking-wider uppercase">Our Services</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-3 mb-5">
            Comprehensive Sourcing Services
          </h1>
          <p id="services-page-subtitle" className="text-blue-100 text-lg max-w-2xl mx-auto">
            From initial supplier search to final delivery, we provide end-to-end sourcing
            services that reduce risk and save you time.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-16 md:gap-24">
            {services.map((service, i) => (
              <div
                key={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                  i % 2 === 1 ? 'lg:direction-rtl' : ''
                }`}
              >
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-accent" />
                    </div>
                    <span className="text-text-muted text-sm font-medium">Service {String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">{service.title}</h2>
                  <p className="text-text-secondary text-base leading-relaxed mb-6">{service.desc}</p>
                  <ul className="flex flex-col gap-3">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-success shrink-0 mt-0.5" />
                        <span className="text-text-secondary text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`rounded-xl overflow-hidden bg-surface-alt aspect-[4/3] ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <img
                    data-strk-img-id={`service-detail-img-${i}`}
                    data-strk-img={`[service-title-${i}] [services-page-subtitle]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={service.title}
                    id={`service-title-${i}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 md:py-20 bg-surface-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">Additional Services</h2>
            <p className="text-text-secondary max-w-xl mx-auto">
              Beyond core sourcing, we offer complementary services to support your China business operations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {additionalServices.map((svc) => (
              <div key={svc.title} className="bg-white rounded-xl p-7 border border-border text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svc.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-base font-bold text-text-primary mb-2">{svc.title}</h3>
                <p className="text-text-secondary text-sm">{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
