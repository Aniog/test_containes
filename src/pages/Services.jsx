import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  Search, Factory, ClipboardCheck, Zap, Truck, Package,
  ArrowRight, CheckCircle
} from 'lucide-react';

const services = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    subtitle: 'Find the right factory, fast',
    desc: 'We research and shortlist verified Chinese manufacturers that match your product specifications, MOQ requirements, and target price range. Our network spans 1,200+ audited factories across Guangdong, Zhejiang, Fujian, and other key manufacturing hubs.',
    features: [
      'Product specification analysis',
      'Multi-factory shortlisting',
      'Supplier background checks',
      'Business license verification',
      'Export record review',
      'Initial price benchmarking',
    ],
    imgId: 'svc-img-sourcing-9a2b3c',
    titleId: 'svc-sourcing-title',
    descId: 'svc-sourcing-desc',
  },
  {
    id: 'factory-verification',
    icon: Factory,
    title: 'Factory Verification & Audit',
    subtitle: 'Know who you\'re buying from',
    desc: 'Before you place an order, we conduct on-site or remote factory audits to verify production capacity, quality management systems, certifications, and working conditions. We provide a detailed audit report with photos and recommendations.',
    features: [
      'On-site factory visits',
      'Production capacity assessment',
      'ISO / CE / RoHS certification check',
      'Quality management system review',
      'Worker conditions assessment',
      'Detailed audit report with photos',
    ],
    imgId: 'svc-img-factory-4d5e6f',
    titleId: 'svc-factory-title',
    descId: 'svc-factory-desc',
  },
  {
    id: 'quality-inspection',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    subtitle: 'Catch defects before they ship',
    desc: 'Our trained inspectors perform pre-shipment, during-production, and container loading inspections using internationally recognized AQL sampling standards. You receive a full inspection report within 24 hours.',
    features: [
      'Pre-shipment inspection (PSI)',
      'During production inspection (DUPRO)',
      'Container loading supervision',
      'AQL sampling standards',
      'Defect classification & photos',
      '24-hour inspection report',
    ],
    imgId: 'svc-img-qc-7g8h9i',
    titleId: 'svc-qc-title',
    descId: 'svc-qc-desc',
  },
  {
    id: 'production-followup',
    icon: Zap,
    title: 'Production Follow-up',
    subtitle: 'Stay on schedule, avoid surprises',
    desc: 'We act as your eyes and ears on the ground. Our team communicates with the factory in Chinese, monitors production milestones, and flags any issues — delays, material substitutions, or quality deviations — before they become costly problems.',
    features: [
      'Weekly production status updates',
      'Bilingual factory communication',
      'Timeline milestone tracking',
      'Material and component verification',
      'Early issue detection and escalation',
      'Photo and video documentation',
    ],
    imgId: 'svc-img-prod-1j2k3l',
    titleId: 'svc-prod-title',
    descId: 'svc-prod-desc',
  },
  {
    id: 'shipping-logistics',
    icon: Truck,
    title: 'Shipping & Logistics',
    subtitle: 'From factory to your warehouse',
    desc: 'We coordinate with licensed freight forwarders to arrange sea, air, or express shipping. We handle export documentation, customs clearance support, and can arrange door-to-door delivery to your warehouse or Amazon FBA center.',
    features: [
      'Sea freight (FCL & LCL)',
      'Air freight & express courier',
      'Export documentation preparation',
      'Customs clearance coordination',
      'Amazon FBA prep & labeling',
      'Door-to-door delivery',
    ],
    imgId: 'svc-img-ship-4m5n6o',
    titleId: 'svc-ship-title',
    descId: 'svc-ship-desc',
  },
  {
    id: 'private-label-oem',
    icon: Package,
    title: 'Private Label & OEM',
    subtitle: 'Build your own brand in China',
    desc: 'We help you develop custom-branded products with Chinese manufacturers. From initial design consultation and sample development to bulk production and branded packaging, we manage the entire OEM process on your behalf.',
    features: [
      'Product design consultation',
      'Sample development & revision',
      'Custom packaging design',
      'Brand compliance review',
      'Bulk production management',
      'IP protection guidance',
    ],
    imgId: 'svc-img-oem-7p8q9r',
    titleId: 'svc-oem-title',
    descId: 'svc-oem-desc',
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
      <section className="bg-[#1A3C6E] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-white/10 text-white text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-6">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Full-Service China Sourcing
            </h1>
            <p className="text-blue-100 text-lg leading-relaxed mb-8">
              We provide end-to-end sourcing support — from finding the right factory to delivering goods to your door. Every service is designed to reduce risk and give you full visibility over your supply chain.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-[#C0392B] hover:bg-[#A93226] text-white font-semibold px-8 py-4 rounded-lg transition-colors no-underline"
            >
              Get a Free Sourcing Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {services.map((svc, idx) => {
            const Icon = svc.icon;
            const isEven = idx % 2 === 0;
            return (
              <div
                key={svc.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={!isEven ? 'lg:order-2' : ''}>
                  <div className="w-12 h-12 bg-[#EEF2F7] rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#1A3C6E]" />
                  </div>
                  <span className="text-[#C0392B] text-sm font-semibold uppercase tracking-wider">{svc.subtitle}</span>
                  <h2 id={svc.titleId} className="text-2xl md:text-3xl font-bold text-[#1A1A2E] mt-2 mb-4">{svc.title}</h2>
                  <p id={svc.descId} className="text-[#4A5568] leading-relaxed mb-6">{svc.desc}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {svc.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-[#4A5568]">
                        <CheckCircle className="w-4 h-4 text-[#1A3C6E] flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`rounded-xl overflow-hidden bg-[#EEF2F7] aspect-video ${!isEven ? 'lg:order-1' : ''}`}>
                  <img
                    data-strk-img-id={svc.imgId}
                    data-strk-img={`[${svc.descId}] [${svc.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={svc.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#F7F9FC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#1A1A2E] mb-4">Not Sure Which Service You Need?</h2>
          <p className="text-[#4A5568] text-lg mb-8">
            Tell us about your product and sourcing goals. We'll recommend the right combination of services for your situation.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#C0392B] hover:bg-[#A93226] text-white font-semibold px-8 py-4 rounded-lg transition-colors no-underline"
          >
            Contact Us <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
