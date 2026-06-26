import { Cog, Shield, Zap, Wrench, Clock, Globe } from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: Cog,
      title: 'Precision Engineering',
      description: 'German-engineered components ensure ±0.1mm accuracy in every fold, delivering consistent quality for your most demanding projects.'
    },
    {
      icon: Shield,
      title: 'Built to Last',
      description: 'Heavy-duty steel construction with reinforced frames designed for 24/7 operation and decades of reliable service.'
    },
    {
      icon: Zap,
      title: 'Energy Efficient',
      description: 'Advanced motor systems and smart power management reduce energy consumption by up to 30% compared to conventional machines.'
    },
    {
      icon: Wrench,
      title: 'Easy Maintenance',
      description: 'Modular design with quick-access panels and self-diagnostic systems minimize downtime and maintenance costs.'
    },
    {
      icon: Clock,
      title: 'Fast Setup',
      description: 'Quick-change tooling system and programmable memory allow operators to switch jobs in under 5 minutes.'
    },
    {
      icon: Globe,
      title: 'Global Support',
      description: '24/7 technical support in 12 languages with local service centers in over 50 countries worldwide.'
    }
  ]

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose ARTITECT?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine decades of engineering expertise with cutting-edge technology to deliver machines that exceed expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="relative p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center h-16 w-16 rounded-xl bg-blue-900 text-white group-hover:bg-blue-800 transition-colors">
                    <Icon className="h-8 w-8" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center space-x-8 bg-blue-50 rounded-2xl px-8 py-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-900">ISO 9001</div>
              <div className="text-sm text-gray-600">Certified</div>
            </div>
            <div className="h-12 w-px bg-gray-300" />
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-900">CE</div>
              <div className="text-sm text-gray-600">Certified</div>
            </div>
            <div className="h-12 w-px bg-gray-300" />
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-900">5 Year</div>
              <div className="text-sm text-gray-600">Warranty</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
