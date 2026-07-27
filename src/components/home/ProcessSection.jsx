import { Link } from 'react-router-dom';
import { Search, Factory, ClipboardCheck, Truck, CheckCircle } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Tell Us Your Requirements',
    description: 'Share your product specifications, quantity, budget, and timeline. We analyze your needs and create a sourcing strategy.',
  },
  {
    number: '02',
    icon: Factory,
    title: 'We Find & Verify Suppliers',
    description: 'We identify suitable manufacturers, conduct factory audits, verify licenses, and present you with verified options.',
  },
  {
    number: '03',
    icon: ClipboardCheck,
    title: 'Quality Control & Production',
    description: 'We place orders, monitor production, and perform quality inspections at key stages to ensure compliance.',
  },
  {
    number: '04',
    icon: Truck,
    title: 'Shipping & Delivery',
    description: 'We coordinate freight forwarding, handle documentation, and track your shipment until it arrives at your doorstep.',
  },
];

const ProcessSection = () => {
  return (
    <section className="section-spacing bg-neutral-50" id="process">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="badge-accent mb-4">Our Process</span>
          <h2 className="section-heading mb-4">
            How We Help You Source from China
          </h2>
          <p className="section-subheading mx-auto">
            Our proven 4-step process simplifies China sourcing and minimizes risks for your business.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="relative">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-neutral-200 -translate-x-1/2 z-0" />
                )}

                <div className="relative bg-white rounded-xl p-6 shadow-sm h-full">
                  {/* Step Number */}
                  <div className="flex items-center gap-4 mb-5">
                    <div className="relative">
                      <div className="w-12 h-12 bg-primary-800 rounded-xl flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="absolute -top-2 -right-2 w-6 h-6 bg-accent-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                        {index + 1}
                      </span>
                    </div>
                    <span className="text-4xl font-bold text-neutral-100">{step.number}</span>
                  </div>

                  <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link to="/how-it-works" className="btn-primary">
            Learn More About Our Process
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
