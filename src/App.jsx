import React from 'react'
import { Brain, Zap, Shield, Sparkles, ArrowRight, Bot, Cpu, Globe } from 'lucide-react'
import './App.css'

function App() {
  const currentYear = new Date().getFullYear()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-yellow-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-yellow-400" />
              <span className="text-2xl font-bold text-white">AI Site</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
              <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 bg-yellow-500/20 text-yellow-300 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <Sparkles className="h-4 w-4" />
              <span>Powered by Advanced AI Technology</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            The Future of
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent"> AI </span>
            is Here
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Harness the power of artificial intelligence to transform your business, 
            automate complex tasks, and unlock unprecedented possibilities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-yellow-700 hover:to-orange-700 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl">
              <span>Get Started</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            <button className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Powerful AI Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how our cutting-edge AI technology can revolutionize your workflow
              and drive innovation across your organization.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Bot className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Intelligent Automation</h3>
              <p className="text-gray-300 leading-relaxed">
                Automate complex workflows and repetitive tasks with AI-powered solutions 
                that learn and adapt to your specific needs.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300">
              <div className="bg-gradient-to-r from-yellow-500 to-orange-500 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Cpu className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Machine Learning</h3>
              <p className="text-gray-300 leading-relaxed">
                Advanced machine learning algorithms that continuously improve performance 
                and provide deeper insights from your data.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Real-time Processing</h3>
              <p className="text-gray-300 leading-relaxed">
                Lightning-fast AI processing capabilities that deliver instant results 
                and real-time decision making for your applications.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Secure & Private</h3>
              <p className="text-gray-300 leading-relaxed">
                Enterprise-grade security with end-to-end encryption and privacy-first 
                design to protect your sensitive data and operations.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300">
              <div className="bg-gradient-to-r from-amber-500 to-yellow-500 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Global Scale</h3>
              <p className="text-gray-300 leading-relaxed">
                Scalable AI infrastructure that grows with your business, supporting 
                millions of operations across multiple regions worldwide.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300">
              <div className="bg-gradient-to-r from-yellow-500 to-amber-500 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Smart Analytics</h3>
              <p className="text-gray-300 leading-relaxed">
                Powerful analytics and insights powered by AI to help you make 
                data-driven decisions and optimize your business performance.
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
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Why Choose Our AI Platform?
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                We're at the forefront of artificial intelligence innovation, providing 
                cutting-edge solutions that empower businesses to achieve more than 
                ever before possible.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-500/20 p-2 rounded-lg">
                    <Brain className="h-6 w-6 text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Advanced AI Models</h3>
                    <p className="text-gray-300">State-of-the-art neural networks and deep learning algorithms.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500/20 p-2 rounded-lg">
                    <Zap className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Lightning Fast</h3>
                    <p className="text-gray-300">Optimized for speed with sub-second response times.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-green-500/20 p-2 rounded-lg">
                    <Shield className="h-6 w-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Enterprise Ready</h3>
                    <p className="text-gray-300">Built for scale with enterprise-grade security and reliability.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                <div className="grid grid-cols-2 gap-8 text-center">
                  <div>
                    <div className="text-4xl font-bold text-white mb-2">99.9%</div>
                    <div className="text-gray-300">Uptime</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-white mb-2">10M+</div>
                    <div className="text-gray-300">Requests/Day</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-white mb-2">50ms</div>
                    <div className="text-gray-300">Avg Response</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-white mb-2">24/7</div>
                    <div className="text-gray-300">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Join thousands of companies already using our AI platform to drive innovation, 
            increase efficiency, and unlock new possibilities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white px-10 py-4 rounded-lg font-semibold text-lg hover:from-yellow-700 hover:to-orange-700 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl">
              <span>Start Free Trial</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            <button className="border border-white/20 text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300">
              Schedule Demo
            </button>
          </div>
          
          <p className="text-gray-400 text-sm">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/40 border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Brain className="h-8 w-8 text-yellow-400" />
              <span className="text-2xl font-bold text-white">AI Site</span>
            </div>
            
            <div className="flex space-x-8 mb-4 md:mb-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Support</a>
            </div>
            
            <div className="text-gray-400 text-sm">
              © {currentYear} AI Site. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
