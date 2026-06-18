import { Link } from 'react-router-dom';
import {
  Search, ShieldCheck, ClipboardCheck, Factory, Truck, Package,
  CheckCircle, ArrowRight, FileText, Camera, BarChart2, MessageSquare
} from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    subtitle: 'Find the right manufacturer for your product',
    desc: 'We research and identify manufacturers across China that match your product specifications, quality requirements, MOQ, and target price. You receive a structured comparison report covering 3–5 shortlisted suppliers.',
    features: [
      'Product specification analysis',
      'Supplier database research (Alibaba, trade shows, direct contacts)',
      'Shortlist of 3–5 verified suppliers',
      'Comparison report with pricing, MOQ, lead time, and certifications',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification & Audit',
    subtitle: 'Know who you are buying from before you commit',
    desc: 'Our team visits factories in person to verify their legitimacy, production capacity, quality systems, and compliance. You receive a detailed audit report with photos and a risk assessment.',
    features: [
      'Business license and registration verification',
      'Production capacity and equipment assessment',
      'Workforce and management evaluation',
      'Certification and compliance check (ISO, CE, BSCI, etc.)',
      'Photo documentation and written audit report',
    ],
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    subtitle: 'Catch defects before goods leave the factory',
    desc: 'Our trained QC inspectors conduct pre-shipment and in-line inspections based on your product specifications and AQL standards. You receive a full inspection report with photos within 24 hours.',
    features: [
      'Pre-shipment inspection (PSI)',
      'During production inspection (DUPRO)',
      'Container loading supervision',
      'AQL-based sampling and defect classification',
      'Detailed report with photos delivered within 24 hours',
    ],
  },
  {
    icon: Factory,
    title: 'Production Follow-up',
    subtitle: 'Stay informed at every stage of production',
    desc: 'We act as your on-the-ground representative, monitoring production progress, communicating with the factory, and escalating issues before they cause delays or quality problems.',
    features: [
      'Regular production status updates',
      'Milestone tracking and timeline management',
      'Direct factory communication in Chinese',
      'Issue escalation and resolution',
      'Photo and video updates from the production floor',
    ],
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    subtitle: 'From factory gate to your warehouse',
    desc: 'We coordinate with freight forwarders to arrange sea, air, or express shipping. We handle export documentation, customs paperwork, and track your shipment to destination.',
    features: [
      'Freight forwarder selection and booking',
      'Sea freight (FCL and LCL), air freight, express',
      'Export documentation (commercial invoice, packing list, B/L)',
      'Customs clearance support',
      'Shipment tracking and delivery confirmation',
    ],
  },
  {
    icon: Package,
    title: 'Consolidation & Labeling',
    subtitle: 'Combine orders and prepare goods for your market',
    desc: 'If you are ordering from multiple suppliers, we consolidate shipments at our warehouse, arrange custom labeling and packaging, and prepare goods for your specific market requirements.',
    features: [
      'Multi-supplier order consolidation',
      'Custom labeling and packaging',
      'Amazon FBA prep and labeling',
      'Repackaging and kitting',
      'Warehouse storage (short-term)',
    ],
  },
];

export default function Services() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#1B2B4B] py-16 md:py-20">
        <div className="section-container">
          <div className="max-w-3xl">
            <p className="text-red-400 text-sm font-semibold uppercase tracking-widest mb-3">Our Services</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">
              Full-Service China Sourcing
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed mb-7">
              We cover every stage of the sourcing process — from finding the right supplier to delivering goods to your warehouse. Each service can be used independently or as part of a complete sourcing package.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Get a Free Quote <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 md:py-24 bg-white">
        <div className="section-container">
          <div className="space-y-16">
            {services.map((svc, i) => (
              <div key={svc.title} className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-start ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div>
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                    <svc.icon className="w-6 h-6 text-[#2E6DA4]" />
                  </div>
                  <p className="text-red-600 text-sm font-semibold uppercase tracking-wider mb-1">{svc.subtitle}</p>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#1B2B4B] mb-4">{svc.title}</h2>
                  <p className="text-gray-600 leading-relaxed mb-6">{svc.desc}</p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-[#1B2B4B] hover:bg-[#162240] text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors"
                  >
                    Enquire About This Service <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h4 className="text-sm font-semibold text-[#1B2B4B] uppercase tracking-wider mb-4">What's Included</h4>
                  <ul className="space-y-3">
                    {svc.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="section-container text-center">
          <h2 className="text-3xl font-bold text-[#1B2B4B] mb-4">Not Sure Which Service You Need?</h2>
          <p className="text-gray-600 mb-7 max-w-xl mx-auto">
            Tell us about your sourcing project and we'll recommend the right combination of services for your situation.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-7 py-3.5 rounded-lg transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
