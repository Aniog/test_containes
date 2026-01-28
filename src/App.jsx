import React from 'react'
import { 
  Brain, 
  Zap, 
  Shield, 
  Rocket, 
  Users, 
  Star, 
  ArrowRight, 
  CheckCircle,
  Mail,
  Phone,
  MapPin
} from 'lucide-react'
import './App.css'

function App() {
  const currentYear = new Date().getFullYear()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-purple-400" />
              <span className="text-2xl font-bold text-white">AI Site</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
              <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonials</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
            </div>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm mb-6">
              <Zap className="h-4 w-4" />
              <span>Powered by Advanced AI Technology</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            The Future of
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> AI Solutions</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Harness the power of artificial intelligence to transform your business. 
            Our cutting-edge AI platform delivers intelligent automation, predictive analytics, 
            and seamless integration for the modern enterprise.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 flex items-center space-x-2">
              <span>Start Free Trial</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            <button className="border border-gray-600 text-gray-300 hover:text-white hover:border-gray-400 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
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
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how our AI technology can revolutionize your workflow and drive unprecedented growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "Machine Learning",
                description: "Advanced algorithms that learn and adapt to your business needs, providing intelligent insights and automation."
              },
              {
                icon: Zap,
                title: "Lightning Fast",
                description: "Process massive datasets in seconds with our optimized AI infrastructure and real-time analytics."
              },
              {
                icon: Shield,
                title: "Enterprise Security",
                description: "Bank-level security with end-to-end encryption, ensuring your data remains protected and compliant."
              },
              {
                icon: Rocket,
                title: "Scalable Solutions",
                description: "Grow without limits. Our AI platform scales seamlessly from startup to enterprise level."
              },
              {
                icon: Users,
                title: "Team Collaboration",
                description: "Built-in collaboration tools that enable teams to work together on AI projects efficiently."
              },
              {
                icon: CheckCircle,
                title: "Easy Integration",
                description: "Simple APIs and pre-built connectors make integration with existing systems effortless."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all">
                <feature.icon className="h-12 w-12 text-purple-400 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of satisfied customers who have transformed their business with our AI solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "CEO, TechCorp",
                content: "AI Site has revolutionized our data analysis process. We've seen a 300% increase in efficiency since implementation.",
                rating: 5
              },
              {
                name: "Michael Chen",
                role: "CTO, InnovateLab",
                content: "The machine learning capabilities are outstanding. Our predictive models have never been more accurate.",
                rating: 5
              },
              {
                name: "Emily Rodriguez",
                role: "Data Scientist, FutureFlow",
                content: "Incredible platform with seamless integration. The support team is also exceptional and very responsive.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the AI revolution today. Start your free trial and experience the power of intelligent automation.
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-12 py-4 rounded-lg text-xl font-semibold transition-all transform hover:scale-105">
            Get Started Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-black/40 border-t border-white/10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <Brain className="h-8 w-8 text-purple-400" />
                <span className="text-2xl font-bold text-white">AI Site</span>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Empowering businesses with cutting-edge AI technology. 
                Transform your operations with intelligent automation and data-driven insights.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="h-5 w-5 text-purple-400" />
                  <span>contact@aisite.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="h-5 w-5 text-purple-400" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="h-5 w-5 text-purple-400" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API Docs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © {currentYear} AI Site. All rights reserved. Built with cutting-edge technology.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
