import { AlertTriangle, MessageCircle, DollarSign, Clock, Image, Truck } from 'lucide-react'

const problems = [
  {
    icon: AlertTriangle,
    problem: 'Unreliable suppliers',
    solution: 'We verify every supplier through on-site audits and background checks before you commit.',
  },
  {
    icon: MessageCircle,
    problem: 'Language & cultural barriers',
    solution: 'Our bilingual team bridges communication gaps and ensures clear technical specifications.',
  },
  {
    icon: DollarSign,
    problem: 'Hidden costs & overpricing',
    solution: 'We negotiate competitive pricing with full cost transparency and no hidden markups.',
  },
  {
    icon: Clock,
    problem: 'Missed production deadlines',
    solution: 'Regular production monitoring keeps your orders on track with early warning for delays.',
  },
  {
    icon: Image,
    problem: 'Quality not matching samples',
    solution: 'Multiple inspection stages ensure production quality matches your approved samples.',
  },
  {
    icon: Truck,
    problem: 'Shipping & customs complexity',
    solution: 'We handle logistics, documentation, and customs clearance for hassle-free delivery.',
  },
]

export default function ProblemsSection() {
  return (
    <section className="py-16 md:py-24 bg-neutral-50">
      <div className="section-container">
        <h2 className="section-title">Common Sourcing Challenges We Solve</h2>
        <p className="section-subtitle">
          Sourcing from China comes with risks. We eliminate them so you can focus on your business.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {problems.map((item) => (
            <div key={item.problem} className="bg-white border border-neutral-200 rounded-xl p-6 flex gap-4">
              <div className="w-10 h-10 bg-accent-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <item.icon className="w-5 h-5 text-accent-500" />
              </div>
              <div>
                <p className="text-sm font-semibold text-accent-600 mb-1">{item.problem}</p>
                <p className="text-sm text-neutral-500 leading-relaxed">{item.solution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}