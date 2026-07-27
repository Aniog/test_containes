import { Link } from 'react-router-dom';
import { ArrowRight, FileText, Search, Factory, ClipboardCheck, Ship, CheckCircle } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: FileText,
    title: 'Initial Consultation & Briefing',
    duration: '2-3 business days',
    desc: 'Share your product details — specifications, target price, order quantity, quality requirements, and timeline. Our team analyzes your needs and prepares a customized sourcing strategy. We sign an NDA to protect your information.',
    deliverables: ['Sourcing brief document', 'Project timeline estimate', 'Fee quotation'],
  },
  {
    number: '02',
    icon: Search,
    title: 'Supplier Identification & Shortlisting',
    duration: '1-2 weeks',
    desc: 'We search our database of 10,000+ suppliers and industry networks across China. After screening 10-15 candidates, we present you with a shortlist of 3-5 best-match factories, complete with profiles, capability summaries, and our recommendations.',
    deliverables: ['Supplier shortlist report', 'Factory capability comparison', 'Preliminary pricing estimates'],
  },
  {
    number: '03',
    icon: Factory,
    title: 'Factory Audit & Verification',
    duration: '1-2 weeks',
    desc: 'Our team visits each shortlisted factory in person. We audit production facilities, verify certifications, assess QC systems, evaluate management, and check export experience. You receive a comprehensive audit report with photos and risk assessment.',
    deliverables: ['Factory audit reports', 'Photo documentation', 'Certification verification', 'Risk assessment'],
  },
  {
    number: '04',
    icon: ClipboardCheck,
    title: 'Sampling, Negotiation & Order Placement',
    duration: '2-4 weeks',
    desc: 'We coordinate sample production with your chosen factory, collect your feedback, and manage revisions until approval. We then negotiate final terms — pricing, payment schedule, lead time, and quality standards — and facilitate the purchase agreement.',
    deliverables: ['Production samples', 'Negotiated contract terms', 'Purchase order confirmation'],
  },
  {
    number: '05',
    icon: ClipboardCheck,
    title: 'Production Monitoring & QC',
    duration: 'Based on product lead time',
    desc: 'Throughout production, we conduct regular inspections: pre-production sample check, in-line inspection during production, and a final pre-shipment inspection. You receive weekly progress reports with photos, data, and status updates.',
    deliverables: ['Weekly progress reports', 'Inspection reports with photos', 'Production tracking dashboard'],
  },
  {
    number: '06',
    icon: Ship,
    title: 'Shipping, Delivery & After-Sales',
    duration: '2-6 weeks (depending on mode)',
    desc: 'We manage logistics: freight booking, documentation, customs clearance, and final delivery. After delivery, we remain available for any post-delivery issues, reorders, or ongoing supplier management needs.',
    deliverables: ['Shipping documentation packet', 'Real-time shipment tracking', 'Delivery confirmation', 'Post-delivery support plan'],
  },
];

export default function HowItWorks() {
  return (
    <div>
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            How It Works
          </h1>
          <p className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto">
            A proven, transparent process designed to minimize your risk and maximize your sourcing success.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-0">
            {steps.map((step, idx) => (
              <div key={step.number} className="relative flex gap-6 pb-12 last:pb-0">
                {idx < steps.length - 1 && (
                  <div className="absolute left-[23px] top-12 bottom-0 w-0.5 bg-gray-200" />
                )}
                <div className="relative z-10 w-12 h-12 bg-brand-navy rounded-full flex items-center justify-center shrink-0">
                  <span className="text-white font-bold text-sm">{step.number}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                    <span className="text-xs font-medium text-brand-red bg-red-50 px-2.5 py-0.5 rounded-full shrink-0 self-start sm:self-auto">
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-4">{step.desc}</p>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Deliverables</p>
                    <ul className="space-y-1.5">
                      {step.deliverables.map((d) => (
                        <li key={d} className="flex items-start gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-green-600 shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700">{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Typical Timeline
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            From initial consultation to your first order, most projects take 4-8 weeks for the sourcing phase.
            Production lead time varies by product.
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-sm font-semibold bg-brand-red text-white hover:bg-brand-red-light transition-colors"
            >
              Start Your Project Today
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
