import React from 'react'
import { Heart, Camera } from 'lucide-react'

const TulipGallery = () => {
  // Sample tulip data - in a real app, this would come from props or API
  const tulips = [
    {
      id: 1,
      name: "Red Emperor Tulips",
      description: "Vibrant red tulips blooming in early spring",
      image: "https://images.unsplash.com/photo-1520637836862-4d197d17c90a?w=500&h=600&fit=crop",
      color: "Red",
      season: "Early Spring"
    },
    {
      id: 2,
      name: "Yellow Triumph Tulips",
      description: "Bright yellow tulips with perfect cup shape",
      image: "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?w=500&h=600&fit=crop",
      color: "Yellow",
      season: "Mid Spring"
    },
    {
      id: 3,
      name: "Purple Darwin Tulips",
      description: "Deep purple tulips with elegant long stems",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=500&h=600&fit=crop",
      color: "Purple",
      season: "Late Spring"
    },
    {
      id: 4,
      name: "Pink Lily Tulips",
      description: "Delicate pink tulips with pointed petals",
      image: "https://images.unsplash.com/photo-1615735487485-e52b9af610c1?w=500&h=600&fit=crop",
      color: "Pink",
      season: "Mid Spring"
    },
    {
      id: 5,
      name: "White Triumph Tulips",
      description: "Pure white tulips creating elegant contrast",
      image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=500&h=600&fit=crop",
      color: "White",
      season: "Early Spring"
    },
    {
      id: 6,
      name: "Orange Parrot Tulips",
      description: "Exotic orange tulips with ruffled petals",
      image: "https://images.unsplash.com/photo-1615735487485-e52b9af610c1?w=500&h=600&fit=crop",
      color: "Orange",
      season: "Late Spring"
    }
  ]

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Camera className="w-8 h-8 text-pink-500" />
            <h2 className="text-4xl font-bold text-gray-800">My Tulip Collection</h2>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the beauty of my carefully cultivated tulip garden, featuring a variety of colors and species 
            that bloom throughout the spring season.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tulips.map((tulip) => (
            <div 
              key={tulip.id} 
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img 
                  src={tulip.image} 
                  alt={tulip.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                
                {/* Floating Heart Icon */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Heart className="w-6 h-6 text-white fill-pink-500" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{tulip.name}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{tulip.description}</p>
                
                {/* Tags */}
                <div className="flex gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-xs font-medium">
                    {tulip.color}
                  </span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                    {tulip.season}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Love what you see? Get in touch to learn more about tulip gardening!</p>
          <button 
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 bg-pink-500 text-white px-6 py-3 rounded-full hover:bg-pink-600 transition-colors duration-300 font-medium"
          >
            <Heart className="w-4 h-4" />
            Contact Me
          </button>
        </div>
      </div>
    </section>
  )
}

export default TulipGallery