import { Award, Users, Globe, Calendar } from 'lucide-react'

const stats = [
  { icon: Calendar, value: '10+', label: 'Years in China Sourcing' },
  { icon: Users, value: '500+', label: 'Clients Served Worldwide' },
  { icon: Globe, value: '30+', label: 'Countries We Ship To' },
  { icon: Award, value: '2,000+', label: 'Factory Audits Completed' },
]

const trustBadges = [
  'Based in Guangzhou, China',
  'English-speaking team',
  'No hidden fees — transparent pricing',
  'NDA & contract protection',
  'References available on request',
]

const TrustPoints = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight">
            Why Buyers Trust Us
          </h2>
          <p className="mt-4 text-text-body text-lg">
            We earn trust through transparency, results, and consistent communication.
          </p>
          <div className="w-16 h-1 bg-accent mx-auto mt-4" />
        </div>

        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon
            return (
              <div key={idx} className="text-center p-6 rounded-xl bg-surface border border-border">
                <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-2xl md:text-3xl font-bold text-text-primary">{stat.value}</div>
                <div className="mt-1 text-text-muted text-sm">{stat.label}</div>
              </div>
            )
          })}
        </div>

        <div className="mt-12 bg-surface rounded-xl border border-border p-8">
          <h3 className="text-lg font-semibold text-text-primary mb-4 text-center">Our Commitments</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {trustBadges.map((badge, idx) => (
              <div key={idx} className="flex items-center gap-2 text-text-body text-sm">
                <div className="w-2 h-2 rounded-full bg-success shrink-0" />
                <span>{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrustPoints
