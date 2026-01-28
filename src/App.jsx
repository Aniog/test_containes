import React from 'react'
import { Brain, Zap, Shield, Sparkles, ArrowRight, Bot, Cpu, Network } from 'lucide-react'
import './App.css'

function App() {
  const currentYear = new Date().getFullYear()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
                <Brain className="relative w-20 h-20 text-blue-400 mx-auto" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              AI <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Site</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Harness the power of artificial intelligence to transform your digital experience. 
              Advanced AI solutions designed for the future.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                Get Started
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Powerful AI Features
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Discover cutting-edge artificial intelligence capabilities that will revolutionize your workflow
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300 group">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Lightning Fast</h3>
              <p className="text-gray-400 leading-relaxed">
                Experience blazing-fast AI processing with optimized algorithms that deliver results in milliseconds.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-purple-500/50 transition-all duration-300 group">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Secure & Private</h3>
              <p className="text-gray-400 leading-relaxed">
                Your data is protected with enterprise-grade security and privacy-first AI processing.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-green-500/50 transition-all duration-300 group">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Smart Automation</h3>
              <p className="text-gray-400 leading-relaxed">
                Automate complex tasks with intelligent AI that learns and adapts to your specific needs.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-orange-500/50 transition-all duration-300 group">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">AI Assistant</h3>
              <p className="text-gray-400 leading-relaxed">
                Get instant help from our advanced AI assistant that understands context and provides accurate solutions.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-indigo-500/50 transition-all duration-300 group">
              <div className="bg-gradient-to-r from-indigo-500 to-blue-500 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Cpu className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Advanced Processing</h3>
              <p className="text-gray-400 leading-relaxed">
                Leverage state-of-the-art neural networks for complex data analysis and pattern recognition.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-teal-500/50 transition-all duration-300 group">
              <div className="bg-gradient-to-r from-teal-500 to-cyan-500 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Network className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Connected Intelligence</h3>
              <p className="text-gray-400 leading-relaxed">
                Seamlessly integrate with existing systems through our robust API and intelligent networking capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                The Future of AI is Here
              </h2>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                Our AI platform combines cutting-edge machine learning algorithms with intuitive design 
                to deliver unprecedented capabilities for businesses and individuals alike.
              </p>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                From natural language processing to computer vision, our comprehensive AI suite 
                empowers you to solve complex problems and unlock new possibilities.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium">
                  Machine Learning
                </span>
                <span className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm font-medium">
                  Neural Networks
                </span>
                <span className="bg-green-500/20 text-green-300 px-4 py-2 rounded-full text-sm font-medium">
                  Deep Learning
                </span>
                <span className="bg-orange-500/20 text-orange-300 px-4 py-2 rounded-full text-sm font-medium">
                  Computer Vision
                </span>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-3xl"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">99.9%</div>
                    <div className="text-gray-400 text-sm">Accuracy Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400 mb-2">10M+</div>
                    <div className="text-gray-400 text-sm">Processed Requests</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
                    <div className="text-gray-400 text-sm">Availability</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-400 mb-2">&lt;100ms</div>
                    <div className="text-gray-400 text-sm">Response Time</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Experience AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join thousands of users who are already leveraging the power of artificial intelligence 
            to transform their workflows and achieve extraordinary results.
          </p>
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-12 py-4 rounded-lg font-semibold text-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 mx-auto">
            Start Your AI Journey
            <Sparkles className="w-6 h-6" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <Brain className="w-8 h-8 text-blue-400" />
              <span className="text-2xl font-bold text-white">AI Site</span>
            </div>
            <div className="text-gray-400 text-center md:text-right">
              <p>&copy; {currentYear} AI Site. All rights reserved.</p>
              <p className="text-sm mt-1">Powered by advanced artificial intelligence</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
