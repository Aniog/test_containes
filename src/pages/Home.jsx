import React from 'react'
import { Brain, Zap, Globe, ArrowRight } from 'lucide-react'

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="flex justify-center mb-6">
            <Brain className="w-16 h-16 text-blue-300" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Artificial Intelligence
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Exploring the fascinating world of AI, from machine learning to neural networks, 
            and how it's transforming our future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2">
              Learn More <ArrowRight className="w-4 h-4" />
            </button>
            <button className="border border-blue-300 hover:bg-blue-800 px-8 py-3 rounded-lg font-semibold transition-colors">
              Explore Applications
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Why AI Matters
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Automation</h3>
              <p className="text-gray-600">
                AI automates complex tasks, increasing efficiency and reducing human error 
                across industries from manufacturing to healthcare.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Brain className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Intelligence</h3>
              <p className="text-gray-600">
                Machine learning algorithms can process vast amounts of data to identify 
                patterns and make predictions humans might miss.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Globe className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Global Impact</h3>
              <p className="text-gray-600">
                AI is solving global challenges in climate change, disease prevention, 
                and resource optimization on an unprecedented scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">$15.7T</div>
              <div className="text-gray-600">Global AI market by 2030</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">97M</div>
              <div className="text-gray-600">New AI jobs by 2025</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">85%</div>
              <div className="text-gray-600">Of companies using AI</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">40%</div>
              <div className="text-gray-600">Productivity increase</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home