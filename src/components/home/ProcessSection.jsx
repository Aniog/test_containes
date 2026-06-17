import { MessageSquare, Search, Factory, ShieldCheck, Package, Truck, CheckCircle } from 'lucide-react';

const steps = [
  { num: '01', icon: MessageSquare, title: 'Submit Your Requirements', desc: 'Share your product specs, target price, quantity, and timeline via our inquiry form.' },
  { num: '02', icon: Search, title: 'Supplier Research', desc: 'We identify and vet multiple qualified manufacturers from our network and trade databases.' },
  { num: '03', icon: Factory, title: 'Factory Audit', desc: 'Our on-ground team visits shortlisted factories to verify capacity, certifications, and reliability.' },
  { num: '04', icon: Package, title: 'Sample & Negotiation', desc: 'We arrange samples, negotiate pricing and terms, and present you with a clear comparison.' },
  { num: '05', icon: ShieldCheck, title: 'Quality Inspection', desc: 'Before shipment, we inspect goods against your specifications and issue a detailed QC report.' },
  { num: '06', icon: Truck, title: 'Shipping & Delivery', desc: 'We coordinate freight, customs clearance, and final delivery to your warehouse or port.' },
];

export default function ProcessSection() {
  return (
    <section className="section-padding bg-brand-bg-alt">
      <div className="section-container">
        <div className="text-center mb-14">
          <span className="text-brand-red text-sm font-semibold uppercase tracking-widest">Our Process</span>
          <h2 className="section-title mt-2">How We Source for You</h2>
          <p className="section-subtitle">
            A structured, transparent process designed to reduce risk and deliver results for international buyers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={step.num} className="card-base p-6 relative">
                <div className="absolute top-4 right-4 text-5xl font-black text-gray-100 select-none leading-none">
                  {step.num}
                </div>
                <div className="w-12 h-12 bg-brand-blue rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-base font-bold text-brand-blue mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
