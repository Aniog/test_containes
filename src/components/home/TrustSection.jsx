import { Shield, Globe, Clock, Award, Users, BarChart3 } from 'lucide-react'
import SectionTitle from '../shared/SectionTitle'

const stats = [
  { icon: Users, value: '500+', label: 'Clients Served' },
  { icon: Globe, value: '40+', label: 'Countries' },
  { icon: BarChart3, value: '$120M+', label: 'Sourcing Value' },
  { icon: Shield, value: '98%', label: 'QC Pass Rate' },
  { icon: Clock, value: '10+', label: 'Years Experience' },
  { icon: Award, value: '2,400+', label: 'Orders Fulfilled' },
]

export default function TrustSection() {
  return (
    <section className="py-16 md:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Why Buyers Trust SSourcing China"
          subtitle="We've built our reputation on transparency, reliability, and consistent results for businesses around the world."
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center p-5 rounded-xl bg-white border border-border hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 text-primary">
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="text-2xl md:text-3xl font-extrabold text-text-primary mb-1">{stat.value}</div>
              <div className="text-xs text-text-secondary font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
