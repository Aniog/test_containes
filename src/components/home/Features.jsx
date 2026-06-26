import { Wrench, Gauge, Cpu, Shield, Leaf, Headphones } from 'lucide-react'

const features = [
  {
    icon: Gauge,
    title: 'Unmatched Precision',
    description: 'Every machine is calibrated to deliver micron-level accuracy across the full bending range. Consistent results, sheet after sheet.',
  },
  {
    icon: Cpu,
    title: 'Smart Controls',
    description: 'Intuitive CNC interfaces with real-time monitoring, automatic bend correction, and programmable job storage for rapid changeovers.',
  },
  {
    icon: Wrench,
    title: 'Built to Last',
    description: 'Heavy-duty steel frames, precision-ground components, and industrial-grade hydraulics ensure years of reliable, maintenance-free operation.',
  },
  {
    icon: Shield,
    title: 'Safety First',
    description: 'Integrated safety systems including light curtains, two-hand controls, and emergency stops protect operators in every cycle.',
  },
  {
    icon: Leaf,
    title: 'Energy Efficient',
    description: 'Variable-speed drives and intelligent power management reduce energy consumption by up to 30% compared to conventional systems.',
  },
  {
    icon: Headphones,
    title: '24/7 Expert Support',
    description: 'Our dedicated technical team provides round-the-clock support, remote diagnostics, and rapid on-site service when you need it.',
  },
]

export default function Features() {
  return (
    <section id="features" className="bg-white py-20 lg:py-28">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-amber text-xs font-semibold tracking-[0.15em] uppercase">
            Why Choose Us
          </span>
          <h2 className="text-charcoal font-bold text-3xl sm:text-4xl mt-3 mb-5">
            Engineered for Excellence
          </h2>
          <p className="text-slate text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Every ARTITECT machine is designed with the operator in mind. We combine cutting-edge technology with practical engineering to deliver machines that perform.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="group bg-cream border border-border rounded-lg p-8 hover:bg-white hover:shadow-[0_4px_20px_rgba(27,31,46,0.08)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-amber/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-amber/20 transition-colors">
                  <Icon className="w-6 h-6 text-amber" />
                </div>
                <h3 className="text-charcoal font-semibold text-lg mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate text-sm leading-relaxed">
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
