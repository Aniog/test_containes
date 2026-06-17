import { Shield, Cog, Award, HeadphonesIcon, Zap, BarChart3 } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Built to Last',
    description:
      'Heavy-duty steel construction with precision-ground components ensures decades of reliable service in the most demanding production environments.',
  },
  {
    icon: Cog,
    title: 'German Engineering',
    description:
      'Designed and manufactured with German precision standards. Every machine undergoes rigorous quality control before leaving our facility.',
  },
  {
    icon: Zap,
    title: 'Energy Efficient',
    description:
      'Servo-electric drive systems reduce energy consumption by up to 60% compared to hydraulic alternatives, lowering your operating costs.',
  },
  {
    icon: Award,
    title: 'ISO 9001 Certified',
    description:
      'Our manufacturing processes are ISO 9001:2015 certified, guaranteeing consistent quality and continuous improvement across all operations.',
  },
  {
    icon: BarChart3,
    title: 'Smart Controls',
    description:
      'Intuitive CNC controls with touchscreen interfaces make programming complex bend sequences simple. Reduce setup time and increase throughput.',
  },
  {
    icon: HeadphonesIcon,
    title: '24/7 Support',
    description:
      'Our global support network provides around-the-clock technical assistance, spare parts delivery, and on-site service when you need it most.',
  },
]

export default function FeaturesSection() {
  return (
    <section id="features" className="relative py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="text-brand-gold text-xs tracking-[0.25em] uppercase font-medium">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mt-4 mb-4">
            Engineered for Excellence
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Every ARTITECT machine represents decades of metallurgical expertise and
            precision engineering innovation.
          </p>
          <div className="w-16 h-0.5 bg-brand-gold mx-auto mt-6" />
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="group p-8 bg-white border border-slate-100 hover:border-brand-gold/40 transition-all duration-500"
              >
                <div className="w-12 h-12 bg-brand-navy flex items-center justify-center mb-6 group-hover:bg-brand-gold transition-colors duration-500">
                  <Icon className="w-6 h-6 text-white group-hover:text-brand-navy transition-colors duration-500" />
                </div>
                <h3 className="text-lg font-bold text-brand-navy mb-3">{feature.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>

        {/* Stats bar */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-t border-slate-200">
          {[
            { value: '40+', label: 'Years Experience' },
            { value: '12,000+', label: 'Machines Delivered' },
            { value: '85+', label: 'Export Countries' },
            { value: '99.7%', label: 'Uptime Rate' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-brand-navy">{stat.value}</div>
              <div className="text-slate-400 text-sm tracking-[0.1em] uppercase mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}