import React, { useState } from 'react'
import { Clock, Flame, Tag, ExternalLink, ShoppingCart, Filter } from 'lucide-react'

const DealsPage = () => {
  const [selectedPlatform, setSelectedPlatform] = useState('all')
  const [selectedDealType, setSelectedDealType] = useState('all')

  const deals = [
    {
      id: 1,
      gameTitle: "Cyberpunk 2077",
      originalPrice: 59.99,
      salePrice: 19.99,
      discountPercentage: 67,
      platform: "Steam",
      dealType: "Weekly Sale",
      endDate: "2026-03-13T23:59:59Z",
      gameImage: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=300&h=400&fit=crop",
      storeUrl: "#",
      isFeatured: true,
      timeLeft: "7 days"
    },
    {
      id: 2,
      gameTitle: "The Witcher 3: Wild Hunt",
      originalPrice: 39.99,
      salePrice: 9.99,
      discountPercentage: 75,
      platform: "Epic",
      dealType: "Flash Sale",
      endDate: "2026-03-08T23:59:59Z",
      gameImage: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=300&h=400&fit=crop",
      storeUrl: "#",
      isFeatured: true,
      timeLeft: "2 days"
    },
    {
      id: 3,
      gameTitle: "God of War",
      originalPrice: 49.99,
      salePrice: 24.99,
      discountPercentage: 50,
      platform: "PlayStation",
      dealType: "Daily Deal",
      endDate: "2026-03-07T23:59:59Z",
      gameImage: "https://images.unsplash.com/photo-1586182987320-4f376d39d787?w=300&h=400&fit=crop",
      storeUrl: "#",
      isFeatured: false,
      timeLeft: "18 hours"
    },
    {
      id: 4,
      gameTitle: "Halo Infinite",
      originalPrice: 59.99,
      salePrice: 29.99,
      discountPercentage: 50,
      platform: "Xbox",
      dealType: "Seasonal Sale",
      endDate: "2026-03-20T23:59:59Z",
      gameImage: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=300&h=400&fit=crop",
      storeUrl: "#",
      isFeatured: false,
      timeLeft: "14 days"
    },
    {
      id: 5,
      gameTitle: "Metroid Dread",
      originalPrice: 59.99,
      salePrice: 39.99,
      discountPercentage: 33,
      platform: "Nintendo",
      dealType: "Bundle",
      endDate: "2026-03-15T23:59:59Z",
      gameImage: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop",
      storeUrl: "#",
      isFeatured: false,
      timeLeft: "9 days"
    },
    {
      id: 6,
      gameTitle: "Elden Ring",
      originalPrice: 59.99,
      salePrice: 35.99,
      discountPercentage: 40,
      platform: "Steam",
      dealType: "Weekly Sale",
      endDate: "2026-03-13T23:59:59Z",
      gameImage: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=300&h=400&fit=crop",
      storeUrl: "#",
      isFeatured: true,
      timeLeft: "7 days"
    }
  ]

  const platforms = ['all', 'Steam', 'Epic', 'Nintendo', 'PlayStation', 'Xbox']
  const dealTypes = ['all', 'Daily Deal', 'Weekly Sale', 'Flash Sale', 'Seasonal Sale', 'Bundle']

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

  const getDealTypeIcon = (dealType) => {
    switch (dealType) {
      case 'Flash Sale':
        return <Flame className="h-4 w-4" />
      case 'Daily Deal':
        return <Clock className="h-4 w-4" />
      default:
        return <Tag className="h-4 w-4" />
    }
  }

  const getDealTypeColor = (dealType) => {
    switch (dealType) {
      case 'Flash Sale':
        return 'bg-red-600'
      case 'Daily Deal':
        return 'bg-orange-600'
      case 'Weekly Sale':
        return 'bg-blue-600'
      case 'Seasonal Sale':
        return 'bg-green-600'
      case 'Bundle':
        return 'bg-purple-600'
      default:
        return 'bg-gray-600'
    }
  }

  const filteredDeals = deals.filter(deal => {
    const matchesPlatform = selectedPlatform === 'all' || deal.platform === selectedPlatform
    const matchesDealType = selectedDealType === 'all' || deal.dealType === selectedDealType
    return matchesPlatform && matchesDealType
  })

  const featuredDeals = filteredDeals.filter(deal => deal.isFeatured)
  const regularDeals = filteredDeals.filter(deal => !deal.isFeatured)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-4 flex items-center">
          <Flame className="h-10 w-10 text-red-500 mr-3" />
          Hot Deals & Discounts
        </h1>
        <p className="text-gray-400">Don't miss out on these amazing gaming deals from all platforms!</p>
      </div>

      {/* Filters */}
      <div className="bg-gray-800 rounded-lg p-6 mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <Filter className="h-5 w-5 text-gray-400" />
            <span className="text-white font-medium">Filter Deals:</span>
          </div>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <div>
              <label className="block text-white text-sm font-medium mb-2">Platform</label>
              <select
                value={selectedPlatform}
                onChange={(e) => setSelectedPlatform(e.target.value)}
                className="bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                {platforms.map(platform => (
                  <option key={platform} value={platform}>
                    {platform === 'all' ? 'All Platforms' : platform}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-white text-sm font-medium mb-2">Deal Type</label>
              <select
                value={selectedDealType}
                onChange={(e) => setSelectedDealType(e.target.value)}
                className="bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                {dealTypes.map(dealType => (
                  <option key={dealType} value={dealType}>
                    {dealType === 'all' ? 'All Deal Types' : dealType}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Deals */}
      {featuredDeals.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <Flame className="h-6 w-6 text-red-500 mr-2" />
            Featured Deals
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {featuredDeals.map(deal => (
              <div key={deal.id} className="bg-gradient-to-r from-purple-900 to-blue-900 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                <div className="flex">
                  <div className="relative w-1/3">
                    <img
                      src={deal.gameImage}
                      alt={deal.gameTitle}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-bold">
                      -{deal.discountPercentage}%
                    </div>
                  </div>
                  <div className="flex-1 p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className={`${getPlatformColor(deal.platform)} text-white px-2 py-1 rounded text-xs font-medium`}>
                        {deal.platform}
                      </span>
                      <div className={`${getDealTypeColor(deal.dealType)} text-white px-2 py-1 rounded text-xs font-medium flex items-center space-x-1`}>
                        {getDealTypeIcon(deal.dealType)}
                        <span>{deal.dealType}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-white text-xl font-bold mb-2">{deal.gameTitle}</h3>
                    
                    <div className="flex items-center space-x-3 mb-4">
                      <span className="text-2xl font-bold text-white">${deal.salePrice}</span>
                      <span className="text-lg text-gray-300 line-through">${deal.originalPrice}</span>
                      <span className="bg-red-500 text-white px-2 py-1 rounded text-sm font-bold">
                        Save ${(deal.originalPrice - deal.salePrice).toFixed(2)}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-yellow-400">
                        <Clock className="h-4 w-4" />
                        <span className="text-sm">{deal.timeLeft} left</span>
                      </div>
                      
                      <div className="flex space-x-2">
                        <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded font-medium transition-colors flex items-center space-x-2">
                          <ShoppingCart className="h-4 w-4" />
                          <span>Add to Cart</span>
                        </button>
                        <a
                          href={deal.storeUrl}
                          className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded font-medium transition-colors flex items-center space-x-2"
                        >
                          <ExternalLink className="h-4 w-4" />
                          <span>Store</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Regular Deals */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-6">All Deals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {regularDeals.map(deal => (
            <div key={deal.id} className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-750 transition-all duration-300 hover:scale-105">
              <div className="relative">
                <img
                  src={deal.gameImage}
                  alt={deal.gameTitle}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-bold">
                  -{deal.discountPercentage}%
                </div>
                <div className="absolute top-2 left-2">
                  <span className={`${getPlatformColor(deal.platform)} text-white px-2 py-1 rounded text-xs font-medium`}>
                    {deal.platform}
                  </span>
                </div>
                <div className="absolute bottom-2 left-2">
                  <div className={`${getDealTypeColor(deal.dealType)} text-white px-2 py-1 rounded text-xs font-medium flex items-center space-x-1`}>
                    {getDealTypeIcon(deal.dealType)}
                    <span>{deal.dealType}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="text-white font-semibold mb-2 line-clamp-1">{deal.gameTitle}</h3>
                
                <div className="flex items-center space-x-2 mb-3">
                  <span className="text-lg font-bold text-white">${deal.salePrice}</span>
                  <span className="text-sm text-gray-400 line-through">${deal.originalPrice}</span>
                </div>
                
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-1 text-yellow-400 text-sm">
                    <Clock className="h-3 w-3" />
                    <span>{deal.timeLeft}</span>
                  </div>
                  <span className="text-green-400 text-sm font-medium">
                    Save ${(deal.originalPrice - deal.salePrice).toFixed(2)}
                  </span>
                </div>
                
                <div className="flex space-x-2">
                  <button className="flex-1 bg-purple-600 hover:bg-purple-700 text-white py-2 rounded font-medium transition-colors flex items-center justify-center space-x-1">
                    <ShoppingCart className="h-4 w-4" />
                    <span>Cart</span>
                  </button>
                  <a
                    href={deal.storeUrl}
                    className="bg-gray-700 hover:bg-gray-600 text-white px-3 py-2 rounded font-medium transition-colors flex items-center justify-center"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {filteredDeals.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-400 text-lg">No deals found matching your criteria.</p>
          <button
            onClick={() => {
              setSelectedPlatform('all')
              setSelectedDealType('all')
            }}
            className="mt-4 bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  )
}

export default DealsPage