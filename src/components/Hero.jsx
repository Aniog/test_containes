import React from 'react'
import { Play, Star } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 via-purple-900/30 to-slate-900/50"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-blue-400 rounded-full"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-purple-400 rounded-full"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 border border-blue-300 rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              PlayStation
            </span>
            <br />
            <span className="text-3xl md:text-5xl text-gray-300">Gaming Hub</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
            Discover the latest games, exclusive deals, and breaking news from the PlayStation universe
          </p>
        </div>

        {/* Featured Game Showcase */}
        <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto border border-blue-500/20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-left">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  FEATURED
                </span>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-gray-300">4.9</span>
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Spider-Man 2
              </h2>
              <p className="text-gray-300 mb-6">
                Experience the ultimate Spider-Man adventure with Peter Parker and Miles Morales in this epic sequel.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2">
                  <Play className="w-5 h-5" />
                  Watch Trailer
                </button>
                <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-xl p-4 border border-blue-500/30">
                <div className="aspect-video bg-gradient-to-br from-red-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <Play className="w-16 h-16 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400">500+</div>
            <div className="text-gray-300">Games</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400">50M+</div>
            <div className="text-gray-300">Players</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400">Daily</div>
            <div className="text-gray-300">Updates</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400">24/7</div>
            <div className="text-gray-300">Support</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero