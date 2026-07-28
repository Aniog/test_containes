import { Search, ClipboardCheck, Factory, Package, Truck, Headphones } from 'lucide-react';

const steps = [
  {
    step: 1,
    icon: Search,
    title: 'Requirement Analysis',
    description: 'Share your product specs, budget, and target markets. We clarify sourcing scope and create a plan.',
  },
  {
    step: 2,
    icon: Factory,
    title: 'Supplier Search & Screening',
    description: 'We identify and pre-screen qualified suppliers that match your specific requirements.',
  },
  {
    step: 3,
    icon: ClipboardCheck,
    title: 'Factory Audit',
    description: 'On-site verification of supplier capabilities, certifications, production lines, and quality systems.',
  },
  {
    step: 4,
    icon: Package,
    title: 'Sample & Production',
    description: 'Coordinate samples, get your approval, then manage production with regular quality checks.',
  },
  {
    step: 5,
    icon: Truck,
    title: 'Inspection & Shipping',
    description: 'Pre-shipment inspection, arrange logistics, handle documentation, and track delivery.',
  },
  {
    step: 6,
    icon: Headphones,
    title: 'After-Sales Support',
    description: 'Post-delivery follow-up, handle any issues, and maintain supplier relationships for repeat orders.',
  },
];

export default function ProcessSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How We Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A structured, transparent process designed to minimize risk and maximize results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.step} className="relative flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="w-px h-full bg-border mt-2 hidden lg:block" />
              </div>
              <div className="pb-8">
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">Step {step.step}</span>
                <h3 className="text-lg font-semibold text-foreground mt-1 mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}