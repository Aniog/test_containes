import { MessageSquare, Search, ShieldCheck, ClipboardCheck, Truck, Headphones } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Tell Us What You Need',
    description: 'Share your product specifications, target price, quantity, and delivery timeline. We will review your requirements and ask any clarifying questions.',
  },
  {
    number: '02',
    icon: Search,
    title: 'Supplier Research',
    description: 'Our team identifies and evaluates potential suppliers, comparing pricing, capacity, certifications, and past performance to create a shortlist.',
  },
  {
    number: '03',
    icon: ShieldCheck,
    title: 'Factory Verification',
    description: 'We visit factories in person to verify legitimacy, inspect production lines, check quality systems, and confirm they can meet your requirements.',
  },
  {
    number: '04',
    icon: ClipboardCheck,
    title: 'Sampling & Approval',
    description: 'Product samples are arranged and shipped to you for review. We coordinate any revisions until you approve the final specification.',
  },
  {
    number: '05',
    icon: Truck,
    title: 'Production & Shipping',
    description: 'We monitor production quality, arrange final inspection, handle packaging, and coordinate international shipping to your destination.',
  },
  {
    number: '06',
    icon: Headphones,
    title: 'Ongoing Support',
    description: 'After delivery, we remain available for reorders, quality issues, new product development, and any sourcing questions you may have.',
  },
];

export default function ProcessSection() {
  return (
    <section className="section-padding bg-gray-50" id="process">
      <div className="container-max">
        <SectionHeading
          badge="How It Works"
          title="A Simple, Transparent Sourcing Process"
          description="Six clear steps from initial inquiry to delivery. You stay informed at every stage with direct communication and regular updates."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div key={step.number} className="relative flex gap-5">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-white rounded-xl border-2 border-navy-100 flex items-center justify-center shadow-sm">
                  <step.icon className="w-6 h-6 text-navy-500" />
                </div>
              </div>
              <div>
                <span className="text-xs font-bold text-accent-500 uppercase tracking-wider">Step {step.number}</span>
                <h3 className="text-lg font-bold text-navy-500 mt-1 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
