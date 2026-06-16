import { Cog, Shield, Award, Wrench } from 'lucide-react'

const features = [
  {
    icon: Cog,
    title: 'Precision Engineering',
    description:
      'Every machine is engineered to tight tolerances with CNC-controlled systems ensuring repeatable accuracy to within ±0.005 mm.',
  },
  {
    icon: Shield,
    title: 'Built to Last',
    description:
      'Constructed from high-grade alloy steel with reinforced monoblock frames, our machines withstand decades of heavy industrial use.',
  },
  {
    icon: Award,
    title: 'Certified Quality',
    description:
      'All products carry CE certification and meet ISO 9001 quality management standards for complete operational confidence.',
  },
  {
    icon: Wrench,
    title: 'Global Support',
    description:
      'Our worldwide service network provides installation, training, maintenance, and spare parts wherever you operate.',
  },
]

export default function FeaturesSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold text-gold-600 tracking-[0.2em] uppercase mb-3 block">
            Why Choose Us
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-brand-950 mb-4">
            Excellence in Every Fold
          </h2>
          <p className="text-brand-500 leading-relaxed">
            We combine decades of engineering expertise with modern manufacturing to deliver machinery that performs day after day.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group p-6 rounded-sm border border-brand-100 bg-brand-50/50 hover:bg-white hover:shadow-lg hover:shadow-brand-100/50 hover:border-gold-200 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-brand-900 rounded-sm flex items-center justify-center mb-5 group-hover:bg-gold-500 transition-colors duration-300">
                <feature.icon className="w-5 h-5 text-white group-hover:text-brand-950 transition-colors duration-300" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-brand-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-brand-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
