import React from 'react'
import { Shield, Award, Users, Clock } from 'lucide-react'

const trustPoints = [
  {
    icon: Shield,
    value: '500+',
    label: 'Verified Suppliers',
    description: 'Across 20+ manufacturing categories in China',
  },
  {
    icon: Award,
    value: '98%',
    label: 'On-Time Delivery',
    description: 'Consistent track record of meeting shipping deadlines',
  },
  {
    icon: Users,
    value: '200+',
    label: 'Global Clients',
    description: 'Serving buyers from 30+ countries worldwide',
  },
  {
    icon: Clock,
    value: '12+',
    label: 'Years Experience',
    description: 'Deep expertise in China sourcing and supply chain',
  },
]

export default function TrustSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 text-center mb-4">
          Why Work With SSourcing China
        </h2>
        <p className="text-lg text-slate-600 text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          We combine local expertise with international standards to give you 
          confidence in your China supply chain.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustPoints.map((point) => {
            const Icon = point.icon
            return (
              <div key={point.label} className="text-center">
                <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-amber-600" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-navy-900 mb-1">{point.value}</div>
                <div className="font-semibold text-navy-700 mb-2">{point.label}</div>
                <p className="text-sm text-slate-500">{point.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}