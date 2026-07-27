import React from 'react'
import { 
  Shield, Users, Award, Clock, Globe, Headphones 
} from 'lucide-react'

const trustPoints = [
  {
    icon: Shield,
    title: 'Verified Suppliers Only',
    description: 'Every supplier in our network undergoes rigorous verification including factory visits, license checks, and reference verification.',
    stat: '100%',
    statLabel: 'Verified',
  },
  {
    icon: Users,
    title: 'Local Team in China',
    description: 'Our team is based in major manufacturing hubs across China, giving us direct access to suppliers and factories.',
    stat: '50+',
    statLabel: 'Team Members',
  },
  {
    icon: Award,
    title: '10+ Years Experience',
    description: 'Over a decade of experience sourcing products from China for businesses worldwide.',
    stat: '10+',
    statLabel: 'Years',
  },
  {
    icon: Clock,
    title: '24-Hour Response',
    description: 'We respond to all inquiries within 24 hours and provide regular updates throughout the sourcing process.',
    stat: '24h',
    statLabel: 'Response Time',
  },
  {
    icon: Globe,
    title: 'Global Client Base',
    description: 'We serve clients across North America, Europe, Australia, and the Middle East with localized support.',
    stat: '30+',
    statLabel: 'Countries Served',
  },
  {
    icon: Headphones,
    title: 'Dedicated Support',
    description: 'Each client is assigned a dedicated sourcing specialist who manages their account end-to-end.',
    stat: '1:1',
    statLabel: 'Dedicated Support',
  },
]

export default function TrustPoints() {
  return (
    <section className="section-padding bg-white" id="trust">
      <div className="container-custom">
        <div className="section-title">
          <h2>Why Choose SSourcing China</h2>
          <p>
            We combine local expertise with international standards to deliver 
            reliable sourcing solutions for your business.
          </p>
        </div>

        <div className="grid-3">
          {trustPoints.map((point) => (
            <div
              key={point.title}
              className="text-center group"
            >
              <div className="w-20 h-20 bg-primary-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors">
                <point.icon className="w-10 h-10 text-primary group-hover:text-white transition-colors" />
              </div>
              <div className="mb-4">
                <span className="text-4xl font-bold text-primary">{point.stat}</span>
                <span className="text-sm text-muted-foreground block">{point.statLabel}</span>
              </div>
              <h3 className="heading-4 text-foreground mb-3">{point.title}</h3>
              <p className="text-muted-foreground">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
