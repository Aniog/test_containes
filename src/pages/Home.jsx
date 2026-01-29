import React from 'react'
import { Link } from 'react-router-dom'
import { Brain, Zap, Globe, Users, ArrowRight, Sparkles } from 'lucide-react'

const Home = () => {
  const features = [
    {
      icon: <Brain className="h-8 w-8 text-blue-600" />,
      title: "Machine Learning",
      description: "Discover how machines learn from data to make intelligent decisions and predictions."
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-600" />,
      title: "Neural Networks",
      description: "Explore the brain-inspired computing systems that power modern AI applications."
    },
    {
      icon: <Globe className="h-8 w-8 text-green-600" />,
      title: "Global Impact",
      description: "Learn about AI's transformative effects across industries and societies worldwide."
    },
    {
      icon: <Users className="h-8 w-8 text-purple-600" />,
      title: "Human-AI Collaboration",
      description: "Understand how humans and AI work together to solve complex problems."
    }
  ]

  const stats = [
    { number: "2.6B", label: "AI-powered searches daily" },
    { number: "85%", label: "Businesses using AI by 2025" },
    { number: "$15.7T", label: "AI's contribution to global economy by 2030" },
    { number: "300M", label: "Jobs transformed by AI" }
  ]

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <Brain className="h-20 w-20 text-blue-600 animate-pulse" />
                <Sparkles className="h-6 w-6 text-yellow-400 absolute -top-2 -right-2 animate-bounce" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Welcome to the World of
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Artificial Intelligence</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Discover the fascinating world of AI, from its fundamental concepts to cutting-edge applications 
              that are reshaping our future. Join us on a journey through the most transformative technology of our time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/about"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                Learn About AI
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/applications"
                className="inline-flex items-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
              >
                Explore Applications
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Areas of AI</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore the fundamental concepts and technologies that make artificial intelligence possible
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-center w-16 h-16 bg-gray-50 rounded-lg mb-4 mx-auto">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">{feature.title}</h3>
                <p className="text-gray-600 text-center">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">AI by the Numbers</h2>
            <p className="text-lg text-gray-600">The incredible scale and impact of artificial intelligence today</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Dive Deeper?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Explore our comprehensive resources and learn about the future of artificial intelligence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/future"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 transition-colors"
            >
              Future of AI
            </Link>
            <Link
              to="/resources"
              className="inline-flex items-center px-8 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-blue-600 transition-colors"
            >
              Learning Resources
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home