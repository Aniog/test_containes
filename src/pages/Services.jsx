import { useEffect, useRef } from 'react';
import {
  Search, ShieldCheck, ClipboardCheck, Factory,
  Truck, BarChart3, CheckCircle, ArrowRight
} from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import PageHero from '../components/shared/PageHero';
import SectionCTA from '../components/shared/SectionCTA';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    imgId: 'svc-sourcing-a1b2c3',
    titleId: 'svc-sourcing-title',
    descId: 'svc-sourcing-desc',
    summary: 'Find the right manufacturer for your product — fast and reliably.',
    details: [
      'Identify manufacturers from verified databases and trade shows',
      'Screen suppliers against your product specs, MOQ, and budget',
      'Shortlist 3–5 qualified candidates with full profiles',
      'Facilitate initial communication and RFQ process',
      'Provide comparative analysis to support your decision',
    ],
    note: 'Typical turnaround: 3–5 business days for a qualified shortlist.',
  },
  {
    id: 'factory-verification',
    icon: ShieldCheck,
    title: 'Factory Verification',
    imgId: 'svc-factory-d4e5f6',
    titleId: 'svc-factory-title',
    descId: 'svc-factory-desc',
    summary: 'Confirm a factory is legitimate, capable, and compliant before you place an order.',
    details: [
      'On-site factory audit by our local team',
      'Verification of business licenses and certifications',
      'Assessment of production capacity and equipment',
      'Review of quality management systems',
      'Detailed written report with photos',
    ],
    note: 'Available as a standalone service or as part of a full sourcing package.',
  },
  {
    id: 'quality-inspection',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    imgId: 'svc-qc-g7h8i9',
    titleId: 'svc-qc-title',
    descId: 'svc-qc-desc',
    summary: 'Catch defects before goods leave China — not after they arrive at your warehouse.',
    details: [
      'Pre-shipment inspection (PSI) — most common and cost-effective',
      'During production inspection (DUPRO) for large or complex orders',
      'Container loading supervision',
      'AQL sampling based on international standards',
      'Detailed inspection report with photos within 24 hours',
    ],
    note: 'We follow AQL 2.5 / 4.0 standards by default, or your custom checklist.',
  },
  {
    id: 'production-followup',
    icon: Factory,
    title: 'Production Follow-up',
    imgId: 'svc-production-j1k2l3',
    titleId: 'svc-production-title',
    descId: 'svc-production-desc',
    summary: 'Stay informed about your order status without chasing the factory yourself.',
    details: [
      'Regular production status updates (weekly or milestone-based)',
      'Raw material and component verification',
      'Early identification of delays or quality deviations',
      'Direct communication with factory floor supervisors',
      'Escalation management if issues arise',
    ],
    note: 'Particularly valuable for first-time orders with a new supplier.',
  },
  {
    id: 'shipping-logistics',
    icon: Truck,
    title: 'Shipping & Logistics',
    imgId: 'svc-shipping-m4n5o6',
    titleId: 'svc-shipping-title',
    descId: 'svc-shipping-desc',
    summary: 'Coordinate freight, customs, and delivery without the complexity.',
    details: [
      'Sea freight (FCL and LCL) and air freight coordination',
      'Freight forwarder selection and rate comparison',
      'Export documentation and customs clearance support',
      'Incoterms guidance (FOB, CIF, DDP, etc.)',
      'Tracking and delivery confirmation',
    ],
    note: 'We work with trusted freight partners across all major Chinese ports.',
  },
  {
    id: 'price-negotiation',
    icon: BarChart3,
    title: 'Price Negotiation',
    imgId: 'svc-negotiation-p7q8r9',
    titleId: 'svc-negotiation-title',
    descId: 'svc-negotiation-desc',
    summary: 'Leverage our local market knowledge to get fair, competitive pricing.',
    details: [
      'Market price benchmarking for your product category',
      'Direct negotiation with suppliers in Mandarin',
      'Payment terms and deposit structure negotiation',
      'Tooling and sample cost negotiation',
      'Long-term pricing agreements for repeat buyers',
    ],
    note: 'Our local presence gives us leverage that remote buyers simply don\'t have.',
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
        tag="Our Services"
        title="Full-Service China Sourcing Support"
        subtitle="We handle every stage of the sourcing process — from finding suppliers to delivering goods — so you can focus on your business."
      />

      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-20">
            {services.map((svc, i) => {
              const Icon = svc.icon;
              const isEven = i % 2 === 0;
              return (
                <div
                  key={svc.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className={isEven ? '' : 'lg:order-2'}>
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-brand-blue" />
                    </div>
                    <h2 id={svc.titleId} className="text-2xl md:text-3xl font-bold text-brand-dark mb-3">
                      {svc.title}
                    </h2>
                    <p id={svc.descId} className="text-gray-600 mb-6 leading-relaxed">
                      {svc.summary}
                    </p>
                    <ul className="flex flex-col gap-2 mb-6">
                      {svc.details.map((d) => (
                        <li key={d} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm">{d}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-sm text-gray-500 italic border-l-4 border-brand-gold pl-4">
                      {svc.note}
                    </p>
                  </div>
                  <div className={`rounded-2xl overflow-hidden ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <img
                      data-strk-img-id={svc.imgId}
                      data-strk-img={`[${svc.descId}] [${svc.titleId}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="700"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={svc.title}
                      className="w-full h-72 object-cover"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing note */}
      <section className="bg-brand-light py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-xl font-bold text-brand-dark mb-3">Transparent Pricing</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            We offer project-based fees, monthly retainers, and order-percentage models
            depending on your needs. All fees are agreed upfront — no hidden charges.
            Contact us for a tailored quote based on your product and order volume.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-brand-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors no-underline"
          >
            Request a Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <SectionCTA
        title="Not Sure Which Service You Need?"
        subtitle="Tell us about your sourcing challenge and we'll recommend the right approach."
        buttonLabel="Get a Free Consultation"
        buttonPath="/contact"
      />
    </div>
  );
}
