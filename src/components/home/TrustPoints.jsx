import { Shield, Users, Globe, Clock, Award, TrendingUp } from 'lucide-react'

const stats = [
  { number: '500+', label: 'Global Clients Served', icon: Users },
  { number: '2,000+', label: 'Verified Suppliers in Network', icon: Shield },
  { number: '50+', label: 'Countries Delivered To', icon: Globe },
  { number: '10+', label: 'Years of Industry Experience', icon: Clock },
  { number: '98%', label: 'Client Satisfaction Rate', icon: Award },
  { number: '$50M+', label: 'Total Sourcing Value Managed', icon: TrendingUp },
]

export default function TrustPoints() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-brand-orange uppercase tracking-wider">Trusted Partner</span>
          <h2 id="trust-title" className="mt-3 text-3xl sm:text-4xl font-bold text-brand-navy">
            Why Global Buyers Trust SSourcing China
          </h2>
          <p id="trust-subtitle" className="mt-4 text-lg text-gray-600">
            Over a decade of experience helping businesses worldwide source products from China with confidence.
          </p>
        </div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="text-center p-8 rounded-xl bg-brand-slate hover:bg-brand-orange/5 border border-transparent hover:border-brand-orange/20 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-orange/10">
                    <Icon className="h-6 w-6 text-brand-orange" />
                  </div>
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-brand-navy mb-2">{stat.number}</div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
