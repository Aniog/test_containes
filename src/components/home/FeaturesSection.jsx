import { Shield, Cog, BarChart3, HeadphonesIcon, Wrench, Truck } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Industrial-Grade Durability',
    description:
      'Our machines are built with reinforced steel frames and premium components, engineered to withstand years of continuous production.',
  },
  {
    icon: Cog,
    title: 'CNC Precision Control',
    description:
      'Advanced CNC controllers with servo-driven axes deliver accuracy down to ±0.1mm, ensuring consistent quality across every fold.',
  },
  {
    icon: BarChart3,
    title: 'High Production Throughput',
    description:
      'Optimized cycle times and automatic tool changing systems maximize your production output while reducing labor costs.',
  },
  {
    icon: HeadphonesIcon,
    title: '24/7 Technical Support',
    description:
      'Our expert support team is available around the clock. Remote diagnostics and on-site service ensure minimal downtime.',
  },
  {
    icon: Wrench,
    title: 'Easy Maintenance',
    description:
      'Modular design with quick-access panels and self-lubricating systems reduces maintenance time and keeps your line running.',
  },
  {
    icon: Truck,
    title: 'Global Delivery & Installation',
    description:
      'Worldwide shipping with professional installation and operator training included with every machine purchase.',
  },
]

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="text-brand-gold text-xs uppercase tracking-[0.2em] font-medium">
            Why Choose Us
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-brand-navy mt-3 mb-5">
            Built for Performance
          </h2>
          <div className="flex items-center justify-center gap-3">
            <span className="w-12 h-0.5 bg-brand-gold" />
            <span className="w-2 h-2 bg-brand-gold rotate-45" />
            <span className="w-12 h-0.5 bg-brand-gold" />
          </div>
          <p className="text-brand-text-muted text-lg max-w-3xl mx-auto mt-5 leading-relaxed">
            Every machine we deliver reflects decades of engineering expertise
            and a relentless commitment to quality.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group p-8 border border-brand-border hover:border-brand-gold/40 transition-all duration-300 hover:shadow-lg hover:shadow-brand-gold/5"
              >
                <div className="w-14 h-14 bg-brand-navy flex items-center justify-center mb-6 group-hover:bg-brand-gold transition-colors duration-300">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-brand-navy mb-3">
                  {feature.title}
                </h3>
                <p className="text-brand-text-muted leading-relaxed">
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