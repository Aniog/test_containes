import { Shield, Cog, Gauge, Wrench, Clock, Award } from 'lucide-react'

const features = [
  {
    icon: Gauge,
    title: 'Precision Engineering',
    description: 'CNC-controlled bending with accuracy up to ±0.1mm, ensuring consistent results across every production run.',
  },
  {
    icon: Cog,
    title: 'Robust Construction',
    description: 'Heavy-duty welded steel frames and hardened tooling designed for decades of reliable operation under load.',
  },
  {
    icon: Clock,
    title: 'High Productivity',
    description: 'Rapid cycle times with automated back gauge positioning and servo-driven folding beam for maximum throughput.',
  },
  {
    icon: Wrench,
    title: 'Easy Maintenance',
    description: 'Modular design with accessible components and self-diagnostic systems that minimize downtime.',
  },
  {
    icon: Shield,
    title: 'Safety First',
    description: 'Comprehensive safety systems including light curtains, two-hand controls, and emergency stop mechanisms.',
  },
  {
    icon: Award,
    title: 'Global Standards',
    description: 'CE certified and ISO 9001 compliant, meeting the strictest international quality and safety requirements.',
  },
]

const Features = () => {
  return (
    <section id="features" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-gold text-xs font-semibold tracking-widest uppercase">
            Why Choose Us
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark tracking-tight">
            Engineered for Excellence
          </h2>
          <div className="mt-4 w-16 h-1 bg-brand-gold mx-auto" />
          <p className="mt-6 text-brand-muted text-lg max-w-2xl mx-auto">
            Every ARTITECT machine is built with a relentless focus on quality, precision, and operator experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="group p-8 border border-brand-border rounded-lg hover:border-brand-gold/40 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 bg-brand-dark rounded-lg flex items-center justify-center group-hover:bg-brand-gold transition-colors duration-300">
                  <Icon className="w-7 h-7 text-brand-gold group-hover:text-brand-dark transition-colors duration-300" strokeWidth={1.5} />
                </div>
                <h3 className="mt-6 text-xl font-bold text-brand-dark">
                  {feature.title}
                </h3>
                <p className="mt-3 text-brand-muted text-sm leading-relaxed">
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

export default Features
