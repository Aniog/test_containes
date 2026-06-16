import { useEffect, useRef } from 'react'
import { Cpu, Gauge, Shield, Wrench, BarChart3, Layers } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const features = [
  {
    icon: Cpu,
    title: 'CNC Precision Control',
    description: 'Advanced computer numerical control ensures repeatable accuracy within ±0.1mm across every fold cycle.',
  },
  {
    icon: Gauge,
    title: 'High-Speed Production',
    description: 'Process up to 800 folds per hour with automated sequencing and rapid tool changeover systems.',
  },
  {
    icon: Shield,
    title: 'Industrial-Grade Build',
    description: 'Welded steel frame construction rated for 24/7 operation in the most demanding production environments.',
  },
  {
    icon: Wrench,
    title: 'Quick-Change Tooling',
    description: 'Swap between bending profiles in under 60 seconds with our patented quick-release tooling system.',
  },
  {
    icon: BarChart3,
    title: 'Smart Diagnostics',
    description: 'Real-time monitoring and predictive maintenance alerts minimize downtime and maximize productivity.',
  },
  {
    icon: Layers,
    title: 'Multi-Material Capability',
    description: 'Handle aluminum, stainless steel, mild steel, copper, and brass with consistent quality results.',
  },
]

const FeaturesSection = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="features" ref={containerRef} className="relative py-24 lg:py-32 bg-brand-950 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 opacity-15"
        data-strk-bg-id="features-bg-9c4e2f"
        data-strk-bg="[features-subtitle] [features-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-950 via-brand-950/95 to-brand-950" />

      {/* Decorative */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-accent-500/30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent-400 font-sans font-semibold text-sm uppercase tracking-wider">
            Technology
          </span>
          <h2
            id="features-title"
            className="mt-3 font-display text-4xl sm:text-5xl font-bold text-white"
          >
            Why Industry Leaders Choose ARTITECT
          </h2>
          <p
            id="features-subtitle"
            className="mt-5 text-brand-400 text-lg leading-relaxed"
          >
            Every metal folding machine we build incorporates decades of engineering expertise 
            and cutting-edge technology to deliver uncompromising performance.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="group relative p-8 bg-brand-900/50 border border-brand-800 rounded-sm hover:border-accent-500/30 hover:bg-brand-900/80 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-accent-500/10 rounded-sm flex items-center justify-center mb-5 group-hover:bg-accent-500/20 transition-colors">
                  <Icon size={24} className="text-accent-400" />
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-brand-400 text-sm leading-relaxed">
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

export default FeaturesSection
