import { Cog, Shield, Gauge, Wrench, Truck, Headphones } from 'lucide-react'

const features = [
  {
    icon: Cog,
    title: 'Precision Engineering',
    desc: 'CNC-machined components ensure micron-level accuracy in every fold, delivering consistent results across production runs.',
  },
  {
    icon: Shield,
    title: 'Built to Last',
    desc: 'Heavy-gauge steel construction with powder-coated finish stands up to demanding industrial environments.',
  },
  {
    icon: Gauge,
    title: 'High Efficiency',
    desc: 'Optimized folding cycles reduce production time while maintaining superior bend quality and repeatability.',
  },
  {
    icon: Wrench,
    title: 'Easy Maintenance',
    desc: 'Tool-free access to key components and modular design make routine maintenance quick and straightforward.',
  },
  {
    icon: Truck,
    title: 'Global Logistics',
    desc: 'We ship worldwide with secure crating and comprehensive installation support at your facility.',
  },
  {
    icon: Headphones,
    title: 'Expert Support',
    desc: 'Our engineering team provides lifetime technical support, training, and spare parts availability.',
  },
]

export default function Features() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-accent font-semibold text-sm uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-brand-primary-dark tracking-tight">
            Engineered for Excellence
          </h2>
          <p className="mt-4 text-[#5A6278] max-w-2xl mx-auto">
            Every ARTITECT machine is designed and manufactured to the highest standards, ensuring your production line runs smoothly for decades.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group p-6 md:p-8 rounded-xl border border-gray-200 bg-white hover:border-brand-accent/30 hover:shadow-md transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-brand-primary-light flex items-center justify-center mb-5 group-hover:bg-brand-accent-light transition-colors">
                <feature.icon className="w-6 h-6 text-brand-primary group-hover:text-brand-accent transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-brand-primary-dark mb-2">
                {feature.title}
              </h3>
              <p className="text-[#5A6278] text-sm leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}