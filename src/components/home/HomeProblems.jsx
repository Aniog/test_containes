import { AlertTriangle, Languages, Clock, DollarSign, ShieldX, ThumbsDown } from 'lucide-react';

const problems = [
  {
    icon: AlertTriangle,
    title: 'Unverified Suppliers',
    desc: 'Many online supplier listings are from trading companies posing as manufacturers, or factories with no export experience.',
  },
  {
    icon: Languages,
    title: 'Language & Cultural Barriers',
    desc: 'Miscommunication on specs, timelines, and quality standards leads to costly mistakes and delays.',
  },
  {
    icon: Clock,
    title: 'Missed Deadlines',
    desc: 'Without on-the-ground monitoring, production delays go unnoticed until it is too late to recover.',
  },
  {
    icon: DollarSign,
    title: 'Hidden Costs',
    desc: 'Unexpected charges in logistics, customs, and compliance can erase your margins if not managed properly.',
  },
  {
    icon: ShieldX,
    title: 'Quality Issues',
    desc: 'Products arriving different from samples, with defects, or not meeting your market standards.',
  },
  {
    icon: ThumbsDown,
    title: 'No Accountability',
    desc: 'When problems arise, suppliers may ignore your messages — and you have no one local to help.',
  },
];

const solutions = [
  'We verify every factory in person before recommending them',
  'Bilingual team ensures clear communication at every step',
  'Weekly production tracking with photos and reports',
  'Transparent pricing — no hidden fees, no surprises',
  'Multi-stage QC inspections protect your quality standards',
  'One dedicated contact person accountable for your entire project',
];

export default function HomeProblems() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Sourcing from China Should Not Be a Gamble
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We solve the most common problems buyers face when sourcing from China.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="grid sm:grid-cols-2 gap-5">
            {problems.map((problem) => (
              <div key={problem.title} className="bg-white rounded-lg p-5 border border-red-100">
                <problem.icon className="w-6 h-6 text-brand-red mb-2" />
                <h3 className="text-sm font-semibold text-gray-900 mb-1">{problem.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{problem.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-brand-navy rounded-lg p-8 text-white">
            <h3 className="text-xl font-bold mb-6">How We Solve These Problems</h3>
            <ul className="space-y-4">
              {solutions.map((solution, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-sm text-gray-200">{solution}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
