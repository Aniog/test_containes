import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Play, Star } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Your Ultimate
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Gaming Hub
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-lg">
                Discover the latest games, read expert reviews, find amazing deals, 
                and purchase digital keys from all major gaming platforms.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/store"
                className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors group"
              >
                Browse Store
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/deals"
                className="inline-flex items-center justify-center px-8 py-3 bg-transparent border-2 border-white/30 hover:border-white/50 text-white font-semibold rounded-lg transition-colors"
              >
                View Deals
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-2xl font-bold">1000+</div>
                <div className="text-gray-300 text-sm">Games Available</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">50+</div>
                <div className="text-gray-300 text-sm">Daily Deals</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-gray-300 text-sm">Support</div>
              </div>
            </div>
          </div>

          {/* Featured Game Card */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg mb-4 flex items-center justify-center">
                <Play className="h-16 w-16 text-white/60" />
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold">Featured Game</h3>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm">9.2</span>
                  </div>
                </div>
                
                <p className="text-gray-300 text-sm">
                  Experience the latest blockbuster with stunning graphics and immersive gameplay.
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-green-400">$39.99</span>
                    <span className="text-sm text-gray-400 line-through">$59.99</span>
                    <span className="bg-red-600 text-white text-xs px-2 py-1 rounded">-33%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero