import { Shield, Cog, Gauge, Wrench, Award, Headphones } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Built to Last',
    description: 'Heavy-duty construction with premium materials ensures decades of reliable operation in demanding environments.',
  },
  {
    icon: Cog,
    title: 'CNC Precision',
    description: 'Advanced CNC controls deliver repeatable accuracy down to 0.01mm, ensuring perfect folds every time.',
  },
  {
    icon: Gauge,
    title: 'High Performance',
    description: 'Fast cycle times and automated workflows maximize your production output without compromising quality.',
  },
  {
    icon: Wrench,
    title: 'Easy Maintenance',
    description: 'Modular design and accessible components make routine maintenance simple and minimize downtime.',
  },
  {
    icon: Award,
    title: 'Industry Certified',
    description: 'CE and ISO certified machines meeting the highest international standards for safety and quality.',
  },
  {
    icon: Headphones,
    title: 'Expert Support',
    description: 'Dedicated technical team providing installation, training, and ongoing support worldwide.',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-28 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-gold" />
            <span className="text-gold text-xs tracking-[0.25em] uppercase font-medium">Why Choose Us</span>
            <div className="w-8 h-[2px] bg-gold" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Engineering Excellence
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Every ARTITECT machine is designed with precision, built with quality, and backed by expertise you can trust.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="group p-6 md:p-8 rounded-xl border border-white/10 hover:border-gold/30 bg-white/5 hover:bg-white/[0.08] transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors">
                  <Icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="text-white font-bold text-lg mb-3">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
