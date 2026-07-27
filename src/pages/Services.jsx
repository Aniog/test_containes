import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Search, Factory, ShieldCheck, ClipboardCheck, Truck,
  CheckCircle, ArrowRight
} from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const services = [
  {
    id: 'sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    subtitle: 'Find the right manufacturer for your product',
    description:
      'We identify and shortlist qualified manufacturers from our verified network and trade databases across China. Our sourcing process goes beyond Alibaba — we tap into regional trade fairs, industry associations, and direct factory contacts to find suppliers that match your exact specifications.',
    includes: [
      'Product brief review and requirements analysis',
      'Supplier identification from verified network and databases',
      'Initial supplier screening and background checks',
      'Shortlist of 3–5 qualified manufacturers with profiles',
      'Price and MOQ comparison report',
    ],
    imgId: 'svc-sourcing-4a2b8c',
    titleId: 'svc-sourcing-title',
    descId: 'svc-sourcing-desc',
  },
  {
    id: 'verification',
    icon: Factory,
    title: 'Factory Verification',
    subtitle: 'Know who you\'re buying from before you commit',
    description:
      'Our team conducts on-site factory audits to verify business legitimacy, production capacity, quality management systems, and working conditions. We provide a detailed audit report with photos so you can make an informed decision.',
    includes: [
      'Business license and registration verification',
      'Production capacity and equipment assessment',
      'Quality management system review',
      'Worker conditions and compliance check',
      'Detailed audit report with photos',
    ],
    imgId: 'svc-verification-7d3e1f',
    titleId: 'svc-verification-title',
    descId: 'svc-verification-desc',
  },
  {
    id: 'inspection',
    icon: ShieldCheck,
    title: 'Quality Inspection',
    subtitle: 'Catch quality issues before goods leave China',
    description:
      'Our local QC inspectors check products against your specifications at key stages of production. We use internationally recognised inspection standards (AQL) and provide detailed reports with photos and pass/fail results.',
    includes: [
      'Pre-production material and component inspection',
      'In-line inspection during manufacturing',
      'Pre-shipment final inspection (AQL standard)',
      'Detailed inspection report with photos',
      'Pass/fail recommendation and defect classification',
    ],
    imgId: 'svc-inspection-2c9f4a',
    titleId: 'svc-inspection-title',
    descId: 'svc-inspection-desc',
  },
  {
    id: 'production',
    icon: ClipboardCheck,
    title: 'Production Follow-up',
    subtitle: 'Stay informed throughout the manufacturing process',
    description:
      'Once your order is placed, we act as your eyes and ears on the factory floor. We check in at agreed milestones, report on progress, and flag any issues early — giving you time to resolve problems before they affect your delivery.',
    includes: [
      'Production schedule review and milestone planning',
      'Regular factory check-ins and progress updates',
      'Photo and video documentation at key stages',
      'Issue escalation and resolution support',
      'Weekly written status reports',
    ],
    imgId: 'svc-production-8b5d2e',
    titleId: 'svc-production-title',
    descId: 'svc-production-desc',
  },
  {
    id: 'shipping',
    icon: Truck,
    title: 'Shipping Coordination',
    subtitle: 'Get your goods from factory to destination',
    description:
      'We coordinate with freight forwarders, prepare export documentation, and track your shipment from the factory gate to your warehouse. We work with both sea and air freight and can consolidate shipments from multiple suppliers.',
    includes: [
      'Freight forwarder coordination (sea and air)',
      'Export documentation preparation',
      'Customs clearance support (China side)',
      'Shipment tracking and status updates',
      'Multi-supplier consolidation available',
    ],
    imgId: 'svc-shipping-3f7a1c',
    titleId: 'svc-shipping-title',
    descId: 'svc-shipping-desc',
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
      <section className="bg-brand-dark py-16 md:py-20">
        <div className="container-xl">
          <div className="max-w-2xl">
            <span className="text-blue-300 text-sm font-semibold uppercase tracking-wider">Our Services</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
              China Sourcing Services
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed">
              From supplier identification to final delivery, we provide end-to-end sourcing support
              for global buyers importing from China.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-white">
        <div className="container-xl">
          <div className="flex flex-col gap-20">
            {services.map((svc, index) => {
              const Icon = svc.icon;
              const isEven = index % 2 === 0;
              return (
                <div
                  key={svc.id}
                  id={svc.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
                    !isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Image */}
                  <div className={`${!isEven ? 'lg:order-2' : ''}`}>
                    <div className="rounded-2xl overflow-hidden h-72 md:h-80 bg-gray-100">
                      <img
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={svc.title}
                        className="w-full h-full object-cover"
                        data-strk-img-id={svc.imgId}
                        data-strk-img={`[${svc.descId}] [${svc.titleId}]`}
                        data-strk-img-ratio="4x3"
                        data-strk-img-width="800"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`${!isEven ? 'lg:order-1' : ''}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
                        <Icon className="w-5 h-5 text-brand-blue" />
                      </div>
                      <span className="text-brand-blue text-sm font-semibold uppercase tracking-wider">
                        {svc.subtitle}
                      </span>
                    </div>
                    <h2 id={svc.titleId} className="text-2xl md:text-3xl font-bold text-brand-dark mb-3">
                      {svc.title}
                    </h2>
                    <p id={svc.descId} className="text-brand-mid leading-relaxed mb-6">
                      {svc.description}
                    </p>
                    <ul className="flex flex-col gap-2 mb-6">
                      {svc.includes.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm text-brand-mid">
                          <CheckCircle className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/contact#quote"
                      className="btn-primary inline-flex items-center gap-2 text-sm"
                    >
                      Get a Quote for This Service <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-light py-16">
        <div className="container-xl text-center">
          <h2 className="text-3xl font-bold text-brand-dark mb-4">
            Not sure which service you need?
          </h2>
          <p className="text-brand-mid text-lg mb-8 max-w-xl mx-auto">
            Tell us about your product and sourcing situation. We'll recommend the right approach.
          </p>
          <Link to="/contact#quote" className="btn-primary inline-flex items-center gap-2">
            Get a Free Consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
