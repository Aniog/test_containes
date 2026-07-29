import { Shield, Award, Users, Globe, Heart, BarChart3 } from 'lucide-react'

const trustPoints = [
  {
    icon: Shield,
    stat: '500+',
    label: 'Factories Verified',
    description: 'On-site audits conducted across Guangdong, Zhejiang, Jiangsu, and more.',
  },
  {
    icon: Award,
    stat: '10+ Years',
    label: 'Industry Experience',
    description: 'Deep expertise in China manufacturing and international trade.',
  },
  {
    icon: Users,
    stat: '200+',
    label: 'Global Clients',
    description: 'Buyers from North America, Europe, Australia, and Southeast Asia.',
  },
  {
    icon: Globe,
    stat: '15+',
    label: 'Industries Covered',
    description: 'From electronics to apparel, industrial goods to consumer products.',
  },
  {
    icon: Heart,
    stat: '98%',
    label: 'Client Satisfaction',
    description: 'Consistently high ratings from repeat and referral clients.',
  },
  {
    icon: BarChart3,
    stat: '$50M+',
    label: 'Sourced Annually',
    description: 'Total procurement value managed through our sourcing services.',
  },
]

export default function TrustSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4" id="trust-section-title">
            Why Work With Us
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            We are a China-based team with on-the-ground expertise and a global mindset.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {trustPoints.map((point) => (
            <div key={point.label} className="text-center">
              <div className="w-14 h-14 bg-brand-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                <point.icon className="w-7 h-7 text-brand-500" />
              </div>
              <div className="text-3xl font-bold text-brand-500 mb-1">{point.stat}</div>
              <div className="text-sm font-semibold text-neutral-900 mb-2">{point.label}</div>
              <p className="text-sm text-neutral-500 leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}