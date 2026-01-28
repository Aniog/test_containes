import React from 'react'
import { 
  Brain, 
  MessageSquare, 
  Image, 
  Code, 
  BarChart3, 
  Shield, 
  Zap, 
  Globe,
  ArrowRight 
} from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "Advanced AI Models",
      description: "State-of-the-art machine learning models trained on vast datasets for superior performance and accuracy.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: MessageSquare,
      title: "Natural Language Processing",
      description: "Understand and generate human-like text with context awareness and emotional intelligence.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Image,
      title: "Computer Vision",
      description: "Advanced image recognition, analysis, and generation capabilities for visual AI applications.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Code,
      title: "Code Generation",
      description: "Automatically generate, review, and optimize code across multiple programming languages.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: BarChart3,
      title: "Data Analytics",
      description: "Transform raw data into actionable insights with intelligent analysis and visualization.",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with end-to-end encryption and compliance with industry standards.",
      color: "from-gray-500 to-slate-500"
    }
  ]

  const capabilities = [
    { label: "Processing Speed", value: "10x Faster" },
    { label: "Accuracy Rate", value: "99.8%" },
    { label: "Languages Supported", value: "100+" },
    { label: "API Calls/Month", value: "1B+" }
  ]

  return (
    <section className="py-20 px-4 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-purple-300 mb-6">
            <Zap className="w-4 h-4" />
            <span className="text-sm font-medium">Powerful Features</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            AI Capabilities That{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Transform
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the comprehensive suite of AI tools designed to revolutionize 
            how you work, create, and innovate in the digital age.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div 
                key={index}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${feature.color} p-3 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  {feature.description}
                </p>
                <div className="flex items-center text-purple-400 font-medium group-hover:text-purple-300 transition-colors">
                  <span className="text-sm">Learn more</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            )
          })}
        </div>

        {/* Capabilities Stats */}
        <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Performance Metrics
            </h3>
            <p className="text-gray-300 text-lg">
              Real-world performance that speaks for itself
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {capability.value}
                </div>
                <div className="text-gray-400 text-sm md:text-base">
                  {capability.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Global Reach */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
            <Globe className="w-5 h-5 text-blue-400" />
            <span className="font-medium">Available worldwide in 50+ countries</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features