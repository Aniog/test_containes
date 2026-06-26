import { AlertTriangle, DollarSign, Clock, XCircle, Ban, HelpCircle } from 'lucide-react';

const problems = [
  {
    icon: AlertTriangle,
    title: 'Unreliable Suppliers',
    desc: 'Trading companies pretending to be factories, inconsistent quality, or suppliers disappearing after deposit.',
    solution: 'We verify every factory on-site and maintain long-term relationships with proven suppliers.',
  },
  {
    icon: DollarSign,
    title: 'Hidden Costs & Overpricing',
    desc: 'Unexpected fees, inflated quotes, or quality shortcuts that cost more in the long run.',
    solution: 'Transparent pricing breakdowns and negotiated terms based on real market knowledge.',
  },
  {
    icon: Clock,
    title: 'Production Delays',
    desc: 'Missed deadlines, poor communication, and lack of visibility into production status.',
    solution: 'Regular progress monitoring and proactive issue resolution to keep orders on track.',
  },
  {
    icon: XCircle,
    title: 'Quality Failures',
    desc: 'Products that don\'t match samples, defective batches, or inconsistent manufacturing standards.',
    solution: 'Multi-stage inspections following AQL standards at pre-production, during production, and before shipment.',
  },
  {
    icon: Ban,
    title: 'Communication Barriers',
    desc: 'Language gaps, time zone differences, and cultural misunderstandings that lead to errors.',
    solution: 'Bilingual team that bridges the gap between you and the factory with clear, documented communication.',
  },
  {
    icon: HelpCircle,
    title: 'Complex Logistics',
    desc: 'Confusing shipping options, customs paperwork, and coordination between multiple parties.',
    solution: 'End-to-end logistics management with real-time tracking and complete documentation handling.',
  },
];

export default function ProblemsWeSolve() {
  return (
    <section className="py-16 md:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Problems We Solve
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            Importing from China comes with real challenges. Here's how we help you avoid the most common pitfalls.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {problems.map((problem) => (
            <div key={problem.title} className="p-6 md:p-8 bg-white rounded-lg border border-border">
              <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-4">
                <problem.icon className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">{problem.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-4">{problem.desc}</p>
              <div className="pt-4 border-t border-border">
                <p className="text-sm text-primary font-medium leading-relaxed">
                  <span className="font-semibold">Our solution: </span>{problem.solution}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
