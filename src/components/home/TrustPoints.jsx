import React from 'react'
import { Shield, TrendingDown, Users, Zap, Globe, Lock } from 'lucide-react'

const features = [
  {
    title: 'Zero Hidden Commissions',
    description: 'We offer fixed fee plans and transparent pricing. No kickbacks from factories.',
    icon: Shield
  },
  {
    title: 'Negotiation Experts',
    description: 'We speak the local language and understand the local business culture to get you the best terms.',
    icon: Users
  },
  {
    title: 'Reduce Sourcing Costs',
    description: 'Save up to 30% on your procurement by going direct to the source and optimizing logistics.',
    icon: TrendingDown
  },
  {
    title: 'Fast & Responsive',
    description: 'Real-time updates and 24-hour response time. We move as fast as you do.',
    icon: Zap
  },
  {
    title: 'Global Standards',
    description: 'We understand Western quality requirements (ASTM, CE, etc.) and ensure compliance.',
    icon: Globe
  },
  {
    title: 'Secure Supply Chain',
    description: 'We minimize risk by diversifying suppliers and performing rigorous factory audits.',
    icon: Lock
  }
]

export default function TrustPoints() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-16">
          <h2 id="trust-title" className="text-3xl font-extrabold text-slate-900 sm:text-4xl text-center">
            Why SSourcing China?
          </h2>
          <p id="trust-subtitle" className="mt-4 text-xl text-slate-600 max-w-2xl mx-auto text-center">
            We act as your own office in China, representing your interests only.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-4">
              <div className="shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">{feature.title}</h3>
                <p className="mt-2 text-slate-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
