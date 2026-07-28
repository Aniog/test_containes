import { MessageSquare, Search, ClipboardCheck, Package, Truck, Handshake } from 'lucide-react';

const steps = [
  {
    step: '01',
    icon: MessageSquare,
    title: 'Share Your Requirements',
    desc: 'Tell us what you need—product specs, target price, order quantity. We review and respond within 24 hours.',
  },
  {
    step: '02',
    icon: Search,
    title: 'Supplier Matching',
    desc: 'We search our network of 5,000+ pre-vetted factories and shortlist the best matches for your project.',
  },
  {
    step: '03',
    icon: ClipboardCheck,
    title: 'Factory Verification',
    desc: 'We conduct on-site audits to verify capabilities, certifications, quality systems, and production capacity.',
  },
  {
    step: '04',
    icon: Package,
    title: 'Sampling & Negotiation',
    desc: 'We coordinate samples, negotiate pricing, and finalize contracts with clear terms for both parties.',
  },
  {
    step: '05',
    icon: Truck,
    title: 'Production & QC',
    desc: 'We monitor production with in-line inspections and conduct pre-shipment quality checks before dispatch.',
  },
  {
    step: '06',
    icon: Handshake,
    title: 'Shipping & Delivery',
    desc: 'We handle freight, customs clearance, and final delivery to your warehouse or fulfillment center.',
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-20 sm:py-28 bg-steel-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-brand-600 font-semibold text-sm uppercase tracking-wider">How It Works</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-steel-900">
            Simple, Transparent Sourcing Process
          </h2>
          <p className="mt-4 text-lg text-steel-500 leading-relaxed">
            Six clear steps from your initial inquiry to final delivery. No hidden fees, no surprises.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((item, idx) => (
            <div key={item.step} className="relative bg-white rounded-xl border border-steel-200 p-8">
              <div className="flex items-start gap-4">
                <div className="flex flex-col items-center">
                  <span className="text-4xl font-extrabold text-steel-200">{item.step}</span>
                </div>
                <div>
                  <div className="inline-flex rounded-lg p-2 bg-brand-50 text-brand-600 mb-3">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-steel-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-steel-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
