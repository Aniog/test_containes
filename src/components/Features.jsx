import { Shield, Trophy, Wrench, Clock, Settings, Award } from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Precision Engineering',
      description: 'Our machines deliver exceptional accuracy with advanced CNC controls and precision-ground components for consistent, high-quality results.'
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: 'Industry Leading Quality',
      description: 'Built to the highest standards with premium materials and rigorous testing to ensure durability and long-term reliability.'
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: 'Easy Maintenance',
      description: 'Designed for minimal downtime with accessible components, clear maintenance schedules, and comprehensive support documentation.'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Increased Productivity',
      description: 'Optimized workflows and automated features help you complete projects faster while maintaining superior quality standards.'
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: 'Customizable Solutions',
      description: 'Flexible configurations and optional upgrades to match your specific production requirements and business needs.'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Expert Support',
      description: 'Dedicated technical support team with extensive industry experience to assist you from installation through ongoing operation.'
    }
  ]

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold mb-2 tracking-wide uppercase">Why Choose Us</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Built for Excellence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the advantages that make ARTITECT MACHINERY the preferred choice for sheet metal folding solutions worldwide
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-gray-50 hover:bg-blue-600 transition-all duration-300 border border-gray-100 hover:border-blue-600 hover:shadow-2xl"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-blue-600 text-white rounded-xl flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-blue-600 transition-colors duration-300">
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-white transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-blue-100 transition-colors duration-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-12 md:p-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">99.8%</div>
              <div className="text-blue-200 font-medium">Customer Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">24/7</div>
              <div className="text-blue-200 font-medium">Technical Support</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">5 Year</div>
              <div className="text-blue-200 font-medium">Warranty Standard</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">48hr</div>
              <div className="text-blue-200 font-medium">Parts Delivery</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
