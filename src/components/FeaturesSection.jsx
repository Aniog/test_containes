import { ShieldCheck, Settings, Wrench, Truck } from 'lucide-react'

const features = [
  {
    icon: ShieldCheck,
    title: 'Built to Last',
    description:
      'Our machines use high-grade steel frames and hardened tooling surfaces, backed by a comprehensive warranty.',
  },
  {
    icon: Settings,
    title: 'Precision Controls',
    description:
      'Digital back gauges, programmable bend angles, and fine-tuned hydraulics ensure repeatable accuracy to within 0.1 mm.',
  },
  {
    icon: Wrench,
    title: 'Easy Maintenance',
    description:
      'Modular components and accessible service panels mean less downtime and straightforward routine maintenance.',
  },
  {
    icon: Truck,
    title: 'Global Shipping',
    description:
      'We ship worldwide with professional crating and logistics support, ensuring your machine arrives safely.',
  },
]

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 md:py-32 bg-[#F8F9FC]">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-[#C9A45C] text-sm font-semibold uppercase tracking-[0.2em] mb-4">
            Why Choose Us
          </span>
          <h2 className="text-[#1A2332] text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
            Engineering Excellence
          </h2>
          <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
            Every ARTITECT machine is designed with the operator in mind,
            combining industrial strength with intuitive usability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="bg-white rounded-xl border border-[#E2E8F0] p-8 hover:shadow-lg hover:border-[#C9A45C]/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-[#C9A45C]/10 flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-[#C9A45C]" />
                </div>
                <h3 className="text-[#1A2332] text-lg font-bold mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#64748B] text-sm leading-relaxed">
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
