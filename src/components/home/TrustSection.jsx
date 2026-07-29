import { Award, Users, Globe, Calendar, CheckCircle, TrendingUp } from 'lucide-react'

const stats = [
  { icon: Calendar, value: '12+', label: 'Years in Business' },
  { icon: Users, value: '500+', label: 'Verified Suppliers' },
  { icon: Globe, value: '30+', label: 'Countries Served' },
  { icon: CheckCircle, value: '2,000+', label: 'Orders Completed' },
]

const trustPoints = [
  'On-the-ground team based in Guangzhou, Yiwu, and Shenzhen',
  'Transparent pricing with no hidden fees',
  'Detailed photo and video reports for every inspection',
  'Direct factory access — no middlemen markup',
  'NDA and contract protection for your designs',
  'Responsive communication across time zones',
]

const TrustSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
            Why Buyers Trust Us
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            We have built our reputation on transparency, reliability, and results.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, idx) => {
            const Icon = stat.icon
            return (
              <div key={idx} className="text-center p-6 bg-neutral-50 rounded-xl">
                <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-bold text-neutral-800 mb-1">{stat.value}</div>
                <div className="text-sm text-neutral-600">{stat.label}</div>
              </div>
            )
          })}
        </div>

        <div className="bg-neutral-50 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {trustPoints.map((point, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <Award className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-neutral-700">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrustSection
