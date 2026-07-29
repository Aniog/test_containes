import { AlertTriangle, XCircle, Clock, DollarSign } from 'lucide-react';

const problems = [
  {
    icon: AlertTriangle,
    title: 'Unreliable Suppliers',
    description: 'Many suppliers overpromise and underdeliver. We verify factories on-site to ensure they can meet your requirements.',
  },
  {
    icon: XCircle,
    title: 'Quality Issues',
    description: 'Receiving defective or inconsistent products? Our QC inspections catch problems before shipment.',
  },
  {
    icon: Clock,
    title: 'Production Delays',
    description: 'Missed deadlines hurt your business. We monitor production schedules and push factories to stay on track.',
  },
  {
    icon: DollarSign,
    title: 'Hidden Costs',
    description: 'Unexpected fees and price changes are common. We provide transparent pricing with no surprises.',
  },
];

export default function ProblemsSection() {
  return (
    <section className="py-20 bg-surface">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Challenges We Solve</p>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Common Sourcing Problems
          </h2>
          <p className="text-text-secondary text-lg">
            Sourcing from China is challenging. Here is how we help you avoid the most common pitfalls.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="flex gap-4 bg-white rounded-xl p-6 border border-border shadow-sm"
            >
              <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center shrink-0">
                <problem.icon className="w-5 h-5 text-red-500" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-text-primary mb-1">{problem.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{problem.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
