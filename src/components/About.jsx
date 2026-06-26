import { Factory, Users, Award, TrendingUp } from 'lucide-react'

const About = () => {
  const stats = [
    { icon: Factory, value: '25+', label: 'Years of Excellence' },
    { icon: Users, value: '500+', label: 'Employees Worldwide' },
    { icon: Award, value: '50+', label: 'International Awards' },
    { icon: TrendingUp, value: '1000+', label: 'Machines Delivered' }
  ]

  return (
    <section id="about" className="py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Engineering Excellence Since 1999
            </h2>

            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              ARTITECT MACHINERY has been at the forefront of sheet metal folding technology for over two decades. What started as a small workshop has grown into a global leader in precision machinery.
            </p>

            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Our commitment to innovation, quality, and customer satisfaction has made us the trusted choice for manufacturers worldwide. From automotive to aerospace, our machines deliver the precision and reliability that modern industry demands.
            </p>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-blue-400 mr-3">✓</div>
                <p className="text-gray-300">State-of-the-art manufacturing facility in Germany</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-blue-400 mr-3">✓</div>
                <p className="text-gray-300">R&D team of 50+ engineering experts</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-blue-400 mr-3">✓</div>
                <p className="text-gray-300">Comprehensive training and support programs</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-blue-400 mr-3">✓</div>
                <p className="text-gray-300">Sustainable manufacturing practices</p>
              </div>
            </div>
          </div>

          <div>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div
                    key={index}
                    className="relative p-8 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 text-center hover:border-blue-500 transition-colors"
                  >
                    <Icon className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                    <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                )
              })}
            </div>

            <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-blue-900 to-blue-800">
              <h3 className="text-xl font-bold mb-3">Our Mission</h3>
              <p className="text-blue-100 leading-relaxed">
                "To empower manufacturers worldwide with precision sheet metal folding solutions that enhance productivity, quality, and profitability."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
