import React from 'react'
import { ArrowRight, Play, Sparkles, Globe, Rocket } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-16 pb-20 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-4 py-2 mb-8">
            <Sparkles className="h-4 w-4 text-purple-600" />
            <span className="text-sm font-medium text-gray-700">Powered by Advanced AI Technology</span>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Build Stunning Websites
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              in Minutes, Not Hours
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Our AI-powered platform creates professional, responsive websites tailored to your needs. 
            Just describe your vision, and watch it come to life instantly.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-semibold text-lg flex items-center space-x-2 shadow-lg hover:shadow-xl">
              <span>Start Building Now</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group bg-white text-gray-700 px-8 py-4 rounded-xl border border-gray-200 hover:border-gray-300 transition-all duration-200 font-semibold text-lg flex items-center space-x-2 shadow-sm hover:shadow-md">
              <Play className="h-5 w-5" />
              <span>Watch Demo</span>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Globe className="h-8 w-8 text-blue-600 mr-2" />
                <span className="text-3xl font-bold text-gray-900">50K+</span>
              </div>
              <p className="text-gray-600">Websites Created</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Rocket className="h-8 w-8 text-purple-600 mr-2" />
                <span className="text-3xl font-bold text-gray-900">2 Min</span>
              </div>
              <p className="text-gray-600">Average Build Time</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Sparkles className="h-8 w-8 text-pink-600 mr-2" />
                <span className="text-3xl font-bold text-gray-900">99%</span>
              </div>
              <p className="text-gray-600">Customer Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero