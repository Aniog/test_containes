import React from 'react'
import { ShieldCheck, Users, Globe2, Award, FileCheck, Clock } from 'lucide-react'

const trustPoints = [
  { icon: ShieldCheck, value: '500+', label: 'Verified Suppliers' },
  { icon: Users, value: '200+', label: 'Clients Worldwide' },
  { icon: Globe2, value: '30+', label: 'Countries Served' },
  { icon: Award, value: '10+', label: 'Years of Experience' },
  { icon: FileCheck, value: '5,000+', label: 'Inspections Completed' },
  { icon: Clock, value: '24h', label: 'Response Time' },
]

const TrustPoints = () => {
  return (
    <section className="py-16 md:py-24 bg-primary-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Why Buyers Trust Us</h2>
          <p className="text-primary-100 max-w-2xl mx-auto">
            Real numbers, real experience. We have built our reputation on consistent results and transparent communication.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
          {trustPoints.map((t) => (
            <div key={t.label} className="text-center">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-3">
                <t.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl md:text-3xl font-bold mb-1">{t.value}</div>
              <div className="text-sm text-primary-100">{t.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustPoints
