import { Link } from 'react-router-dom';
import {
  Search, Shield, ClipboardCheck, Truck, FileSearch, Ship,
  ArrowRight, CheckCircle, HardHat, Factory, Package, BarChart3,
  Globe, Users, ClipboardList
} from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing & Identification',
    desc: 'We find the right manufacturers for your products. Using our extensive database and on-the-ground network, we identify suppliers that match your specific requirements for quality, capacity, pricing, and certifications.',
    features: [
      'Targeted supplier search based on your product specs',
      'Verification of business licenses and trade capacity',
      'Comparison of pricing, MOQs, and lead times',
      'Shortlist of 3-5 qualified candidates with detailed profiles'
    ]
  },
  {
    icon: HardHat,
    title: 'Factory Audits & Verification',
    desc: 'We go beyond paperwork with physical on-site audits. Our team visits factory premises to verify capabilities, working conditions, and compliance with international standards.',
    features: [
      'On-site inspection of production facilities and equipment',
      'Evaluation of quality management systems (ISO, CE, etc.)',
      'Assessment of workforce size, skills, and capacity',
      'Social compliance and environmental practice review'
    ]
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Control & Inspection',
    desc: 'Comprehensive inspection services at every production stage to ensure your products meet agreed specifications before shipment.',
    features: [
      'Raw material inspection before production starts',
      'During-production (DUPRO) inspection at key milestones',
      'Pre-shipment inspection (PSI) with AQL sampling',
      'Container loading supervision'
    ]
  },
  {
    icon: BarChart3,
    title: 'Production Monitoring',
    desc: 'Stay informed throughout the entire production cycle with regular updates, milestone tracking, and proactive issue resolution.',
    features: [
      'Weekly production progress reports with photos',
      'Milestone tracking against production schedule',
      'Real-time alerts for delays or quality issues',
      'On-site problem resolution when issues arise'
    ]
  },
  {
    icon: Ship,
    title: 'Shipping & Logistics Coordination',
    desc: 'End-to-end logistics management from factory floor to your warehouse. We handle all documentation, customs clearance, and freight coordination.',
    features: [
      'Sea freight, air freight, and express shipping options',
      'Customs documentation and clearance processing',
      'Consolidation and warehousing services',
      'Real-time tracking updates until delivery'
    ]
  },
  {
    icon: FileSearch,
    title: 'Sourcing Strategy & Consulting',
    desc: 'Strategic advice to optimize your China supply chain, reduce costs, and mitigate risks. Ideal for businesses scaling their sourcing operations.',
    features: [
      'Market analysis and cost benchmarking',
      'Supply chain optimization recommendations',
      'Risk assessment and mitigation planning',
      'Supplier diversification strategy'
    ]
  },
];

export default function Services() {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-slate-900 via-brand-900 to-slate-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Our Services</h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
              End-to-end China sourcing services designed to help global buyers source products efficiently, with confidence and complete peace of mind.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((svc, i) => (
              <div key={i} className={`md:flex gap-10 lg:gap-16 items-start ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className="md:w-1/2 mb-6 md:mb-0">
                  <div className="w-14 h-14 bg-brand-50 rounded-xl flex items-center justify-center mb-4">
                    <svc.icon className="w-7 h-7 text-brand-800" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">{svc.title}</h2>
                  <p className="text-slate-600 leading-relaxed mb-5">{svc.desc}</p>
                  <ul className="space-y-2.5">
                    {svc.features.map((feat, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-700">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="md:w-1/2 bg-slate-50 rounded-xl border border-slate-200 p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <BarChart3 className="w-5 h-5 text-brand-700" />
                    <span className="font-semibold text-slate-900">How It Benefits You</span>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-slate-600">
                      <ArrowRight className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                      Save weeks of research and communication time
                    </li>
                    <li className="flex items-start gap-3 text-sm text-slate-600">
                      <ArrowRight className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                      Reduce supplier risk through verified partners
                    </li>
                    <li className="flex items-start gap-3 text-sm text-slate-600">
                      <ArrowRight className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                      Competitive pricing backed by local market knowledge
                    </li>
                    <li className="flex items-start gap-3 text-sm text-slate-600">
                      <ArrowRight className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                      Full transparency with regular reporting
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-brand-800 to-brand-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need a Specific Service?</h2>
          <p className="text-lg text-brand-200 mb-8 max-w-xl mx-auto">
            We customize our services to your unique needs. Contact us for a tailored sourcing solution.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent-600 hover:bg-accent-500 text-white font-semibold px-8 py-3.5 rounded-lg text-lg transition-colors"
          >
            Contact Us for a Free Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}