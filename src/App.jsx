import React from 'react'
import { Brain, Zap, Shield, Users, ArrowRight, Sparkles, Bot, Cpu } from 'lucide-react'
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
            <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-2 rounded-full transition-colors">
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
              <div className="absolute inset-0 bg-yellow-500/20 blur-3xl rounded-full"></div>
              <Sparkles className="relative h-16 w-16 text-yellow-400 animate-pulse" />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            The Future of
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent"> AI </span>
            is Here
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Harness the power of artificial intelligence to transform your business, 
            automate processes, and unlock unprecedented possibilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center space-x-2">
              <span>Start Your AI Journey</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            <button className="border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Powerful AI Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover the cutting-edge capabilities that make our AI platform the choice of industry leaders
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all group">
              <div className="bg-yellow-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Brain className="h-8 w-8 text-yellow-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Smart Learning</h3>
              <p className="text-gray-300 leading-relaxed">
                Advanced machine learning algorithms that adapt and improve with every interaction, 
                delivering personalized experiences.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all group">
              <div className="bg-blue-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Lightning Fast</h3>
              <p className="text-gray-300 leading-relaxed">
                Process complex data and deliver insights in milliseconds with our optimized 
                AI infrastructure and edge computing.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all group">
              <div className="bg-green-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Shield className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Secure & Private</h3>
              <p className="text-gray-300 leading-relaxed">
                Enterprise-grade security with end-to-end encryption, ensuring your data 
                remains protected and compliant.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all group">
              <div className="bg-orange-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Bot className="h-8 w-8 text-orange-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">AI Automation</h3>
              <p className="text-gray-300 leading-relaxed">
                Automate repetitive tasks and workflows with intelligent bots that understand 
                context and make smart decisions.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all group">
              <div className="bg-yellow-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Cpu className="h-8 w-8 text-yellow-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Neural Networks</h3>
              <p className="text-gray-300 leading-relaxed">
                Powered by state-of-the-art neural networks that can understand, analyze, 
                and generate human-like responses.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all group">
              <div className="bg-cyan-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="h-8 w-8 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Collaborative AI</h3>
              <p className="text-gray-300 leading-relaxed">
                Work seamlessly with AI assistants that understand team dynamics and 
                enhance collaborative productivity.
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
                Revolutionizing the World with AI
              </h2>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                At AI Site, we're not just building technology – we're crafting the future. 
                Our mission is to democratize artificial intelligence and make it accessible 
                to businesses of all sizes.
              </p>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                Founded by a team of AI researchers and industry veterans, we combine 
                cutting-edge research with practical applications to deliver solutions 
                that drive real business value.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-3xl font-bold text-yellow-400 mb-2">10M+</div>
                  <div className="text-gray-300">AI Interactions</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-400 mb-2">500+</div>
                  <div className="text-gray-300">Enterprise Clients</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-400 mb-2">99.9%</div>
                  <div className="text-gray-300">Uptime</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-400 mb-2">24/7</div>
                  <div className="text-gray-300">Support</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 blur-3xl rounded-3xl"></div>
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="h-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"></div>
                  <div className="h-4 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
                  <div className="h-4 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full"></div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                    <div className="text-gray-300">Processing neural networks...</div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                    <div className="text-gray-300">Analyzing data patterns...</div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <div className="text-gray-300">Generating insights...</div>
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Join thousands of companies already using AI Site to revolutionize their operations. 
            Start your free trial today and experience the power of AI.
          </p>
          
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 mb-12">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-2xl font-bold text-yellow-400 mb-2">Free Trial</div>
                <div className="text-gray-300">30 days, no credit card required</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-yellow-400 mb-2">24/7 Support</div>
                <div className="text-gray-300">Expert assistance whenever you need it</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-yellow-400 mb-2">Easy Setup</div>
                <div className="text-gray-300">Get started in under 5 minutes</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white px-12 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center space-x-2">
              <span>Start Free Trial</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            <button className="border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-white px-12 py-4 rounded-full text-lg font-semibold transition-all">
              Schedule Demo
            </button>
          </div>
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
            <div className="text-gray-400">
              © {currentYear} AI Site. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
