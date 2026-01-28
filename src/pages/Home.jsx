import React from 'react'
import { Link } from 'react-router-dom'
import { Brain, ArrowRight, Sparkles, Cpu, Zap } from 'lucide-react'

const Home = () => {
  const features = [
    {
      icon: Brain,
      title: 'Understanding AI',
      description: 'Learn about the fundamentals of artificial intelligence and how it works.',
      link: '/about'
    },
    {
      icon: Cpu,
      title: 'Real Applications',
      description: 'Discover how AI is being used in various industries and everyday life.',
      link: '/applications'
    },
    {
      icon: Zap,
      title: 'Future Possibilities',
      description: 'Explore what the future holds for AI technology and its impact.',
      link: '/future'
    }
  ]

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <Brain className="h-24 w-24 text-blue-600" />
              <Sparkles className="h-8 w-8 text-yellow-500 absolute -top-2 -right-2 animate-pulse" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Welcome to the World of
            <span className="text-blue-600 block">Artificial Intelligence</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Discover the fascinating world of AI, from its basic concepts to cutting-edge applications 
            that are transforming our daily lives and shaping the future.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/about"
              className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/applications"
              className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-colors"
            >
              Explore Applications
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore AI Topics</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Navigate through different aspects of artificial intelligence and build your understanding step by step.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map(({ icon: Icon, title, description, link }, index) => (
            <Link
              key={index}
              to={link}
              className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg mb-6 group-hover:bg-blue-200 transition-colors">
                <Icon className="h-8 w-8 text-blue-600" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-4">
                {description}
              </p>
              
              <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white rounded-2xl p-8 shadow-lg">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">AI by the Numbers</h2>
          <p className="text-lg text-gray-600">The growing impact of artificial intelligence</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">$15.7T</div>
            <div className="text-sm text-gray-600">Global AI contribution by 2030</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">97M</div>
            <div className="text-sm text-gray-600">New AI jobs by 2025</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">85%</div>
            <div className="text-sm text-gray-600">Of companies using AI</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">50%</div>
            <div className="text-sm text-gray-600">Productivity increase potential</div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home