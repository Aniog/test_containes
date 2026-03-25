import React, { useState, useEffect } from 'react'
import { Loader2, AlertCircle, Flower2, Heart } from 'lucide-react'
import { tulipFlowersAPI } from '@/api/tulipFlowers.js'
import TulipCard from './TulipCard.jsx'

const TulipGallery = () => {
  const [tulips, setTulips] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [filter, setFilter] = useState('all') // 'all', 'favorites'

  useEffect(() => {
    fetchTulips()
  }, [])

  const fetchTulips = async () => {
    try {
      setLoading(true)
      setError(null)

      const response = await tulipFlowersAPI.getAll()
      
      if (!response.success) {
        throw new Error(response.error)
      }

      setTulips(response.data || [])
    } catch (err) {
      console.error('Failed to fetch tulips:', err)
      setError(err.message || 'Failed to load tulip flowers')
    } finally {
      setLoading(false)
    }
  }

  const handleToggleFavorite = async (tulipId) => {
    try {
      const tulip = tulips.find(t => t.id === tulipId)
      if (!tulip) return

      const updatedData = {
        ...tulip.data,
        is_favorite: !tulip.data?.is_favorite
      }

      const response = await tulipFlowersAPI.update(tulipId, updatedData)
      
      if (response.success) {
        // Update local state
        setTulips(prev => prev.map(t => 
          t.id === tulipId 
            ? { ...t, data: { ...t.data, is_favorite: !t.data?.is_favorite } }
            : t
        ))
      }
    } catch (err) {
      console.error('Failed to toggle favorite:', err)
    }
  }

  const filteredTulips = tulips.filter(tulip => {
    if (filter === 'favorites') {
      return tulip.data?.is_favorite === true
    }
    return true
  })

  const favoriteCount = tulips.filter(t => t.data?.is_favorite).length

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-64 p-8">
        <Loader2 className="animate-spin w-8 h-8 text-pink-500 mb-4" />
        <p className="text-gray-600">Loading your beautiful tulips...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-64 p-8">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md text-center">
          <AlertCircle className="w-8 h-8 text-red-500 mx-auto mb-3" />
          <h3 className="text-lg font-semibold text-red-800 mb-2">Oops! Something went wrong</h3>
          <p className="text-red-600 mb-4">{error}</p>
          <button 
            onClick={fetchTulips}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Flower2 className="w-8 h-8 text-pink-500" />
          <h1 className="text-4xl font-bold text-gray-900">My Tulip Garden</h1>
          <Flower2 className="w-8 h-8 text-pink-500" />
        </div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Welcome to my beautiful collection of tulip flowers. Each bloom tells a story of growth, beauty, and the magic of spring.
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 mb-8">
        <button
          onClick={() => setFilter('all')}
          className={`px-6 py-2 rounded-full font-medium transition-colors ${
            filter === 'all'
              ? 'bg-pink-500 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          All Tulips ({tulips.length})
        </button>
        <button
          onClick={() => setFilter('favorites')}
          className={`px-6 py-2 rounded-full font-medium transition-colors flex items-center gap-2 ${
            filter === 'favorites'
              ? 'bg-red-500 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          <Heart size={16} fill={filter === 'favorites' ? 'currentColor' : 'none'} />
          Favorites ({favoriteCount})
        </button>
      </div>

      {/* Tulips Grid */}
      {filteredTulips.length === 0 ? (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">🌷</div>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            {filter === 'favorites' ? 'No favorite tulips yet' : 'No tulips found'}
          </h3>
          <p className="text-gray-500">
            {filter === 'favorites' 
              ? 'Mark some tulips as favorites by clicking the heart icon!'
              : 'Your tulip collection will appear here once you add some flowers.'
            }
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTulips.map((tulip) => (
            <TulipCard
              key={tulip.id}
              tulip={tulip}
              onToggleFavorite={handleToggleFavorite}
            />
          ))}
        </div>
      )}

      {/* Footer */}
      <div className="text-center mt-16 pt-8 border-t border-gray-200">
        <p className="text-gray-500">
          © {new Date().getFullYear()} My Tulip Garden. Cultivated with love and care.
        </p>
      </div>
    </div>
  )
}

export default TulipGallery