import React, { useState } from 'react'
import { Filter, Grid, List, Star, ShoppingCart, Search } from 'lucide-react'

const StoreSection = () => {
  const [viewMode, setViewMode] = useState('grid')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', 'PS5', 'PS4', 'PS VR', 'Accessories']
  
  const storeItems = [
    {
      id: 1,
      title: "Demon's Souls",
      description: "Experience the original brutal challenge, completely rebuilt from the ground up.",
      price: 69.99,
      originalPrice: 69.99,
      discountPercentage: 0,
      platform: "PS5",
      genre: "Action RPG",
      rating: 4.6,
      isOnSale: false,
      image: "bg-gradient-to-br from-gray-800 to-black"
    },
    {
      id: 2,
      title: "Ratchet & Clank: Rift Apart",
      description: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor.",
      price: 39.99,
      originalPrice: 69.99,
      discountPercentage: 43,
      platform: "PS5",
      genre: "Action/Adventure",
      rating: 4.8,
      isOnSale: true,
      image: "bg-gradient-to-br from-orange-600 to-purple-700"
    },
    {
      id: 3,
      title: "Ghost of Tsushima Director's Cut",
      description: "Forge a new path and wage an unconventional war for the freedom of Tsushima.",
      price: 49.99,
      originalPrice: 69.99,
      discountPercentage: 29,
      platform: "PS5",
      genre: "Action/Adventure",
      rating: 4.9,
      isOnSale: true,
      image: "bg-gradient-to-br from-red-700 to-orange-600"
    },
    {
      id: 4,
      title: "Returnal",
      description: "Break the cycle of chaos on an alien planet in this third-person shooter.",
      price: 29.99,
      originalPrice: 69.99,
      discountPercentage: 57,
      platform: "PS5",
      genre: "Action/Sci-Fi",
      rating: 4.4,
      isOnSale: true,
      image: "bg-gradient-to-br from-purple-700 to-blue-800"
    },
    {
      id: 5,
      title: "DualSense Wireless Controller",
      description: "Experience haptic feedback and adaptive triggers in supported PS5 games.",
      price: 69.99,
      originalPrice: 69.99,
      discountPercentage: 0,
      platform: "Accessories",
      genre: "Hardware",
      rating: 4.7,
      isOnSale: false,
      image: "bg-gradient-to-br from-blue-600 to-white"
    },
    {
      id: 6,
      title: "PlayStation 5 HD Camera",
      description: "Capture yourself in smooth, sharp full-HD with dual lenses for 1080p capture.",
      price: 59.99,
      originalPrice: 59.99,
      discountPercentage: 0,
      platform: "Accessories",
      genre: "Hardware",
      rating: 4.3,
      isOnSale: false,
      image: "bg-gradient-to-br from-black to-gray-700"
    }
  ]

  const filteredItems = selectedCategory === 'All' 
    ? storeItems 
    : storeItems.filter(item => item.platform === selectedCategory)

  return (
    <section id="store" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            PlayStation <span className="text-blue-400">Store</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Browse our extensive collection of games, DLC, and accessories
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-blue-500/20">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search games, DLC, accessories..."
                className="w-full bg-gray-800/50 border border-gray-600 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-gray-400" />
                <span className="text-gray-300">Filter:</span>
              </div>
              <div className="flex gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-2 bg-gray-800/50 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded transition-colors ${
                  viewMode === 'grid' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded transition-colors ${
                  viewMode === 'list' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Store Items Grid */}
        <div className={`grid gap-6 ${
          viewMode === 'grid' 
            ? 'md:grid-cols-2 lg:grid-cols-3' 
            : 'grid-cols-1'
        }`}>
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className={`bg-black/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 group ${
                viewMode === 'list' ? 'flex' : ''
              }`}
            >
              <div className={`${item.image} ${viewMode === 'list' ? 'w-48' : 'h-48'} flex items-center justify-center relative`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                <div className="text-white text-2xl font-bold opacity-20">
                  {item.platform === 'Accessories' ? 'PS' : item.title.split(' ')[0]}
                </div>
                
                {/* Sale Badge */}
                {item.isOnSale && (
                  <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    -{item.discountPercentage}% OFF
                  </div>
                )}
                
                {/* Platform Badge */}
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {item.platform}
                </div>
              </div>

              <div className="p-6 flex-1">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-blue-400 text-sm font-semibold">{item.genre}</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-gray-300 text-sm">{item.rating}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-300 mb-4 line-clamp-2">{item.description}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-bold text-white">${item.price}</span>
                    {item.isOnSale && (
                      <span className="text-lg text-gray-400 line-through">
                        ${item.originalPrice}
                      </span>
                    )}
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors flex items-center gap-2">
                    <ShoppingCart className="w-4 h-4" />
                    {viewMode === 'list' ? 'Add to Cart' : 'Buy'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Load More Items
          </button>
        </div>
      </div>
    </section>
  )
}

export default StoreSection