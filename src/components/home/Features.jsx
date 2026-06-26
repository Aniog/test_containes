import {
  Shield,
  Cog,
  Gauge,
  Wrench,
  HeadphonesIcon,
  Award,
} from 'lucide-react'

const features = [
  {
    icon: Gauge,
    title: 'Precision Engineering',
    description:
      'Every machine is built to tolerances of ±0.1mm, ensuring consistent, repeatable results across thousands of production cycles.',
  },
  {
    icon: Cog,
    title: 'Smart Automation',
    description:
      'CNC controls and programmable bend sequences reduce setup time by up to 70% and eliminate manual calculation errors.',
  },
  {
    icon: Shield,
    title: 'Built to Last',
    description:
      'Heavy-duty welded steel frames and premium components deliver decades of reliable service in the toughest shop environments.',
  },
  {
    icon: Wrench,
    title: 'Easy Maintenance',
    description:
      'Modular design and accessible service points mean less downtime and lower total cost of ownership over the life of the machine.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Expert Support',
    description:
      'Our global team of application engineers provides installation, training, and ongoing technical support wherever you operate.',
  },
  {
    icon: Award,
    title: 'Industry Certified',
    description:
      'CE certified and ISO 9001 compliant. Every machine undergoes rigorous quality testing before leaving our factory.',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-28 bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gold-500 font-semibold text-sm tracking-widest uppercase">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 mb-4">
            Engineering Excellence
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Every ARTITECT machine is designed with one goal: to make your
            metalworking faster, more precise, and more profitable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="group p-8 rounded-xl bg-navy-800/50 border border-white/5 hover:border-gold-500/30 transition-all duration-300 hover:bg-navy-800"
              >
                <div className="w-14 h-14 bg-gold-500/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-gold-500/20 transition-colors">
                  <Icon className="w-7 h-7 text-gold-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-white/60 leading-relaxed text-sm">
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
