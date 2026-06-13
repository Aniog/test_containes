import { Shield, Zap, Settings, Globe, Award, Headphones } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Built to Last',
    description: 'Heavy-gauge steel frames and premium components ensure decades of reliable operation in demanding industrial environments.',
  },
  {
    icon: Zap,
    title: 'Maximum Precision',
    description: 'CNC-controlled bending with tolerances under 0.5 degrees. Every fold meets the most exacting quality standards.',
  },
  {
    icon: Settings,
    title: 'Quick Setup',
    description: 'Rapid tooling changeovers and intuitive controls minimize downtime and maximize your production throughput.',
  },
  {
    icon: Globe,
    title: 'Global Support',
    description: 'Service network spanning 45+ countries with local technicians, spare parts availability, and 24/7 remote diagnostics.',
  },
  {
    icon: Award,
    title: 'ISO Certified',
    description: 'All machines manufactured under ISO 9001:2015 quality management. CE and UL certifications available for global compliance.',
  },
  {
    icon: Headphones,
    title: 'Expert Training',
    description: 'Comprehensive operator training programs, from basic setup to advanced CNC programming, delivered on-site or at our facility.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 bg-brand-950 relative overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent text-xs font-semibold tracking-wider uppercase">Why ARTITECT</span>
          <h2 id="why-title" className="text-3xl md:text-4xl font-bold text-white mt-3">
            Engineering Excellence, Every Machine
          </h2>
          <p className="text-brand-400 mt-4 max-w-2xl mx-auto">
            For over three decades, fabricators worldwide have chosen ARTITECT for machines that deliver precision, durability, and outstanding return on investment.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 lg:p-8 rounded-2xl bg-brand-900/60 border border-brand-800/40 hover:border-accent/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors duration-300">
                <feature.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-brand-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
