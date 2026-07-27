import React from 'react'
import { Shield, Award, Users, Globe, Clock, Headphones } from 'lucide-react'

const stats = [
  { number: '500+', label: 'Verified Suppliers' },
  { number: '98%', label: 'Quality Pass Rate' },
  { number: '50+', label: 'Countries Served' },
  { number: '10+', label: 'Years Experience' },
]

const trustPoints = [
  {
    icon: Shield,
    title: 'Verified & Audited',
    description: 'All suppliers undergo thorough background checks and on-site factory audits.',
  },
  {
    icon: Award,
    title: 'Quality Guaranteed',
    description: 'Multi-stage inspection process ensures products meet your specifications.',
  },
  {
    icon: Users,
    title: 'Dedicated Team',
    description: 'Your personal sourcing manager handles everything from start to finish.',
  },
  {
    icon: Globe,
    title: 'Global Experience',
    description: 'We serve clients across 50+ countries with diverse product needs.',
  },
  {
    icon: Clock,
    title: 'Time Zone Friendly',
    description: 'We work across time zones to ensure timely communication and updates.',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Round-the-clock assistance for urgent matters and inquiries.',
  },
]

export default function TrustPoints() {
  return (
    <section className="section bg-white" id="trust">
      <div className="container">
        {/* Stats bar */}
        <div className="bg-primary rounded-2xl p-8 md:p-12 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-100 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">Why Choose SSourcing China</h2>
          <p className="section-subtitle">
            We combine local expertise with international standards
          </p>
        </div>

        {/* Trust points grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trustPoints.map((point) => (
            <div
              key={point.title}
              className="text-center p-6"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <point.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {point.title}
              </h3>
              <p className="text-gray-600">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
