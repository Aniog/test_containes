import { Factory, Users, Globe, TrendingUp } from 'lucide-react'

const stats = [
  { icon: Factory, value: '15+', label: 'Years of Experience' },
  { icon: Users, value: '500+', label: 'Happy Clients' },
  { icon: Globe, value: '30+', label: 'Countries Served' },
  { icon: TrendingUp, value: '98%', label: 'Satisfaction Rate' }
]

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                data-strk-img-id="about-factory-001"
                data-strk-img="ARTITECT MACHINERY factory workshop manufacturing sheet metal machines"
                data-strk-img-ratio="4x3"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 450'%3E%3Crect fill='%23f8fafc' width='600' height='450'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='20' fill='%2364748b'%3EAdvanced Manufacturing Facility%3C/text%3E%3C/svg%3E"
                alt="ARTITECT MACHINERY Factory"
                className="w-full h-auto"
              />
            </div>
            {/* Floating Stats Card */}
            <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl shadow-2xl p-6 max-w-xs">
              <div className="text-sm text-gray-600 mb-2">Trusted by professionals</div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-blue-900" style={{ fontFamily: 'Playfair Display, serif' }}>15+</span>
                <span className="text-gray-600">years of excellence</span>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-blue-900/10 rounded-full text-blue-900 text-sm font-medium mb-6">
              About ARTITECT
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
              Crafting Precision Since 2011
            </h2>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              At ARTITECT MACHINERY, we believe that precision is the foundation of quality metalwork.
              For over 15 years, we've been designing and manufacturing premium sheet metal folding
              machines that empower workshops around the world to achieve exceptional results.
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Our team of expert engineers combines traditional craftsmanship with cutting-edge
              technology to create machines that are not just tools, but reliable partners in your
              production process. Every machine that leaves our facility undergoes rigorous testing
              to ensure it meets our exacting standards.
            </p>

            {/* Values List */}
            <div className="space-y-4 mb-8">
              {[
                'Innovation in every design',
                'Uncompromising quality standards',
                'Dedicated customer support',
                'Sustainable manufacturing practices'
              ].map((value, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">{value}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-blue-900 text-white rounded-lg font-semibold hover:bg-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl group"
            >
              Get in Touch
              <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-16 border-t border-gray-200">
          {stats.map((stat, idx) => {
            const Icon = stat.icon
            return (
              <div key={idx} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-900/10 rounded-2xl mb-4">
                  <Icon className="w-8 h-8 text-blue-900" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}