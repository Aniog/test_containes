import React from 'react'
import { Brain, Zap, Shield, Sparkles, ArrowRight, Bot, Cpu, Globe, Users, Star, ChevronRight } from 'lucide-react'

function App() {
  const currentYear = new Date().getFullYear()

  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Advanced AI Models",
      description: "State-of-the-art machine learning algorithms that adapt and learn from your data patterns."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast",
      description: "Optimized performance with real-time processing and instant response capabilities."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enterprise Security",
      description: "Bank-level encryption and security protocols to protect your sensitive data."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Scale",
      description: "Deployed across multiple regions for maximum availability and performance."
    }
  ]

  const stats = [
    { number: "10M+", label: "AI Interactions" },
    { number: "99.9%", label: "Uptime" },
    { number: "150+", label: "Countries" },
    { number: "24/7", label: "Support" }
  ]

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO, TechCorp",
      content: "This AI platform transformed our business operations. The accuracy and speed are incredible.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "Data Scientist",
      content: "The most intuitive AI interface I've ever used. It's like having a team of experts at your fingertips.",
      rating: 5
    },
    {
      name: "Emily Johnson",
      role: "Product Manager",
      content: "Implementation was seamless and the results exceeded our expectations. Highly recommended!",
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Bot className="w-8 h-8 text-purple-400" />
              <span className="text-xl font-bold text-white">AI Site</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
              <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
              <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Reviews</a>
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center bg-purple-500/20 border border-purple-500/30 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-purple-400 mr-2" />
              <span className="text-purple-300 text-sm font-medium">Powered by Advanced AI</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              The Future of
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> AI </span>
              is Here
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Experience the next generation of artificial intelligence. Our platform combines cutting-edge technology 
              with intuitive design to deliver unprecedented capabilities for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center transition-all transform hover:scale-105">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the capabilities that make our AI platform the choice of industry leaders worldwide.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                <div className="text-purple-400 mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Built for the Future
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Our AI platform represents years of research and development in machine learning, 
                natural language processing, and computer vision. We've created a solution that 
                doesn't just meet today's needs, but anticipates tomorrow's challenges.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <ChevronRight className="w-5 h-5 text-purple-400 mr-3" />
                  <span className="text-gray-300">Advanced neural network architecture</span>
                </div>
                <div className="flex items-center">
                  <ChevronRight className="w-5 h-5 text-purple-400 mr-3" />
                  <span className="text-gray-300">Continuous learning and adaptation</span>
                </div>
                <div className="flex items-center">
                  <ChevronRight className="w-5 h-5 text-purple-400 mr-3" />
                  <span className="text-gray-300">Ethical AI development practices</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl p-8 border border-white/10">
                <Cpu className="w-24 h-24 text-purple-400 mx-auto mb-6" />
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">AI Processing Power</h3>
                  <p className="text-gray-300">
                    Leveraging distributed computing and advanced algorithms to deliver 
                    results at unprecedented speed and accuracy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Our Users Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of satisfied customers who have transformed their workflows with our AI platform.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-3xl p-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the AI revolution today. Experience the power of next-generation artificial intelligence 
              and transform the way you work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center transition-all transform hover:scale-105">
                Start Your Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Bot className="w-6 h-6 text-purple-400" />
                <span className="text-lg font-bold text-white">AI Site</span>
              </div>
              <p className="text-gray-400">
                Empowering businesses with cutting-edge artificial intelligence solutions.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© {currentYear} AI Site. All rights reserved.</p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <Users className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Globe className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Bot className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
