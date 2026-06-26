import { Shield, Award, Users, Globe, Clock, CheckCircle } from 'lucide-react'
import SectionHeader from '@/components/shared/SectionHeader'

const stats = [
  { value: '500+', label: 'Global Buyers Served' },
  { value: '10+', label: 'Years in Business' },
  { value: '5,000+', label: 'Orders Managed' },
  { value: '98%', label: 'Client Satisfaction' },
]

const trustPoints = [
  {
    icon: Shield,
    title: 'Verified Supplier Network',
    description: 'Every supplier in our network has been audited on-site. We verify business licenses, production capacity, and quality systems before recommending them.',
  },
  {
    icon: Award,
    title: 'AQL-Based Inspections',
    description: 'Our quality inspections follow internationally recognized AQL standards, giving you objective, measurable quality assurance.',
  },
  {
    icon: Users,
    title: 'Dedicated Project Manager',
    description: 'You get a single point of contact who understands your requirements and manages every step of your sourcing project.',
  },
  {
    icon: Globe,
    title: 'Global Shipping Expertise',
    description: 'We coordinate sea freight, air freight, and express shipping with proper documentation for smooth customs clearance.',
  },
  {
    icon: Clock,
    title: '24-Hour Response Time',
    description: 'We respond to all inquiries within 24 hours and provide regular production updates so you are never left waiting.',
  },
  {
    icon: CheckCircle,
    title: 'Transparent Pricing',
    description: 'No hidden fees. Our service fees are clearly communicated upfront, and you always know what you are paying for.',
  },
]

export default function TrustPoints() {
  return (
    <section className="py-16 md:py-24 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="Why Trust Us"
          title="Built on Reliability and Transparency"
          description="We earn your trust through verified processes, clear communication, and consistent results."
          light
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 mb-16">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl md:text-4xl font-extrabold text-sky-blue">{stat.value}</p>
              <p className="text-white/60 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustPoints.map((point) => (
            <div
              key={point.title}
              className="bg-white/5 rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-colors duration-300"
            >
              <div className="w-10 h-10 bg-sky-blue/20 rounded-lg flex items-center justify-center mb-4">
                <point.icon className="w-5 h-5 text-sky-blue" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{point.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
