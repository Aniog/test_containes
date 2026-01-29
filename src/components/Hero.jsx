import React from 'react'
import { Play, Star } from 'lucide-react'

const Hero = () => {
  const featuredGames = [
    {
      id: 1,
      title: "Spider-Man 2",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=450&fit=crop",
      rating: 4.8,
      price: "$69.99",
      description: "Experience the ultimate Spider-Man adventure with two heroes"
    },
    {
      id: 2,
      title: "God of War Ragnarök",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=450&fit=crop",
      rating: 4.9,
      price: "$59.99",
      description: "Join Kratos and Atreus on their epic Norse mythology journey"
    },
    {
      id: 3,
      title: "Horizon Forbidden West",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=450&fit=crop",
      rating: 4.7,
      price: "$49.99",
      description: "Explore a beautiful post-apocalyptic world with Aloy"
    }
  ]

  return (
    <section id="hero" className="relative bg-gradient-to-r from-blue-900 via-purple-900 to-blue-800 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            PlayStation Games
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover the latest PlayStation exclusives, get the best deals, and stay updated with gaming news
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors flex items-center space-x-2 mx-auto">
            <Play className="h-5 w-5" />
            <span>Explore Games</span>
          </button>
        </div>

        {/* Featured Games Carousel */}
        <div className="grid md:grid-cols-3 gap-8">
          {featuredGames.map((game) => (
            <div key={game.id} className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl hover:transform hover:scale-105 transition-all duration-300">
              <div className="relative">
                <img 
                  src={game.image} 
                  alt={game.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-black bg-opacity-70 px-2 py-1 rounded flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-white text-sm">{game.rating}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{game.title}</h3>
                <p className="text-gray-400 mb-4 text-sm">{game.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-400">{game.price}</span>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero