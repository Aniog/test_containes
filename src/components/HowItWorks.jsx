import React from 'react'
import { MessageSquare, Sparkles, Palette, Rocket, ArrowRight, CheckCircle } from 'lucide-react'

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: MessageSquare,
      title: "Describe Your Vision",
      description: "Tell our AI about your business, goals, and preferences. Just type in natural language - no technical knowledge required.",
      details: ["Business type & industry", "Target audience", "Design preferences", "Key features needed"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      number: "02",
      icon: Sparkles,
      title: "AI Creates Magic",
      description: "Our advanced AI analyzes your requirements and generates multiple design concepts, layouts, and content suggestions.",
      details: ["Smart layout generation", "Content creation", "Color scheme selection", "Image recommendations"],
      color: "from-purple-500 to-pink-500"
    },
    {
      number: "03",
      icon: Palette,
      title: "Customize & Refine",
      description: "Review the AI-generated designs and make any adjustments. Our intuitive editor makes customization effortless.",
      details: ["Drag & drop editing", "Real-time preview", "Brand customization", "Content refinement"],
      color: "from-green-500 to-emerald-500"
    },
    {
      number: "04",
      icon: Rocket,
      title: "Launch & Succeed",
      description: "Your website is ready to go live! Deploy with one click and start attracting customers immediately.",
      details: ["One-click deployment", "Custom domain setup", "SSL certificate", "Analytics integration"],
      color: "from-orange-500 to-red-500"
    }
  ]

  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 mb-6">
            <Rocket className="w-4 h-4 text-blue-600 mr-2" />
            <span className="text-sm font-medium text-gray-700">Simple Process</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            From Idea to Website
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              in 4 Simple Steps
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our streamlined process makes website creation effortless. No coding, no design skills, 
            no technical headaches - just beautiful results.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-24">
          {steps.map((step, index) => {
            const IconComponent = step.icon
            const isEven = index % 2 === 1

            return (
              <div key={index} className={`flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}>
                {/* Content */}
                <div className="flex-1 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-6xl font-bold text-gray-200">
                      {step.number}
                    </div>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-gray-900">
                    {step.title}
                  </h3>
                  
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {step.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual */}
                <div className="flex-1">
                  <div className="relative">
                    <div className={`w-full h-80 bg-gradient-to-br ${step.color} rounded-3xl shadow-2xl flex items-center justify-center relative overflow-hidden`}>
                      {/* Background Pattern */}
                      <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-4 left-4 w-32 h-32 border-2 border-white rounded-2xl"></div>
                        <div className="absolute bottom-4 right-4 w-24 h-24 border-2 border-white rounded-full"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border-2 border-white rounded-3xl"></div>
                      </div>
                      
                      {/* Icon */}
                      <IconComponent className="w-24 h-24 text-white relative z-10" />
                      
                      {/* Floating Elements */}
                      <div className="absolute top-8 right-8 w-4 h-4 bg-white rounded-full animate-pulse"></div>
                      <div className="absolute bottom-8 left-8 w-3 h-3 bg-white rounded-full animate-pulse delay-1000"></div>
                      <div className="absolute top-1/3 left-8 w-2 h-2 bg-white rounded-full animate-pulse delay-2000"></div>
                    </div>

                    {/* Step Number Badge */}
                    <div className="absolute -top-4 -right-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center border-4 border-gray-100">
                      <span className="text-lg font-bold text-gray-900">{index + 1}</span>
                    </div>
                  </div>
                </div>

                {/* Arrow (except for last step) */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center">
                    <ArrowRight className="w-8 h-8 text-gray-400 rotate-90" />
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of users who have already created stunning websites with our AI-powered platform.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-lg font-semibold">
                Start Building Now
              </button>
              <button className="text-gray-600 hover:text-gray-900 px-8 py-4 rounded-lg border border-gray-300 hover:border-gray-400 transition-all duration-300 text-lg font-semibold">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks