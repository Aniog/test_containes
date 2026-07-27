import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Search, Factory, Eye, ClipboardCheck, Ship, Headphones, ArrowRight, Shield } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const services = [
  {
    id: 'supplier-id',
    icon: Search,
    title: 'Supplier Identification',
    desc: 'Finding the right supplier is the foundation of successful sourcing. We search our verified network of 500+ pre-audited factories across China to identify the best matches for your product specifications, volume requirements, and budget. We provide you with a shortlist of qualified options, complete with factory profiles, capability summaries, and our candid assessment.',
    features: ['Factory database of 500+ verified suppliers', 'Product category matching', 'Preliminary pricing and MOQ analysis', 'Supplier shortlist with detailed profiles'],
    titleId: 'svc-page-title-supplier-id',
    descId: 'svc-page-desc-supplier-id',
    imgId: 'svc-page-img-supplier-id-a1b2',
  },
  {
    id: 'factory-audit',
    icon: Factory,
    title: 'Factory Verification',
    desc: 'Before you commit, we verify. Our team conducts on-site factory audits covering 8 critical checkpoints: business license authenticity, production equipment and capacity, quality management systems, workforce stability, export history, compliance certifications, financial health indicators, and reference checks with existing clients. We deliver a detailed audit report with photos and our recommendation.',
    features: ['8-point factory audit checklist', 'Production capacity assessment', 'Certification verification (ISO, BSCI, etc.)', 'Detailed audit report with photos'],
    titleId: 'svc-page-title-factory-audit',
    descId: 'svc-page-desc-factory-audit',
    imgId: 'svc-page-img-factory-audit-c3d4',
  },
  {
    id: 'quality-control',
    icon: Eye,
    title: 'Quality Control & Inspection',
    desc: 'Quality is non-negotiable. We offer a full spectrum of quality control services: pre-production inspection of raw materials, in-process inspection during manufacturing (DUPRO), pre-shipment final random inspection (FRI), and container loading supervision. We also coordinate with accredited third-party labs (SGS, Bureau Veritas, TÜV) for specialized testing when required.',
    features: ['Pre-production, in-process, and pre-shipment inspections', 'AQL sampling standards (ISO 2859-1)', 'Third-party lab testing coordination', 'Detailed inspection reports with photos'],
    titleId: 'svc-page-title-quality-control',
    descId: 'svc-page-desc-quality-control',
    imgId: 'svc-page-img-quality-control-e5f6',
  },
  {
    id: 'production-follow',
    icon: ClipboardCheck,
    title: 'Production Follow-up',
    desc: 'Stay informed throughout production. We visit the factory at agreed intervals, check production progress against the timeline, take photos of your goods at each stage, and send you weekly written updates. If delays or issues arise, we flag them immediately and work with the factory on corrective actions before they become problems.',
    features: ['Weekly production status reports', 'On-site progress photos', 'Timeline tracking and delay alerts', 'Issue escalation and resolution management'],
    titleId: 'svc-page-title-production-follow',
    descId: 'svc-page-desc-production-follow',
    imgId: 'svc-page-img-production-follow-g7h8',
  },
  {
    id: 'shipping-coord',
    icon: Ship,
    title: 'Shipping & Logistics',
    desc: 'We handle the logistics so your goods arrive on time and on budget. Services include freight forwarding (FCL/LCL sea freight and air freight), customs documentation preparation, cargo insurance arrangement, and door-to-door delivery coordination. We compare quotes from multiple forwarders to get you the best rates.',
    features: ['Sea freight (FCL/LCL) and air freight options', 'Customs documentation and clearance', 'Cargo insurance arrangement', 'Multi-carrier rate comparison'],
    titleId: 'svc-page-title-shipping-coord',
    descId: 'svc-page-desc-shipping-coord',
    imgId: 'svc-page-img-shipping-coord-i9j0',
  },
  {
    id: 'dedicated-support',
    icon: Headphones,
    title: 'Dedicated Account Management',
    desc: 'Every client is assigned a dedicated account manager — fluent in English and Chinese, based in China, and accountable for your sourcing success. Your account manager is your single point of contact for all communication, and is available via phone, email, WeChat, and WhatsApp.',
    features: ['Single point of contact throughout', 'Bilingual communication (EN/CN)', 'Available via phone, email, WeChat, WhatsApp', 'Regular strategy calls and reviews'],
    titleId: 'svc-page-title-dedicated-support',
    descId: 'svc-page-desc-dedicated-support',
    imgId: 'svc-page-img-dedicated-support-k1l2',
  },
];

export default function Services() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <section className="bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Our Services</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            End-to-end China sourcing solutions — from supplier discovery to delivery at your door.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((svc, i) => (
              <div key={svc.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-12 h-12 bg-brand-50 rounded-lg flex items-center justify-center mb-4">
                    <svc.icon className="w-6 h-6 text-brand-600" />
                  </div>
                  <h2 id={svc.titleId} className="text-2xl md:text-3xl font-bold text-brand-900 mb-4">
                    {svc.title}
                  </h2>
                  <p id={svc.descId} className="text-slate-600 leading-relaxed mb-6">
                    {svc.desc}
                  </p>
                  <ul className="space-y-3 mb-6">
                    {svc.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-slate-700">
                        <Shield className="w-4 h-4 text-brand-500 flex-shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="rounded-xl overflow-hidden shadow-lg bg-slate-100 aspect-[4/3]">
                    <img
                      alt={svc.title}
                      data-strk-img-id={svc.imgId}
                      data-strk-img={`[${svc.descId}] [${svc.titleId}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-900 mb-4">Ready to Start Sourcing?</h2>
          <p className="text-slate-600 mb-8">
            Tell us about your product and requirements. We will respond with a tailored proposal within 24 hours.
          </p>
          <Link to="/contact" className="btn-accent gap-2 text-lg px-8 py-3.5">
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
