import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Search, Factory, ClipboardCheck, BarChart3, Ship, Shield, ArrowRight, CheckCircle } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing & Matching',
    desc: 'We identify manufacturers that match your exact product specifications, quality standards, target price, and order volume. Our database includes over 2,000 pre-vetted factories across 50+ product categories.',
    details: [
      'Market research and supplier identification',
      'Factory shortlisting based on your requirements',
      'Initial contact and qualification',
      'Price comparison and negotiation support',
      'Sample coordination and evaluation',
    ],
    imgId: 'svc-detail-sourcing-k1l2m3',
    titleId: 'svc-dtl-title-sourcing',
    descId: 'svc-dtl-desc-sourcing',
  },
  {
    icon: Factory,
    title: 'Factory Audit & Verification',
    desc: 'We physically visit every factory before recommending it. Our comprehensive audit covers 50+ checkpoints to ensure the supplier is legitimate, capable, and reliable for long-term partnership.',
    details: [
      'Business license and export certification verification',
      'Production capacity and equipment assessment',
      'Quality management system review (ISO, BSCI, etc.)',
      'On-site working conditions and social compliance',
      'Financial health and legal background check',
    ],
    imgId: 'svc-detail-factory-l2m3n4',
    titleId: 'svc-dtl-title-factory',
    descId: 'svc-dtl-desc-factory',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Control Inspection',
    desc: 'Professional QC inspectors ensure your products meet specifications at every critical stage. We follow AQL standards and provide detailed inspection reports with photos and measurements.',
    details: [
      'Pre-production inspection (raw materials check)',
      'During production inspection (DUPRO)',
      'Pre-shipment inspection (final random sampling)',
      'Container loading supervision',
      'Lab testing coordination (when required)',
    ],
    imgId: 'svc-detail-qc-m3n4o5',
    titleId: 'svc-dtl-title-qc',
    descId: 'svc-dtl-desc-qc',
  },
  {
    icon: BarChart3,
    title: 'Production Follow-up',
    desc: 'Stay informed throughout the production cycle with weekly progress reports, photos, and real-time updates. We act as your eyes and ears on the factory floor.',
    details: [
      'Weekly production status reports with photos',
      'Timeline tracking against agreed schedule',
      'Early warning of potential delays',
      'On-site problem resolution',
      'Final production completion verification',
    ],
    imgId: 'svc-detail-production-n4o5p6',
    titleId: 'svc-dtl-title-production',
    descId: 'svc-dtl-desc-production',
  },
  {
    icon: Ship,
    title: 'Shipping & Logistics Coordination',
    desc: 'Door-to-door logistics management including freight booking, export documentation, customs clearance, and delivery scheduling to your warehouse or fulfillment center.',
    details: [
      'Freight booking (sea, air, rail, express)',
      'Export documentation preparation',
      'Customs clearance coordination',
      'Cargo insurance arrangement',
      'Delivery tracking and confirmation',
    ],
    imgId: 'svc-detail-shipping-o5p6q7',
    titleId: 'svc-dtl-title-shipping',
    descId: 'svc-dtl-desc-shipping',
  },
];

const Services = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <section className="bg-navy-950 text-white">
        <div className="section-container py-20 lg:py-28">
          <div className="max-w-3xl">
            <h1 id="services-page-title" className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Our Services
            </h1>
            <p id="services-page-subtitle" className="mt-4 text-lg text-slate-300 max-w-xl leading-relaxed">
              Complete sourcing solutions — from factory identification to final delivery. We handle every step so you don't have to.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="space-y-20">
            {services.map((svc, i) => (
              <div
                key={svc.title}
                className={`flex flex-col ${
                  i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-10 lg:gap-16 items-center`}
              >
                <div className="flex-1">
                  <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center mb-5">
                    <svc.icon className="w-6 h-6 text-brand-600" />
                  </div>
                  <h2 id={svc.titleId} className="text-2xl md:text-3xl font-bold text-navy-950 mb-4">{svc.title}</h2>
                  <p id={svc.descId} className="text-slate-600 leading-relaxed mb-6">{svc.desc}</p>
                  <ul className="space-y-3">
                    {svc.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-brand-600 mt-0.5 shrink-0" />
                        <span className="text-sm text-slate-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1">
                  <div className="aspect-[4/3] rounded-xl overflow-hidden bg-slate-100">
                    <img
                      alt={svc.title}
                      data-strk-img-id={svc.imgId}
                      data-strk-img={`[${svc.descId}] [${svc.titleId}] [services-page-subtitle] [services-page-title]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="700"
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

      <section className="section-padding bg-brand-600">
        <div className="section-container text-center">
          <div className="max-w-2xl mx-auto">
            <Shield className="w-12 h-12 text-white/70 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Need a Custom Sourcing Solution?
            </h2>
            <p className="mt-4 text-lg text-brand-100 leading-relaxed">
              Every business is unique. Tell us about your product and we'll design a sourcing plan that fits your needs.
            </p>
            <Link to="/contact" className="btn-white text-base px-8 py-3.5 gap-2 mt-8 inline-flex">
              Get a Free Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
