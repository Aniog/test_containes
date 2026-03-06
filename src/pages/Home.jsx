import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Star, TrendingUp, Clock, ExternalLink } from 'lucide-react'

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Featured games carousel
  const featuredGames = [
    {
      id: 1,
      title: "Cyberpunk 2077",
      description: "An open-world, action-adventure RPG set in the dark future of Night City.",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=400&fit=crop",
      platform: "Steam",
      rating: 8.5,
      price: 29.99,
      originalPrice: 59.99
    },
    {
      id: 2,
      title: "The Witcher 3: Wild Hunt",
      description: "A story-driven open world RPG set in a visually stunning fantasy universe.",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=400&fit=crop",
      platform: "Epic",
      rating: 9.3,
      price: 19.99,
      originalPrice: 39.99
    },
    {
      id: 3,
      title: "Zelda: Breath of the Wild",
      description: "Step into a world of discovery, exploration, and adventure.",
      image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=800&h=400&fit=crop",
      platform: "Nintendo",
      rating: 9.7,
      price: 49.99,
      originalPrice: 59.99
    }
  ]

  const latestNews = [
    {
      id: 1,
      headline: "Steam Summer Sale 2026 Begins",
      summary: "Massive discounts on thousands of games starting today",
      platform: "Steam",
      timeAgo: "2 hours ago"
    },
    {
      id: 2,
      headline: "PlayStation 6 Announcement Expected",
      summary: "Sony hints at next-gen console reveal at upcoming event",
      platform: "PlayStation",
      timeAgo: "5 hours ago"
    },
    {
      id: 3,
      headline: "Epic Games Store Weekly Free Game",
      summary: "Control Ultimate Edition now available for free",
      platform: "Epic",
      timeAgo: "1 day ago"
    }
  ]

  const topDeals = [
    {
      id: 1,
      title: "Elden Ring",
      platform: "Steam",
      discount: 40,
      price: 35.99,
      originalPrice: 59.99,
      image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=200&h=200&fit=crop"
    },
    {
      id: 2,
      title: "God of War",
      platform: "PlayStation",
      discount: 50,
      price: 19.99,
      originalPrice: 39.99,
      image: "https://images.unsplash.com/photo-1586182987320-4f376d39d787?w=200&h=200&fit=crop"
    },
    {
      id: 3,
      title: "Halo Infinite",
      platform: "Xbox",
      discount: 30,
      price: 41.99,
      originalPrice: 59.99,
      image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=200&h=200&fit=crop"
    },
    {
      id: 4,
      title: "Metroid Dread",
      platform: "Nintendo",
      discount: 25,
      price: 44.99,
      originalPrice: 59.99,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=200&fit=crop"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredGames.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [featuredGames.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredGames.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredGames.length) % featuredGames.length)
  }

  const getPlatformColor = (platform) => {
    const colors = {
      Steam: 'bg-blue-600',
      Epic: 'bg-gray-800',
      Nintendo: 'bg-red-500',
      PlayStation: 'bg-blue-700',
      Xbox: 'bg-green-600'
    }
    return colors[platform] || 'bg-gray-600'
  }

  return (
    <div className="space-y-12">
      {/* Hero Carousel */}
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        <div className="relative w-full h-full">
          {featuredGames.map((game, index) => (
            <div
              key={game.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${game.image})` }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-50" />
                <div className="absolute inset-0 flex items-center">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="max-w-2xl">
                      <div className="flex items-center space-x-2 mb-4">
                        <span className={`${getPlatformColor(game.platform)} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                          {game.platform}
                        </span>
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="text-white text-sm">{game.rating}</span>
                        </div>
                      </div>
                      <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                        {game.title}
                      </h1>
                      <p className="text-xl text-gray-200 mb-6">
                        {game.description}
                      </p>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                          <span className="text-3xl font-bold text-white">${game.price}</span>
                          <span className="text-lg text-gray-400 line-through">${game.originalPrice}</span>
                          <span className="bg-red-500 text-white px-2 py-1 rounded text-sm font-medium">
                            -{Math.round((1 - game.price / game.originalPrice) * 100)}%
                          </span>
                        </div>
                      </div>
                      <div className="flex space-x-4 mt-6">
                        <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
                          Buy Now
                        </button>
                        <button className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-medium transition-colors">
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-all"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-all"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Carousel Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {featuredGames.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
              }`}
            />
          ))}
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Latest News Section */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-white flex items-center">
              <TrendingUp className="h-8 w-8 text-purple-500 mr-3" />
              Latest Gaming News
            </h2>
            <a href="#news" className="text-purple-400 hover:text-purple-300 flex items-center">
              View All <ExternalLink className="h-4 w-4 ml-1" />
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestNews.map((news) => (
              <div key={news.id} className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-colors cursor-pointer">
                <div className="flex items-center justify-between mb-3">
                  <span className={`${getPlatformColor(news.platform)} text-white px-2 py-1 rounded text-xs font-medium`}>
                    {news.platform}
                  </span>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Clock className="h-4 w-4 mr-1" />
                    {news.timeAgo}
                  </div>
                </div>
                <h3 className="text-white font-semibold mb-2">{news.headline}</h3>
                <p className="text-gray-400 text-sm">{news.summary}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Top Deals Section */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-white">🔥 Hot Deals</h2>
            <a href="#deals" className="text-purple-400 hover:text-purple-300 flex items-center">
              View All Deals <ExternalLink className="h-4 w-4 ml-1" />
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {topDeals.map((deal) => (
              <div key={deal.id} className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-750 transition-colors cursor-pointer">
                <div className="relative">
                  <img
                    src={deal.image}
                    alt={deal.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-bold">
                    -{deal.discount}%
                  </div>
                  <div className="absolute top-2 left-2">
                    <span className={`${getPlatformColor(deal.platform)} text-white px-2 py-1 rounded text-xs font-medium`}>
                      {deal.platform}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-white font-semibold mb-2">{deal.title}</h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-bold text-white">${deal.price}</span>
                      <span className="text-sm text-gray-400 line-through">${deal.originalPrice}</span>
                    </div>
                  </div>
                  <button className="w-full mt-3 bg-purple-600 hover:bg-purple-700 text-white py-2 rounded font-medium transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default HomePage