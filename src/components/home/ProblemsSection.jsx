import { AlertTriangle, Clock, DollarSign, MessageSquare, ShieldAlert, FileX } from 'lucide-react';

const problems = [
  {
    icon: AlertTriangle,
    title: 'Unreliable Suppliers',
    description: 'Trading companies posing as factories, fake certifications, and inconsistent quality.',
    solution: 'We verify every supplier with on-site audits, license checks, and production capability assessments.',
  },
  {
    icon: Clock,
    title: 'Communication Barriers',
    description: 'Language differences, time zone gaps, and cultural misunderstandings delay projects.',
    solution: 'Our bilingual team bridges the gap with clear, professional communication in English.',
  },
  {
    icon: DollarSign,
    title: 'Hidden Costs',
    description: 'Unexpected fees, quality issues, and shipping delays inflate your total cost.',
    solution: 'Transparent pricing with detailed cost breakdowns. No surprises, no hidden charges.',
  },
  {
    icon: MessageSquare,
    title: 'Quality Disputes',
    description: 'Products arrive different from samples, with defects or missing components.',
    solution: 'Multi-stage inspections before shipment ensure products match your approved specifications.',
  },
  {
    icon: ShieldAlert,
    title: 'IP & Compliance Risks',
    description: 'Concerns about intellectual property protection and regulatory compliance.',
    solution: 'We help you navigate compliance requirements and protect your designs with proper agreements.',
  },
  {
    icon: FileX,
    title: 'Shipping Complexity',
    description: 'Customs documentation, freight coordination, and import regulations are overwhelming.',
    solution: 'We handle logistics end-to-end, from factory pickup to port delivery with full documentation.',
  },
];

export default function ProblemsSection() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Problems We Solve for Global Buyers</h2>
          <p className="section-subtitle mx-auto">
            Sourcing from China can be challenging. We remove the risks and complexities so you can focus on growing your business.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <div key={index} className="bg-white rounded-xl p-6 border border-slate-200">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <problem.icon className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{problem.title}</h3>
                  <p className="text-slate-600 text-sm mb-3">{problem.description}</p>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                    <p className="text-green-800 text-sm font-medium">
                      <span className="font-bold">Our solution:</span> {problem.solution}
                    </p>
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
