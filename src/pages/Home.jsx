import React from 'react'
import { Link } from 'react-router-dom'
import { Brain, Zap, TrendingUp, Users, ArrowRight, Sparkles, Globe, Shield } from 'lucide-react'

const Home = () => {
  const features = [
    {
      icon: Brain,
      title: 'Understanding AI',
      description: 'Learn the fundamentals of artificial intelligence and how it works.',
      link: '/about'
    },
    {
      icon: Zap,
      title: 'Real Applications',
      description: 'Discover how AI is transforming industries and daily life.',
      link: '/applications'
    },
    {
      icon: TrendingUp,
      title: 'Future Trends',
      description: 'Explore what the future holds for AI technology.',
      link: '/future'
    },
    {
      icon: Users,
      title: 'Learning Resources',
      description: 'Access tools and materials to deepen your AI knowledge.',
      link: '/resources'
    }
  ]

  const stats = [
    { number: '2.9B', label: 'AI Users Worldwide' },
    { number: '77%', label: 'Businesses Using AI' },
    { number: '$15.7T', label: 'Economic Impact by 2030' },
    { number: '97M', label: 'New Jobs Created' }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white bg-opacity-20 rounded-full">
                <Brain className="h-16 w-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to the World of
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                Artificial Intelligence
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
              Discover how AI is reshaping our world, from everyday applications to groundbreaking innovations that will define our future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/about"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Start Learning
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/applications"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                Explore Applications
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore AI with Us
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Navigate through different aspects of artificial intelligence and build your understanding step by step.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Link
                  key={index}
                  to={feature.link}
                  className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="p-4 bg-blue-50 rounded-full mb-6 group-hover:bg-blue-100 transition-colors">
                      <Icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {feature.description}
                    </p>
                    <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700">
                      Learn More
                      <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* AI Impact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                AI is Transforming Everything
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                From healthcare and education to transportation and entertainment, artificial intelligence is revolutionizing how we live, work, and interact with the world around us.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Sparkles className="h-6 w-6 text-yellow-500" />
                  <span className="text-gray-700">Enhancing human capabilities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="h-6 w-6 text-green-500" />
                  <span className="text-gray-700">Solving global challenges</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="h-6 w-6 text-blue-500" />
                  <span className="text-gray-700">Creating safer environments</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl">
              <div className="text-center">
                <Brain className="h-24 w-24 text-blue-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Ready to Dive Deeper?
                </h3>
                <p className="text-gray-600 mb-6">
                  Start your journey into the fascinating world of artificial intelligence.
                </p>
                <Link
                  to="/about"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Begin Your Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home