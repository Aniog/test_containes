import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  Search, Factory, ClipboardCheck, Clock, Truck, Package,
  ArrowRight, CheckCircle, ChevronRight
} from 'lucide-react';

const services = [
  {
    id: 'sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    subtitle: 'Find the right manufacturer for your product',
    desc: 'We research and shortlist verified manufacturers from our network and major Chinese sourcing platforms. Every supplier is pre-screened for product match, production capacity, and export experience.',
    features: [
      'Product specification matching',
      'Multi-supplier comparison reports',
      'Trade record and export history checks',
      'Direct factory contact and communication',
      'Shortlist of 3–5 qualified suppliers',
    ],
    imgId: 'svc-sourcing-img-a1b2c3',
    titleId: 'svc-sourcing-title',
    descId: 'svc-sourcing-desc',
  },
  {
    id: 'verification',
    icon: Factory,
    title: 'Factory Verification',
    subtitle: 'Know exactly who you are buying from',
    desc: 'Before you commit to a supplier, we conduct a thorough on-site factory audit. We verify business licenses, production lines, quality systems, certifications, and worker conditions.',
    features: [
      'Business license and registration check',
      'Production capacity assessment',
      'Quality management system review',
      'Certification verification (ISO, CE, BSCI, etc.)',
      'Detailed audit report with photos',
    ],
    imgId: 'svc-verification-img-d4e5f6',
    titleId: 'svc-verification-title',
    descId: 'svc-verification-desc',
  },
  {
    id: 'inspection',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    subtitle: 'Catch defects before they reach your customers',
    desc: 'Our trained inspectors perform pre-shipment, in-line, and final random inspections based on AQL standards. We check dimensions, functionality, appearance, labeling, and packaging.',
    features: [
      'Pre-shipment inspection (PSI)',
      'In-line production inspection',
      'Container loading supervision',
      'AQL sampling and defect classification',
      'Detailed inspection report within 24 hours',
    ],
    imgId: 'svc-inspection-img-g7h8i9',
    titleId: 'svc-inspection-title',
    descId: 'svc-inspection-desc',
  },
  {
    id: 'production',
    icon: Clock,
    title: 'Production Follow-up',
    subtitle: 'Stay informed throughout manufacturing',
    desc: 'We act as your on-the-ground project manager. We communicate with the factory, track milestones, resolve issues early, and send you regular progress updates.',
    features: [
      'Weekly production status reports',
      'On-site factory visits during production',
      'Early issue detection and resolution',
      'Material and component verification',
      'Delivery timeline management',
    ],
    imgId: 'svc-production-img-j1k2l3',
    titleId: 'svc-production-title',
    descId: 'svc-production-desc',
  },
  {
    id: 'shipping',
    icon: Truck,
    title: 'Shipping Coordination',
    subtitle: 'From factory gate to your warehouse',
    desc: 'We coordinate with licensed freight forwarders for sea, air, and express shipments. We handle all export documentation and keep you updated on shipment status.',
    features: [
      'Sea freight (FCL and LCL)',
      'Air freight and express courier',
      'Export documentation preparation',
      'Customs clearance support',
      'Door-to-door delivery coordination',
    ],
    imgId: 'svc-shipping-img-m4n5o6',
    titleId: 'svc-shipping-title',
    descId: 'svc-shipping-desc',
  },
  {
    id: 'oem',
    icon: Package,
    title: 'Private Label & OEM',
    subtitle: 'Build your own branded product line',
    desc: 'We manage the full OEM process — from product design and mold development to branded packaging and compliance testing. Ideal for brands looking to manufacture under their own label.',
    features: [
      'Product design and specification development',
      'Mold and tooling management',
      'Branded packaging design and production',
      'Compliance and certification support',
      'Sample approval and mass production oversight',
    ],
    imgId: 'svc-oem-img-p7q8r9',
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
      {/* Page Header */}
      <section className="bg-gradient-to-br from-brand-navy to-brand-blue text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-gold bg-white/10 px-3 py-1 rounded-full">Services</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-4">
              China Sourcing Services for Global Buyers
            </h1>
            <p className="text-white/80 text-lg leading-relaxed">
              We provide end-to-end sourcing support — from finding the right supplier to delivering goods to your door. Every service is designed to reduce risk and save you time.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            const isEven = i % 2 === 0;
            return (
              <div
                key={svc.id}
                id={svc.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={isEven ? '' : 'lg:order-2'}>
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-brand-blue" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-brand-blue">Service</span>
                  <h2 id={svc.titleId} className="text-2xl md:text-3xl font-bold text-brand-navy mt-2 mb-2">{svc.title}</h2>
                  <p className="text-brand-blue font-medium mb-4">{svc.subtitle}</p>
                  <p id={svc.descId} className="text-brand-muted leading-relaxed mb-6">{svc.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {svc.features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-brand-muted text-sm">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-navy text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                  >
                    Get a Quote for This Service <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className={`rounded-2xl overflow-hidden bg-gray-100 aspect-video ${isEven ? '' : 'lg:order-1'}`}>
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
      <section className="bg-brand-gray py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-brand-navy mb-4">Not Sure Which Service You Need?</h2>
          <p className="text-brand-muted mb-8">
            Tell us about your product and sourcing goals. We'll recommend the right combination of services and provide a free quote.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-brand-red hover:bg-red-700 text-white font-bold px-8 py-4 rounded-lg transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
