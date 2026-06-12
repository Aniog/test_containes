import { Settings, Shield, Zap, Award, Clock, Users } from 'lucide-react'

const features = [
  {
    icon: Settings,
    title: 'Precision Engineering',
    description: 'Every machine is built with CNC-machined components ensuring accuracy within ±0.1mm tolerance.',
  },
  {
    icon: Shield,
    title: 'Built to Last',
    description: 'Heavy-duty construction with premium materials guarantees decades of reliable operation.',
  },
  {
    icon: Zap,
    title: 'High Performance',
    description: 'Advanced hydraulic and pneumatic systems deliver fast cycle times and consistent results.',
  },
  {
    icon: Award,
    title: 'ISO Certified',
    description: 'All manufacturing processes meet international quality standards and certifications.',
  },
  {
    icon: Clock,
    title: 'Quick Setup',
    description: 'Intuitive controls and quick-change tooling minimize downtime between operations.',
  },
  {
    icon: Users,
    title: 'Expert Support',
    description: 'Dedicated technical support team available worldwide for installation and maintenance.',
  },
]

const Features = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3 mb-4">
            Engineered for Excellence
          </h2>
          <p className="text-slate-600 text-lg">
            Decades of expertise combined with cutting-edge technology deliver
            machines that exceed expectations.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl border border-slate-100 hover:border-amber-200 hover:bg-amber-50/50 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
