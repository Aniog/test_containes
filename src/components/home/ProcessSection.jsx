import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHeader from '../shared/SectionHeader';

const steps = [
  {
    number: '01',
    title: 'Submit Your Sourcing Request',
    desc: 'Fill in our inquiry form with your product details, target price, quantity, and any certifications required. No commitment needed at this stage.',
  },
  {
    number: '02',
    title: 'Supplier Research & Shortlisting',
    desc: 'Our team researches the market, contacts manufacturers, and presents you with a shortlist of qualified suppliers with pricing and lead times.',
  },
  {
    number: '03',
    title: 'Factory Audit & Sample Review',
    desc: 'We visit shortlisted factories, verify their capabilities, and arrange samples for your review. You approve before any order is placed.',
  },
  {
    number: '04',
    title: 'Order Placement & Production Monitoring',
    desc: 'Once you confirm, we place the order, negotiate terms, and monitor production with regular updates and factory visits.',
  },
  {
    number: '05',
    title: 'Quality Inspection',
    desc: 'Before shipment, our inspectors check goods against your specifications. You receive a full inspection report with photos.',
  },
  {
    number: '06',
    title: 'Shipping & Delivery',
    desc: 'We coordinate with freight forwarders, prepare export documents, and track your shipment until it reaches your warehouse.',
  },
];

export default function ProcessSection() {
  return (
    <section className="py-20 md:py-28 bg-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          overline="Our Process"
          title="How We Source for You"
          subtitle="A structured, transparent process from first inquiry to final delivery — designed to reduce risk and save you time."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div key={step.number} className="bg-white rounded-xl p-6 border border-neutral-200 relative">
              <span className="text-5xl font-black text-neutral-200 absolute top-4 right-5 select-none">
                {step.number}
              </span>
              <div className="w-8 h-8 bg-brand-blue rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-xs font-bold">{i + 1}</span>
              </div>
              <h3 className="text-neutral-900 font-bold text-base mb-2 pr-8">{step.title}</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/how-it-works"
            className="inline-flex items-center gap-2 bg-brand-blue text-white font-semibold px-6 py-3 rounded-lg text-sm hover:bg-brand-sky transition-colors"
          >
            See the full process
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
