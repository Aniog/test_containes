import React from 'react'
import { Shield, Cog, Clock, Award, Headphones, Globe } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Built to Last',
    description: 'Heavy-duty construction with premium-grade steel ensures decades of reliable operation under the most demanding conditions.',
  },
  {
    icon: Cog,
    title: 'CNC Precision',
    description: 'Advanced CNC control systems deliver bend accuracy within 0.1mm, ensuring consistent results across every production run.',
  },
  {
    icon: Clock,
    title: 'Fast Setup',
    description: 'Quick-change tooling and intuitive programming reduce setup time by up to 60%, maximizing your production output.',
  },
  {
    icon: Award,
    title: 'ISO Certified',
    description: 'All machines meet ISO 9001 quality standards and CE safety certifications, giving you confidence in every fold.',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Dedicated technical support team available around the clock. Remote diagnostics and on-site service when you need it.',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Trusted by manufacturers in over 50 countries. Local service partners and spare parts warehouses worldwide.',
  },
]

export default function WhyUs() {
  return (
    <section id="why-us" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#C8963E] mb-3">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F1B2D] tracking-tight mb-4">
            Engineering Excellence
          </h2>
          <p className="max-w-2xl mx-auto text-[#5A6275] leading-relaxed">
            With over 25 years of expertise in metal folding technology, Artitect Machinery delivers solutions that set the industry standard.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="group p-6 md:p-8 rounded-xl border border-[#E2E5EB] hover:border-[#2E7DBF]/30 hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-[#0F1B2D] flex items-center justify-center mb-5 group-hover:bg-[#2E7DBF] transition-colors duration-300">
                  <Icon className="w-5 h-5 text-[#C8963E]" />
                </div>
                <h3 className="text-lg font-bold text-[#0F1B2D] mb-2">{feature.title}</h3>
                <p className="text-sm text-[#5A6275] leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
