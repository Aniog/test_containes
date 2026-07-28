import { Shield, AlertTriangle, Clock, DollarSign, MessageSquare, Truck } from 'lucide-react';

const problems = [
  {
    icon: AlertTriangle,
    title: 'Unreliable Suppliers',
    desc: 'We verify every supplier through on-site audits, checking business licenses, production capacity, and export history to eliminate fraud risk.',
    color: 'bg-red-50 text-red-600',
  },
  {
    icon: Clock,
    title: 'Production Delays',
    desc: 'Our team monitors production milestones weekly, identifies bottlenecks early, and keeps your project on schedule with regular updates.',
    color: 'bg-amber-50 text-amber-600',
  },
  {
    icon: DollarSign,
    title: 'Hidden Costs',
    desc: 'We provide transparent pricing with no hidden fees. You always know the factory price, our service fee, and logistics costs upfront.',
    color: 'bg-green-50 text-green-600',
  },
  {
    icon: MessageSquare,
    title: 'Communication Barriers',
    desc: 'Our bilingual team bridges the language gap, ensuring your requirements are clearly communicated and understood by the factory.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: Shield,
    title: 'Quality Issues',
    desc: 'We implement multi-stage QC inspections (pre-production, in-line, pre-shipment) with detailed reports and photos at every stage.',
    color: 'bg-purple-50 text-purple-600',
  },
  {
    icon: Truck,
    title: 'Shipping Complexity',
    desc: 'We handle all logistics — from factory to port, customs clearance, and final delivery — so you can focus on your business.',
    color: 'bg-indigo-50 text-indigo-600',
  },
];

export default function ProblemsSection() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Problems We Solve
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Sourcing from China comes with challenges. We have the experience and systems to handle them.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem) => (
            <div key={problem.title} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${problem.color}`}>
                <problem.icon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{problem.title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{problem.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}