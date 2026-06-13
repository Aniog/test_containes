import {
  AlertTriangle,
  EyeOff,
  Languages,
  Clock,
  ShieldX,
  Truck,
} from 'lucide-react'

const problems = [
  {
    icon: AlertTriangle,
    title: 'Unreliable Suppliers',
    desc: 'Many buyers end up with unverified factories that disappear after receiving deposits.',
  },
  {
    icon: EyeOff,
    title: 'No Visibility',
    desc: 'You do not know what is happening with your order until it is too late.',
  },
  {
    icon: Languages,
    title: 'Language Barriers',
    desc: 'Miscommunication with Chinese suppliers leads to costly mistakes and delays.',
  },
  {
    icon: Clock,
    title: 'Production Delays',
    desc: 'Orders slip behind schedule with no one on the ground to push them forward.',
  },
  {
    icon: ShieldX,
    title: 'Quality Failures',
    desc: 'Goods arrive with defects, wrong specs, or counterfeit materials.',
  },
  {
    icon: Truck,
    title: 'Shipping Complexity',
    desc: 'Navigating freight, customs, and documentation alone is overwhelming.',
  },
]

export default function ProblemsSection() {
  return (
    <section className="bg-white section-padding">
      <div className="container-main">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#1a2b4a] mb-4">
            Common Sourcing Problems We Solve
          </h2>
          <p className="text-[#64748b] max-w-2xl mx-auto">
            Buying from China without local support is risky. Here is how we help you avoid the most common pitfalls.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((p) => (
            <div
              key={p.title}
              className="flex items-start gap-4 p-5 rounded-xl border border-[#e2e8f0] bg-[#f6f7f9]/50"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#c4951a]/10 shrink-0 mt-0.5">
                <p.icon className="w-5 h-5 text-[#c4951a]" />
              </div>
              <div>
                <h3 className="text-base font-bold text-[#1a2b4a] mb-1">
                  {p.title}
                </h3>
                <p className="text-sm text-[#64748b] leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
