import React from 'react'
import { Brain, Zap, Shield, Cpu, MessageSquare, BarChart3, Lightbulb, Globe } from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Advanced ML algorithms that learn and adapt to your specific needs, providing increasingly accurate results over time."
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Process millions of data points in seconds with our optimized AI infrastructure and cutting-edge hardware."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level encryption and security protocols ensure your data remains private and protected at all times."
    },
    {
      icon: Cpu,
      title: "Neural Networks",
      description: "Deep neural networks powered by the latest research in artificial intelligence and cognitive computing."
    },
    {
      icon: MessageSquare,
      title: "Natural Language",
      description: "Understand and process human language with context, sentiment, and nuanced meaning recognition."
    },
    {
      icon: BarChart3,
      title: "Predictive Analytics",
      description: "Forecast trends, identify patterns, and make data-driven decisions with our predictive AI models."
    },
    {
      icon: Lightbulb,
      title: "Creative AI",
      description: "Generate creative content, designs, and solutions that push the boundaries of artificial creativity."
    },
    {
      icon: Globe,
      title: "Global Scale",
      description: "Deploy AI solutions worldwide with multi-language support and region-specific optimizations."
    }
  ]

  return (
    <section id="features" className="py-20 px-4 relative bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-purple-600 mr-4"></div>
            <span className="text-purple-600 font-medium uppercase tracking-wider">Features</span>
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-purple-600 ml-4"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Powerful AI Capabilities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the cutting-edge features that make our AI platform the most advanced 
            and versatile solution for modern businesses.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative bg-white border border-gray-200 rounded-2xl p-6 hover:border-purple-300 transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-lg"
            >
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-100/50 to-pink-100/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              
              {/* Icon */}
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-purple-700 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ready to Experience the Future?
            </h3>
            <p className="text-gray-600 mb-6 text-lg">
              Join thousands of businesses already leveraging our AI technology to drive innovation and growth.
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
              Start Free Trial
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features