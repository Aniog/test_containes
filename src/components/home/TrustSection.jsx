import React from 'react'
import { ShieldCheck, Users, MapPin, Clock, FileCheck, Globe } from 'lucide-react'

const trustPoints = [
  {
    icon: MapPin,
    stat: 'Shenzhen-based',
    title: 'Local Presence in China',
    description: 'Our team is based in Shenzhen, one of China\'s largest manufacturing hubs. We visit factories personally — not just online.',
  },
  {
    icon: Users,
    stat: '500+',
    title: 'Verified Suppliers in Our Network',
    description: 'We have built relationships with hundreds of vetted suppliers across electronics, textiles, hardware, and more.',
  },
  {
    icon: FileCheck,
    stat: 'AQL Standards',
    title: 'Professional Quality Inspections',
    description: 'All inspections follow AQL (Acceptable Quality Level) standards with detailed photo reports and measurable results.',
  },
  {
    icon: Clock,
    stat: '10+ Years',
    title: 'Sourcing Experience',
    description: 'Over a decade of experience helping international buyers navigate the complexities of China manufacturing.',
  },
  {
    icon: Globe,
    stat: '30+ Countries',
    title: 'Global Client Base',
    description: 'We serve buyers from North America, Europe, Australia, Southeast Asia, and the Middle East.',
  },
  {
    icon: ShieldCheck,
    stat: 'Full Transparency',
    title: 'No Hidden Fees',
    description: 'Our pricing is clear and upfront. You know exactly what you pay for — no surprise charges or middleman markups.',
  },
]

export default function TrustSection() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Why Buyers Trust SSourcing China
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            We are not a directory or a platform. We are a real team on the ground in China, working directly for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustPoints.map((point) => (
            <div key={point.title} className="bg-slate-50 rounded-xl p-6 border border-slate-200 text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <point.icon className="w-6 h-6 text-primary-500" />
              </div>
              <div className="text-xl font-bold text-primary-500 mb-1">{point.stat}</div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{point.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
