import React from 'react'
import { AlertTriangle, DollarSign, Clock, ShieldOff, Truck } from 'lucide-react'

const problems = [
  {
    icon: AlertTriangle,
    title: 'Unreliable Suppliers',
    desc: 'Finding trustworthy suppliers online is risky. Many listings are trading companies posing as factories, leading to quality and communication issues.',
  },
  {
    icon: DollarSign,
    title: 'Hidden Costs & Overpricing',
    desc: 'Without local market knowledge, buyers often pay more than they should. Hidden fees, inflated quotes, and unexpected costs erode margins.',
  },
  {
    icon: Clock,
    title: 'Production Delays',
    desc: 'Late deliveries disrupt your supply chain. Without on-site monitoring, production issues go unnoticed until it is too late to fix them.',
  },
  {
    icon: ShieldOff,
    title: 'Quality Failures',
    desc: 'Products that do not match samples or specifications result in returns, refunds, and damaged customer relationships.',
  },
  {
    icon: Truck,
    title: 'Shipping Complications',
    desc: 'Customs paperwork, freight coordination, and logistics management are complex. Mistakes lead to delays, extra charges, or lost shipments.',
  },
]

const Problems = () => {
  return (
    <section className="py-16 md:py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-4">Problems We Solve</h2>
          <p className="text-neutral-500 max-w-2xl mx-auto">
            Sourcing from China without local support exposes you to risks that cost time and money. Here are the most common challenges we help you avoid.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {problems.map((p) => (
            <div key={p.title} className="p-6 md:p-8 rounded-lg border border-neutral-200 bg-white">
              <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center mb-4">
                <p.icon className="w-5 h-5 text-red-500" />
              </div>
              <h3 className="text-base font-semibold text-neutral-800 mb-2">{p.title}</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Problems
