import { Shield, BadgeCheck, Globe, Clock, Award, Users } from 'lucide-react'

const trustPoints = [
  { icon: BadgeCheck, value: '10+', label: 'Years in Operation' },
  { icon: Users, value: '500+', label: 'Global Clients Served' },
  { icon: Shield, value: '3,200+', label: 'Verified Factories' },
  { icon: Globe, value: '40+', label: 'Countries Shipped To' },
  { icon: Clock, value: '10,000+', label: 'Shipments Delivered' },
  { icon: Award, value: '98%', label: 'Client Retention Rate' },
]

export default function HomeTrust() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-gold-500 font-semibold text-sm uppercase tracking-wide mb-3">Why Choose SSourcing China</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-900 mb-4">
            Trusted by Global Buyers Across 40+ Countries
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            We've built our reputation on transparency, reliability, and measurable results.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {trustPoints.map((tp) => (
            <div key={tp.label} className="text-center p-6 rounded-xl bg-slate-50 border border-slate-100">
              <tp.icon className="w-8 h-8 text-gold-500 mx-auto mb-3" />
              <span className="block text-3xl font-extrabold text-navy-800 mb-1">{tp.value}</span>
              <span className="text-xs text-slate-500 leading-tight">{tp.label}</span>
            </div>
          ))}
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            'Factory-direct pricing with complete cost breakdown',
            'On-site presence in Shenzhen, Guangzhou, Yiwu, and Ningbo',
            'Bilingual project managers with 10+ years of experience',
            'Detailed QC reports with photos and measurements',
            'Flexible engagement: per-project or retainer basis',
            'Secure payment terms protecting buyer interests',
          ].map((item) => (
            <div key={item} className="flex items-start gap-3 p-4">
              <Shield className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
              <span className="text-sm text-slate-700">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
