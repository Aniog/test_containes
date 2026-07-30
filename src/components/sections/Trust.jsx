import { Shield, Users, Globe, Award } from 'lucide-react'

const stats = [
  { value: '10+', label: 'Years Experience' },
  { value: '500+', label: 'Verified Suppliers' },
  { value: '40+', label: 'Countries Served' },
  { value: '98%', label: 'Client Retention' },
]

const trustPoints = [
  {
    icon: Shield,
    title: 'On-the-Ground Team',
    description: 'Our staff is based in Shenzhen and visits factories across China regularly.',
  },
  {
    icon: Users,
    title: 'Bilingual Support',
    description: 'Fluent English-speaking account managers handle your communication end to end.',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'We have shipped to North America, Europe, Australia, Middle East, and Southeast Asia.',
  },
  {
    icon: Award,
    title: 'Transparent Pricing',
    description: 'No hidden fees. You know what you are paying for before production begins.',
  },
]

export default function Trust() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-label">Why Choose Us</span>
          <h2 className="text-3xl lg:text-4xl font-bold mt-3 mb-4">
            Trusted by buyers around the world
          </h2>
          <p className="text-lg text-slate-600">
            We combine local expertise with international standards to give you confidence in every order.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat) => (
            <div key={stat.label} className="card p-6 text-center">
              <div className="text-3xl lg:text-4xl font-bold text-brand-700 mb-2">{stat.value}</div>
              <div className="text-sm text-slate-600">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustPoints.map((point) => {
            const Icon = point.icon
            return (
              <div key={point.title} className="card p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-brand-50 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-brand-700" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{point.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{point.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
