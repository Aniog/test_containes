import React from 'react'
import { 
  Brain, 
  Zap, 
  Shield, 
  Rocket, 
  Users, 
  BarChart3, 
  Mail, 
  Phone, 
  MapPin,
  ArrowRight,
  CheckCircle,
  Star
} from 'lucide-react'
import './App.css'

function App() {
  const currentYear = new Date().getFullYear()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-purple-400" />
              <span className="text-xl font-bold text-white">AI Site</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a>
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
              <a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a>
              <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
            </div>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              The Future of
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> AI Innovation</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Harness the power of artificial intelligence to transform your business, 
              automate processes, and unlock unprecedented insights with our cutting-edge AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors">
                <span>Start Your AI Journey</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Watch Demo
              </button>
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">10,000+</div>
              <div className="text-gray-400">AI Models Deployed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">99.9%</div>
              <div className="text-gray-400">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-gray-400">Enterprise Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful AI Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover the advanced capabilities that make our AI platform the choice of industry leaders
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600 hover:border-purple-500 transition-colors">
              <Zap className="h-12 w-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Lightning Fast Processing</h3>
              <p className="text-gray-300">
                Process millions of data points in seconds with our optimized AI algorithms and cloud infrastructure.
              </p>
            </div>
            
            <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600 hover:border-purple-500 transition-colors">
              <Shield className="h-12 w-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Enterprise Security</h3>
              <p className="text-gray-300">
                Bank-level security with end-to-end encryption, compliance certifications, and data privacy protection.
              </p>
            </div>
            
            <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600 hover:border-purple-500 transition-colors">
              <BarChart3 className="h-12 w-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Advanced Analytics</h3>
              <p className="text-gray-300">
                Gain deep insights with predictive analytics, real-time dashboards, and intelligent reporting.
              </p>
            </div>
            
            <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600 hover:border-purple-500 transition-colors">
              <Rocket className="h-12 w-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Scalable Infrastructure</h3>
              <p className="text-gray-300">
                Auto-scaling cloud infrastructure that grows with your business needs and handles peak loads.
              </p>
            </div>
            
            <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600 hover:border-purple-500 transition-colors">
              <Users className="h-12 w-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Team Collaboration</h3>
              <p className="text-gray-300">
                Built-in collaboration tools, role-based access control, and seamless team workflow management.
              </p>
            </div>
            
            <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600 hover:border-purple-500 transition-colors">
              <Brain className="h-12 w-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Smart Automation</h3>
              <p className="text-gray-300">
                Intelligent automation that learns from your patterns and optimizes workflows automatically.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              AI Solutions for Every Industry
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Tailored AI services designed to solve real-world challenges across various sectors
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 p-8 rounded-xl border border-purple-500/30">
              <h3 className="text-2xl font-bold text-white mb-4">Machine Learning Solutions</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center space-x-3 text-gray-300">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Custom ML model development</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-300">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Predictive analytics and forecasting</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-300">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Computer vision and image recognition</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-300">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Natural language processing</span>
                </li>
              </ul>
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition-colors">
                Learn More
              </button>
            </div>
            
            <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 p-8 rounded-xl border border-blue-500/30">
              <h3 className="text-2xl font-bold text-white mb-4">AI Consulting Services</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center space-x-3 text-gray-300">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>AI strategy and roadmap development</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-300">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Technology assessment and selection</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-300">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Implementation and integration support</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-300">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Training and knowledge transfer</span>
                </li>
              </ul>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors">
                Get Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Leading the AI Revolution
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                At AI Site, we're passionate about democratizing artificial intelligence and making 
                it accessible to businesses of all sizes. Our team of world-class AI researchers, 
                engineers, and data scientists work tirelessly to push the boundaries of what's possible.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                Founded in 2020, we've grown from a small startup to a trusted AI partner for 
                Fortune 500 companies, helping them transform their operations and unlock new 
                opportunities through intelligent automation.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-gray-300">4.9/5 Customer Satisfaction</span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-600/10 to-pink-600/10 p-8 rounded-xl border border-purple-500/20">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-2">6+</div>
                  <div className="text-gray-400 text-sm">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-2">150+</div>
                  <div className="text-gray-400 text-sm">AI Experts</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-2">50+</div>
                  <div className="text-gray-400 text-sm">Countries Served</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-2">$2B+</div>
                  <div className="text-gray-400 text-sm">Value Created</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Get in touch with our AI experts and discover how we can help you achieve your goals
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-slate-700/50 p-8 rounded-xl border border-slate-600">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-slate-600 border border-slate-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-slate-600 border border-slate-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-slate-600 border border-slate-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                      placeholder="john@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-slate-600 border border-slate-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 bg-slate-600 border border-slate-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                      placeholder="Tell us about your AI needs..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600">
                <Mail className="h-8 w-8 text-purple-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                <p className="text-gray-300">contact@aisite.com</p>
                <p className="text-gray-300">support@aisite.com</p>
              </div>
              
              <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600">
                <Phone className="h-8 w-8 text-purple-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                <p className="text-gray-300">+1 (555) 123-4567</p>
                <p className="text-gray-300">+1 (555) 987-6543</p>
              </div>
              
              <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600">
                <MapPin className="h-8 w-8 text-purple-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                <p className="text-gray-300">
                  123 AI Innovation Drive<br />
                  Tech Valley, CA 94000<br />
                  United States
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Brain className="h-8 w-8 text-purple-400" />
                <span className="text-xl font-bold text-white">AI Site</span>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                Empowering businesses with cutting-edge AI solutions. 
                Transform your operations and unlock new possibilities with our intelligent platform.
              </p>
              <div className="flex space-x-4">
                <button className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </button>
                <button className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </button>
                <button className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </button>
              </div>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Solutions</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Machine Learning</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Computer Vision</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Natural Language</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Predictive Analytics</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-700 mt-8 pt-8 text-center">
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
