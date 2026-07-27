import { Users, Globe, Award, Clock } from 'lucide-react'

const stats = [
  { icon: Users, value: '500+', label: 'Clients Served' },
  { icon: Globe, value: '35+', label: 'Countries Reached' },
  { icon: Award, value: '12+', label: 'Years Experience' },
  { icon: Clock, value: '98%', label: 'On-Time Delivery' },
]

const trustPoints = [
  'Based in Guangzhou with direct access to major manufacturing hubs',
  'Bilingual team fluent in English and Mandarin',
  'Transparent pricing with no hidden fees',
  'Detailed photo and video reports at every stage',
  'Flexible engagement — project-based or ongoing retainer',
  'References available from long-term clients',
]

const TrustPoints = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-sm font-semibold text-brand-blue uppercase tracking-wide mb-3">Why SSourcing China</span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6">
              A Partner You Can Trust
            </h2>
            <ul className="space-y-3">
              {trustPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-brand-green/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-brand-green" />
                  </span>
                  <span className="text-brand-dark text-sm md:text-base">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, idx) => {
              const Icon = stat.icon
              return (
                <div key={idx} className="bg-brand-light rounded-xl border border-brand-border p-6 text-center">
                  <Icon className="w-8 h-8 text-brand-blue mx-auto mb-3" />
                  <div className="text-2xl md:text-3xl font-bold text-brand-dark">{stat.value}</div>
                  <div className="text-sm text-brand-muted mt-1">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrustPoints
