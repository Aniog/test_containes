import React from 'react'
import { TrendingUp, Award, Users, Globe } from 'lucide-react'

const stats = [
  { icon: Award, value: '500+', label: 'Machines Delivered' },
  { icon: Users, value: '350+', label: 'Happy Clients' },
  { icon: Globe, value: '40+', label: 'Countries Served' },
  { icon: TrendingUp, value: '99.7%', label: 'Uptime Rate' },
]

export default function Stats() {
  return (
    <section className="py-16 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon
            return (
              <div key={idx} className="text-center">
                <div className="w-12 h-12 rounded-full bg-amber-600/20 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-amber-400" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}