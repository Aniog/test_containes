import { Shield, Award, Users, Globe, ThumbsUp, Clock } from 'lucide-react'

const stats = [
  { icon: Users, value: '200+', label: 'Global Buyers Served' },
  { icon: Globe, value: '500+', label: 'Factories Verified' },
  { icon: Shield, value: '98%', label: 'Client Satisfaction' },
  { icon: Clock, value: '10+', label: 'Years Experience' },
]

const trustPoints = [
  {
    icon: Award,
    title: 'On-the-Ground Presence',
    description: 'Our team is based in Guangzhou with direct access to major manufacturing hubs across China.',
  },
  {
    icon: ThumbsUp,
    title: 'Independent Inspections',
    description: 'We work for you, not the supplier. Our inspections are unbiased and thorough.',
  },
  {
    icon: Shield,
    title: 'Risk Mitigation',
    description: 'Structured processes, contracts, and quality controls minimize sourcing risks.',
  },
  {
    icon: Globe,
    title: 'Global Experience',
    description: 'We have served buyers from North America, Europe, Southeast Asia, and the Middle East.',
  },
]

export default function TrustSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {stats.map((stat, i) => (
            <div key={i} className="text-center p-6 rounded-xl bg-navy-50 border border-navy-100">
              <stat.icon className="w-8 h-8 text-navy-600 mx-auto mb-2" />
              <div className="text-3xl font-bold text-navy-700 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Trust points */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-navy-700 mb-4">
            Why Work With Us
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            We combine local expertise with professional standards to deliver reliable sourcing outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {trustPoints.map((point, i) => (
            <div key={i} className="flex items-start gap-4 p-6 rounded-xl border border-gray-200">
              <div className="w-12 h-12 bg-navy-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <point.icon className="w-6 h-6 text-navy-700" />
              </div>
              <div>
                <h3 className="font-semibold text-navy-700 mb-1">{point.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{point.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}