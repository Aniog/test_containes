import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Menu, X, ArrowRight, Star, Users, Zap } from 'lucide-react'
import './App.css'

function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="font-semibold text-xl">Starter</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
              <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">About</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
            </div>
            <div className="hidden md:flex items-center gap-4">
              <button className="px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors">
                Log in
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Get Started
              </button>
            </div>
            <button className="md:hidden p-2">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-6">
            <Star className="w-4 h-4" />
            New: Version 2.0 is here
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-gray-900 mb-6">
            Build something
            <span className="text-blue-600"> amazing</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            A modern starter template with everything you need to launch your next project faster.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium">
              Start Building
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-lg font-medium">
              Watch Demo
            </button>
          </div>
          <p className="mt-4 text-sm text-gray-500">No credit card required • Free 14-day trial</p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Everything you need</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Powerful features to help you build, launch, and grow your product.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Lightning Fast</h3>
              <p className="text-gray-600">Built with modern tools and optimized for performance from day one.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Team Ready</h3>
              <p className="text-gray-600">Collaboration features that scale with your team and workflow.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Premium Quality</h3>
              <p className="text-gray-600">Thoughtfully designed components with attention to every detail.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Built for builders</h2>
          <p className="text-lg text-gray-600 mb-8">
            This starter template gives you a solid foundation with React, Tailwind CSS, and a clean component structure. 
            Everything is set up and ready to customize for your next project.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 text-left">
            <div className="p-6 border border-gray-200 rounded-xl">
              <h4 className="font-semibold text-gray-900 mb-2">Modern Stack</h4>
              <p className="text-gray-600 text-sm">React 18, Vite, Tailwind CSS, and React Router for a fast development experience.</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-xl">
              <h4 className="font-semibold text-gray-900 mb-2">Production Ready</h4>
              <p className="text-gray-600 text-sm">Pre-configured build tools, responsive design, and best practices included.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-16 bg-gray-900 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to get started?</h2>
          <p className="text-gray-400 mb-8 text-lg">Join thousands of builders creating amazing products.</p>
          <button className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors text-lg font-medium">
            Start your free trial
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2026 Starter. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-900 transition-colors">Privacy</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Terms</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Support</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
