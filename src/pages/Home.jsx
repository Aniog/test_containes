import React from 'react'
import { Link } from 'react-router-dom'
import { Brain, Zap, Globe, Users, ArrowRight, Sparkles } from 'lucide-react'

const Home = () => {
  const features = [
    {
      icon: <Brain className="h-8 w-8 text-blue-600" />,
      title: "Machine Learning",
      description: "Advanced algorithms that learn and improve from experience without being explicitly programmed."
    },
    {
      icon: <Zap className="h-8 w-8 text-blue-600" />,
      title: "Neural Networks",
      description: "Computing systems inspired by biological neural networks that process information."
    },
    {
      icon: <Globe className="h-8 w-8 text-blue-600" />,
      title: "Global Impact",
      description: "AI is transforming industries worldwide, from healthcare to transportation."
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Human-AI Collaboration",
      description: "Working together with AI to solve complex problems and enhance human capabilities."
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <Brain className="h-20 w-20 text-blue-400 animate-pulse" />
                <Sparkles className="h-6 w-6 text-yellow-400 absolute -top-2 -right-2 animate-bounce" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to the Future of
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                {" "}Artificial Intelligence
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Discover how AI is revolutionizing our world, from everyday applications to groundbreaking research that's shaping tomorrow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/about"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-900 bg-white hover:bg-blue-50 transition-colors"
              >
                Learn About AI
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/applications"
                className="inline-flex items-center px-8 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-blue-900 transition-colors"
              >
                Explore Applications
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Key Areas of AI
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore the fundamental concepts and technologies that make artificial intelligence possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow bg-gray-50 hover:bg-white"
              >
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              AI by the Numbers
            </h2>
            <p className="text-xl text-gray-600">
              The rapid growth and impact of artificial intelligence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                $15.7T
              </div>
              <p className="text-lg text-gray-700 font-medium">
                Projected AI contribution to global economy by 2030
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                85%
              </div>
              <p className="text-lg text-gray-700 font-medium">
                Of businesses plan to invest in AI technologies
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                2.3M
              </div>
              <p className="text-lg text-gray-700 font-medium">
                New jobs expected to be created by AI by 2025
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Dive Deeper?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Explore our comprehensive guides on AI concepts, applications, and the latest developments in the field.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/about"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-100 transition-colors"
            >
              Learn the Basics
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-gray-900 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home