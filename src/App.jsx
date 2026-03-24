import React from 'react'
import { Brain, Zap, Shield, Users, ArrowRight, Sparkles, Bot, Cpu } from 'lucide-react'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-purple-400" />
              <span className="text-2xl font-bold text-white">AI Site</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
              <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
            </div>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-purple-500/20 blur-3xl rounded-full"></div>
              <Sparkles className="relative h-16 w-16 text-purple-400 animate-pulse" />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            The Future of
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> AI </span>
            is Here
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Harness the power of artificial intelligence to transform your business, 
            automate workflows, and unlock unprecedented possibilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center space-x-2">
              <span>Start Your Journey</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Powerful AI Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover the cutting-edge capabilities that make our AI platform the choice of industry leaders
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all group">
              <div className="bg-purple-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Bot className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Smart Automation</h3>
              <p className="text-gray-300 leading-relaxed">
                Automate complex workflows with intelligent decision-making capabilities that adapt to your business needs.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all group">
              <div className="bg-blue-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Lightning Fast</h3>
              <p className="text-gray-300 leading-relaxed">
                Process millions of data points in seconds with our optimized AI algorithms and cloud infrastructure.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all group">
              <div className="bg-green-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Shield className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise Security</h3>
              <p className="text-gray-300 leading-relaxed">
                Bank-grade security with end-to-end encryption, ensuring your data remains private and protected.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all group">
              <div className="bg-orange-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Cpu className="h-8 w-8 text-orange-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Advanced Analytics</h3>
              <p className="text-gray-300 leading-relaxed">
                Gain deep insights with predictive analytics and real-time data visualization dashboards.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all group">
              <div className="bg-pink-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="h-8 w-8 text-pink-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Team Collaboration</h3>
              <p className="text-gray-300 leading-relaxed">
                Seamlessly collaborate with your team using shared workspaces and real-time synchronization.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all group">
              <div className="bg-indigo-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Brain className="h-8 w-8 text-indigo-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Machine Learning</h3>
              <p className="text-gray-300 leading-relaxed">
                Leverage state-of-the-art machine learning models that continuously improve and adapt over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Revolutionizing Industries with AI
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Our AI platform is trusted by thousands of companies worldwide to drive innovation, 
                increase efficiency, and unlock new possibilities. From startups to Fortune 500 companies, 
                we're helping businesses transform their operations with intelligent automation.
              </p>
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div>
                  <div className="text-3xl font-bold text-purple-400 mb-2">10M+</div>
                  <div className="text-gray-300">Tasks Automated</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
                  <div className="text-gray-300">Uptime</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-400 mb-2">500+</div>
                  <div className="text-gray-300">Enterprise Clients</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
                  <div className="text-gray-300">Support</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl rounded-3xl"></div>
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="h-4 bg-purple-400/30 rounded"></div>
                  <div className="h-4 bg-blue-400/30 rounded"></div>
                  <div className="h-4 bg-green-400/30 rounded"></div>
                </div>
                <div className="space-y-4">
                  <div className="h-6 bg-white/10 rounded w-3/4"></div>
                  <div className="h-6 bg-white/10 rounded w-1/2"></div>
                  <div className="h-6 bg-white/10 rounded w-5/6"></div>
                  <div className="h-6 bg-white/10 rounded w-2/3"></div>
                </div>
                <div className="mt-8 flex justify-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <Brain className="h-8 w-8 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact/CTA Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Join thousands of companies already using our AI platform to drive growth and innovation. 
            Start your free trial today and experience the future of intelligent automation.
          </p>
          
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-left">
                <h3 className="text-2xl font-bold text-white mb-4">Get Started Today</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span>Free 30-day trial</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span>No credit card required</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span>24/7 expert support</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span>Cancel anytime</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105">
                  Start Free Trial
                </button>
                <button className="w-full border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all">
                  Schedule Demo
                </button>
                <p className="text-sm text-gray-400">
                  Questions? Contact us at <a href="mailto:hello@aisite.com" className="text-purple-400 hover:text-purple-300">hello@aisite.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/40 border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Brain className="h-8 w-8 text-purple-400" />
              <span className="text-2xl font-bold text-white">AI Site</span>
            </div>
            <div className="text-gray-400 text-center md:text-right">
              <p>&copy; {new Date().getFullYear()} AI Site. All rights reserved.</p>
              <p className="text-sm mt-1">Empowering the future with artificial intelligence</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
