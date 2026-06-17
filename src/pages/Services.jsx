import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Search, Factory, ClipboardCheck, TrendingUp, Truck,
  MessageSquare, CheckCircle, ArrowRight
} from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const services = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    subtitle: 'Find the right manufacturer for your product',
    desc: 'We tap into our established network of verified Chinese manufacturers to find suppliers that match your product specifications, quality standards, and budget. Our sourcing team evaluates multiple candidates and presents you with a shortlist of the best options.',
    features: [
      'Product specification analysis',
      'Supplier database search across 20+ industries',
      'Initial supplier screening and background check',
      'Shortlist of 3–5 qualified candidates',
      'Comparative pricing and capability report',
    ],
    imgId: 'svc-sourcing-img-a1b2c3',
    titleId: 'svc-sourcing-title',
    descId: 'svc-sourcing-desc',
  },
  {
    id: 'factory-verification',
    icon: Factory,
    title: 'Factory Verification & Audit',
    subtitle: 'Know exactly who you are buying from',
    desc: 'Before you commit to a supplier, our team visits the factory in person to verify their capabilities, certifications, and working conditions. We provide a detailed audit report so you can make an informed decision.',
    features: [
      'On-site factory visit and inspection',
      'Business license and export certification check',
      'Production capacity and equipment assessment',
      'Quality management system review',
      'Detailed written audit report with photos',
    ],
    imgId: 'svc-factory-img-d4e5f6',
    titleId: 'svc-factory-title',
    descId: 'svc-factory-desc',
  },
  {
    id: 'quality-inspection',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    subtitle: 'Catch defects before they leave China',
    desc: 'Our local QC inspectors conduct thorough product inspections at the factory before shipment. We check against your specifications and international standards, providing a detailed inspection report with photos and pass/fail results.',
    features: [
      'Pre-shipment inspection (PSI)',
      'In-line production inspection',
      'First article / sample inspection',
      'AQL sampling methodology',
      'Detailed inspection report within 24 hours',
    ],
    imgId: 'svc-qc-img-g7h8i9',
    titleId: 'svc-qc-title',
    descId: 'svc-qc-desc',
  },
  {
    id: 'production-followup',
    icon: TrendingUp,
    title: 'Production Follow-up',
    subtitle: 'Stay informed throughout production',
    desc: 'We act as your eyes and ears on the ground during production. Our team monitors progress against agreed milestones, communicates with the factory on your behalf, and flags any issues early so they can be resolved without delaying your shipment.',
    features: [
      'Regular production status updates',
      'Milestone tracking and reporting',
      'Issue escalation and resolution',
      'Supplier communication in Mandarin',
      'Photo and video documentation',
    ],
    imgId: 'svc-production-img-j1k2l3',
    titleId: 'svc-production-title',
    descId: 'svc-production-desc',
  },
  {
    id: 'shipping-coordination',
    icon: Truck,
    title: 'Shipping Coordination',
    subtitle: 'From factory gate to your warehouse',
    desc: 'We coordinate with freight forwarders, customs brokers, and logistics providers to ensure your goods move smoothly from the factory to your destination. We handle export documentation, booking, and tracking.',
    features: [
      'Freight forwarder coordination',
      'Export documentation preparation',
      'Booking and cargo tracking',
      'Consolidation for multiple suppliers',
      'Customs clearance support',
    ],
    imgId: 'svc-shipping-img-m4n5o6',
    titleId: 'svc-shipping-title',
    descId: 'svc-shipping-desc',
  },
  {
    id: 'negotiation',
    icon: MessageSquare,
    title: 'Supplier Negotiation',
    subtitle: 'Get better terms with local expertise',
    desc: 'Our bilingual team negotiates directly with Chinese suppliers on your behalf, leveraging local market knowledge and relationships to secure better pricing, lower MOQs, and favorable payment terms.',
    features: [
      'Price negotiation in Mandarin',
      'MOQ and lead time negotiation',
      'Payment terms discussion',
      'Sample and tooling cost reduction',
      'Contract review and support',
    ],
    imgId: 'svc-negotiation-img-p7q8r9',
    titleId: 'svc-negotiation-title',
    descId: 'svc-negotiation-desc',
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
      <section className="bg-[#1a2e4a] py-16 md:py-24">
        <div className="section-container text-center">
          <span className="inline-block bg-[#e85d26]/20 text-[#e85d26] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide mb-4">
            Our Services
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Full-Service China Sourcing
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            From finding the right supplier to getting goods delivered, we manage every step of the process so you can focus on your business.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="bg-white py-16 md:py-24">
        <div className="section-container">
          <div className="space-y-20">
            {services.map((svc, i) => (
              <div
                key={svc.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  i % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-14 h-14 bg-[#e85d26]/10 rounded-xl flex items-center justify-center mb-5">
                    <svc.icon className="w-7 h-7 text-[#e85d26]" />
                  </div>
                  <p className="text-[#e85d26] font-semibold text-sm uppercase tracking-wide mb-2">{svc.subtitle}</p>
                  <h2 id={svc.titleId} className="text-2xl md:text-3xl font-bold text-[#1a2e4a] mb-4">{svc.title}</h2>
                  <p id={svc.descId} className="text-[#6b7280] leading-relaxed mb-6">{svc.desc}</p>
                  <ul className="space-y-2 mb-8">
                    {svc.features.map((f) => (
                      <li key={f} className="flex items-center gap-3 text-[#1f2937] text-sm">
                        <CheckCircle className="w-4 h-4 text-[#e85d26] flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-[#e85d26] hover:bg-[#c94d1e] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                  >
                    Get a Quote <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className={`relative ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <img
                    data-strk-img-id={svc.imgId}
                    data-strk-img={`[${svc.descId}] [${svc.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={svc.title}
                    className="w-full rounded-2xl shadow-lg object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f3f4f6] py-16">
        <div className="section-container text-center">
          <h2 className="text-3xl font-bold text-[#1a2e4a] mb-4">Not Sure Which Service You Need?</h2>
          <p className="text-[#6b7280] text-lg mb-8 max-w-xl mx-auto">
            Tell us about your project and we'll recommend the right combination of services for your situation.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#e85d26] hover:bg-[#c94d1e] text-white font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
