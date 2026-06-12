import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Search, ShieldCheck, ClipboardCheck, Factory, Truck, Globe, ArrowRight, CheckCircle } from 'lucide-react';
import CTABanner from '../components/layout/CTABanner';

const services = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    subtitle: 'Find the right manufacturer for your product',
    desc: 'We research and shortlist verified Chinese manufacturers that match your product specifications, target price, minimum order quantity, and delivery requirements. Our network spans Guangdong, Zhejiang, Jiangsu, and other key manufacturing regions.',
    features: [
      'Product specification analysis',
      'Supplier database research and outreach',
      'Shortlist of 3–5 qualified manufacturers',
      'Initial pricing and MOQ comparison',
      'Supplier background checks',
    ],
    titleId: 'svc-sourcing-title',
    descId: 'svc-sourcing-desc',
    imgId: 'svc-sourcing-full-img-a1b2c3',
  },
  {
    id: 'factory-verification',
    icon: ShieldCheck,
    title: 'Factory Verification',
    subtitle: 'Know who you are buying from before you commit',
    desc: 'Our team conducts on-site factory audits to verify production capacity, quality management systems, certifications, and working conditions. We provide a detailed audit report so you can make an informed decision.',
    features: [
      'On-site factory visit and inspection',
      'Production capacity assessment',
      'Quality management system review',
      'Certification and license verification',
      'Detailed written audit report',
    ],
    titleId: 'svc-verify-title',
    descId: 'svc-verify-desc',
    imgId: 'svc-verify-full-img-d4e5f6',
  },
  {
    id: 'quality-inspection',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    subtitle: 'Catch defects before they leave the factory',
    desc: 'We conduct pre-shipment inspections, in-line production checks, and container loading supervision. Our inspectors follow internationally recognized AQL sampling standards and provide photo-documented reports within 24 hours.',
    features: [
      'Pre-shipment inspection (PSI)',
      'During production inspection (DUPRO)',
      'Container loading supervision (CLS)',
      'AQL sampling and defect classification',
      'Photo-documented inspection report',
    ],
    titleId: 'svc-qc-title',
    descId: 'svc-qc-desc',
    imgId: 'svc-qc-full-img-g7h8i9',
  },
  {
    id: 'production-followup',
    icon: Factory,
    title: 'Production Follow-up',
    subtitle: 'Stay informed throughout the manufacturing process',
    desc: 'We act as your eyes and ears on the ground. Our team monitors production progress, communicates with the factory on your behalf, and escalates issues before they cause delays or quality problems.',
    features: [
      'Regular production status updates',
      'Factory communication in Mandarin',
      'Timeline monitoring and delay alerts',
      'Raw material and component checks',
      'Pre-production sample approval',
    ],
    titleId: 'svc-prod-title',
    descId: 'svc-prod-desc',
    imgId: 'svc-prod-full-img-j1k2l3',
  },
  {
    id: 'shipping-coordination',
    icon: Truck,
    title: 'Shipping Coordination',
    subtitle: 'From factory gate to your warehouse',
    desc: 'We coordinate with freight forwarders, prepare export documentation, and track your shipment from origin to destination. We work with both sea freight and air freight, and can consolidate multiple supplier orders.',
    features: [
      'Freight forwarder coordination',
      'Export documentation preparation',
      'Sea freight and air freight options',
      'Cargo consolidation (LCL)',
      'Shipment tracking and updates',
    ],
    titleId: 'svc-ship-title',
    descId: 'svc-ship-desc',
    imgId: 'svc-ship-full-img-m4n5o6',
  },
  {
    id: 'trade-compliance',
    icon: Globe,
    title: 'Trade Compliance',
    subtitle: 'Navigate regulations with confidence',
    desc: 'We help you understand import regulations, product certification requirements, and labeling standards for your target market. We also assist with customs documentation to reduce the risk of delays or penalties.',
    features: [
      'Import regulation guidance',
      'Product certification support (CE, FCC, etc.)',
      'Labeling and packaging compliance',
      'HS code classification assistance',
      'Customs documentation review',
    ],
    titleId: 'svc-trade-title',
    descId: 'svc-trade-desc',
    imgId: 'svc-trade-full-img-p7q8r9',
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
      <section className="bg-primary py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-blue-300 font-semibold text-sm uppercase tracking-wider">What We Offer</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-5">Our Sourcing Services</h1>
          <p className="text-blue-100 text-xl max-w-2xl mx-auto">
            Comprehensive China sourcing support — from finding the right supplier to delivering goods to your door.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 md:py-28 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-20">
            {services.map((svc, i) => {
              const Icon = svc.icon;
              const isEven = i % 2 === 0;
              return (
                <div
                  key={svc.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className={isEven ? '' : 'lg:order-2'}>
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-primary font-semibold text-sm uppercase tracking-wider">{svc.subtitle}</span>
                    <h2 id={svc.titleId} className="text-3xl font-bold text-text-dark mt-2 mb-4">{svc.title}</h2>
                    <p id={svc.descId} className="text-gray-500 leading-relaxed mb-6">{svc.desc}</p>
                    <ul className="flex flex-col gap-2 mb-8">
                      {svc.features.map((f) => (
                        <li key={f} className="flex items-center gap-3 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
                    >
                      Enquire About This Service <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                  <div className={`rounded-2xl overflow-hidden shadow-md h-72 lg:h-96 bg-gray-100 ${isEven ? '' : 'lg:order-1'}`}>
                    <img
                      data-strk-img-id={svc.imgId}
                      data-strk-img={`[${svc.descId}] [${svc.titleId}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={svc.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
