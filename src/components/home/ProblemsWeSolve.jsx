import { AlertTriangle, CircleDollarSign, Clock, Users, MessageSquareWarning, Truck } from 'lucide-react'

const problems = [
  {
    icon: AlertTriangle,
    title: 'Unreliable Suppliers',
    desc: 'Scam factories, middlemen posing as manufacturers, and suppliers who disappear after receiving deposits.',
    solved: 'We verify every supplier through on-site audits and background checks before recommending them.',
  },
  {
    icon: CircleDollarSign,
    title: 'Hidden Costs & Overpricing',
    desc: 'Inflated quotes, unexpected fees, and unclear pricing structures that eat into your margins.',
    solved: 'We negotiate directly with factories in Mandarin and provide transparent, itemized cost breakdowns.',
  },
  {
    icon: Clock,
    title: 'Production Delays',
    desc: 'Missed deadlines, poor communication, and production bottlenecks that disrupt your supply chain.',
    solved: 'Our team provides weekly production updates with photos, flagging issues before they become delays.',
  },
  {
    icon: MessageSquareWarning,
    title: 'Language & Cultural Barriers',
    desc: 'Miscommunication about specifications, quality standards, and expectations leading to costly mistakes.',
    solved: 'Bilingual team with deep understanding of both Chinese manufacturing and Western business standards.',
  },
  {
    icon: Users,
    title: 'No On-Ground Presence',
    desc: 'Relying on emails and phone calls without anyone physically checking your products and factory.',
    solved: 'Office located in Shenzhen, with regular factory visits and in-person inspections on your behalf.',
  },
  {
    icon: Truck,
    title: 'Shipping & Logistics Chaos',
    desc: 'Complex customs paperwork, expensive freight quotes, and poor shipment tracking.',
    solved: 'Full logistics management from factory to your door with consolidated shipping and customs handling.',
  },
]

export default function ProblemsWeSolve() {
  return (
    <section className="py-20 md:py-28 bg-surface" id="problems">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-4">
            Problems We Solve for International Buyers
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            Sourcing from China doesn't have to be risky. We eliminate the most common
            challenges overseas buyers face.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {problems.map((problem) => (
            <div key={problem.title} className="bg-white border border-slate-200 rounded-xl p-6 md:p-7">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <problem.icon className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1.5">{problem.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{problem.desc}</p>
                </div>
              </div>
              <div className="border-t border-slate-100 pt-4">
                <p className="text-sm font-medium text-green-700 flex items-start gap-1.5">
                  <span className="text-green-500 mt-0.5">&#10003;</span>
                  {problem.solved}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
