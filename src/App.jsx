import React from 'react'
import { Brain, Cpu, Zap, Shield, Users, Lightbulb, ArrowRight, Github, Twitter, Linkedin } from 'lucide-react'
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
      icon: <Cpu className="w-8 h-8" />,
      title: "Neural Networks",
      description: "Deep learning architectures inspired by the human brain for complex pattern recognition."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Automation",
      description: "Streamline workflows and processes with intelligent automation powered by AI."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "AI Safety",
      description: "Ensuring responsible AI development with robust safety measures and ethical guidelines."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Human-AI Collaboration",
      description: "Enhancing human capabilities through seamless integration with AI systems."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation",
      description: "Driving breakthrough innovations across industries with cutting-edge AI technology."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Brain className="w-8 h-8 text-emerald-400" />
              <span className="text-xl font-bold text-white">AI Hub</span>
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
      <section id="home" className="pt-16 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-500/20 rounded-full mb-6">
              <Brain className="w-10 h-10 text-emerald-400" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              The Future of
              <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent"> AI</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover the transformative power of Artificial Intelligence. From machine learning to neural networks, 
              explore how AI is reshaping our world and creating endless possibilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 group">
                <span>Explore AI</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              AI <span className="text-emerald-400">Capabilities</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore the diverse applications and capabilities of modern artificial intelligence technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group cursor-pointer"
              >
                <div className="text-emerald-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About AI Section */}
      <section id="about" className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Understanding <span className="text-emerald-400">Artificial Intelligence</span>
              </h2>
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  Artificial Intelligence represents one of the most significant technological advances of our time. 
                  It encompasses machine learning, deep learning, natural language processing, and computer vision.
                </p>
                <p>
                  From autonomous vehicles to medical diagnosis, AI is transforming industries and improving lives. 
                  The technology continues to evolve, offering new solutions to complex problems.
                </p>
                <p>
                  As we advance into the future, AI will play an increasingly important role in shaping how we work, 
                  communicate, and interact with the world around us.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <span className="bg-emerald-500/20 text-emerald-300 px-4 py-2 rounded-full text-sm">Machine Learning</span>
                <span className="bg-emerald-500/20 text-emerald-300 px-4 py-2 rounded-full text-sm">Deep Learning</span>
                <span className="bg-emerald-500/20 text-emerald-300 px-4 py-2 rounded-full text-sm">Neural Networks</span>
                <span className="bg-emerald-500/20 text-emerald-300 px-4 py-2 rounded-full text-sm">Computer Vision</span>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-emerald-500/20 to-green-500/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">2023</div>
                    <div className="text-emerald-300 text-sm">AI Breakthrough Year</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">100B+</div>
                    <div className="text-emerald-300 text-sm">Parameters in LLMs</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">85%</div>
                    <div className="text-emerald-300 text-sm">Accuracy Improvement</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">∞</div>
                    <div className="text-emerald-300 text-sm">Possibilities</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/40 border-t border-white/10 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Brain className="w-8 h-8 text-emerald-400" />
                <span className="text-xl font-bold text-white">AI Hub</span>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Exploring the frontiers of artificial intelligence and its transformative impact on our world.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">AI Topics</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Machine Learning</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Deep Learning</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Computer Vision</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Natural Language</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Tutorials</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Research Papers</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Community</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © {currentYear} AI Hub. All rights reserved. Built with passion for artificial intelligence.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
