import { Shield, Cpu, Wrench, HeadphonesIcon } from 'lucide-react'

const reasons = [
  {
    icon: Shield,
    title: 'Built to Endure',
    description: 'Every machine is constructed with heavy-duty steel frames and premium components, designed to perform reliably for decades in demanding industrial environments.',
  },
  {
    icon: Cpu,
    title: 'Advanced Technology',
    description: 'Our CNC-controlled systems deliver micron-level accuracy with intuitive interfaces that reduce training time and maximize productivity from day one.',
  },
  {
    icon: Wrench,
    title: 'Custom Solutions',
    description: 'We work closely with each client to configure machines that match their exact material types, thicknesses, and production volume requirements.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Lifetime Support',
    description: 'From installation and training to spare parts and remote diagnostics, our dedicated support team ensures your machines run at peak performance.',
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-brand-950 relative overflow-hidden">
      {/* Subtle accent glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-500/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent-600/5 rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <span className="inline-block text-accent-400 font-semibold text-sm tracking-wider uppercase mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5">
            Engineering Excellence{' '}
            <span className="text-accent-400">Since 1998</span>
          </h2>
          <p className="text-steel-400 text-lg max-w-2xl mx-auto leading-relaxed">
            ARTITECT MACHINERY has been at the forefront of metal folding
            technology, serving fabricators, workshops, and industrial
            manufacturers worldwide.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-20">
          {reasons.map((reason) => {
            const Icon = reason.icon
            return (
              <div
                key={reason.title}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/5 hover:border-accent-500/20 hover:bg-white/8 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-accent-500/10 flex items-center justify-center mb-5 group-hover:bg-accent-500/20 transition-colors">
                  <Icon size={24} className="text-accent-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{reason.title}</h3>
                <p className="text-steel-400 text-sm leading-relaxed">{reason.description}</p>
              </div>
            )
          })}
        </div>

        {/* Process / Trust Band */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-white/5">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                From Design to Delivery
              </h3>
              <p className="text-steel-400 leading-relaxed mb-6">
                Every ARTITECT machine goes through a rigorous process:
                precision CAD design, stress-tested fabrication, multi-point
                quality inspection, and thorough factory acceptance testing
                before it reaches your floor.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-accent-500" />
                  <span className="text-steel-300 text-sm font-medium">ISO 9001 Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-accent-500" />
                  <span className="text-steel-300 text-sm font-medium">CE Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-accent-500" />
                  <span className="text-steel-300 text-sm font-medium">Global Warranty</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '25+', label: 'Years in Business' },
                { value: '40+', label: 'Countries Served' },
                { value: '12K+', label: 'Machines Installed' },
                { value: '24/7', label: 'Technical Support' },
              ].map((stat) => (
                <div key={stat.label} className="bg-brand-900/50 rounded-xl p-5 text-center border border-white/5">
                  <div className="text-2xl lg:text-3xl font-extrabold text-accent-400">{stat.value}</div>
                  <div className="text-steel-400 text-xs mt-1 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
