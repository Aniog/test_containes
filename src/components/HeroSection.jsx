import React from 'react'
import { Flower2, Heart } from 'lucide-react'

const HeroSection = () => {
  // Using Unsplash API for a beautiful horse image
  const horseImageUrl = "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={horseImageUrl}
          alt="Beautiful horse in nature"
          className="w-full h-full object-cover"
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-4 mb-6">
          <Flower2 className="w-12 h-12 text-pink-300" />
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            My Tulip Garden
          </h1>
          <Flower2 className="w-12 h-12 text-pink-300" />
        </div>
        
        <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
          Where nature's beauty meets passionate cultivation
        </p>
        
        <div className="flex items-center justify-center gap-2 mb-8">
          <Heart className="w-6 h-6 text-red-400" />
          <span className="text-lg text-gray-300">
            Discover 9 stunning tulip varieties in our collection
          </span>
          <Heart className="w-6 h-6 text-red-400" />
        </div>

        {/* Call to Action Button */}
        <button 
          onClick={() => {
            const tulipsSection = document.getElementById('tulips-collection')
            if (tulipsSection) {
              tulipsSection.scrollIntoView({ behavior: 'smooth' })
            }
          }}
          className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          Explore My Collection
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection