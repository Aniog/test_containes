import React from 'react'
import { Zap, Shield, Cpu, Globe, Users, Lightbulb } from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Process millions of requests per second with our optimized AI infrastructure."
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Enterprise-grade security with end-to-end encryption and privacy protection."
    },
    {
      icon: Cpu,
      title: "Advanced AI Models",
      description: "State-of-the-art machine learning models trained on the latest datasets."
    },
    {
      icon: Globe,
      title: "Global Scale",
      description: "Deployed across multiple regions for low latency and high availability."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Built-in tools for teams to collaborate and share AI-powered insights."
    },
    {
      icon: Lightbulb,
      title: "Smart Insights",
      description: "Get actionable insights and recommendations powered by artificial intelligence."
    }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Powerful AI Features
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the cutting-edge capabilities that make our AI platform the perfect choice 
            for businesses and developers worldwide.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div 
                key={index}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-full px-6 py-3 text-purple-300">
            <Cpu className="w-5 h-5" />
            <span className="font-medium">Powered by next-generation AI technology</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features