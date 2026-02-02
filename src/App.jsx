import React from 'react'
import { Brain, Zap, Shield, Sparkles, ArrowRight, CheckCircle, Star } from 'lucide-react'
import './App.css'

function App() {
  const currentYear = new Date().getFullYear()

  const features = [
    {
      icon: <Brain className="w-8 h-8 text-blue-600" />,
      title: "Advanced AI Models",
      description: "Cutting-edge machine learning algorithms that adapt and learn from your data to provide intelligent solutions."
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      title: "Lightning Fast",
      description: "Optimized performance with real-time processing capabilities that deliver results in milliseconds."
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-700" />,
      title: "Enterprise Security",
      description: "Bank-level encryption and security protocols to keep your data safe and compliant with industry standards."
    }
  ]

  const benefits = [
    "Automate complex workflows",
    "Reduce operational costs by 40%",
    "24/7 intelligent assistance",
    "Seamless integration with existing tools",
    "Real-time analytics and insights",
    "Scalable cloud infrastructure"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Brain className="w-8 h-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">AI Site</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">Features</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
            </nav>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-blue-100 p-4 rounded-full">
              <Sparkles className="w-12 h-12 text-blue-600" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            The Future of
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> AI Technology</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Harness the power of artificial intelligence to transform your business. Our cutting-edge AI solutions 
            provide intelligent automation, predictive analytics, and seamless integration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Powerful AI Features</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover the capabilities that make our AI platform the choice of industry leaders
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Why Choose AI Site?
              </h2>
              <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                Join thousands of companies that have transformed their operations with our AI-powered solutions. 
                Experience the difference that intelligent automation can make.
              </p>
              <div className="grid gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <span className="text-white">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Star className="w-12 h-12 text-yellow-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Trusted by 10,000+ Companies</h3>
                <p className="text-blue-100 mb-6">
                  "AI Site has revolutionized how we handle data processing. The results speak for themselves."
                </p>
                <div className="text-white font-semibold">
                  Sarah Johnson, CTO at TechCorp
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About AI Site</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're pioneering the next generation of artificial intelligence solutions. Our mission is to make 
              advanced AI accessible to businesses of all sizes, empowering them to innovate and grow.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                To democratize artificial intelligence and make it a powerful tool for every organization. 
                We believe AI should enhance human capabilities, not replace them.
              </p>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Technology</h3>
              <p className="text-gray-600 leading-relaxed">
                Built on state-of-the-art machine learning frameworks with a focus on reliability, 
                scalability, and ease of use. Our platform is designed for the future.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">99.9%</div>
                  <div className="text-gray-600">Uptime</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">10K+</div>
                  <div className="text-gray-600">Active Users</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">50M+</div>
                  <div className="text-gray-600">API Calls/Month</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                  <div className="text-gray-600">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the AI revolution today. Start your free trial and see how our platform can transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
              Start Free Trial
            </button>
            <button className="border-2 border-gray-600 text-gray-300 px-8 py-4 rounded-lg text-lg font-semibold hover:border-blue-600 hover:text-blue-400 transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Brain className="w-6 h-6 text-blue-600" />
                <span className="text-xl font-bold text-white">AI Site</span>
              </div>
              <p className="text-gray-400">
                Empowering businesses with intelligent AI solutions for the future.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-blue-400 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Community</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {currentYear} AI Site. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
