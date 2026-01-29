import React, { useState, useEffect } from 'react'
import { Percent, Clock, ShoppingCart, Star, Timer } from 'lucide-react'

const DealsSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 32,
    seconds: 45
  })

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const deals = [
    {
      id: 1,
      title: "Cyberpunk 2077",
      description: "Experience the most anticipated open-world RPG of the decade.",
      price: 19.99,
      originalPrice: 59.99,
      discountPercentage: 67,
      platform: "PS5",
      genre: "RPG",
      rating: 4.2,
      timeLeft: "2 days",
      image: "bg-gradient-to-br from-yellow-600 to-red-700",
      isFlashDeal: true
    },
    {
      id: 2,
      title: "Assassin's Creed Valhalla",
      description: "Become Eivor, a legendary Viking raider on a quest for glory.",
      price: 24.99,
      originalPrice: 69.99,
      discountPercentage: 64,
      platform: "PS5",
      genre: "Action/Adventure",
      rating: 4.5,
      timeLeft: "5 days",
      image: "bg-gradient-to-br from-blue-700 to-gray-800",
      isFlashDeal: false
    },
    {
      id: 3,
      title: "Call of Duty: Modern Warfare II",
      description: "Experience the most advanced Call of Duty in franchise history.",
      price: 39.99,
      originalPrice: 69.99,
      discountPercentage: 43,
      platform: "PS5",
      genre: "FPS",
      rating: 4.3,
      timeLeft: "3 days",
      image: "bg-gradient-to-br from-green-700 to-black",
      isFlashDeal: false
    },
    {
      id: 4,
      title: "FIFA 24",
      description: "Experience the most authentic football game with HyperMotionV technology.",
      price: 29.99,
      originalPrice: 69.99,
      discountPercentage: 57,
      platform: "PS5",
      genre: "Sports",
      rating: 4.1,
      timeLeft: "1 day",
      image: "bg-gradient-to-br from-green-600 to-blue-700",
      isFlashDeal: true
    },
    {
      id: 5,
      title: "Resident Evil 4",
      description: "Survival is just the beginning in this reimagined classic.",
      price: 44.99,
      originalPrice: 59.99,
      discountPercentage: 25,
      platform: "PS5",
      genre: "Horror/Action",
      rating: 4.8,
      timeLeft: "4 days",
      image: "bg-gradient-to-br from-red-800 to-black",
      isFlashDeal: false
    },
    {
      id: 6,
      title: "Hogwarts Legacy",
      description: "Experience life as a student at Hogwarts School of Witchcraft and Wizardry.",
      price: 34.99,
      originalPrice: 69.99,
      discountPercentage: 50,
      platform: "PS5",
      genre: "RPG/Adventure",
      rating: 4.6,
      timeLeft: "6 days",
      image: "bg-gradient-to-br from-purple-700 to-yellow-600",
      isFlashDeal: false
    }
  ]

  const flashDeals = deals.filter(deal => deal.isFlashDeal)
  const regularDeals = deals.filter(deal => !deal.isFlashDeal)

  return (
    <section id="deals" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Hot <span className="text-red-400">Deals</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't miss out on these limited-time offers and massive discounts
          </p>
        </div>

        {/* Flash Deals Section */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-red-600/20 to-orange-600/20 border border-red-500/30 rounded-2xl p-8 mb-8">
            <div className="flex flex-col md:flex-row items-center justify-between mb-6">
              <div className="flex items-center gap-4 mb-4 md:mb-0">
                <div className="bg-red-600 p-3 rounded-full">
                  <Timer className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white">Flash Deals</h3>
                  <p className="text-red-400">Limited time offers - Act fast!</p>
                </div>
              </div>
              
              {/* Countdown Timer */}
              <div className="flex items-center gap-4 bg-black/40 rounded-lg p-4">
                <Clock className="w-6 h-6 text-red-400" />
                <div className="flex gap-2 text-center">
                  <div className="bg-red-600 text-white px-3 py-2 rounded-lg min-w-[3rem]">
                    <div className="text-xl font-bold">{timeLeft.days}</div>
                    <div className="text-xs">DAYS</div>
                  </div>
                  <div className="bg-red-600 text-white px-3 py-2 rounded-lg min-w-[3rem]">
                    <div className="text-xl font-bold">{timeLeft.hours}</div>
                    <div className="text-xs">HRS</div>
                  </div>
                  <div className="bg-red-600 text-white px-3 py-2 rounded-lg min-w-[3rem]">
                    <div className="text-xl font-bold">{timeLeft.minutes}</div>
                    <div className="text-xs">MIN</div>
                  </div>
                  <div className="bg-red-600 text-white px-3 py-2 rounded-lg min-w-[3rem]">
                    <div className="text-xl font-bold">{timeLeft.seconds}</div>
                    <div className="text-xs">SEC</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {flashDeals.map((deal) => (
                <div
                  key={deal.id}
                  className="bg-black/40 backdrop-blur-sm rounded-xl overflow-hidden border border-red-500/30 hover:border-red-400/50 transition-all duration-300 group"
                >
                  <div className="flex">
                    <div className={`${deal.image} w-32 h-32 flex items-center justify-center relative`}>
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                      <div className="text-white text-lg font-bold opacity-30">
                        {deal.title.split(' ')[0]}
                      </div>
                      <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded text-xs font-bold">
                        -{deal.discountPercentage}%
                      </div>
                    </div>
                    
                    <div className="p-4 flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-red-400 text-sm font-semibold">{deal.genre}</span>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-gray-300 text-sm">{deal.rating}</span>
                        </div>
                      </div>
                      
                      <h4 className="text-lg font-bold text-white mb-2">{deal.title}</h4>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-xl font-bold text-white">${deal.price}</span>
                          <span className="text-sm text-gray-400 line-through">${deal.originalPrice}</span>
                        </div>
                        <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors flex items-center gap-2">
                          <ShoppingCart className="w-4 h-4" />
                          Buy Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Regular Deals */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Percent className="w-8 h-8 text-blue-400" />
            <h3 className="text-3xl font-bold text-white">Weekly Deals</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {regularDeals.map((deal) => (
              <div
                key={deal.id}
                className="bg-black/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 group"
              >
                <div className={`${deal.image} h-40 flex items-center justify-center relative`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                  <div className="text-white text-2xl font-bold opacity-20">
                    {deal.title.split(' ')[0]}
                  </div>
                  
                  <div className="absolute top-3 left-3 bg-green-600 text-white px-2 py-1 rounded-full text-sm font-semibold">
                    -{deal.discountPercentage}%
                  </div>
                  
                  <div className="absolute top-3 right-3 bg-blue-600 text-white px-2 py-1 rounded-full text-xs">
                    {deal.platform}
                  </div>
                </div>

                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-blue-400 text-xs font-semibold">{deal.genre}</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-yellow-400 fill-current" />
                      <span className="text-gray-300 text-xs">{deal.rating}</span>
                    </div>
                  </div>

                  <h4 className="text-sm font-bold text-white mb-2 line-clamp-2">{deal.title}</h4>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <Clock className="w-3 h-3 text-gray-400" />
                    <span className="text-gray-400 text-xs">{deal.timeLeft} left</span>
                  </div>

                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-white">${deal.price}</span>
                      <span className="text-xs text-gray-400 line-through">${deal.originalPrice}</span>
                    </div>
                  </div>

                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2">
                    <ShoppingCart className="w-4 h-4" />
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            View All Deals
          </button>
        </div>
      </div>
    </section>
  )
}

export default DealsSection