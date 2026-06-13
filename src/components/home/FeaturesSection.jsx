import { useRef } from 'react'
import { Ruler, Shield, Zap, Clock, Wrench, Award } from 'lucide-react'

const features = [
  {
    icon: Ruler,
    title: 'Precision Engineering',
    desc: 'Tolerance within ±0.1mm for flawless folding every time.',
  },
  {
    icon: Shield,
    title: 'Built to Last',
    desc: 'Heavy-duty steel construction with industrial-grade components.',
  },
  {
    icon: Zap,
    title: 'High Efficiency',
    desc: 'Servo-driven automation reduces cycle times by up to 40%.',
  },
  {
    icon: Clock,
    title: 'Rapid Delivery',
    desc: 'Fast manufacturing and worldwide shipping within 4–6 weeks.',
  },
  {
    icon: Wrench,
    title: 'Full Support',
    desc: 'Comprehensive installation, training, and lifetime service.',
  },
  {
    icon: Award,
    title: 'Certified Quality',
    desc: 'ISO 9001 certified manufacturing and CE compliance.',
  },
]

export default function FeaturesSection() {
  const containerRef = useRef(null)

  return (
    <section className="py-20 md:py-28 bg-slate-950" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14 md:mb-18">
          <span className="text-amber-500 text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Engineering Excellence
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Two decades of expertise in precision machinery, delivering solutions that power industries worldwide.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group relative bg-slate-900/50 border border-slate-800 rounded-xl p-6 md:p-8 hover:border-amber-600/40 hover:bg-slate-900 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-lg bg-amber-600/10 flex items-center justify-center mb-5 group-hover:bg-amber-600/20 transition-colors">
                <feature.icon className="w-6 h-6 text-amber-500" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2.5">
                {feature.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
