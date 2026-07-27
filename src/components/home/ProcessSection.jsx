import { ClipboardList, Search, ShieldCheck, ClipboardCheck, Truck, PackageCheck } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: ClipboardList,
    title: 'Submit Your Inquiry',
    description: 'Tell us what you need — product specs, quantity, target price, and delivery requirements.',
  },
  {
    number: '02',
    icon: Search,
    title: 'We Find Suppliers',
    description: 'Our team researches and shortlists 3-5 qualified manufacturers that match your criteria.',
  },
  {
    number: '03',
    icon: ShieldCheck,
    title: 'Verify & Quote',
    description: 'We audit factories, negotiate pricing, and present you with verified options and quotes.',
  },
  {
    number: '04',
    icon: ClipboardCheck,
    title: 'Quality Control',
    description: 'Inspections at every stage — raw materials, production, pre-shipment, and container loading.',
  },
  {
    number: '05',
    icon: Truck,
    title: 'Shipping & Delivery',
    description: 'We coordinate freight, handle customs paperwork, and track your shipment to your door.',
  },
  {
    number: '06',
    icon: PackageCheck,
    title: 'After-Sales Support',
    description: 'We remain available for disputes, reorders, and any post-delivery issues that arise.',
  },
];

export default function ProcessSection() {
  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 id="process-title" className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            How Our Sourcing Process Works
          </h2>
          <p id="process-subtitle" className="text-lg text-text-secondary max-w-2xl mx-auto">
            A transparent, step-by-step process designed to minimize risk and maximize results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <div className="bg-background rounded-xl p-8 border border-border h-full">
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-3xl font-extrabold text-border">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
