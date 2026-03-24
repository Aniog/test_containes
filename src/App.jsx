import React, { useState } from 'react'
import UserRegistrationForm from './components/UserRegistrationForm'
import { Brain, Sparkles, Users, Zap } from 'lucide-react'
import './App.css'

function App() {
  const [showForm, setShowForm] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">AI Site</h1>
            </div>
            <button
              onClick={() => setShowForm(!showForm)}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              {showForm ? 'Back to Home' : 'Get Started'}
            </button>
          </div>
        </div>
      </header>

      {!showForm ? (
        /* Landing Page Content */
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <section className="py-20 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-5xl font-bold text-gray-900 mb-6">
                Welcome to the Future of
                <span className="text-blue-600 block">Artificial Intelligence</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Discover cutting-edge AI solutions that transform the way you work, create, and innovate. 
                Join thousands of professionals already leveraging AI to unlock their potential.
              </p>
              <button
                onClick={() => setShowForm(true)}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
              >
                Start Your AI Journey
              </button>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-16">
            <div className="text-center mb-16">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Why Choose AI Site?</h3>
              <p className="text-lg text-gray-600">Powerful features designed for the modern professional</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <Sparkles className="h-6 w-6 text-blue-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Smart Automation</h4>
                <p className="text-gray-600">
                  Automate repetitive tasks and focus on what matters most. Our AI learns your patterns and optimizes your workflow.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
                <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Collaborative Intelligence</h4>
                <p className="text-gray-600">
                  Work seamlessly with AI as your intelligent partner. Share insights and collaborate on complex projects.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <Zap className="h-6 w-6 text-green-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Lightning Fast</h4>
                <p className="text-gray-600">
                  Get instant results with our optimized AI models. Process data, generate content, and make decisions in seconds.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white mx-4">
            <div className="max-w-3xl mx-auto px-8">
              <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Work?</h3>
              <p className="text-xl mb-8 opacity-90">
                Join our community and start experiencing the power of AI today.
              </p>
              <button
                onClick={() => setShowForm(true)}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
              >
                Get Started Now
              </button>
            </div>
          </section>
        </main>
      ) : (
        /* User Registration Form */
        <main className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Join AI Site</h2>
            <p className="text-lg text-gray-600">
              Tell us about yourself and we'll personalize your AI experience
            </p>
          </div>
          <UserRegistrationForm />
        </main>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Brain className="h-6 w-6" />
            <span className="text-xl font-semibold">AI Site</span>
          </div>
          <p className="text-gray-400">
            © {new Date().getFullYear()} AI Site. Empowering the future with artificial intelligence.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
