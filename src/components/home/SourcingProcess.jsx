import { MessageSquare, Search, ShieldCheck, ClipboardCheck, Ship, ThumbsUp } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    num: '01',
    title: 'Tell Us What You Need',
    desc: 'Share your product specifications, target price, quantity, and quality requirements. We respond within 24 hours.',
  },
  {
    icon: Search,
    num: '02',
    title: 'Supplier Identification',
    desc: 'We search our verified supplier network and market resources to find 3-5 qualified factories that match your criteria.',
  },
  {
    icon: ShieldCheck,
    num: '03',
    title: 'Factory Verification',
    desc: 'We conduct on-site audits to verify each supplier\'s capabilities, certifications, and production conditions.',
  },
  {
    icon: ClipboardCheck,
    num: '04',
    title: 'Sample & Quality Check',
    desc: 'We arrange samples, evaluate quality, and confirm specifications before production begins.',
  },
  {
    icon: Ship,
    num: '05',
    title: 'Production & Inspection',
    desc: 'We monitor production progress and conduct inspections at key milestones to ensure quality and timing.',
  },
  {
    icon: ThumbsUp,
    num: '06',
    title: 'Shipping & Delivery',
    desc: 'We coordinate logistics, handle documentation, and track your shipment until it reaches your door.',
  },
];

export default function SourcingProcess() {
  return (
    <section className="py-16 md:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            How Our Sourcing Process Works
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            A clear, step-by-step process that keeps you informed and in control from start to finish.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step) => (
            <div key={step.num} className="relative p-6 md:p-8 bg-white rounded-lg border border-border">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl font-bold text-accent/30">{step.num}</span>
                <div className="w-10 h-10 bg-primary/5 rounded-lg flex items-center justify-center">
                  <step.icon className="w-5 h-5 text-primary" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">{step.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
