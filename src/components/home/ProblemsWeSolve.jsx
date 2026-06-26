import React from 'react';
import { AlertTriangle, Search, DollarSign, Clock, ShieldAlert, XCircle } from 'lucide-react';

const problems = [
  {
    icon: AlertTriangle,
    title: 'Unverified Suppliers',
    desc: 'Many Chinese suppliers appear legitimate online but lack real production capabilities. We verify every supplier through on-site audits.',
  },
  {
    icon: Search,
    title: 'Information Asymmetry',
    desc: 'Language barriers and lack of local presence make it hard to know who you are really dealing with. We are your eyes and ears on the ground.',
  },
  {
    icon: DollarSign,
    title: 'Hidden Costs',
    desc: 'Without local expertise, buyers often face unexpected fees, quality issues, and shipping surprises that eat into margins.',
  },
  {
    icon: Clock,
    title: 'Production Delays',
    desc: 'Lack of regular follow-up leads to missed deadlines. We monitor production milestones and keep you informed in real time.',
  },
  {
    icon: ShieldAlert,
    title: 'Quality Risks',
    desc: 'Receiving substandard products damages your brand. Our QC inspectors check every shipment against your specifications.',
  },
  {
    icon: XCircle,
    title: 'Communication Gaps',
    desc: 'Misunderstandings in specifications, materials, or timelines lead to costly mistakes. We bridge the communication gap fluently.',
  },
];

const ProblemsWeSolve = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-navy tracking-tight mb-4">
            Problems We Solve for Buyers
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Sourcing from China comes with real challenges. We eliminate the risks so you can source with complete confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="w-11 h-11 bg-red-50 rounded-lg flex items-center justify-center mb-4">
                <problem.icon className="w-5 h-5 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold text-navy mb-2">{problem.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{problem.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemsWeSolve;
