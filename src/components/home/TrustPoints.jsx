import React from 'react'
import { ShieldCheck, Users, Globe, TrendingUp, CheckCircle2, Award } from 'lucide-react'

const trustPoints = [
  {
    icon: ShieldCheck,
    title: 'Verified Factory Network',
    desc: 'Over 500 factories audited and verified across major manufacturing hubs in China.',
    stat: '500+',
  },
  {
    icon: Users,
    title: 'Clients Worldwide',
    desc: 'Trusted by buyers from North America, Europe, Australia, and the Middle East.',
    stat: '200+',
  },
  {
    icon: Globe,
    title: 'Product Categories',
    desc: 'Experience sourcing across diverse product categories and industries.',
    stat: '50+',
  },
  {
    icon: TrendingUp,
    title: 'Years of Experience',
    desc: 'Deep expertise in China sourcing, supply chain management, and quality control.',
    stat: '10+',
  },
  {
    icon: CheckCircle2,
    title: 'Inspection Pass Rate',
    desc: 'Rigorous quality checks that catch issues before they become your problems.',
    stat: '98%',
  },
  {
    icon: Award,
    title: 'Repeat Client Rate',
    desc: 'Most clients come back for repeat orders — a sign of consistent, reliable service.',
    stat: '85%',
  },
]

export default function TrustPoints() {
  return (
    <section className="py-16 md:py-24 bg-neutral-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
            Why Buyers Trust SSourcing China
          </h2>
          <p className="text-neutral-mid max-w-2xl mx-auto">
            Real numbers, real experience, and a track record of helping global buyers source with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {trustPoints.map((point) => (
            <div
              key={point.title}
              className="bg-white rounded-lg p-6 md:p-8 shadow-md text-center"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <point.icon className="w-6 h-6 text-accent" />
              </div>
              <div className="text-3xl font-extrabold text-primary mb-2">{point.stat}</div>
              <h3 className="text-lg font-semibold text-primary mb-2">{point.title}</h3>
              <p className="text-neutral-mid text-sm leading-relaxed">{point.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
