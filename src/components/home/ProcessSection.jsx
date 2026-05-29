import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHeader from '../shared/SectionHeader';

const steps = [
  {
    number: '01',
    title: 'Submit Your Sourcing Request',
    description: 'Tell us what you need — product specs, target price, quantity, and timeline. We respond within 24 hours.',
  },
  {
    number: '02',
    title: 'Supplier Research & Shortlist',
    description: 'Our team identifies 3–5 qualified suppliers from our verified network and presents you with a comparison report.',
  },
  {
    number: '03',
    title: 'Factory Audit & Samples',
    description: 'We visit shortlisted factories, verify credentials, and arrange sample production for your review.',
  },
  {
    number: '04',
    title: 'Order Placement & Production Follow-up',
    description: 'Once you approve, we place the order, monitor production milestones, and report progress weekly.',
  },
  {
    number: '05',
    title: 'Quality Inspection',
    description: 'Before shipment, our inspectors check goods against your specifications and issue a detailed QC report.',
  },
  {
    number: '06',
    title: 'Shipping & Delivery',
    description: 'We arrange freight, handle export documentation, and track your shipment until it reaches your door.',
  },
];

export default function ProcessSection() {
  return (
    <section className="section-gray">
      <div className="container-xl">
        <SectionHeader
          label="How It Works"
          title="A Clear, Managed Sourcing Process"
          subtitle="We follow a structured 6-step process to reduce risk and keep you informed at every stage."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div key={step.number} className="relative bg-white rounded-xl border border-slate-200 p-6 hover:shadow-md transition-shadow duration-200">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#1A3C6E] text-white rounded-xl flex items-center justify-center font-bold text-sm">
                  {step.number}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-2 text-base">{step.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-slate-300 z-10" />
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/how-it-works" className="btn-primary">
            See Full Process Details
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
