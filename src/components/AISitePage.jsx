import React from 'react'
import { Brain, Zap, Shield, Users, ArrowRight, CheckCircle } from 'lucide-react'

const AISitePage = ({ onShowForm }) => {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-blue-600" />,
      title: "Advanced AI Technology",
      description: "Cutting-edge artificial intelligence solutions powered by the latest machine learning algorithms."
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-600" />,
      title: "Lightning Fast",
      description: "Experience blazing-fast performance with our optimized AI processing infrastructure."
    },
    {
      icon: <Shield className="w-8 h-8 text-green-600" />,
      title: "Secure & Reliable",
      description: "Enterprise-grade security with 99.9% uptime guarantee for your peace of mind."
    },
    {
      icon: <Users className="w-8 h-8 text-purple-600" />,
      title: "Expert Support",
      description: "24/7 dedicated support from our team of AI specialists and engineers."
    }
  ]

  const benefits = [
    "Reduce operational costs by up to 40%",
    "Increase productivity and efficiency",
    "Make data-driven decisions faster",
    "Scale your business with AI automation",
    "Stay ahead of the competition"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Brain className="w-8 h-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">AI Site</h1>
            </div>
            <button
              onClick={onShowForm}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Transform Your Business with
            <span className="text-blue-600 block mt-2">Artificial Intelligence</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Unlock the power of AI to automate processes, gain insights, and drive innovation. 
            Join thousands of companies already leveraging our cutting-edge AI solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onShowForm}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <span>Start Your AI Journey</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:border-gray-400 transition-colors duration-200">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose AI Site?
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive AI solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold mb-6">
                Measurable Results You Can Count On
              </h3>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Our AI solutions deliver tangible business outcomes that drive growth and efficiency.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <span className="text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
              <h4 className="text-2xl font-bold mb-4">Ready to Get Started?</h4>
              <p className="text-blue-100 mb-6">
                Join over 10,000+ businesses already using our AI solutions
              </p>
              <button
                onClick={onShowForm}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200 w-full flex items-center justify-center space-x-2"
              >
                <span>Get Your Free Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Brain className="w-6 h-6 text-blue-400" />
            <span className="text-xl font-bold">AI Site</span>
          </div>
          <p className="text-gray-400 mb-4">
            Empowering businesses with intelligent AI solutions
          </p>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} AI Site. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default AISitePage