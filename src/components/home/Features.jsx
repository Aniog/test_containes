import React from 'react'
import { Shield, Cog, Clock, Award, Wrench, TrendingUp } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Built to Last',
    description: 'Heavy-duty steel construction ensures decades of reliable operation under the most demanding conditions.',
  },
  {
    icon: Cog,
    title: 'CNC Precision',
    description: 'Advanced CNC controls deliver bending accuracy within 0.1mm, ensuring perfect results every time.',
  },
  {
    icon: Clock,
    title: 'Rapid Setup',
    description: 'Quick-change tooling and programmable back gauges minimize downtime between jobs.',
  },
  {
    icon: Award,
    title: 'ISO Certified',
    description: 'All machines meet ISO 9001 quality standards and CE safety certifications for global compliance.',
  },
  {
    icon: Wrench,
    title: 'Full Support',
    description: 'Comprehensive after-sales service including installation, training, and 24/7 technical support.',
  },
  {
    icon: TrendingUp,
    title: 'High Productivity',
    description: 'Automated folding cycles and multi-axis control maximize throughput and reduce labor costs.',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#C8973E] font-semibold text-sm tracking-widest uppercase">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F1B2D] mt-3 mb-5 tracking-tight">
            Engineering Excellence
          </h2>
          <p className="text-[#5A6577] text-lg max-w-2xl mx-auto">
            Every ARTITECT machine is designed with one goal — delivering flawless results, job after job.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="group p-8 rounded-xl border border-[#E2E6ED] hover:border-[#C8973E]/30 hover:shadow-md transition-all duration-300"
              >
                <div className="w-14 h-14 bg-[#C8973E]/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#C8973E]/20 transition-colors">
                  <Icon className="w-7 h-7 text-[#C8973E]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F1B2D] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#5A6577] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
