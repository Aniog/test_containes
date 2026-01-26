import React from 'react'
import { Brain, Zap, Shield, Cpu, ChevronRight, Mail, Phone, MapPin } from 'lucide-react'
import './App.css'

function App() {
  const currentYear = new Date().getFullYear()

  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Machine Learning",
      description: "Advanced algorithms that learn and adapt from data to make intelligent predictions and decisions."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Neural Networks",
      description: "Deep learning systems inspired by the human brain, capable of complex pattern recognition."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "AI Safety",
      description: "Ensuring artificial intelligence systems are safe, reliable, and aligned with human values."
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Computer Vision",
      description: "AI systems that can interpret and understand visual information from the world around us."
    }
  ]

  const applications = [
    "Healthcare & Medical Diagnosis",
    "Autonomous Vehicles",
    "Natural Language Processing",
    "Robotics & Automation",
    "Financial Analysis",
    "Climate Modeling"
  ]

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Brain className="w-8 h-8 text-blue-400" />
              <span className="text-xl font-bold text-white">AI Future</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a>
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
              <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-500/20 rounded-full mb-6">
                <Brain className="w-10 h-10 text-blue-400" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              The Future of
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> Artificial Intelligence</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover the revolutionary world of AI technology that's transforming industries, 
              enhancing human capabilities, and shaping the future of our digital world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center">
                Explore AI <ChevronRight className="ml-2 w-4 h-4" />
              </button>
              <button className="border border-gray-600 hover:border-gray-500 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Core AI Technologies
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Explore the fundamental technologies that power artificial intelligence and drive innovation across industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-900/80 p-6 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="text-blue-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About AI Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                What is Artificial Intelligence?
              </h2>
              <p className="text-gray-300 text-lg mb-6">
                Artificial Intelligence (AI) is the simulation of human intelligence in machines that are programmed 
                to think and learn like humans. It encompasses various technologies including machine learning, 
                natural language processing, computer vision, and robotics.
              </p>
              <p className="text-gray-300 text-lg mb-8">
                AI systems can perform tasks that typically require human intelligence, such as visual perception, 
                speech recognition, decision-making, and language translation. As AI continues to evolve, it's 
                revolutionizing industries and creating new possibilities for innovation.
              </p>
              
              <h3 className="text-2xl font-semibold text-white mb-4">Key Applications</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {applications.map((app, index) => (
                  <div key={index} className="flex items-center text-gray-300">
                    <ChevronRight className="w-4 h-4 text-blue-400 mr-2" />
                    {app}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl p-8 border border-gray-800">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">75%</div>
                    <div className="text-gray-300 text-sm">Businesses using AI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400 mb-2">$15T</div>
                    <div className="text-gray-300 text-sm">Economic impact by 2030</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400 mb-2">40%</div>
                    <div className="text-gray-300 text-sm">Productivity increase</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-400 mb-2">97M</div>
                    <div className="text-gray-300 text-sm">New jobs created</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Ready to explore AI solutions for your business? Contact us to learn more about how artificial intelligence can transform your operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-500/20 rounded-full mb-4">
                <Mail className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-300">contact@aifuture.com</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-500/20 rounded-full mb-4">
                <Phone className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
              <p className="text-gray-300">+1 (555) 123-4567</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-500/20 rounded-full mb-4">
                <MapPin className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Location</h3>
              <p className="text-gray-300">San Francisco, CA</p>
            </div>
          </div>
          
          <div className="text-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Start Your AI Journey
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Brain className="w-6 h-6 text-blue-400" />
              <span className="text-lg font-semibold text-white">AI Future</span>
            </div>
            <div className="text-gray-400 text-sm">
              © {currentYear} AI Future. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
