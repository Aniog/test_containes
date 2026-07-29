import { MessageSquare, Search, FileCheck, Factory, ClipboardList, Truck } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Share Your Requirements',
    description: 'Tell us what product you need, target price, quantity, and quality standards.',
  },
  {
    number: '02',
    icon: Search,
    title: 'Supplier Research',
    description: 'We search our network and market to find 3-5 qualified suppliers matching your criteria.',
  },
  {
    number: '03',
    icon: FileCheck,
    title: 'Quote Comparison',
    description: 'Receive detailed quotations with breakdowns. We help you evaluate and negotiate.',
  },
  {
    number: '04',
    icon: Factory,
    title: 'Factory Verification',
    description: 'We visit the factory on-site to verify capabilities, certifications, and working conditions.',
  },
  {
    number: '05',
    icon: ClipboardList,
    title: 'QC & Production Monitoring',
    description: 'Regular inspections and reports during production to catch issues early.',
  },
  {
    number: '06',
    icon: Truck,
    title: 'Shipping & Delivery',
    description: 'We coordinate packing, documentation, customs, and freight to your destination.',
  },
];

export default function ProcessSection() {
  return (
    <section className="py-20 bg-surface">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Our Process</p>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            How It Works
          </h2>
          <p className="text-text-secondary text-lg">
            A clear, step-by-step process designed to save you time, reduce risk, and ensure quality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <div className="flex items-start gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center shrink-0">
                    <step.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="w-px h-full bg-border mt-2 hidden lg:block" />
                </div>
                <div className="pb-8">
                  <span className="text-xs font-bold text-primary/50 uppercase tracking-wider">{step.number}</span>
                  <h3 className="text-lg font-semibold text-text-primary mt-1 mb-2">{step.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
