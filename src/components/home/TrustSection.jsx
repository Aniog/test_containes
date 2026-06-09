import { ShieldCheck, Users, Globe, Award, Clock, TrendingUp } from 'lucide-react'

const trustPoints = [
  {
    icon: ShieldCheck,
    value: '500+',
    label: 'Verified Suppliers',
  },
  {
    icon: Users,
    value: '300+',
    label: 'Global Clients Served',
  },
  {
    icon: Globe,
    value: '30+',
    label: 'Countries Shipped To',
  },
  {
    icon: Award,
    value: '98%',
    label: 'Client Satisfaction Rate',
  },
  {
    icon: Clock,
    value: '10+',
    label: 'Years in Sourcing',
  },
  {
    icon: TrendingUp,
    value: '5,000+',
    label: 'Orders Managed',
  },
]

export default function TrustSection() {
  return (
    <section className="py-16 md:py-24 bg-primary" id="trust">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-3">Why Trust Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
            A Proven Track Record in China Sourcing
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            With over a decade of experience, we have built the systems, relationships, and expertise to deliver reliable results.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
          {trustPoints.map((point) => (
            <div key={point.label} className="text-center">
              <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <point.icon className="w-7 h-7 text-accent" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">{point.value}</div>
              <div className="text-white/60 text-sm">{point.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
