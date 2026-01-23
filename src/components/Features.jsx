import React from 'react'
import { 
  Brain, 
  Zap, 
  Shield, 
  BarChart3, 
  MessageSquare, 
  Image, 
  Code, 
  Cpu,
  ArrowRight 
} from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Advanced ML algorithms that learn and adapt to your specific business needs, improving performance over time.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: MessageSquare,
      title: "Natural Language Processing",
      description: "Understand and process human language with state-of-the-art NLP models for chatbots and content analysis.",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: Image,
      title: "Computer Vision",
      description: "Analyze images and videos with precision, enabling object detection, facial recognition, and visual search.",
      color: "from-blue-600 to-indigo-500"
    },
    {
      icon: BarChart3,
      title: "Predictive Analytics",
      description: "Forecast trends and make data-driven decisions with powerful predictive modeling capabilities.",
      color: "from-indigo-500 to-blue-600"
    },
    {
      icon: Zap,
      title: "Real-time Processing",
      description: "Lightning-fast AI processing with sub-second response times for real-time applications.",
      color: "from-cyan-400 to-blue-500"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with end-to-end encryption and compliance with industry standards.",
      color: "from-blue-700 to-indigo-600"
    }
  ]

  const capabilities = [
    {
      icon: Code,
      title: "API Integration",
      description: "Seamless integration with existing systems through RESTful APIs and SDKs."
    },
    {
      icon: Cpu,
      title: "Edge Computing",
      description: "Deploy AI models at the edge for reduced latency and improved performance."
    }
  ]

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Powerful AI
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Capabilities</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Discover the cutting-edge AI technologies that power our platform and transform how businesses operate.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Icon */}
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.color} mb-6`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-300 transition-colors">
                {feature.title}
              </h3>
              <p className="text-white/70 leading-relaxed mb-6">
                {feature.description}
              </p>

              {/* Learn More Link */}
              <div className="flex items-center text-blue-400 font-medium group-hover:text-blue-300 transition-colors">
                Learn More
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Additional Capabilities */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {capabilities.map((capability, index) => (
            <div 
              key={index}
              className="flex items-start gap-4 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="flex-shrink-0 p-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg">
                <capability.icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">{capability.title}</h4>
                <p className="text-white/70">{capability.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Explore All Features
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300">
              Request Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features