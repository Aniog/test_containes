import { MessageSquare, Search, Building2, ClipboardCheck, Package, Ship } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    step: '01',
    title: 'Share Your Requirements',
    description: 'Tell us what you need: product specs, quantity, target price, and timeline.',
  },
  {
    icon: Search,
    step: '02',
    title: 'Supplier Sourcing & Verification',
    description: 'We find qualified suppliers and verify their credentials, capacity, and quality systems.',
  },
  {
    icon: Building2,
    step: '03',
    title: 'Sample Confirmation',
    description: 'We coordinate sample production and shipping so you can evaluate quality before ordering.',
  },
  {
    icon: ClipboardCheck,
    step: '04',
    title: 'Production & Quality Control',
    description: 'We monitor production and conduct inspections at key stages to ensure quality standards.',
  },
  {
    icon: Package,
    step: '05',
    title: 'Consolidation & Shipping',
    description: 'We consolidate orders, handle documentation, and arrange shipping to your destination.',
  },
  {
    icon: Ship,
    step: '06',
    title: 'Delivery & Follow-up',
    description: 'Track your shipment and receive support until goods arrive at your warehouse.',
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="section-padding bg-white">
      <div className="container-custom">
        <div className="section-header">
          <h2 id="process-title" className="section-title">How Our Sourcing Process Works</h2>
          <p id="process-subtitle" className="section-subtitle">
            A clear, transparent process from your first inquiry to final delivery.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-orange-300 to-transparent z-0" style={{ width: 'calc(100% - 4rem)' }}></div>
              )}
              
              <div className="relative z-10">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center">
                      <step.icon className="w-8 h-8 text-orange-600" />
                    </div>
                    <span className="text-xs font-bold text-orange-600 mt-2 block text-center">Step {step.step}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">{step.title}</h3>
                    <p className="text-slate-600">{step.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
