import { Settings, Shield, Zap, Wrench, Clock, Award, Users, Globe } from 'lucide-react'

const features = [
  {
    icon: Settings,
    title: 'Precision Engineering',
    description: 'CNC-controlled systems deliver consistent accuracy within ±0.05mm tolerance for perfect bends every time.',
  },
  {
    icon: Shield,
    title: 'Built to Last',
    description: 'Heavy-duty construction with premium components ensures decades of reliable operation in demanding environments.',
  },
  {
    icon: Zap,
    title: 'High Performance',
    description: 'Optimized cycle times and automated features maximize productivity and reduce operator fatigue.',
  },
  {
    icon: Wrench,
    title: 'Easy Maintenance',
    description: 'Modular design and accessible service points minimize downtime and simplify routine maintenance.',
  },
  {
    icon: Clock,
    title: 'Quick Setup',
    description: 'Intuitive controls and quick-change tooling reduce setup time and increase operational flexibility.',
  },
  {
    icon: Award,
    title: 'Quality Certified',
    description: 'ISO 9001 certified manufacturing with rigorous quality control at every production stage.',
  },
  {
    icon: Users,
    title: 'Expert Support',
    description: 'Dedicated technical support team available for installation, training, and ongoing assistance.',
  },
  {
    icon: Globe,
    title: 'Global Service',
    description: 'Worldwide distribution network with local service partners in over 50 countries.',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-yellow-600 font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
            Engineered for Excellence
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            ARTITECT MACHINERY combines cutting-edge technology with proven reliability to deliver folding solutions that exceed expectations.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 rounded-xl border border-gray-100 hover:border-yellow-200 hover:shadow-lg transition-all bg-white"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <feature.icon className="text-white" size={26} />
              </div>
              <h3 className="text-lg font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 sm:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Ready to Upgrade Your Production?
              </h3>
              <p className="text-gray-300 mb-6">
                Contact our team for a personalized consultation and discover how ARTITECT MACHINERY can optimize your metal folding operations.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-yellow-600 hover:to-yellow-700 transition-all"
                >
                  Get Started
                </a>
                <a
                  href="#products"
                  className="inline-flex items-center gap-2 border-2 border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all"
                >
                  View Products
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-white/5 rounded-lg">
                <div className="text-3xl font-bold text-yellow-400">98%</div>
                <div className="text-gray-400 text-sm mt-1">Customer Satisfaction</div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-lg">
                <div className="text-3xl font-bold text-yellow-400">24/7</div>
                <div className="text-gray-400 text-sm mt-1">Technical Support</div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-lg">
                <div className="text-3xl font-bold text-yellow-400">5yr</div>
                <div className="text-gray-400 text-sm mt-1">Warranty Coverage</div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-lg">
                <div className="text-3xl font-bold text-yellow-400">48hr</div>
                <div className="text-gray-400 text-sm mt-1">Fast Delivery</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}