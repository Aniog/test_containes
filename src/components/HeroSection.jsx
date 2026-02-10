import React from 'react'
import { ArrowRight, Star, Globe, BookOpen } from 'lucide-react'

const HeroSection = ({ onExploreBreeds }) => {
  const stats = [
    { icon: Globe, label: 'Countries', value: '50+' },
    { icon: Star, label: 'Breeds', value: '200+' },
    { icon: BookOpen, label: 'Articles', value: '100+' }
  ]

  return (
    <section id="home" className="relative bg-gradient-to-br from-amber-50 via-white to-amber-50 py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-8xl">🐎</div>
        <div className="absolute top-32 right-20 text-6xl">🏇</div>
        <div className="absolute bottom-20 left-1/4 text-7xl">🐴</div>
        <div className="absolute bottom-32 right-10 text-5xl">🦄</div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Discover the World of
            <span className="text-amber-600 block">Horse Breeds</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Explore the fascinating diversity of horse breeds from around the globe. 
            Learn about their origins, characteristics, and unique traits that make each breed special.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={onExploreBreeds}
              className="bg-amber-600 hover:bg-amber-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              Explore Breeds
              <ArrowRight className="h-5 w-5" />
            </button>
            <button
              onClick={() => document.getElementById('learn')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white hover:bg-gray-50 text-gray-900 font-semibold py-4 px-8 rounded-xl transition-all duration-200 border-2 border-gray-200 hover:border-amber-300 shadow-lg hover:shadow-xl"
            >
              Learn More
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="text-center">
                  <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Icon className="h-8 w-8 text-amber-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Featured Breeds Preview */}
      <div className="mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Featured Breeds
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Arabian', emoji: '🐎', color: 'from-amber-400 to-amber-600' },
              { name: 'Thoroughbred', emoji: '🏇', color: 'from-red-400 to-red-600' },
              { name: 'Clydesdale', emoji: '🐴', color: 'from-blue-400 to-blue-600' },
              { name: 'Mustang', emoji: '🦄', color: 'from-green-400 to-green-600' }
            ].map((breed, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${breed.color} rounded-xl p-6 text-white text-center transform hover:scale-105 transition-all duration-200 cursor-pointer shadow-lg hover:shadow-xl`}
                onClick={onExploreBreeds}
              >
                <div className="text-4xl mb-2">{breed.emoji}</div>
                <div className="font-semibold">{breed.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection