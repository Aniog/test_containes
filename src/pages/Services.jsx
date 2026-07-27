import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Link } from 'react-router-dom';
import {
  Search, ShieldCheck, ClipboardCheck, Factory, Ship, HeadphonesIcon,
  CheckCircle, ArrowRight
} from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing & Identification',
    subtitle: 'Find the right manufacturer for your product',
    desc: 'We search our extensive database and industry network to identify 3-5 qualified Chinese manufacturers that match your specific requirements. Each candidate is pre-screened for product category fit, production capacity, export experience, and certifications.',
    details: [
      'Product specification analysis and sourcing brief',
      'Supplier database search across 20+ industrial clusters',
      'Preliminary screening of 10-15 potential suppliers',
      'Shortlist of 3-5 best-match manufacturers',
      'Detailed supplier profiles with capability comparison',
    ],
    imgId: 'service-sourcing-n0o1p2',
  },
  {
    icon: ShieldCheck,
    title: 'Factory Audit & Verification',
    subtitle: 'Know exactly who you are dealing with',
    desc: 'Our team conducts on-site factory audits to verify every claim. We physically inspect production facilities, review certifications, assess quality management systems, and evaluate the management team — so you have full confidence in your supplier choice.',
    details: [
      'On-site facility inspection with photo documentation',
      'Production capacity and equipment assessment',
      'Certification verification (ISO, BSCI, CE, FDA, etc.)',
      'Quality management system audit',
      'Management interview and export capability review',
      'Detailed audit report with risk assessment',
    ],
    imgId: 'service-factory-audit-q3r4s5',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Control & Inspection',
    subtitle: 'Ensure your products meet specifications',
    desc: 'Our multi-stage quality control process catches defects before they become your problem. From initial sample evaluation to final pre-shipment inspection, we verify that every unit meets your specifications and quality standards.',
    details: [
      'Pre-production sample evaluation and approval',
      'In-line production inspection (random checks during production)',
      'Pre-shipment inspection (AQL-based random sampling)',
      'Container loading supervision',
      'Detailed QC reports with photos and test data',
      'Defect classification and corrective action tracking',
    ],
    imgId: 'service-qc-inspection-t6u7v8',
  },
  {
    icon: Factory,
    title: 'Production Follow-up & Management',
    subtitle: 'Stay informed at every production stage',
    desc: 'We act as your eyes and ears on the production floor. Our team provides weekly progress updates, tracks milestones against the timeline, flags potential delays early, and ensures corrective actions are taken when needed.',
    details: [
      'Weekly production status reports with photos',
      'Timeline tracking and milestone management',
      'Material and component availability monitoring',
      'Production bottleneck identification and resolution',
      'Change order management',
      'Final inspection scheduling coordination',
    ],
    imgId: 'service-production-followup-w9x0y1',
  },
  {
    icon: Ship,
    title: 'Shipping & Logistics Coordination',
    subtitle: 'From factory floor to your warehouse door',
    desc: 'We manage the entire logistics chain — freight booking, documentation, customs clearance, and final delivery. Whether by sea, air, or rail, we ensure your goods move efficiently and cost-effectively.',
    details: [
      'Freight forwarder selection and rate negotiation',
      'Shipping documentation preparation (BL, CI, PL, CO, etc.)',
      'Customs clearance coordination (export and import)',
      'Cargo consolidation and container optimization',
      'Cargo insurance arrangement',
      'Real-time shipment tracking and delivery confirmation',
    ],
    imgId: 'service-shipping-logistics-z2a3b4',
  },
  {
    icon: HeadphonesIcon,
    title: 'Ongoing Sourcing Support',
    subtitle: 'A long-term partner, not a one-time transaction',
    desc: 'Beyond individual orders, we serve as your ongoing China sourcing department. We manage supplier relationships, handle issues as they arise, identify continuous improvement opportunities, and support your product development.',
    details: [
      'Dedicated English-speaking account manager',
      'Supplier relationship management and performance reviews',
      'New product development and prototyping support',
      'Cost reduction and value engineering initiatives',
      'Market intelligence and industry trend updates',
      'Emergency issue resolution and escalation management',
    ],
    imgId: 'service-ongoing-support-c5d6e7',
  },
];

export default function Services() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Our Services
          </h1>
          <p className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto">
            Complete sourcing solutions from supplier identification to delivery. Every service is tailored to your product, your market, and your quality requirements.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, idx) => (
              <div
                key={service.title}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  idx % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                <div className={idx % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-5 ${
                    idx % 2 === 0 ? 'bg-blue-50' : 'bg-red-50'
                  }`}>
                    <service.icon className={`w-6 h-6 ${idx % 2 === 0 ? 'text-brand-navy' : 'text-brand-red'}`} />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{service.title}</h2>
                  <p className="text-brand-red font-medium mb-4">{service.subtitle}</p>
                  <p className="text-gray-600 leading-relaxed mb-6">{service.desc}</p>
                  <ul className="space-y-2.5">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2.5">
                        <CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={idx % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-md">
                    <img
                      alt={service.title}
                      className="w-full h-full object-cover"
                      data-strk-img-id={service.imgId}
                      data-strk-img={`[service-detail-${service.imgId}] [service-title-${service.imgId}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    />
                  </div>
                  <div className="hidden" id={`service-title-${service.imgId}`}>{service.title}</div>
                  <div className="hidden" id={`service-detail-${service.imgId}`}>{service.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-brand-navy">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Ready to Start Sourcing?
          </h2>
          <p className="mt-4 text-lg text-blue-100">
            Tell us about your product and we will prepare a customized sourcing plan at no cost.
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-md text-base font-semibold bg-brand-red text-white hover:bg-brand-red-light transition-colors shadow-lg shadow-red-600/25"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
