import { Link } from 'react-router-dom';

const steps = [
  {
    number: '01',
    title: 'Tell Us Your Needs',
    desc: 'Share your product specifications, target price, order quantity, and quality requirements. We analyze and prepare a sourcing plan.',
  },
  {
    number: '02',
    title: 'Supplier Identification',
    desc: 'We search our database and network to identify 3-5 qualified manufacturers. You receive a shortlist with profiles and comparison.',
  },
  {
    number: '03',
    title: 'Factory Audit & Verification',
    desc: 'Our team visits each shortlisted factory. We verify certifications, production lines, QC processes, and export history.',
  },
  {
    number: '04',
    title: 'Sampling & Negotiation',
    desc: 'We coordinate sample production, collect your feedback, and negotiate the best terms — pricing, payment, lead time.',
  },
  {
    number: '05',
    title: 'Production & QC',
    desc: 'We monitor production with regular inspections. You receive weekly progress reports with photos and data.',
  },
  {
    number: '06',
    title: 'Shipping & Delivery',
    desc: 'We handle logistics, documentation, and customs clearance. Your goods arrive at your door, on time.',
  },
];

export default function HomeHowItWorks() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            How We Work
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            A proven 6-step process that takes your sourcing from idea to delivery.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="relative bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <span className="text-4xl font-bold text-brand-navy/10">{step.number}</span>
              <h3 className="text-lg font-semibold text-gray-900 mt-2 mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/how-it-works"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-sm font-semibold bg-brand-navy text-white hover:bg-brand-navy-light transition-colors"
          >
            Learn More About Our Process
          </Link>
        </div>
      </div>
    </section>
  );
}
