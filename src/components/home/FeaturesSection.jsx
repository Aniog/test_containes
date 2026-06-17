import { Settings, Users, HeadphonesIcon, Shield } from 'lucide-react'

const features = [
  {
    icon: Settings,
    title: 'German-Engineered Precision',
    desc: 'Every ARTITECT machine is built with precision components sourced from leading European manufacturers, ensuring tolerances of ±0.1mm on every fold.',
  },
  {
    icon: Shield,
    title: 'Built to Last Decades',
    desc: 'Our machines feature heavy-duty steel frames, hardened tooling, and corrosion-resistant coatings designed for round-the-clock production environments.',
  },
  {
    icon: HeadphonesIcon,
    title: '24/7 Technical Support',
    desc: 'Our expert support team provides remote diagnostics, on-site service, and spare parts dispatch within 24 hours to minimize your downtime.',
  },
  {
    icon: Users,
    title: 'Custom Solutions',
    desc: 'We work closely with your engineering team to develop custom tooling, automated workflows, and integrated production line solutions.',
  },
]

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-accent font-display font-semibold text-sm tracking-[0.2em] uppercase mb-3">
            Why Choose Us
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            The ARTITECT Advantage
          </h2>
          <p className="font-body text-lg text-brand-600 leading-relaxed">
            With decades of expertise in sheet metal folding technology, we deliver
            machines that combine precision engineering with practical usability.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, idx) => (
            <div key={idx} className="flex gap-5 group">
              <div className="shrink-0 w-14 h-14 bg-brand-50 rounded-xl flex items-center justify-center group-hover:bg-accent/10 transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-accent" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-primary mb-2">
                  {feature.title}
                </h3>
                <p className="font-body text-brand-600 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}