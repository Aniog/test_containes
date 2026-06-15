import { Cog, Shield, Zap, Wrench, Clock, Award } from 'lucide-react'

const features = [
  {
    icon: Cog,
    title: 'Precision Engineering',
    description: 'Every machine is crafted with micron-level accuracy to ensure consistent, high-quality folds every time.'
  },
  {
    icon: Shield,
    title: 'Built to Last',
    description: 'Heavy-duty construction with premium materials ensures decades of reliable service in demanding environments.'
  },
  {
    icon: Zap,
    title: 'Energy Efficient',
    description: 'Advanced motor technology reduces power consumption while maintaining peak performance levels.'
  },
  {
    icon: Wrench,
    title: 'Easy Maintenance',
    description: 'Thoughtfully designed for quick access to components, minimizing downtime and maintenance costs.'
  },
  {
    icon: Clock,
    title: 'Fast Setup',
    description: 'Intuitive controls and quick-change tooling get you up and running in minutes, not hours.'
  },
  {
    icon: Award,
    title: 'Industry Certified',
    description: 'All machines meet or exceed international safety and quality standards including CE and ISO certifications.'
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-900/10 rounded-full text-blue-900 text-sm font-medium mb-4">
            Why Choose Us
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Engineered for Excellence
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our machines combine cutting-edge technology with decades of engineering expertise to deliver unmatched performance.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <div
                key={idx}
                className="group p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 hover:border-blue-200 transition-all duration-300"
              >
                <div className="mb-6">
                  <div className="w-14 h-14 bg-blue-900/10 rounded-xl flex items-center justify-center group-hover:bg-blue-900 group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-7 h-7 text-blue-900 group-hover:text-white transition-colors duration-300" />
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

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
            <div className="text-left">
              <div className="font-semibold text-gray-900">Ready to upgrade your workshop?</div>
              <div className="text-sm text-gray-600">Get a personalized quote for your specific needs</div>
            </div>
            <a
              href="#contact"
              className="whitespace-nowrap px-6 py-3 bg-blue-900 text-white rounded-lg font-semibold hover:bg-blue-800 transition-colors duration-200"
            >
              Request Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}