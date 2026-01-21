import React from 'react'
import { Users, Award, Target, TrendingUp, CheckCircle } from 'lucide-react'

const About = () => {
  const stats = [
    { number: "500+", label: "AI Models Trained", icon: Target },
    { number: "1M+", label: "Happy Users", icon: Users },
    { number: "99.9%", label: "Uptime Guarantee", icon: Award },
    { number: "150%", label: "ROI Average", icon: TrendingUp }
  ]

  const achievements = [
    "Industry-leading AI accuracy rates",
    "24/7 customer support and monitoring",
    "SOC 2 Type II certified security",
    "Multi-language and multi-region support",
    "Seamless integration with existing systems",
    "Continuous learning and model improvement"
  ]

  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-purple-400 mr-4"></div>
            <span className="text-purple-400 font-medium uppercase tracking-wider">About Us</span>
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-purple-400 ml-4"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Leading the AI Revolution
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Pioneering Tomorrow's Technology Today
            </h3>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              We are at the forefront of artificial intelligence innovation, developing cutting-edge 
              solutions that transform how businesses operate and grow. Our team of world-class 
              researchers and engineers work tirelessly to push the boundaries of what's possible 
              with AI technology.
            </p>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              From machine learning algorithms to neural networks, we create AI systems that 
              understand, learn, and adapt to deliver unprecedented value to our clients across 
              industries worldwide.
            </p>

            {/* Achievements */}
            <div className="space-y-3">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{achievement}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm border border-purple-500/20 rounded-3xl p-8">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-500/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-pink-500/20 rounded-full blur-xl"></div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-slate-800/50 to-purple-900/50 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Our Mission</h3>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            To democratize artificial intelligence and make advanced AI capabilities accessible 
            to businesses of all sizes, empowering them to innovate, automate, and achieve 
            extraordinary results in an increasingly digital world.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About