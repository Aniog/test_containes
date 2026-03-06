import React, { useState, useEffect } from 'react'
import { Filter, Grid, List, Star, ShoppingCart, Search, SlidersHorizontal } from 'lucide-react'

const StorePage = () => {
  const [viewMode, setViewMode] = useState('grid')
  const [sortBy, setSortBy] = useState('popularity')
  const [filterPlatform, setFilterPlatform] = useState('all')
  const [filterGenre, setFilterGenre] = useState('all')
  const [priceRange, setPriceRange] = useState([0, 100])
  const [searchQuery, setSearchQuery] = useState('')
  const [showFilters, setShowFilters] = useState(false)

  // Sample games data - in real app this would come from API
  const games = [
    {
      id: 1,
      title: "Cyberpunk 2077",
      price: 29.99,
      originalPrice: 59.99,
      platform: "Steam",
      genre: "RPG",
      rating: 8.5,
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=300&h=400&fit=crop",
      description: "An open-world, action-adventure RPG set in the dark future of Night City.",
      isOnSale: true,
      releaseDate: "2020-12-10"
    },
    {
      id: 2,
      title: "The Witcher 3: Wild Hunt",
      price: 19.99,
      originalPrice: 39.99,
      platform: "Epic",
      genre: "RPG",
      rating: 9.3,
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=300&h=400&fit=crop",
      description: "A story-driven open world RPG set in a visually stunning fantasy universe.",
      isOnSale: true,
      releaseDate: "2015-05-19"
    },
    {
      id: 3,
      title: "Elden Ring",
      price: 59.99,
      originalPrice: 59.99,
      platform: "Steam",
      genre: "Action",
      rating: 9.6,
      image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=300&h=400&fit=crop",
      description: "A fantasy action-RPG adventure set within a world created by Hidetaka Miyazaki.",
      isOnSale: false,
      releaseDate: "2022-02-25"
    },
    {
      id: 4,
      title: "God of War",
      price: 19.99,
      originalPrice: 39.99,
      platform: "PlayStation",
      genre: "Action",
      rating: 9.1,
      image: "https://images.unsplash.com/photo-1586182987320-4f376d39d787?w=300&h=400&fit=crop",
      description: "His vengeance against the Gods of Olympus years behind him, Kratos now lives as a man.",
      isOnSale: true,
      releaseDate: "2018-04-20"
    },
    {
      id: 5,
      title: "Halo Infinite",
      price: 41.99,
      originalPrice: 59.99,
      platform: "Xbox",
      genre: "Shooter",
      rating: 8.7,
      image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=300&h=400&fit=crop",
      description: "Master Chief returns in Halo Infinite – the next chapter of the legendary franchise.",
      isOnSale: true,
      releaseDate: "2021-12-08"
    },
    {
      id: 6,
      title: "Metroid Dread",
      price: 44.99,
      originalPrice: 59.99,
      platform: "Nintendo",
      genre: "Adventure",
      rating: 8.9,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop",
      description: "Join bounty hunter Samus Aran as she tries to escape a deadly alien world.",
      isOnSale: true,
      releaseDate: "2021-10-08"
    }
  ]

  const platforms = ['all', 'Steam', 'Epic', 'Nintendo', 'PlayStation', 'Xbox']
  const genres = ['all', 'RPG', 'Action', 'Shooter', 'Adventure', 'Strategy', 'Sports']

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

  const filteredGames = games.filter(game => {
    const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesPlatform = filterPlatform === 'all' || game.platform === filterPlatform
    const matchesGenre = filterGenre === 'all' || game.genre === filterGenre
    const matchesPrice = game.price >= priceRange[0] && game.price <= priceRange[1]
    
    return matchesSearch && matchesPlatform && matchesGenre && matchesPrice
  })

  const sortedGames = [...filteredGames].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price
      case 'price-high':
        return b.price - a.price
      case 'rating':
        return b.rating - a.rating
      case 'name':
        return a.title.localeCompare(b.title)
      case 'release-date':
        return new Date(b.releaseDate) - new Date(a.releaseDate)
      default:
        return b.rating - a.rating // popularity
    }
  })

  const GameCard = ({ game }) => (
    <div className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-750 transition-all duration-300 hover:scale-105">
      <div className="relative">
        <img
          src={game.image}
          alt={game.title}
          className="w-full h-48 object-cover"
        />
        {game.isOnSale && (
          <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-bold">
            -{Math.round((1 - game.price / game.originalPrice) * 100)}%
          </div>
        )}
        <div className="absolute top-2 left-2">
          <span className={`${getPlatformColor(game.platform)} text-white px-2 py-1 rounded text-xs font-medium`}>
            {game.platform}
          </span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-white font-semibold mb-2 line-clamp-1">{game.title}</h3>
        <p className="text-gray-400 text-sm mb-3 line-clamp-2">{game.description}</p>
        
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-white text-sm">{game.rating}</span>
          </div>
          <span className="text-gray-400 text-xs">{game.genre}</span>
        </div>
        
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-white">${game.price}</span>
            {game.isOnSale && (
              <span className="text-sm text-gray-400 line-through">${game.originalPrice}</span>
            )}
          </div>
        </div>
        
        <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded font-medium transition-colors flex items-center justify-center space-x-2">
          <ShoppingCart className="h-4 w-4" />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  )

  const GameListItem = ({ game }) => (
    <div className="bg-gray-800 rounded-lg p-4 flex items-center space-x-4 hover:bg-gray-750 transition-colors">
      <img
        src={game.image}
        alt={game.title}
        className="w-20 h-20 object-cover rounded"
      />
      <div className="flex-1">
        <div className="flex items-center space-x-2 mb-1">
          <h3 className="text-white font-semibold">{game.title}</h3>
          <span className={`${getPlatformColor(game.platform)} text-white px-2 py-1 rounded text-xs font-medium`}>
            {game.platform}
          </span>
        </div>
        <p className="text-gray-400 text-sm mb-2">{game.description}</p>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-white text-sm">{game.rating}</span>
          </div>
          <span className="text-gray-400 text-sm">{game.genre}</span>
        </div>
      </div>
      <div className="text-right">
        <div className="flex items-center space-x-2 mb-2">
          <span className="text-lg font-bold text-white">${game.price}</span>
          {game.isOnSale && (
            <span className="text-sm text-gray-400 line-through">${game.originalPrice}</span>
          )}
        </div>
        <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded font-medium transition-colors flex items-center space-x-2">
          <ShoppingCart className="h-4 w-4" />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  )

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-4">Game Store</h1>
        <p className="text-gray-400">Discover and purchase the latest games from all platforms</p>
      </div>

      {/* Search and Filters */}
      <div className="bg-gray-800 rounded-lg p-6 mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search games..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-gray-700 text-white pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 w-full"
            />
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors lg:hidden"
            >
              <SlidersHorizontal className="h-4 w-4" />
              <span>Filters</span>
            </button>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="popularity">Sort by Popularity</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="name">Name A-Z</option>
              <option value="release-date">Newest First</option>
            </select>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded ${viewMode === 'grid' ? 'bg-purple-600 text-white' : 'bg-gray-700 text-gray-400 hover:text-white'}`}
              >
                <Grid className="h-4 w-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded ${viewMode === 'list' ? 'bg-purple-600 text-white' : 'bg-gray-700 text-gray-400 hover:text-white'}`}
              >
                <List className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className={`mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 ${showFilters ? 'block' : 'hidden lg:grid'}`}>
          <div>
            <label className="block text-white text-sm font-medium mb-2">Platform</label>
            <select
              value={filterPlatform}
              onChange={(e) => setFilterPlatform(e.target.value)}
              className="bg-gray-700 text-white px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 w-full"
            >
              {platforms.map(platform => (
                <option key={platform} value={platform}>
                  {platform === 'all' ? 'All Platforms' : platform}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-white text-sm font-medium mb-2">Genre</label>
            <select
              value={filterGenre}
              onChange={(e) => setFilterGenre(e.target.value)}
              className="bg-gray-700 text-white px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 w-full"
            >
              {genres.map(genre => (
                <option key={genre} value={genre}>
                  {genre === 'all' ? 'All Genres' : genre}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-white text-sm font-medium mb-2">
              Price Range: ${priceRange[0]} - ${priceRange[1]}
            </label>
            <div className="flex items-center space-x-2">
              <input
                type="range"
                min="0"
                max="100"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                className="flex-1"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="mb-4">
        <p className="text-gray-400">
          Showing {sortedGames.length} of {games.length} games
        </p>
      </div>

      {/* Games Grid/List */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedGames.map(game => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {sortedGames.map(game => (
            <GameListItem key={game.id} game={game} />
          ))}
        </div>
      )}

      {sortedGames.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-400 text-lg">No games found matching your criteria.</p>
          <button
            onClick={() => {
              setSearchQuery('')
              setFilterPlatform('all')
              setFilterGenre('all')
              setPriceRange([0, 100])
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

export default StorePage