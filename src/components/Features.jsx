import { Shield, Trophy, Settings, Headphones, Clock, Award } from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: <Shield className="w-12 h-12" />,
      title: 'Precision Engineering',
      description: 'Every machine is crafted with micron-level precision to ensure consistent, accurate folds every time.',
    },
    {
      icon: <Trophy className="w-12 h-12" />,
      title: 'Industry Leading Quality',
      description: 'Our machines are built to last with premium materials and rigorous quality control standards.',
    },
    {
      icon: <Settings className="w-12 h-12" />,
      title: 'Custom Solutions',
      description: 'We work with you to design and build custom folding solutions tailored to your specific needs.',
    },
    {
      icon: <Headphones className="w-12 h-12" />,
      title: '24/7 Support',
      description: 'Our expert technical team is always available to provide support and maintenance when you need it.',
    },
    {
      icon: <Clock className="w-12 h-12" />,
      title: 'Fast Delivery',
      description: 'Streamlined manufacturing and logistics ensure your equipment arrives on time, every time.',
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: 'Certified Excellence',
      description: 'All our machines meet or exceed international safety and quality certification standards.',
    },
  ]

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose ARTITECT
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine decades of engineering expertise with cutting-edge technology 
            to deliver folding machines that exceed expectations.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-xl bg-gray-50 hover:bg-blue-50 transition-all duration-300 border border-gray-200 hover:border-blue-200"
            >
              {/* Icon */}
              <div className="text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {[
              { number: '25+', label: 'Years Experience' },
              { number: '5000+', label: 'Machines Sold' },
              { number: '50+', label: 'Countries Served' },
              { number: '99%', label: 'Customer Satisfaction' },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-100 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
