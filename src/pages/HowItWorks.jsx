import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, MessageSquare, Search, FileText, Package, ClipboardCheck, Truck } from 'lucide-react';

const phases = [
  {
    num: '01',
    icon: MessageSquare,
    title: 'Submit Your Inquiry',
    duration: 'Day 1',
    desc: 'Fill out our sourcing request form with your product details, target price, quantity, and any specific requirements. The more detail you provide, the faster we can match you with the right suppliers.',
    details: [
      'Product name, category, and description',
      'Target unit price and order quantity',
      'Required certifications or compliance standards',
      'Delivery timeline and destination',
      'Any existing supplier references or samples',
    ],
  },
  {
    num: '02',
    icon: Search,
    title: 'Supplier Research & Screening',
    duration: 'Days 2–7',
    desc: 'Our team researches suppliers from our verified network, trade databases, and industry contacts. We screen each candidate against your requirements before presenting a shortlist.',
    details: [
      'Search across verified supplier databases',
      'Initial contact and capability assessment',
      'Background and registration checks',
      'Shortlist of 3–5 qualified suppliers',
      'Summary report with supplier profiles',
    ],
  },
  {
    num: '03',
    icon: FileText,
    title: 'Quotation & Sample Arrangement',
    duration: 'Days 7–14',
    desc: 'We collect detailed quotations from shortlisted suppliers and arrange product samples for your evaluation. We review quotes for accuracy and flag any concerns before forwarding to you.',
    details: [
      'Detailed price quotes from each supplier',
      'Sample requests and consolidation',
      'Quote comparison and analysis',
      'Recommendation with rationale',
      'Sample shipment to your location',
    ],
  },
  {
    num: '04',
    icon: Package,
    title: 'Order Placement & Production',
    duration: 'Weeks 2–8 (varies)',
    desc: 'Once you select a supplier and confirm the order, we assist with contract review, deposit payment coordination, and production monitoring. We track milestones and send regular updates.',
    details: [
      'Purchase order and contract review',
      'Production schedule confirmation',
      'Regular milestone updates',
      'Issue escalation and resolution',
      'Photo and video progress reports',
    ],
  },
  {
    num: '05',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    duration: 'Before shipment',
    desc: 'Our QC inspectors visit the factory before goods are shipped. We check finished products against your specifications using AQL sampling standards and provide a detailed inspection report.',
    details: [
      'Pre-shipment inspection at factory',
      'AQL sampling and defect classification',
      'Dimensions, materials, and workmanship check',
      'Packaging and labeling verification',
      'Pass/fail report with photos',
    ],
  },
  {
    num: '06',
    icon: Truck,
    title: 'Shipping & Delivery',
    duration: 'Final stage',
    desc: 'We coordinate with freight forwarders to arrange sea or air shipment, prepare export documentation, and track your cargo to destination. We keep you informed at every step.',
    details: [
      'Freight forwarder coordination',
      'Export documentation (commercial invoice, packing list, B/L)',
      'Sea freight or air freight options',
      'Cargo tracking and updates',
      'Delivery confirmation',
    ],
  },
];

export default function HowItWorks() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-red-300 uppercase tracking-wider mb-3">Our Process</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">How It Works</h1>
          <p className="text-lg text-blue-200 max-w-2xl mx-auto">
            A transparent, step-by-step process designed to give you full visibility and control over your China sourcing project.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {phases.map((phase, i) => {
              const Icon = phase.icon;
              return (
                <div key={phase.num} className="relative">
                  {i < phases.length - 1 && (
                    <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-gray-100 hidden md:block" />
                  )}
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center text-white font-bold text-sm relative z-10">
                        {phase.num}
                      </div>
                    </div>
                    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-3">
                        <div className="flex items-center gap-2">
                          <Icon className="w-5 h-5 text-navy" />
                          <h2 className="text-lg font-bold text-navy">{phase.title}</h2>
                        </div>
                        <span className="text-xs font-semibold bg-navy-light text-navy px-3 py-1 rounded-full sm:ml-auto">
                          {phase.duration}
                        </span>
                      </div>
                      <p className="text-text-muted text-sm leading-relaxed mb-4">{phase.desc}</p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {phase.details.map((d) => (
                          <li key={d} className="flex items-start gap-2 text-sm text-text-dark">
                            <CheckCircle className="w-4 h-4 text-brand-red mt-0.5 shrink-0" />
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-navy text-center mb-10">What to Expect Working With Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Dedicated Point of Contact', desc: 'You work with one account manager who knows your project from start to finish.' },
              { title: 'Regular Written Updates', desc: 'We send structured updates at each milestone so you always know the status.' },
              { title: 'Transparent Pricing', desc: 'Our fees are agreed upfront. No hidden charges or surprise invoices.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 text-center">
                <h3 className="font-semibold text-navy mb-2">{item.title}</h3>
                <p className="text-sm text-text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-red">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-red-100 mb-8">Submit your sourcing request and we'll respond within 24 hours.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-brand-red font-bold px-8 py-4 rounded-lg transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
