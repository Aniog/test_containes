import { Gauge, Cpu, ShieldCheck, Wrench, BarChart3, Layers } from 'lucide-react'

const capabilities = [
  {
    icon: Gauge,
    title: 'Precision Engineering',
    description: 'Every machine is calibrated to deliver repeatable accuracy within +/- 0.5 degrees across the full range of motion.',
  },
  {
    icon: Cpu,
    title: 'CNC Integration',
    description: 'Advanced CNC control systems with touchscreen interfaces for programmable bend sequences and automated production runs.',
  },
  {
    icon: ShieldCheck,
    title: 'Built to Last',
    description: 'Heavy-duty steel frame construction with industrial-grade hydraulics, tested to exceed 10 million cycles without degradation.',
  },
  {
    icon: Wrench,
    title: 'Easy Maintenance',
    description: 'Modular design with accessible service points and self-diagnostic systems that minimize downtime and maintenance costs.',
  },
  {
    icon: BarChart3,
    title: 'Production Analytics',
    description: 'Real-time monitoring and reporting on machine performance, output quality, and predictive maintenance scheduling.',
  },
  {
    icon: Layers,
    title: 'Versatile Materials',
    description: 'Handle steel, aluminum, stainless steel, copper, and brass with quick-change tooling and adjustable pressure settings.',
  },
]

const Capabilities = () => {
  return (
    <section id="capabilities" className="section-padding bg-charcoal-950 relative overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
        backgroundSize: '40px 40px',
      }} />

      <div className="container-wide relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="text-brand-400 text-sm font-semibold tracking-[0.25em] uppercase block mb-4">
            Why ARTITECT
          </span>
          <h2 className="text-headline md:text-5xl text-white mb-5 text-balance">
            Engineered for Excellence
          </h2>
          <div className="divider-gold mx-auto mb-6" />
          <p className="text-charcoal-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Every ARTITECT machine combines cutting-edge technology with decades of metalworking expertise to deliver results you can count on.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {capabilities.map((cap) => {
            const Icon = cap.icon
            return (
              <div
                key={cap.title}
                className="group relative p-8 bg-charcoal-900/50 border border-charcoal-800 hover:border-brand-500/30 transition-all duration-500"
              >
                {/* Hover accent */}
                <div className="absolute top-0 left-0 w-0 h-0.5 bg-brand-500 transition-all duration-500 group-hover:w-full" />

                <div className="w-12 h-12 flex items-center justify-center bg-brand-500/10 border border-brand-500/20 mb-6">
                  <Icon className="w-6 h-6 text-brand-400" />
                </div>

                <h3 className="text-white text-lg font-bold mb-3 tracking-tight">
                  {cap.title}
                </h3>
                <p className="text-charcoal-300 text-sm leading-relaxed">
                  {cap.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Capabilities
