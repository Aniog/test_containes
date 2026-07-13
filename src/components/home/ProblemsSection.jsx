import { AlertTriangle, Clock, DollarSign, Search, ShieldOff, Package } from 'lucide-react';

const problems = [
  {
    icon: ShieldOff,
    problem: 'Unreliable Suppliers',
    solution: 'We verify every supplier through on-site audits, business license checks, and production capability assessments before you commit.',
  },
  {
    icon: AlertTriangle,
    problem: 'Poor Product Quality',
    solution: 'Our QC inspectors check products at multiple stages — during production, before shipment, and at the loading dock.',
  },
  {
    icon: Clock,
    problem: 'Production Delays',
    solution: 'We monitor production timelines weekly and escalate issues early, so delays are caught before they become costly problems.',
  },
  {
    icon: DollarSign,
    problem: 'Overpaying for Goods',
    solution: 'Our local team negotiates directly with factories in Mandarin, leveraging market knowledge to get fair, competitive pricing.',
  },
  {
    icon: Search,
    problem: 'No Visibility on Orders',
    solution: 'You receive regular photo and video updates, inspection reports, and production milestones throughout the order lifecycle.',
  },
  {
    icon: Package,
    problem: 'Shipping Complications',
    solution: 'We handle export documentation, customs declarations, and freight coordination so goods arrive on time and without surprises.',
  },
];

export default function ProblemsSection() {
  return (
    <section className="section-padding bg-brand-blue-light">
      <div className="section-container">
        <div className="text-center mb-12 md:mb-16">
          <p className="section-label mb-3">Why Buyers Choose Us</p>
          <h2 className="section-heading mb-4">Problems We Solve</h2>
          <p className="section-subheading max-w-2xl mx-auto">
            Sourcing from China without local support carries real risks. Here's how we protect your business at every step.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.problem} className="bg-white rounded-xl p-6 border border-brand-border hover:shadow-md transition-shadow duration-200">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-brand-navy font-bold text-base mb-2">{item.problem}</h3>
                    <p className="text-brand-muted text-sm leading-relaxed">{item.solution}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
