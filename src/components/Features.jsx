import { useScrollAnimation } from '../lib/useScrollAnimation'
import { Shield, Cpu, Gauge, Wrench, Headphones, Globe } from 'lucide-react'

const features = [
  {
    icon: Cpu,
    title: 'CNC Precision Control',
    description: 'Advanced computer numerical control systems deliver repeatable accuracy to within ±0.1° on every bend, every time.',
  },
  {
    icon: Gauge,
    title: 'Industrial-Grade Power',
    description: 'Heavy-duty hydraulic and servo-electric drives handle materials up to 8mm thick with consistent force distribution.',
  },
  {
    icon: Shield,
    title: 'Built to Last',
    description: 'Hardened steel construction, precision-ground components, and rigorous quality testing ensure decades of reliable operation.',
  },
  {
    icon: Wrench,
    title: 'Rapid Tool Change',
    description: 'Quick-change tooling systems minimize downtime between jobs, keeping your production line moving efficiently.',
  },
  {
    icon: Headphones,
    title: 'Lifetime Support',
    description: 'Comprehensive after-sales service including installation, training, maintenance, and 24/7 technical support worldwide.',
  },
  {
    icon: Globe,
    title: 'Global Certification',
    description: 'All machines are CE certified and ISO 9001 compliant, meeting the highest international safety and quality standards.',
  },
]

function FeatureCard({ feature, index }) {
  const { ref, isVisible } = useScrollAnimation(0.1)
  const Icon = feature.icon

  return (
    <div
      ref={ref}
      className={`group relative ${
        isVisible ? 'animate-slide-up opacity-100' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="h-full p-6 lg:p-8 rounded-xl bg-brand-dark/5 border border-brand-border/50 hover:border-brand-accent/30 hover:bg-brand-accent/[0.03] transition-all duration-300">
        <div className="w-12 h-12 rounded-lg bg-brand-accent/10 flex items-center justify-center mb-5 group-hover:bg-brand-accent/20 transition-colors">
          <Icon size={24} className="text-brand-accent" />
        </div>
        <h3 className="font-heading text-lg font-bold text-brand-dark mb-3">
          {feature.title}
        </h3>
        <p className="text-brand-muted text-sm leading-relaxed">
          {feature.description}
        </p>
      </div>
    </div>
  )
}

export default function Features() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation()

  return (
    <section id="features" className="py-20 lg:py-28 bg-brand-surface-warm relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: 'radial-gradient(circle, #c9a959 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-16 ${
            headerVisible ? 'animate-slide-up' : 'opacity-0'
          }`}
        >
          <p className="text-brand-accent text-xs font-medium tracking-[0.3em] uppercase mb-4">
            Why Choose ARTITECT
          </p>
          <h2 className="font-heading text-3xl lg:text-5xl font-bold text-brand-dark mb-6">
            Engineering{' '}
            <span className="text-brand-accent">Excellence</span>
            <br className="hidden sm:block" />
            in Every Detail
          </h2>
          <p className="text-brand-muted text-lg leading-relaxed">
            Every machine is designed, manufactured, and tested to deliver performance
            that exceeds expectations. Here's what sets us apart.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-brand-accent/10 flex items-center justify-center">
              <span className="font-heading text-brand-accent font-bold text-sm">CE</span>
            </div>
            <span className="text-brand-dark text-sm font-medium">European Certified</span>
          </div>
          <div className="hidden sm:block w-px h-8 bg-brand-border" />
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-brand-accent/10 flex items-center justify-center">
              <span className="font-heading text-brand-accent font-bold text-sm">ISO</span>
            </div>
            <span className="text-brand-dark text-sm font-medium">ISO 9001:2015</span>
          </div>
          <div className="hidden sm:block w-px h-8 bg-brand-border" />
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-brand-accent/10 flex items-center justify-center">
              <span className="font-heading text-brand-accent font-bold text-sm">SGS</span>
            </div>
            <span className="text-brand-dark text-sm font-medium">SGS Verified</span>
          </div>
        </div>
      </div>
    </section>
  )
}
