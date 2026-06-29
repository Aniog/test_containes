import { Shield, Cog, Gauge, Wrench, Award, HeadphonesIcon } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Built to Last',
    description: 'Heavy-duty construction with premium materials ensures decades of reliable operation under demanding conditions.',
  },
  {
    icon: Gauge,
    title: 'Precision Accuracy',
    description: 'Advanced CNC controls and precision beam guidance deliver bending accuracy within ±0.1mm tolerance.',
  },
  {
    icon: Cog,
    title: 'Versatile Performance',
    description: 'Handle a wide range of material types and thicknesses with adjustable tooling and programmable settings.',
  },
  {
    icon: Wrench,
    title: 'Easy Maintenance',
    description: 'Modular design with accessible components simplifies maintenance and minimizes production downtime.',
  },
  {
    icon: Award,
    title: 'Industry Certified',
    description: 'ISO 9001 certified manufacturing with CE compliance meeting the highest international quality standards.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Expert Support',
    description: 'Dedicated technical team providing installation, training, and 24/7 after-sales support worldwide.',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-28 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gold text-sm font-semibold tracking-[0.3em] uppercase">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mt-3 mb-4">
            Engineering Excellence
          </h2>
          <div className="h-1 w-16 bg-gold mx-auto mb-6" />
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Every ARTITECT machine is designed with one goal — delivering uncompromising quality and performance for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="p-8 rounded-lg border border-border-light hover:border-gold/30 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-gold/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors duration-300">
                  <Icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-3">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
