import { AlertTriangle, Search, ShieldX, Eye, Truck, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const problems = [
  {
    icon: Search,
    problem: "Can't find reliable suppliers online",
    solution: 'We leverage our on-the-ground network to match you with pre-vetted factories that fit your product and budget.',
  },
  {
    icon: ShieldX,
    problem: 'Uncertain if factories are legitimate',
    solution: 'We conduct on-site audits, verify business licenses, and check production capabilities before you place an order.',
  },
  {
    icon: AlertTriangle,
    problem: 'Receiving defective or inconsistent products',
    solution: 'Our QC team inspects at multiple stages — pre-production, in-line, and pre-shipment — to catch issues early.',
  },
  {
    icon: Eye,
    problem: 'No visibility into production progress',
    solution: 'We send regular photo and video updates, milestone reports, and flag delays before they become problems.',
  },
  {
    icon: Truck,
    problem: 'Shipping and customs are complicated',
    solution: 'We coordinate freight, handle export documentation, and manage customs clearance on both ends.',
  },
]

export default function ProblemsSection() {
  return (
    <section className="py-20 md:py-28 bg-primary-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.2\' fill-rule=\'evenodd\'%3E%3Cpath d=\'M0 40L40 0H20L0 20M40 40V20L20 40\'/%3E%3C/g%3E%3C/svg%3E")', backgroundRepeat: 'repeat' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold text-accent uppercase tracking-widest">Common Challenges</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-heading font-extrabold text-white">
            Problems We Solve for Importers
          </h2>
          <p className="mt-4 text-white/70 text-base leading-relaxed">
            Sourcing from China comes with real risks. We've spent 15+ years solving these exact problems for international buyers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((item) => {
            const Icon = item.icon
            return (
              <div key={item.problem} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-7 hover:bg-white/10 transition-colors">
                <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-heading font-bold text-base text-white mb-2">{item.problem}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.solution}</p>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold text-sm px-6 py-3 rounded-lg transition-colors"
          >
            Discuss Your Sourcing Needs <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
