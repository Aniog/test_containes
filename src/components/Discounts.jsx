import React from 'react'
import { Tag, Clock, Zap, Gift } from 'lucide-react'

const Discounts = () => {
  const deals = [
    {
      id: 1,
      title: "Weekend Flash Sale",
      description: "Up to 75% off on selected PlayStation exclusives",
      discount: "75%",
      timeLeft: "2 days left",
      games: ["God of War", "Spider-Man", "Horizon"],
      color: "from-red-600 to-red-800",
      icon: <Zap className="h-8 w-8" />
    },
    {
      id: 2,
      title: "PlayStation Plus Exclusive",
      description: "Extra 20% off for PlayStation Plus members",
      discount: "20%",
      timeLeft: "Member exclusive",
      games: ["All games", "DLC content", "Add-ons"],
      color: "from-purple-600 to-purple-800",
      icon: <Gift className="h-8 w-8" />
    },
    {
      id: 3,
      title: "Indie Games Festival",
      description: "Support indie developers with amazing discounts",
      discount: "50%",
      timeLeft: "1 week left",
      games: ["Indie titles", "New releases", "Hidden gems"],
      color: "from-green-600 to-green-800",
      icon: <Tag className="h-8 w-8" />
    }
  ]

  const hotDeals = [
    {
      id: 1,
      title: "Cyberpunk 2077",
      originalPrice: 59.99,
      salePrice: 19.99,
      discount: 67,
      image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=200&h=250&fit=crop",
      timeLeft: "6h 23m"
    },
    {
      id: 2,
      title: "Assassin's Creed Valhalla",
      originalPrice: 69.99,
      salePrice: 24.99,
      discount: 64,
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=200&h=250&fit=crop",
      timeLeft: "12h 45m"
    },
    {
      id: 3,
      title: "FIFA 24",
      originalPrice: 79.99,
      salePrice: 29.99,
      discount: 63,
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=200&h=250&fit=crop",
      timeLeft: "1d 8h"
    },
    {
      id: 4,
      title: "Call of Duty: Modern Warfare III",
      originalPrice: 69.99,
      salePrice: 34.99,
      discount: 50,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=250&fit=crop",
      timeLeft: "3d 12h"
    }
  ]

  return (
    <section id="discounts" className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Hot Deals & Discounts</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Don't miss out on these incredible PlayStation game deals and limited-time offers
          </p>
        </div>

        {/* Featured Deals */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {deals.map((deal) => (
            <div key={deal.id} className={`bg-gradient-to-br ${deal.color} rounded-xl p-8 text-white relative overflow-hidden`}>
              <div className="absolute top-4 right-4 opacity-20">
                {deal.icon}
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-2">{deal.title}</h3>
                <p className="text-gray-200 mb-4">{deal.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl font-bold">UP TO {deal.discount} OFF</span>
                </div>
                <div className="flex items-center space-x-2 mb-4">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm">{deal.timeLeft}</span>
                </div>
                <div className="mb-6">
                  <p className="text-sm text-gray-200 mb-2">Includes:</p>
                  <div className="flex flex-wrap gap-2">
                    {deal.games.map((game, index) => (
                      <span key={index} className="bg-white bg-opacity-20 px-2 py-1 rounded text-xs">
                        {game}
                      </span>
                    ))}
                  </div>
                </div>
                <button className="w-full bg-white text-gray-900 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Shop Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Hot Deals Grid */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold mb-8 text-center">⚡ Flash Deals - Limited Time</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hotDeals.map((deal) => (
              <div key={deal.id} className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105">
                <div className="relative">
                  <img 
                    src={deal.image} 
                    alt={deal.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    -{deal.discount}%
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black bg-opacity-80 text-white px-2 py-1 rounded text-xs">
                    <Clock className="h-3 w-3 inline mr-1" />
                    {deal.timeLeft}
                  </div>
                </div>
                
                <div className="p-4">
                  <h4 className="font-bold mb-2 text-sm">{deal.title}</h4>
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <span className="text-lg font-bold text-blue-400">${deal.salePrice}</span>
                      <span className="text-sm text-gray-500 line-through ml-2">${deal.originalPrice}</span>
                    </div>
                  </div>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-sm font-semibold transition-colors">
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center">
          <h3 className="text-3xl font-bold mb-4">Never Miss a Deal!</h3>
          <p className="text-xl text-blue-100 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter and be the first to know about exclusive PlayStation deals and discounts
          </p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto space-y-4 sm:space-y-0 sm:space-x-4">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Discounts