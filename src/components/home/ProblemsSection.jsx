import React from 'react'
import {
  AlertTriangle,
  Shield,
  Clock,
  DollarSign,
  Globe,
  Users,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react'

const problems = [
  {
    problem: 'Unreliable Suppliers',
    description: 'Finding trustworthy suppliers who deliver on time and meet quality standards is difficult from overseas.',
    solution: 'We verify every supplier through on-site audits, background checks, and reference verification.',
    icon: Users,
  },
  {
    problem: 'Quality Issues',
    description: 'Products arriving with defects, wrong specifications, or poor workmanship can cost you thousands.',
    solution: 'Our QC team inspects products at every stage — from raw materials to pre-shipment — ensuring your standards are met.',
    icon: Shield,
  },
  {
    problem: 'Communication Barriers',
    description: 'Language differences and time zones create misunderstandings that delay orders and increase costs.',
    solution: 'Our bilingual team bridges the gap, ensuring clear communication between you and your suppliers.',
    icon: Globe,
  },
  {
    problem: 'Hidden Costs',
    description: 'Unexpected fees, inflated prices, and surprise charges can make sourcing unprofitable.',
    solution: 'We provide transparent pricing upfront and negotiate the best terms on your behalf.',
    icon: DollarSign,
  },
  {
    problem: 'Production Delays',
    description: 'Without on-the-ground oversight, production timelines can slip unnoticed.',
    solution: 'We monitor production progress weekly and intervene early if issues arise.',
    icon: Clock,
  },
  {
    problem: 'Shipping Complexities',
    description: 'Navigating customs, freight options, and documentation is overwhelming for first-time importers.',
    solution: 'We handle all logistics, paperwork, and customs clearance for smooth door-to-door delivery.',
    icon: AlertTriangle,
  },
]

const ProblemsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-secondary/10 rounded-full text-secondary text-sm font-medium mb-4">
            Problems We Solve
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Common Sourcing Challenges We Eliminate
          </h2>
          <p className="text-lg text-muted-foreground">
            Sourcing from China comes with real risks. We've spent over a decade learning how
            to solve these problems so you don't have to.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 border border-border hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="h-6 w-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {item.problem}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
                
                <div className="border-t border-border pt-4 mt-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-foreground">
                      <span className="font-medium">Our Solution: </span>
                      {item.solution}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ProblemsSection
