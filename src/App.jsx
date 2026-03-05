import React from 'react'
import { Brain, Zap, Shield, Cpu, ArrowRight, CheckCircle, Users, Globe, Sparkles } from 'lucide-react'
import './App.css'

function App() {
  const currentYear = new Date().getFullYear()

  const features = [
    {
      icon: <Brain className="w-8 h-8 text-blue-600" />,
      title: "Machine Learning",
      description: "Advanced algorithms that learn and adapt from data to make intelligent predictions and decisions."
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-600" />,
      title: "Lightning Fast",
      description: "Process massive datasets and deliver results in milliseconds with optimized AI infrastructure."
    },
    {
      icon: <Shield className="w-8 h-8 text-green-600" />,
      title: "Secure & Private",
      description: "Enterprise-grade security with end-to-end encryption and privacy-first AI solutions."
    },
    {
      icon: <Cpu className="w-8 h-8 text-purple-600" />,
      title: "Neural Networks",
      description: "Deep learning models that mimic human brain patterns for complex problem solving."
    }
  ]

  const benefits = [
    "Automate repetitive tasks and increase productivity",
    "Make data-driven decisions with AI insights",
    "Scale your operations with intelligent automation",
    "Reduce costs while improving accuracy",
    "Stay ahead of competition with cutting-edge AI"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Navigation */}
      <nav className="bg-white/10 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Brain className="w-8 h-8 text-blue-400" />
              <span className="text-2xl font-bold text-white">AI Solutions</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-white/80 hover:text-white transition-colors">Features</a>
              <a href="#about" className="text-white/80 hover:text-white transition-colors">About</a>
              <a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <Sparkles className="w-16 h-16 text-blue-400 mx-auto mb-6 animate-pulse" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            The Future of
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> AI </span>
            is Here
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            Harness the power of artificial intelligence to transform your business, 
            automate processes, and unlock unprecedented insights from your data.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center">
              Explore AI Solutions
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Powerful AI Capabilities
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Our cutting-edge AI technology delivers intelligent solutions that adapt, 
              learn, and evolve with your business needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all transform hover:scale-105">
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our AI Platform?
              </h2>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                We're pioneering the next generation of artificial intelligence solutions 
                that empower businesses to achieve more than ever before. Our platform 
                combines cutting-edge technology with intuitive design.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-white/80 text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl p-8 backdrop-blur-sm border border-white/20">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <Users className="w-12 h-12 text-blue-400 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-white">10M+</div>
                    <div className="text-white/70">Users Worldwide</div>
                  </div>
                  <div className="text-center">
                    <Globe className="w-12 h-12 text-green-400 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-white">150+</div>
                    <div className="text-white/70">Countries</div>
                  </div>
                  <div className="text-center">
                    <Zap className="w-12 h-12 text-yellow-400 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-white">99.9%</div>
                    <div className="text-white/70">Uptime</div>
                  </div>
                  <div className="text-center">
                    <Cpu className="w-12 h-12 text-purple-400 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-white">24/7</div>
                    <div className="text-white/70">AI Processing</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/80 mb-8 leading-relaxed">
            Join thousands of companies already using our AI solutions to drive innovation, 
            increase efficiency, and unlock new possibilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-black/30 backdrop-blur-md border-t border-white/20 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Brain className="w-8 h-8 text-blue-400" />
                <span className="text-2xl font-bold text-white">AI Solutions</span>
              </div>
              <p className="text-white/70 mb-4 max-w-md">
                Empowering the future with intelligent AI solutions that transform 
                how businesses operate and innovate.
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p className="text-white/60">
              © {currentYear} AI Solutions. All rights reserved. Powered by cutting-edge artificial intelligence.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
