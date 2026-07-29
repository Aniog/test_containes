import { AlertTriangle, Clock, DollarSign, Shield, MessageCircle, FileX } from 'lucide-react'

const problems = [
  {
    icon: AlertTriangle,
    title: 'Unreliable Suppliers',
    description: 'Trading companies posing as factories, fake certifications, and suppliers who disappear after payment.',
    solution: 'We verify every supplier with on-site audits, business license checks, and production capability assessments.',
  },
  {
    icon: Clock,
    title: 'Communication Barriers',
    description: 'Language differences, time zone gaps, and cultural misunderstandings that delay projects and cause errors.',
    solution: 'Our bilingual team bridges the gap with clear communication, regular updates, and professional documentation.',
  },
  {
    icon: DollarSign,
    title: 'Hidden Costs',
    description: 'Unexpected fees for tooling, samples, shipping, and customs that blow your budget without warning.',
    solution: 'Transparent pricing with detailed cost breakdowns. No surprises, no hidden charges.',
  },
  {
    icon: Shield,
    title: 'Quality Issues',
    description: 'Products that look great in samples but fail quality standards in bulk production runs.',
    solution: 'Multi-stage inspections with photo reports and clear pass/fail criteria before shipment.',
  },
  {
    icon: MessageCircle,
    title: 'No Local Presence',
    description: 'Without someone on the ground in China, you cannot verify claims, resolve disputes, or monitor production.',
    solution: 'Our Shenzhen-based team provides boots-on-the-ground support for every project.',
  },
  {
    icon: FileX,
    title: 'Shipping Complexity',
    description: 'Confusing Incoterms, customs paperwork, and freight coordination that overwhelm first-time importers.',
    solution: 'We handle logistics end-to-end, from factory pickup to port delivery, with full documentation.',
  },
]

export default function HomeProblems() {
  return (
    <section className="py-16 md:py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-blue-400 font-semibold text-sm uppercase tracking-wide">Why Work With Us</span>
          <h2 className="text-2xl md:text-4xl font-bold mt-2 mb-4">
            Problems We Solve for Global Buyers
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Sourcing from China can be risky without the right partner. Here is how we protect your interests.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="bg-slate-800 rounded-xl p-6 border border-slate-700"
            >
              <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center mb-4">
                <problem.icon className="w-5 h-5 text-red-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{problem.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-3">{problem.description}</p>
              <div className="border-t border-slate-700 pt-3">
                <div className="flex items-start gap-2">
                  <div className="w-5 h-5 bg-green-500/20 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-green-400 text-sm leading-relaxed">{problem.solution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
