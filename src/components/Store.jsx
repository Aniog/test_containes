import React, { useState } from 'react'
import { Star, ShoppingCart, Filter, Grid, List } from 'lucide-react'

const Store = () => {
  const [viewMode, setViewMode] = useState('grid')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const games = [
    {
      id: 1,
      title: "The Last of Us Part II",
      price: 39.99,
      originalPrice: 59.99,
      rating: 4.8,
      reviews: 15420,
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=300&h=400&fit=crop",
      category: "action",
      platform: "PS5",
      discount: 33
    },
    {
      id: 2,
      title: "Ghost of Tsushima Director's Cut",
      price: 49.99,
      originalPrice: 69.99,
      rating: 4.9,
      reviews: 12850,
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=300&h=400&fit=crop",
      category: "adventure",
      platform: "PS5",
      discount: 29
    },
    {
      id: 3,
      title: "Ratchet & Clank: Rift Apart",
      price: 29.99,
      originalPrice: 49.99,
      rating: 4.7,
      reviews: 8930,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop",
      category: "platformer",
      platform: "PS5",
      discount: 40
    },
    {
      id: 4,
      title: "Demon's Souls",
      price: 34.99,
      originalPrice: 69.99,
      rating: 4.6,
      reviews: 7650,
      image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=300&h=400&fit=crop",
      category: "rpg",
      platform: "PS5",
      discount: 50
    },
    {
      id: 5,
      title: "Returnal",
      price: 39.99,
      originalPrice: 69.99,
      rating: 4.5,
      reviews: 5420,
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=300&h=400&fit=crop",
      category: "action",
      platform: "PS5",
      discount: 43
    },
    {
      id: 6,
      title: "Horizon Forbidden West",
      price: 44.99,
      originalPrice: 59.99,
      rating: 4.8,
      reviews: 11200,
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=300&h=400&fit=crop",
      category: "adventure",
      platform: "PS5",
      discount: 25
    }
  ]

  const categories = [
    { id: 'all', name: 'All Games' },
    { id: 'action', name: 'Action' },
    { id: 'adventure', name: 'Adventure' },
    { id: 'rpg', name: 'RPG' },
    { id: 'platformer', name: 'Platformer' }
  ]

  const filteredGames = selectedCategory === 'all' 
    ? games 
    : games.filter(game => game.category === selectedCategory)

  return (
    <section id="store" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">PlayStation Store</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover amazing PlayStation games with exclusive deals and discounts
          </p>
        </div>

        {/* Filters and View Toggle */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">
            <Filter className="h-5 w-5 text-gray-600" />
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-blue-700 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded ${viewMode === 'grid' ? 'bg-blue-700 text-white' : 'bg-gray-200 text-gray-700'}`}
            >
              <Grid className="h-5 w-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded ${viewMode === 'list' ? 'bg-blue-700 text-white' : 'bg-gray-200 text-gray-700'}`}
            >
              <List className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Games Grid */}
        <div className={`grid gap-6 ${
          viewMode === 'grid' 
            ? 'md:grid-cols-2 lg:grid-cols-3' 
            : 'grid-cols-1'
        }`}>
          {filteredGames.map((game) => (
            <div key={game.id} className={`bg-gray-50 border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105 ${
              viewMode === 'list' ? 'flex' : ''
            }`}>
              <div className={`relative ${viewMode === 'list' ? 'w-48 flex-shrink-0' : ''}`}>
                <img 
                  src={game.image} 
                  alt={game.title}
                  className={`object-cover ${
                    viewMode === 'list' ? 'w-full h-full' : 'w-full h-64'
                  }`}
                />
                {game.discount > 0 && (
                  <div className="absolute top-4 left-4 bg-red-600 text-white px-2 py-1 rounded text-sm font-bold">
                    -{game.discount}%
                  </div>
                )}
                <div className="absolute top-4 right-4 bg-black bg-opacity-70 px-2 py-1 rounded flex items-center space-x-1">
                  <span className="text-white text-xs font-semibold">{game.platform}</span>
                </div>
              </div>
              
              <div className="p-6 flex-1">
                <h3 className="text-xl font-bold mb-2 text-gray-900">{game.title}</h3>
                
                <div className="flex items-center space-x-2 mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${
                          i < Math.floor(game.rating) 
                            ? 'text-yellow-400 fill-current' 
                            : 'text-gray-400'
                        }`} 
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    {game.rating} ({game.reviews.toLocaleString()} reviews)
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-blue-700">
                      ${game.price}
                    </span>
                    {game.originalPrice > game.price && (
                      <span className="text-lg text-gray-500 line-through">
                        ${game.originalPrice}
                      </span>
                    )}
                  </div>
                  <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center space-x-2">
                    <ShoppingCart className="h-4 w-4" />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Load More Games
          </button>
        </div>
      </div>
    </section>
  )
}

export default Store