import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Search, Factory, ClipboardCheck, Eye, Truck, CheckCircle, ArrowRight } from 'lucide-react';

const services = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    subtitle: 'Find the right manufacturer for your product',
    desc: 'We identify and shortlist verified Chinese manufacturers that match your product specifications, MOQ, budget, and quality requirements. Our sourcing process draws on an established network of factories across Guangdong, Zhejiang, Jiangsu, and other key manufacturing regions.',
    features: [
      'Product specification analysis',
      'Supplier database search and outreach',
      'Initial supplier screening and shortlisting',
      'Comparative supplier report (3–5 options)',
      'Price benchmarking',
    ],
    imgId: 'svc-sourcing-img-4f2a1b',
    titleId: 'svc-sourcing-title',
    descId: 'svc-sourcing-desc',
  },
  {
    id: 'factory-verification',
    icon: Factory,
    title: 'Factory Verification & Audit',
    subtitle: 'Know exactly who you\'re buying from',
    desc: 'Before you commit to a supplier, we visit the factory in person to verify their legitimacy, production capacity, certifications, and working conditions. You receive a detailed audit report with photos and our assessment.',
    features: [
      'Business license and registration verification',
      'On-site factory visit and walkthrough',
      'Production capacity assessment',
      'Certification and compliance check',
      'Detailed written audit report with photos',
    ],
    imgId: 'svc-audit-img-7c3d5e',
    titleId: 'svc-audit-title',
    descId: 'svc-audit-desc',
  },
  {
    id: 'quality-inspection',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    subtitle: 'Catch defects before goods leave China',
    desc: 'Our inspectors conduct thorough product checks at the factory — during production, before shipment, or both. You receive a detailed inspection report with photos and videos so you can make an informed decision before releasing payment.',
    features: [
      'Pre-production inspection',
      'During-production (DUPRO) inspection',
      'Pre-shipment inspection (PSI)',
      'AQL sampling standards',
      'Photo and video inspection report',
    ],
    imgId: 'svc-qc-img-2e8b4c',
    titleId: 'svc-qc-title',
    descId: 'svc-qc-desc',
  },
  {
    id: 'production-followup',
    icon: Eye,
    title: 'Production Follow-up',
    subtitle: 'Stay informed throughout production',
    desc: 'Once your order is placed, we maintain regular contact with the factory to monitor progress, flag any issues early, and keep you updated. You receive weekly reports and can reach us any time for a status update.',
    features: [
      'Weekly production status reports',
      'Timeline monitoring and delay alerts',
      'Direct factory communication in Chinese',
      'Issue escalation and resolution',
      'Photo updates from the production floor',
    ],
    imgId: 'svc-production-img-9a1f6d',
    titleId: 'svc-production-title',
    descId: 'svc-production-desc',
  },
  {
    id: 'shipping-coordination',
    icon: Truck,
    title: 'Shipping Coordination',
    subtitle: 'Get your goods delivered on time',
    desc: 'We coordinate with freight forwarders, prepare and review export documentation, and ensure your goods are shipped correctly and on schedule. We work with your preferred forwarder or can recommend trusted partners.',
    features: [
      'Freight forwarder coordination',
      'Export documentation review',
      'Booking and scheduling management',
      'Cargo tracking and updates',
      'Customs documentation support',
    ],
    imgId: 'svc-shipping-img-5b7e3a',
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
      <section className="bg-brand-dark py-20">
        <div className="section-container text-center">
          <span className="text-brand-orange font-semibold text-sm uppercase tracking-wider">What We Offer</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            Our Sourcing Services
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            End-to-end China sourcing support — from finding the right supplier to
            getting goods delivered to your door.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="section-padding bg-white">
        <div className="section-container flex flex-col gap-20">
          {services.map((svc, idx) => {
            const Icon = svc.icon;
            const isEven = idx % 2 === 0;
            return (
              <div
                key={svc.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Image */}
                <div className={`rounded-2xl overflow-hidden h-72 md:h-80 ${isEven ? '' : 'lg:order-2'}`}>
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

                {/* Content */}
                <div className={isEven ? '' : 'lg:order-1'}>
                  <div className="w-12 h-12 bg-brand-light-blue rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-brand-navy" />
                  </div>
                  <h2 id={svc.titleId} className="text-2xl md:text-3xl font-bold text-brand-dark mb-2">
                    {svc.title}
                  </h2>
                  <p className="text-brand-orange font-medium text-sm mb-4">{svc.subtitle}</p>
                  <p id={svc.descId} className="text-brand-body leading-relaxed mb-6">
                    {svc.desc}
                  </p>
                  <ul className="flex flex-col gap-2 mb-6">
                    {svc.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-brand-body">
                        <CheckCircle className="w-4 h-4 text-brand-green flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="btn-primary inline-flex items-center gap-2 text-sm">
                    Get a Quote for This Service
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-brand-navy py-16">
        <div className="section-container text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Sourcing?</h2>
          <p className="text-blue-200 text-lg mb-8 max-w-xl mx-auto">
            Tell us what you need and we'll put together a tailored sourcing plan with transparent pricing.
          </p>
          <Link to="/contact" className="btn-primary text-base px-8 py-4">
            Get a Free Sourcing Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
