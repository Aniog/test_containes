import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Search, Factory, ClipboardCheck, ShieldCheck, Truck, Package, ArrowRight, CheckCircle } from 'lucide-react';

const services = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    imgId: 'svc-sourcing-img-a1b2c3',
    titleId: 'svc-sourcing-title',
    descId: 'svc-sourcing-desc',
    summary: 'We identify and shortlist verified manufacturers that match your product specifications, MOQ, and budget.',
    details: [
      'Product specification analysis and category research',
      'Identification of 3–5 qualified manufacturers',
      'Supplier background checks and trade record review',
      'Initial price and MOQ comparison',
      'Shortlist report with factory profiles',
    ],
    ideal: 'Buyers entering a new product category or looking to replace an existing supplier.',
  },
  {
    id: 'factory-verification',
    icon: Factory,
    title: 'Factory Verification',
    imgId: 'svc-factory-img-d4e5f6',
    titleId: 'svc-factory-title',
    descId: 'svc-factory-desc',
    summary: 'On-site audits to confirm factory capabilities, certifications, and production capacity before you commit.',
    details: [
      'Physical factory visit and facility inspection',
      'Verification of business license and export records',
      'Assessment of production equipment and capacity',
      'Review of quality management systems',
      'Detailed audit report with photos',
    ],
    ideal: 'Buyers placing a significant first order or working with a new supplier for the first time.',
  },
  {
    id: 'quality-inspection',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    imgId: 'svc-qc-img-g7h8i9',
    titleId: 'svc-qc-title',
    descId: 'svc-qc-desc',
    summary: 'Pre-shipment and in-line inspections by trained QC staff to catch defects before goods leave China.',
    details: [
      'Pre-shipment inspection (PSI) against your specifications',
      'In-line production inspection during manufacturing',
      'AQL sampling methodology',
      'Defect classification and photo documentation',
      'Pass/fail report delivered within 24 hours',
    ],
    ideal: 'Any buyer who wants independent verification of product quality before shipment.',
  },
  {
    id: 'production-followup',
    icon: ShieldCheck,
    title: 'Production Follow-up',
    imgId: 'svc-prod-img-j1k2l3',
    titleId: 'svc-prod-title',
    descId: 'svc-prod-desc',
    summary: 'Regular updates and on-site monitoring to keep your order on schedule and on spec.',
    details: [
      'Weekly production status updates',
      'On-site visits at key production milestones',
      'Early identification of delays or quality issues',
      'Direct communication with factory management',
      'Timeline management and escalation when needed',
    ],
    ideal: 'Buyers with complex or high-value orders who need active oversight during production.',
  },
  {
    id: 'shipping-coordination',
    icon: Truck,
    title: 'Shipping Coordination',
    imgId: 'svc-ship-img-m4n5o6',
    titleId: 'svc-ship-title',
    descId: 'svc-ship-desc',
    summary: 'We handle freight booking, customs documentation, and delivery coordination to your destination.',
    details: [
      'Freight forwarder selection and booking',
      'Export customs documentation preparation',
      'Container loading supervision',
      'Shipping tracking and status updates',
      'Coordination with your import agent or 3PL',
    ],
    ideal: 'Buyers who want a single point of contact managing logistics from factory to destination.',
  },
  {
    id: 'sample-procurement',
    icon: Package,
    title: 'Sample Procurement',
    imgId: 'svc-sample-img-p7q8r9',
    titleId: 'svc-sample-title',
    descId: 'svc-sample-desc',
    summary: 'We source and ship product samples so you can evaluate quality before placing a full order.',
    details: [
      'Sample request and negotiation with factory',
      'Sample quality check before dispatch',
      'International courier shipping to your address',
      'Multiple supplier samples for comparison',
      'Feedback loop to refine specifications',
    ],
    ideal: 'Buyers who want to evaluate product quality and fit before committing to a production order.',
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block bg-primary/20 border border-primary/30 text-blue-300 text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full mb-4">
            Our Services
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            China Sourcing Services
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            We offer a complete range of sourcing and supply chain services to help global buyers import from China with confidence.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {services.map((svc, i) => (
            <div
              key={svc.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center mb-4">
                  <svc.icon className="w-6 h-6 text-primary" />
                </div>
                <h2 id={svc.titleId} className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">{svc.title}</h2>
                <p id={svc.descId} className="text-gray-600 text-lg mb-6">{svc.summary}</p>
                <ul className="space-y-3 mb-6">
                  {svc.details.map((d) => (
                    <li key={d} className="flex gap-3 text-gray-700 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      {d}
                    </li>
                  ))}
                </ul>
                <div className="bg-primary-light rounded-lg p-4 text-sm text-primary">
                  <span className="font-semibold">Best for: </span>{svc.ideal}
                </div>
              </div>
              <div className={`rounded-2xl overflow-hidden aspect-[4/3] bg-gray-100 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                <img
                  data-strk-img-id={svc.imgId}
                  data-strk-img={`[${svc.descId}] [${svc.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={svc.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Not Sure Which Service You Need?</h2>
          <p className="text-blue-200 text-lg mb-8">
            Tell us about your product and sourcing goals. We'll recommend the right combination of services.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-primary font-bold px-10 py-4 rounded-lg text-lg transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
