import React from 'react'
import { Brain, Zap, Shield, Cpu, Globe, Lightbulb, ArrowRight, Github, Twitter, Linkedin } from 'lucide-react'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-emerald-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="p-4 bg-green-600/20 rounded-full backdrop-blur-sm border border-green-400/30">
                <Brain className="w-16 h-16 text-green-400" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
              The Future of
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent"> Artificial Intelligence</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover how AI is transforming industries, enhancing human capabilities, and shaping tomorrow's world through intelligent automation and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                Explore AI Applications
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 border border-gray-400 hover:border-green-400 text-gray-300 hover:text-green-400 font-semibold rounded-lg transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Core AI Capabilities
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Artificial Intelligence encompasses a wide range of technologies that enable machines to perform tasks that typically require human intelligence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 bg-slate-700/50 rounded-xl backdrop-blur-sm border border-slate-600/50 hover:border-green-500/50 transition-all duration-300 group">
              <div className="p-3 bg-green-600/20 rounded-lg w-fit mb-6 group-hover:bg-green-600/30 transition-colors">
                <Zap className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Machine Learning</h3>
              <p className="text-gray-400 leading-relaxed">
                Advanced algorithms that learn from data to make predictions, recognize patterns, and improve performance over time without explicit programming.
              </p>
            </div>

            <div className="p-8 bg-slate-700/50 rounded-xl backdrop-blur-sm border border-slate-600/50 hover:border-emerald-500/50 transition-all duration-300 group">
              <div className="p-3 bg-emerald-600/20 rounded-lg w-fit mb-6 group-hover:bg-emerald-600/30 transition-colors">
                <Cpu className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Neural Networks</h3>
              <p className="text-gray-400 leading-relaxed">
                Deep learning architectures inspired by the human brain, capable of processing complex data and solving sophisticated problems.
              </p>
            </div>

            <div className="p-8 bg-slate-700/50 rounded-xl backdrop-blur-sm border border-slate-600/50 hover:border-lime-500/50 transition-all duration-300 group">
              <div className="p-3 bg-lime-600/20 rounded-lg w-fit mb-6 group-hover:bg-lime-600/30 transition-colors">
                <Shield className="w-8 h-8 text-lime-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Ethical AI</h3>
              <p className="text-gray-400 leading-relaxed">
                Responsible development and deployment of AI systems with fairness, transparency, and accountability at the forefront.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Real-World Applications
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              AI is revolutionizing industries and creating new possibilities across healthcare, finance, transportation, and beyond.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="p-3 bg-green-600/20 rounded-lg h-fit">
                  <Globe className="w-8 h-8 text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Healthcare & Medicine</h3>
                  <p className="text-gray-400 leading-relaxed">
                    AI assists in medical diagnosis, drug discovery, personalized treatment plans, and surgical robotics, improving patient outcomes and accelerating medical research.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="p-3 bg-emerald-600/20 rounded-lg h-fit">
                  <Lightbulb className="w-8 h-8 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Smart Cities & IoT</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Intelligent systems optimize traffic flow, energy consumption, waste management, and urban planning for more sustainable and efficient cities.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="p-3 bg-lime-600/20 rounded-lg h-fit">
                  <Brain className="w-8 h-8 text-lime-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Natural Language Processing</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Advanced language models enable real-time translation, content generation, sentiment analysis, and conversational AI assistants.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="p-3 bg-teal-600/20 rounded-lg h-fit">
                  <Shield className="w-8 h-8 text-teal-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Cybersecurity</h3>
                  <p className="text-gray-400 leading-relaxed">
                    AI-powered security systems detect threats, prevent fraud, and protect digital infrastructure through predictive analysis and anomaly detection.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <Brain className="w-8 h-8 text-green-400" />
                <span className="text-2xl font-bold text-white">AI Future</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Exploring the frontiers of artificial intelligence and its transformative impact on society, technology, and human potential.
              </p>
              <div className="flex gap-4">
                <a href="#" className="p-2 bg-slate-800 hover:bg-green-600/20 rounded-lg transition-colors">
                  <Github className="w-5 h-5 text-gray-400 hover:text-green-400" />
                </a>
                <a href="#" className="p-2 bg-slate-800 hover:bg-green-600/20 rounded-lg transition-colors">
                  <Twitter className="w-5 h-5 text-gray-400 hover:text-green-400" />
                </a>
                <a href="#" className="p-2 bg-slate-800 hover:bg-green-600/20 rounded-lg transition-colors">
                  <Linkedin className="w-5 h-5 text-gray-400 hover:text-green-400" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">AI Research</a></li>
                <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Documentation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Tutorials</a></li>
                <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Case Studies</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Community</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Events</a></li>
                <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Newsletter</a></li>
                <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} AI Future. All rights reserved. Built with passion for artificial intelligence.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
