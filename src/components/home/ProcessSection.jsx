import { ArrowRight } from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';
import CTAButton from '@/components/shared/CTAButton';

const steps = [
  {
    number: '01',
    title: 'Submit Your Inquiry',
    desc: 'Fill in our sourcing form with your product details, target price, quantity, and timeline. No commitment required.',
  },
  {
    number: '02',
    title: 'We Research Suppliers',
    desc: 'Our team identifies and vets 3–5 qualified manufacturers from our verified supplier network and trade databases.',
  },
  {
    number: '03',
    title: 'Factory Audit & Samples',
    desc: 'We visit shortlisted factories, verify credentials, and arrange product samples for your review and approval.',
  },
  {
    number: '04',
    title: 'Order & Production',
    desc: 'Once you confirm, we place the order, negotiate terms, and monitor production with regular status updates.',
  },
  {
    number: '05',
    title: 'Quality Inspection',
    desc: 'Before shipment, our QC team inspects goods against your specifications and provides a detailed inspection report.',
  },
  {
    number: '06',
    title: 'Shipping & Delivery',
    desc: 'We coordinate freight, handle export documentation, and track your shipment until it arrives at your destination.',
  },
];

export default function ProcessSection() {
  return (
    <section className="py-20 md:py-28 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Sourcing Process"
          title="How We Source for You"
          subtitle="A clear, structured process from inquiry to delivery — designed to minimize risk and maximize efficiency."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div key={step.number} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm relative">
              <div className="text-5xl font-bold text-slate-100 absolute top-4 right-5 select-none">{step.number}</div>
              <div className="relative">
                <div className="w-10 h-10 bg-brand-blue text-white rounded-lg flex items-center justify-center font-bold text-sm mb-4">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold text-brand-navy mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <CTAButton to="/how-it-works" variant="primary">
            Learn More About Our Process
            <ArrowRight className="w-4 h-4 ml-2" />
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
