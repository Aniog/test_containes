import { Users, MapPin, Award, Clock, CheckCircle, Building } from 'lucide-react'

const stats = [
  { icon: Users, value: '500+', label: 'Global Buyers Served' },
  { icon: Building, value: '2,000+', label: 'Factories Verified' },
  { icon: Award, value: '12+', label: 'Years Experience' },
  { icon: MapPin, value: '30+', label: 'Countries Reached' },
]

const trustPoints = [
  'On-the-ground team in Guangzhou, Yiwu, and Shenzhen',
  'Bilingual project managers (English & Chinese)',
  'Transparent pricing — no hidden fees',
  'Detailed photo & video reports at every stage',
  'Flexible engagement — per-project or retainer',
  'References available from buyers in US, EU, AU',
]

export default function TrustPoints() {
  return (
    <section className="py-16 md:py-24 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">Trust & Credibility</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
            Why Buyers Trust SSourcing China
          </h2>
          <p className="text-white/70 text-lg leading-relaxed">
            We've built our reputation on transparency, reliability, and results.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-14">
          {stats.map((stat, idx) => {
            const Icon = stat.icon
            return (
              <div key={idx} className="text-center">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-white/60 text-sm">{stat.label}</div>
              </div>
            )
          })}
        </div>

        <div className="bg-white/5 border border-white/10 rounded-xl p-8 max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {trustPoints.map((point, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                <span className="text-white/80 text-sm">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
