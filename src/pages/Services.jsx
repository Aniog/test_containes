import { Link } from 'react-router-dom';
import { Search, ShieldCheck, ClipboardCheck, Factory, Ship, BarChart3, ArrowRight, CheckCircle } from 'lucide-react';

const services = [
  {
    id: 'sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    tagline: 'Find the right factory — fast',
    description: 'We research the Chinese market to identify suppliers that match your product specifications, quality standards, MOQ, and target price. You receive a shortlist of 3–5 pre-screened factories with detailed profiles.',
    includes: [
      'Market research and supplier identification',
      'Initial supplier qualification and screening',
      'Factory profile reports (capacity, certifications, years in business)',
      'Price comparison and negotiation support',
      'Sample coordination',
    ],
    color: 'bg-blue-50',
    iconColor: 'text-blue-700',
  },
  {
    id: 'audit',
    icon: ShieldCheck,
    title: 'Factory Verification & Audit',
    tagline: 'Know who you\'re buying from',
    description: 'Before you commit to an order, our team visits the factory in person to verify their capabilities, compliance, and working conditions. You receive a comprehensive audit report with photos.',
    includes: [
      'Business license and registration verification',
      'Production capacity and equipment assessment',
      'Quality management system review',
      'Worker conditions and compliance check',
      'Detailed audit report with photos and scoring',
    ],
    color: 'bg-indigo-50',
    iconColor: 'text-indigo-700',
  },
  {
    id: 'qc',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    tagline: 'Catch defects before they ship',
    description: 'Our trained QC inspectors check your goods against your specifications at the factory — before they leave China. We offer pre-shipment inspections, during-production checks, and container loading supervision.',
    includes: [
      'Pre-shipment inspection (PSI)',
      'During production inspection (DUPRO)',
      'Container loading supervision (CLS)',
      'AQL sampling methodology',
      'Detailed inspection report with photos and video',
    ],
    color: 'bg-green-50',
    iconColor: 'text-green-700',
  },
  {
    id: 'production',
    icon: Factory,
    title: 'Production Follow-up',
    tagline: 'Stay informed at every stage',
    description: 'We act as your eyes and ears on the factory floor. From sample approval to final production, we monitor progress, flag issues early, and keep you updated with regular milestone reports.',
    includes: [
      'Sample review and approval coordination',
      'Production schedule monitoring',
      'Weekly progress updates',
      'Issue escalation and resolution',
      'Pre-production and mid-production visits',
    ],
    color: 'bg-amber-50',
    iconColor: 'text-amber-700',
  },
  {
    id: 'shipping',
    icon: Ship,
    title: 'Shipping & Logistics',
    tagline: 'From factory to your warehouse',
    description: 'We coordinate the entire export process — from booking freight to preparing customs documentation. We work with trusted freight forwarders for sea, air, and express shipments.',
    includes: [
      'Freight forwarder coordination (sea, air, express)',
      'Export documentation preparation',
      'Customs clearance support',
      'Cargo insurance arrangement',
      'Delivery tracking and updates',
    ],
    color: 'bg-sky-50',
    iconColor: 'text-sky-700',
  },
  {
    id: 'consulting',
    icon: BarChart3,
    title: 'Sourcing Consulting',
    tagline: 'Strategic advice for your supply chain',
    description: 'For businesses looking to build a long-term China sourcing strategy, we offer consulting services covering supplier diversification, cost optimization, and risk management.',
    includes: [
      'Supply chain risk assessment',
      'Supplier diversification strategy',
      'Cost benchmarking and optimization',
      'Compliance and certification guidance',
      'Ongoing sourcing partnership',
    ],
    color: 'bg-purple-50',
    iconColor: 'text-purple-700',
  },
];

export default function Services() {
  return (
    <div className="bg-white">
      {/* Page header */}
      <div className="bg-slate-900 text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-blue-400 text-xs font-semibold uppercase tracking-widest">Our Services</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
              China Sourcing Services for Global Buyers
            </h1>
            <p className="text-slate-400 text-lg">
              From finding the right supplier to delivering goods to your door — we manage every step of the China sourcing process.
            </p>
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="space-y-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-start ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${service.color}`}>
                    <Icon className={`w-7 h-7 ${service.iconColor}`} />
                  </div>
                  <span className="text-blue-700 text-xs font-semibold uppercase tracking-widest">{service.tagline}</span>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-2 mb-4">{service.title}</h2>
                  <p className="text-slate-500 leading-relaxed mb-6">{service.description}</p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg text-sm transition-colors"
                  >
                    Enquire About This Service <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                <div className={`bg-slate-50 rounded-2xl p-8 border border-slate-100 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-5">What's Included</h3>
                  <ul className="space-y-3">
                    {service.includes.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-600 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-blue-700 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Not sure which service you need?</h2>
          <p className="text-blue-200 mb-8">Tell us about your project and we'll recommend the right approach.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors"
          >
            Get a Free Consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
