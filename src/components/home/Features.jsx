import { Shield, Cog, Clock, Award, Wrench, Globe } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Unmatched Precision',
    description: 'Our machines deliver bending accuracy of ±0.1mm, ensuring every fold meets the strictest tolerances.',
  },
  {
    icon: Cog,
    title: 'Advanced CNC Control',
    description: 'State-of-the-art CNC systems with intuitive interfaces for seamless operation and programming.',
  },
  {
    icon: Clock,
    title: 'High Productivity',
    description: 'Designed for continuous operation with rapid cycle times and minimal setup requirements.',
  },
  {
    icon: Award,
    title: 'Quality Certified',
    description: 'ISO 9001 certified manufacturing with rigorous quality control at every production stage.',
  },
  {
    icon: Wrench,
    title: 'Easy Maintenance',
    description: 'Modular design with accessible components for straightforward maintenance and long service life.',
  },
  {
    icon: Globe,
    title: 'Global Support',
    description: 'Worldwide service network with technical support, spare parts, and training programs.',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-dark mt-2 tracking-tight">
            The ARTITECT Advantage
          </h2>
          <p className="text-neutral-mid mt-4 max-w-2xl mx-auto">
            Decades of engineering excellence combined with cutting-edge technology make our folding machines the preferred choice worldwide.
          </p>
          <div className="w-16 h-1 bg-accent mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="p-8 rounded-xl border border-border hover:border-accent/30 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-accent/10 transition-colors">
                  <Icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-neutral-dark mb-2">{feature.title}</h3>
                <p className="text-neutral-mid text-sm leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
