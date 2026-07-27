import { MessageSquare, Search, Factory, ShieldCheck, Ship, CheckCircle } from 'lucide-react';
import SectionHeader from '../shared/SectionHeader';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Submit Your Inquiry',
    description: 'Tell us what you need — product type, specifications, target price, and quantity. We respond within 24 hours.',
  },
  {
    number: '02',
    icon: Search,
    title: 'Supplier Research',
    description: 'We search our verified network and identify 3–5 qualified manufacturers that match your requirements.',
  },
  {
    number: '03',
    icon: Factory,
    title: 'Factory Audit',
    description: 'We visit shortlisted factories in person to verify credentials, capacity, and quality standards.',
  },
  {
    number: '04',
    icon: ShieldCheck,
    title: 'Sample & QC',
    description: 'We arrange samples, review them against your specs, and conduct pre-shipment quality inspections.',
  },
  {
    number: '05',
    icon: Ship,
    title: 'Shipping & Delivery',
    description: 'We coordinate freight, handle export documentation, and track your shipment to final destination.',
  },
  {
    number: '06',
    icon: CheckCircle,
    title: 'After-Sales Support',
    description: 'We follow up on delivery and help resolve any post-shipment issues with the supplier.',
  },
];

const ProcessSection = () => {
  return (
    <section className="py-16 md:py-24 bg-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Our Process"
          title="How We Source for You"
          subtitle="A structured, transparent process designed to reduce risk and save you time at every stage."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="bg-white rounded-xl p-6 border border-neutral-200 hover:shadow-md transition-shadow relative">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-brand-navy rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-brand-sky uppercase tracking-widest">{step.number}</span>
                    <h3 className="text-lg font-bold text-neutral-900 mt-1 mb-2">{step.title}</h3>
                    <p className="text-neutral-600 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-neutral-300 text-xl">→</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
