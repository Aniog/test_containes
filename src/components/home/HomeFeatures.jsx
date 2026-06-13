import { Shield, Wrench, Clock, Award } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Precision Engineering',
    description: 'Every machine is built to exacting standards with tolerances measured in microns for flawless bends.',
  },
  {
    icon: Wrench,
    title: 'Custom Solutions',
    description: 'We tailor our machines to your specific production requirements, material types, and shop floor layout.',
  },
  {
    icon: Clock,
    title: 'Fast Delivery',
    description: 'Streamlined manufacturing and global logistics ensure your equipment arrives when you need it.',
  },
  {
    icon: Award,
    title: 'Quality Certified',
    description: 'ISO 9001 certified processes guarantee consistent quality and reliability in every unit we ship.',
  },
]

export default function HomeFeatures() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <span className="text-[#c87941] font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
          <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-[#1e3a5f]">
            Built for Industrial Excellence
          </h2>
          <p className="mt-4 text-lg text-[#6b7280]">
            Our folding machines combine decades of engineering expertise with modern manufacturing technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group p-6 rounded-xl border border-gray-200 hover:border-[#c87941]/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-[#1e3a5f]/10 rounded-lg flex items-center justify-center group-hover:bg-[#c87941]/10 transition-colors">
                <feature.icon className="w-6 h-6 text-[#1e3a5f] group-hover:text-[#c87941] transition-colors" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-[#1e3a5f]">{feature.title}</h3>
              <p className="mt-2 text-[#6b7280] text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
