import { Settings, Gauge, Layers, Shield, Wrench, Clock } from 'lucide-react'

const features = [
  {
    icon: Settings,
    title: 'Precision Engineering',
    description: 'Advanced CNC controls ensure accurate folding with tolerances up to ±0.1mm for consistent quality.',
  },
  {
    icon: Gauge,
    title: 'High Performance',
    description: 'Powerful motors and optimized mechanics deliver fast cycle times without compromising accuracy.',
  },
  {
    icon: Layers,
    title: 'Versatile Applications',
    description: 'Handle various materials from thin aluminum to thick steel plates with adjustable configurations.',
  },
  {
    icon: Shield,
    title: 'Built to Last',
    description: 'Heavy-duty construction with premium components ensures years of reliable, maintenance-free operation.',
  },
  {
    icon: Wrench,
    title: 'Easy Maintenance',
    description: 'Thoughtfully designed for quick access and minimal downtime. Comprehensive support included.',
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Our expert technical team is always available to assist with installation, training, and troubleshooting.',
  },
]

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose ARTITECT
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Decades of expertise in sheet metal machinery, delivering innovative solutions that enhance productivity and quality.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="p-8 rounded-lg border border-gray-200 hover:border-blue-600 hover:shadow-lg transition-all duration-300 group"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                  <Icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>

                {/* Content */}
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

        {/* Stats Section */}
        <div className="mt-20 bg-gray-900 rounded-2xl p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-blue-400 mb-2">25+</div>
              <div className="text-xl text-gray-300">Years of Experience</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-blue-400 mb-2">500+</div>
              <div className="text-xl text-gray-300">Machines Delivered</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-blue-400 mb-2">98%</div>
              <div className="text-xl text-gray-300">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
