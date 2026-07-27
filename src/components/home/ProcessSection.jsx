import { MessageSquare, FileText, Search, Building2, ClipboardCheck, Ship, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    title: 'Submit Your Request',
    description: 'Tell us what you need: product details, quantity, target price, and timeline.',
  },
  {
    icon: FileText,
    title: 'Receive a Quote',
    description: 'We analyze your requirements and provide a transparent sourcing plan with costs.',
  },
  {
    icon: Search,
    title: 'Supplier Matching',
    description: 'We identify and shortlist verified manufacturers that match your criteria.',
  },
  {
    icon: Building2,
    title: 'Factory Verification',
    description: 'Our team visits factories to confirm capabilities, quality systems, and legitimacy.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Control',
    description: 'Inspections at every stage ensure products meet your specifications before shipping.',
  },
  {
    icon: Ship,
    title: 'Shipping & Delivery',
    description: 'We handle logistics, customs, and documentation until goods reach your warehouse.',
  },
];

export default function ProcessSection() {
  return (
    <section className="section-padding bg-secondary/50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">How Our Sourcing Process Works</h2>
          <p className="section-subtitle">
            A clear, step-by-step approach from your initial inquiry to final delivery.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <step.icon className="w-5 h-5 text-primary" />
                    <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-12 w-full h-px bg-border" style={{ transform: 'translateX(24px)' }} />
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <CheckCircle className="w-5 h-5 text-green-600" />
          <span>Transparent pricing at every step. No hidden fees.</span>
        </div>
      </div>
    </section>
  );
}
