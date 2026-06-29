import { Settings, Gauge, Wrench, HeadphonesIcon, Globe, ShieldCheck } from 'lucide-react'

const features = [
  {
    icon: Gauge,
    title: 'High Precision',
    desc: 'Tolerances within ±0.1mm ensure consistent, repeatable bends for even the most demanding applications.',
  },
  {
    icon: Settings,
    title: 'Robust Construction',
    desc: 'Built with hardened steel frames and industrial-grade hydraulics for decades of reliable operation.',
  },
  {
    icon: Wrench,
    title: 'Easy Maintenance',
    desc: 'Modular design with quick-access panels reduces downtime and simplifies routine servicing.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Expert Support',
    desc: 'Dedicated technical support team available for installation, training, and troubleshooting worldwide.',
  },
  {
    icon: Globe,
    title: 'Global Service',
    desc: 'International shipping, on-site commissioning, and a network of certified service partners.',
  },
  {
    icon: ShieldCheck,
    title: 'Safety Certified',
    desc: 'All machines meet CE, ISO, and OSHA safety standards with advanced guarding and emergency stop systems.',
  },
]

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 md:py-28 bg-brand-navy">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="inline-block text-sm font-semibold text-brand-accent-light uppercase tracking-widest mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-6">
            Engineered for Excellence
          </h2>
          <p className="text-white/70 text-lg leading-relaxed">
            Every machine we build reflects our dedication to quality, safety,
            and customer success. Here is what sets ARTITECT MACHINERY apart.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="p-6 lg:p-8 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-accent/15 flex items-center justify-center mb-5 group-hover:bg-brand-accent/25 transition-colors">
                  <Icon className="w-6 h-6 text-brand-accent-light" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}