import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Search, Factory, ClipboardCheck, ShieldCheck, Truck, Package,
  CheckCircle, ArrowRight
} from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const services = [
  {
    id: 'sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    subtitle: 'Find the right manufacturer for your product',
    desc: 'We research and shortlist verified Chinese manufacturers based on your product specifications, target price, MOQ, and required certifications. You receive a structured comparison report so you can make an informed decision.',
    features: [
      'Product specification analysis',
      'Supplier database research and trade show sourcing',
      'Background checks and business license verification',
      'Comparison report with 3–5 shortlisted suppliers',
      'Price negotiation support',
    ],
    imgQuery: 'China factory supplier sourcing manufacturing',
  },
  {
    id: 'audit',
    icon: Factory,
    title: 'Factory Verification & Audit',
    subtitle: 'Know who you are buying from before you commit',
    desc: 'Our team visits factories in person to verify production capacity, equipment, workforce, certifications, and compliance. You receive a detailed audit report with photos before placing any order.',
    features: [
      'On-site factory visit by trained auditors',
      'Production capacity and equipment assessment',
      'ISO, CE, and other certification verification',
      'Worker conditions and ethical compliance check',
      'Full photographic audit report',
    ],
    imgQuery: 'factory audit inspection China manufacturing facility',
  },
  {
    id: 'qc',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    subtitle: 'Catch defects before goods leave the factory',
    desc: 'Our QC inspectors conduct pre-shipment and in-line inspections following AQL international standards. Every inspection includes a detailed report with photos and a pass/fail recommendation.',
    features: [
      'Pre-shipment inspection (PSI)',
      'During production inspection (DUPRO)',
      'AQL sampling and defect classification',
      'Measurement, function, and packaging checks',
      'Same-day inspection report with photos',
    ],
    imgQuery: 'quality control inspection products China factory QC',
  },
  {
    id: 'production',
    icon: ShieldCheck,
    title: 'Production Follow-up',
    subtitle: 'Stay informed throughout your production run',
    desc: 'We act as your eyes and ears on the factory floor. Regular milestone updates, production photos, and proactive issue reporting keep your order on track and on schedule.',
    features: [
      'Production schedule monitoring',
      'Weekly status updates with photos',
      'Early issue identification and resolution',
      'Material and component verification',
      'Delivery timeline management',
    ],
    imgQuery: 'production monitoring factory China manufacturing progress',
  },
  {
    id: 'shipping',
    icon: Truck,
    title: 'Shipping Coordination',
    subtitle: 'From factory gate to your warehouse',
    desc: 'We coordinate with freight forwarders, prepare export documentation, and track your shipment from China to your destination. We handle the complexity so you don\'t have to.',
    features: [
      'Freight forwarder coordination (sea, air, express)',
      'Export documentation preparation',
      'Customs clearance support',
      'Shipment tracking and updates',
      'Cargo insurance guidance',
    ],
    imgQuery: 'shipping freight container port China export logistics',
  },
  {
    id: 'samples',
    icon: Package,
    title: 'Sample Management',
    subtitle: 'Approve quality before committing to bulk orders',
    desc: 'We arrange, review, and ship product samples from shortlisted suppliers. Our team checks samples against your specifications before forwarding them, saving you time and unnecessary back-and-forth.',
    features: [
      'Sample request and coordination',
      'Pre-review against your specifications',
      'Sample consolidation from multiple suppliers',
      'Express shipping to your location',
      'Feedback and revision management',
    ],
    imgQuery: 'product samples review China factory prototype',
  },
];

export default function Services() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-[#0d2340] py-20 md:py-28">
        <div className="section-container text-center">
          <p className="text-[#e8621a] font-semibold text-sm uppercase tracking-wider mb-3">Our Services</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Full-Service China Sourcing
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            From finding the right supplier to getting goods delivered — we manage every stage of the sourcing process so you can focus on your business.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 md:py-28 bg-white">
        <div className="section-container">
          <div className="flex flex-col gap-20">
            {services.map(({ id, icon: Icon, title, subtitle, desc, features, imgQuery }, index) => (
              <div
                key={id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#1a4f8a]" />
                  </div>
                  <p className="text-[#e8621a] font-semibold text-sm uppercase tracking-wider mb-2">{subtitle}</p>
                  <h2 id={`svc-title-${id}`} className="text-2xl md:text-3xl font-bold text-[#0d2340] mb-4">{title}</h2>
                  <p className="text-gray-600 leading-relaxed mb-6">{desc}</p>
                  <ul className="flex flex-col gap-2 mb-6">
                    {features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-[#1a4f8a] flex-shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-[#e8621a] hover:bg-[#c9521a] text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
                  >
                    Enquire About This Service <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className={`rounded-2xl overflow-hidden aspect-[4/3] ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <img
                    data-strk-img-id={`svc-img-${id}-ss`}
                    data-strk-img={`[svc-title-${id}] ${imgQuery}`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1a4f8a]">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Not Sure Which Service You Need?</h2>
          <p className="text-blue-200 text-lg max-w-xl mx-auto mb-8">
            Tell us about your product and sourcing goals. We'll recommend the right combination of services for your situation.
          </p>
          <Link
            to="/contact"
            className="bg-[#e8621a] hover:bg-[#c9521a] text-white font-semibold px-10 py-4 rounded-lg transition-colors text-lg inline-block"
          >
            Get a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
