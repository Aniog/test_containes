import React from 'react'

const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Navigation */}
          <nav className="absolute top-0 left-0 right-0 z-10 py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">AI</span>
                  </div>
                  <span className="ml-2 text-xl font-bold text-gray-900">SiteBuilder</span>
                </div>
                <div className="hidden md:flex space-x-8">
                  <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
                  <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition-colors">How It Works</a>
                  <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">Pricing</a>
                  <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </nav>

          {/* Hero Content */}
          <div className="pt-20">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Build Stunning Websites with
              <span className="text-indigo-600 block">AI-Powered Magic</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform your ideas into professional websites in minutes, not hours. 
              Our AI understands your vision and creates pixel-perfect designs automatically.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors shadow-lg">
                Start Building Free
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:border-gray-400 transition-colors">
                Watch Demo
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-500">
              <div className="flex items-center">
                <span className="text-yellow-400 mr-1">★★★★★</span>
                <span>4.9/5 from 10,000+ users</span>
              </div>
              <div>No credit card required</div>
              <div>Free 14-day trial</div>
            </div>
          </div>

          {/* Hero Image/Demo */}
          <div className="mt-16">
            <div className="relative max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-2xl p-4">
                <div className="bg-gray-100 rounded-lg h-64 md:h-96 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Website Preview</h3>
                    <p className="text-gray-600">Your beautiful website will appear here</p>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                ✨ AI Generated
              </div>
              <div className="absolute -top-4 -right-4 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                🚀 Ready in 60s
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero