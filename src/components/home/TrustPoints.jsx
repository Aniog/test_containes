import React from 'react'
import { Shield, Users, Globe, Award, Clock, TrendingUp } from 'lucide-react'

const trustPoints = [
  { icon: Shield, value: '500+', label: 'Verified Suppliers' },
  { icon: Users, value: '200+', label: 'Clients Served' },
  { icon: Globe, value: '30+', label: 'Countries Served' },
  { icon: Award, value: '10+', label: 'Years Experience' },
  { icon: Clock, value: '24h', label: 'Response Time' },
  { icon: TrendingUp, value: '98%', label: 'Client Satisfaction' },
]

export default function TrustPoints() {
  return (
    <section className="py-20 md:py-28 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
            Why Buyers Trust Us
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-6" />
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Real numbers from real experience. We have built our reputation on transparency and results.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {trustPoints.map((point) => {
            const Icon = point.icon
            return (
              <div key={point.label} className="text-center">
                <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-accent" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">{point.value}</div>
                <div className="text-slate-300 text-sm">{point.label}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
