import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import PageHero from '@/components/shared/PageHero';
import CtaBanner from '@/components/shared/CtaBanner';
import { Search, Factory, ShieldCheck, ClipboardCheck, Truck, FileText, CheckCircle } from 'lucide-react';

const services = [
  {
    id: 'sourcing',
    icon: Search,
    title: 'Supplier Sourcing & Shortlisting',
    imgId: 'svc-page-sourcing-a1b2c3',
    titleId: 'svc-page-title-sourcing',
    descId: 'svc-page-desc-sourcing',
    desc: 'We research and identify manufacturers that match your product specifications, MOQ, certifications, and price targets. You receive a structured comparison of 3–5 vetted suppliers.',
    includes: [
      'Product specification analysis',
      'Supplier database research (Alibaba, Made-in-China, trade shows)',
      'Initial supplier screening and communication',
      'Structured supplier comparison report',
    ],
  },
  {
    id: 'audit',
    icon: Factory,
    title: 'Factory Audit & Verification',
    imgId: 'svc-page-audit-d4e5f6',
    titleId: 'svc-page-title-audit',
    descId: 'svc-page-desc-audit',
    desc: 'Our team visits factories in person to verify their legitimacy, production capacity, equipment, workforce, and compliance with international standards.',
    includes: [
      'On-site factory visit by our local team',
      'Verification of business licenses and certifications',
      'Production capacity and equipment assessment',
      'Worker conditions and compliance check',
      'Detailed audit report with photos',
    ],
  },
  {
    id: 'qc',
    icon: ShieldCheck,
    title: 'Quality Inspection',
    imgId: 'svc-page-qc-g7h8i9',
    titleId: 'svc-page-title-qc',
    descId: 'svc-page-desc-qc',
    desc: 'We conduct pre-shipment inspections and in-line quality checks to ensure your products meet agreed specifications before they leave the factory.',
    includes: [
      'Pre-shipment inspection (PSI)',
      'In-line production inspection',
      'AQL sampling methodology',
      'Measurement, function, and packaging checks',
      'Photo and video inspection report',
    ],
  },
  {
    id: 'followup',
    icon: ClipboardCheck,
    title: 'Production Follow-up',
    imgId: 'svc-page-followup-j1k2l3',
    titleId: 'svc-page-title-followup',
    descId: 'svc-page-desc-followup',
    desc: 'We monitor your order from placement to completion, communicating with the factory on your behalf and flagging any issues early.',
    includes: [
      'Order placement and contract review',
      'Regular production status updates',
      'On-site production visits',
      'Issue escalation and resolution',
      'Timeline management',
    ],
  },
  {
    id: 'shipping',
    icon: Truck,
    title: 'Shipping Coordination',
    imgId: 'svc-page-shipping-m4n5o6',
    titleId: 'svc-page-title-shipping',
    descId: 'svc-page-desc-shipping',
    desc: 'We coordinate the logistics of getting your goods from the factory to your destination, including freight booking, customs documentation, and delivery tracking.',
    includes: [
      'Freight forwarder coordination (sea, air, express)',
      'Export customs documentation',
      'Packing list and commercial invoice review',
      'Shipment tracking and updates',
      'Consolidation for multiple suppliers',
    ],
  },
  {
    id: 'consulting',
    icon: FileText,
    title: 'Sourcing Consulting',
    imgId: 'svc-page-consulting-p7q8r9',
    titleId: 'svc-page-title-consulting',
    descId: 'svc-page-desc-consulting',
    desc: 'For businesses that want to build their own China sourcing capability, we offer consulting on supplier management, quality systems, and import processes.',
    includes: [
      'China sourcing strategy review',
      'Supplier relationship management advice',
      'Quality control system setup',
      'Import process and compliance guidance',
    ],
  },
];

export default function Services() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <PageHero
        title="Our Sourcing Services"
        subtitle="Comprehensive China sourcing support — from finding the right supplier to delivering goods to your door."
        breadcrumb="Services"
      />

      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="flex flex-col gap-16">
            {services.map((svc, i) => {
              const Icon = svc.icon;
              const isEven = i % 2 === 0;
              return (
                <div key={svc.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={isEven ? '' : 'lg:order-2'}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-brand-blue rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <h2 id={svc.titleId} className="text-2xl font-bold text-brand-blue">{svc.title}</h2>
                    </div>
                    <p id={svc.descId} className="text-gray-600 leading-relaxed mb-6">{svc.desc}</p>
                    <ul className="flex flex-col gap-2">
                      {svc.includes.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Link to="/contact" className="btn-primary mt-6 text-sm">
                      Enquire About This Service
                    </Link>
                  </div>
                  <div className={isEven ? '' : 'lg:order-1'}>
                    <img
                      data-strk-img-id={svc.imgId}
                      data-strk-img={`[${svc.descId}] [${svc.titleId}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={svc.title}
                      className="w-full h-72 object-cover rounded-2xl shadow-md"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Not Sure Which Service You Need?"
        subtitle="Tell us about your sourcing challenge and we'll recommend the right approach for your business."
      />
    </div>
  );
}
