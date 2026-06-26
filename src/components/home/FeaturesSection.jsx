import { CheckCircle2, Award, Clock, Headphones } from 'lucide-react'

const features = [
  {
    icon: Award,
    title: 'Precision Engineering',
    description:
      'Every machine is built to tight tolerances, ensuring consistent bends and repeatable accuracy across thousands of cycles.',
  },
  {
    icon: Clock,
    title: 'Fast Delivery',
    description:
      'With streamlined manufacturing and a global logistics network, we deliver your equipment on time, every time.',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description:
      'Our expert technicians are available around the clock to keep your production line running without interruption.',
  },
  {
    icon: CheckCircle2,
    title: 'Industry Certified',
    description:
      'All our machines meet CE, ISO 9001, and OSHA safety standards for peace of mind in any production environment.',
  },
]

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-gold text-sm font-semibold tracking-widest uppercase">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
            Built on Trust & Precision
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Decades of engineering expertise backed by a relentless commitment to
            quality and customer success.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-gold/40 transition-colors"
            >
              <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mb-5">
                <feature.icon size={24} className="text-gold" />
              </div>
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
