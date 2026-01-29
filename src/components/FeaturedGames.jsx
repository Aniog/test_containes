import React from 'react'
import { Star, ShoppingCart, Calendar } from 'lucide-react'

const FeaturedGames = () => {
  const featuredGames = [
    {
      id: 1,
      title: "God of War Ragnarök",
      description: "Embark on an epic and heartfelt journey as Kratos and Atreus struggle with holding on and letting go.",
      price: 59.99,
      originalPrice: 69.99,
      discountPercentage: 14,
      platform: "PS5",
      genre: "Action/Adventure",
      rating: 4.8,
      releaseDate: "2022-11-09",
      isOnSale: true,
      image: "bg-gradient-to-br from-orange-600 to-red-700"
    },
    {
      id: 2,
      title: "Horizon Forbidden West",
      description: "Join Aloy as she braves the Forbidden West – a majestic but dangerous frontier.",
      price: 49.99,
      originalPrice: 69.99,
      discountPercentage: 29,
      platform: "PS5",
      genre: "Action RPG",
      rating: 4.7,
      releaseDate: "2022-02-18",
      isOnSale: true,
      image: "bg-gradient-to-br from-green-600 to-teal-700"
    },
    {
      id: 3,
      title: "The Last of Us Part I",
      description: "Experience the emotional storytelling and unforgettable characters in this rebuilt masterpiece.",
      price: 69.99,
      originalPrice: 69.99,
      discountPercentage: 0,
      platform: "PS5",
      genre: "Action/Survival",
      rating: 4.9,
      releaseDate: "2022-09-02",
      isOnSale: false,
      image: "bg-gradient-to-br from-gray-700 to-gray-900"
    },
    {
      id: 4,
      title: "Gran Turismo 7",
      description: "Get behind the wheel of over 400 cars and experience the thrill of motorsport.",
      price: 39.99,
      originalPrice: 69.99,
      discountPercentage: 43,
      platform: "PS5",
      genre: "Racing",
      rating: 4.5,
      releaseDate: "2022-03-04",
      isOnSale: true,
      image: "bg-gradient-to-br from-blue-600 to-purple-700"
    }
  ]

  return (
    <section id="games" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-blue-400">Games</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the most popular and critically acclaimed PlayStation games
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {featuredGames.map((game) => (
            <div
              key={game.id}
              className="bg-black/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 group"
            >
              <div className="relative">
                {/* Game Image Placeholder */}
                <div className={`${game.image} h-64 flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                  <div className="text-white text-6xl font-bold opacity-20">
                    {game.title.split(' ')[0]}
                  </div>
                  
                  {/* Sale Badge */}
                  {game.isOnSale && (
                    <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      -{game.discountPercentage}% OFF
                    </div>
                  )}
                  
                  {/* Platform Badge */}
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {game.platform}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-blue-400 text-sm font-semibold">{game.genre}</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-gray-300 text-sm">{game.rating}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3">{game.title}</h3>
                  <p className="text-gray-300 mb-4 line-clamp-2">{game.description}</p>

                  <div className="flex items-center gap-2 mb-4">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-400 text-sm">
                      {new Date(game.releaseDate).toLocaleDateString()}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl font-bold text-white">${game.price}</span>
                      {game.isOnSale && (
                        <span className="text-lg text-gray-400 line-through">
                          ${game.originalPrice}
                        </span>
                      )}
                    </div>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors flex items-center gap-2">
                      <ShoppingCart className="w-4 h-4" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            View All Games
          </button>
        </div>
      </div>
    </section>
  )
}

export default FeaturedGames