import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHeader from '../shared/SectionHeader';

const steps = [
  {
    number: '01',
    title: 'Submit Your Inquiry',
    description:
      'Tell us what you want to source — product type, specifications, target price, and quantity. We respond within 24 hours.',
  },
  {
    number: '02',
    title: 'Supplier Research',
    description:
      'Our team searches our verified supplier network and identifies 3–5 qualified manufacturers that match your requirements.',
  },
  {
    number: '03',
    title: 'Factory Audit',
    description:
      'We visit shortlisted factories in person to verify their capabilities, certifications, and production quality.',
  },
  {
    number: '04',
    title: 'Sampling & Approval',
    description:
      'Samples are produced and inspected. We send you detailed reports and photos before you approve production.',
  },
  {
    number: '05',
    title: 'Production Monitoring',
    description:
      'We follow up with the factory throughout production, providing regular updates and resolving any issues early.',
  },
  {
    number: '06',
    title: 'QC Inspection & Shipping',
    description:
      'Final quality inspection before shipment. We coordinate with freight forwarders and handle all export documentation.',
  },
];

export default function ProcessSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="How It Works"
          title="A Clear, Structured Sourcing Process"
          subtitle="We follow a proven 6-step process to ensure every sourcing project is handled professionally and transparently."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 rounded-full bg-brand-blue/10 border-2 border-brand-blue flex items-center justify-center">
                  <span className="text-brand-blue font-bold text-sm">{step.number}</span>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-[calc(100%+1rem)] w-8 border-t-2 border-dashed border-slate-200" />
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/how-it-works"
            className="inline-flex items-center gap-2 text-brand-blue font-semibold text-sm hover:underline"
          >
            See the full process <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
