import { Shield, Users, Globe, Clock, Award, TrendingUp } from 'lucide-react'

const stats = [
  { value: '500+', label: 'Buyers Served', icon: Users },
  { value: '2,000+', label: 'Factory Visits', icon: Globe },
  { value: '12+', label: 'Years Experience', icon: Clock },
  { value: '98%', label: 'Client Satisfaction', icon: TrendingUp },
]

const trustPoints = [
  {
    icon: Shield,
    title: 'On-the-Ground Presence',
    description: 'Our team is based in Shenzhen with direct access to manufacturing hubs across Guangdong, Zhejiang, and Jiangsu.',
  },
  {
    icon: Award,
    title: 'Transparent Reporting',
    description: 'You receive detailed photos, videos, and written reports at every stage — no surprises.',
  },
  {
    icon: Users,
    title: 'Bilingual Team',
    description: 'Fluent English-speaking project managers who understand both Western business expectations and Chinese manufacturing culture.',
  },
]

export default function TrustSection() {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16 pb-16 border-b border-slate-700">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <stat.icon className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <div className="text-3xl sm:text-4xl font-extrabold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Trust points */}
        <div className="text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2 block">
            Why Buyers Trust Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Built for Reliability
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trustPoints.map((point) => (
            <div key={point.title} className="text-center">
              <div className="w-14 h-14 rounded-full bg-blue-900/50 flex items-center justify-center mx-auto mb-5 border border-blue-800">
                <point.icon className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">{point.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed max-w-sm mx-auto">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
