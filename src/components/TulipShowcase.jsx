import React, { useState, useEffect } from 'react'
import { fetchTulipFlowers } from '../api/tulipFlowers.js'
import { Flower2, Calendar, Ruler, Heart, Loader2, AlertCircle } from 'lucide-react'

const TulipShowcase = () => {
  const [tulips, setTulips] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    loadTulips()
  }, [])

  const loadTulips = async () => {
    try {
      setLoading(true)
      setError(null)
      
      const result = await fetchTulipFlowers()
      
      if (result.success) {
        setTulips(result.data)
      } else {
        setError(result.error)
      }
    } catch (err) {
      console.error('Failed to load tulips:', err)
      setError('An unexpected error occurred while loading tulips')
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="animate-spin mx-auto mb-4 text-pink-500" size={48} />
          <p className="text-gray-600">Loading your beautiful tulips...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 flex items-center justify-center">
        <div className="text-center bg-white p-8 rounded-lg shadow-lg max-w-md">
          <AlertCircle className="mx-auto mb-4 text-red-500" size={48} />
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Oops! Something went wrong</h2>
          <p className="text-red-600 mb-4">{error}</p>
          <button 
            onClick={loadTulips}
            className="bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-pink-100">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Flower2 className="text-pink-500 mr-3" size={48} />
              <h1 className="text-4xl font-bold text-gray-800">My Tulip Garden</h1>
            </div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Welcome to my beautiful collection of tulip flowers. Each bloom tells a story of care, patience, and the magic of spring.
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        {tulips.length === 0 ? (
          <div className="text-center py-16">
            <Flower2 className="mx-auto mb-6 text-gray-400" size={64} />
            <h2 className="text-2xl font-semibold text-gray-600 mb-4">No tulips planted yet</h2>
            <p className="text-gray-500">Your tulip garden is waiting to bloom with beautiful flowers.</p>
          </div>
        ) : (
          <>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                My Collection ({tulips.length} {tulips.length === 1 ? 'Tulip' : 'Tulips'})
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tulips.map((tulip) => (
                <TulipCard key={tulip.id} tulip={tulip} />
              ))}
            </div>
          </>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-pink-100 mt-16">
        <div className="max-w-7xl mx-auto px-4 py-8 text-center">
          <p className="text-gray-600">
            © {new Date().getFullYear()} My Tulip Garden. Cultivated with love and care.
          </p>
        </div>
      </footer>
    </div>
  )
}

const TulipCard = ({ tulip }) => {
  const formatDate = (dateString) => {
    if (!dateString) return 'Not specified'
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    } catch {
      return dateString
    }
  }

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-pink-100">
      {/* Image Section */}
      <div className="relative h-64 bg-gradient-to-br from-pink-100 to-purple-100">
        {tulip.data?.image_url ? (
          <img 
            src={tulip.data.image_url} 
            alt={tulip.data?.name || 'Tulip'} 
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = 'none'
              e.target.nextSibling.style.display = 'flex'
            }}
          />
        ) : null}
        <div className="absolute inset-0 flex items-center justify-center text-pink-400">
          <Flower2 size={64} />
        </div>
        {tulip.data?.is_favorite && (
          <div className="absolute top-4 right-4 bg-red-500 text-white p-2 rounded-full shadow-lg">
            <Heart size={16} fill="currentColor" />
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            {tulip.data?.name || 'Unnamed Tulip'}
          </h3>
          <div className="flex items-center mb-2">
            <div 
              className="w-4 h-4 rounded-full mr-2 border-2 border-gray-300"
              style={{ backgroundColor: tulip.data?.color?.toLowerCase() || '#pink' }}
            ></div>
            <span className="text-sm font-medium text-gray-600 capitalize">
              {tulip.data?.color || 'Unknown Color'}
            </span>
          </div>
        </div>

        <p className="text-gray-600 mb-4 line-clamp-3">
          {tulip.data?.description || 'A beautiful tulip flower in my garden.'}
        </p>

        {/* Details Grid */}
        <div className="space-y-3 text-sm">
          {tulip.data?.bloom_season && (
            <div className="flex items-center text-gray-600">
              <Calendar size={16} className="mr-2 text-pink-500" />
              <span className="font-medium mr-2">Blooms:</span>
              <span>{tulip.data.bloom_season}</span>
            </div>
          )}
          
          {tulip.data?.height && (
            <div className="flex items-center text-gray-600">
              <Ruler size={16} className="mr-2 text-pink-500" />
              <span className="font-medium mr-2">Height:</span>
              <span>{tulip.data.height} cm</span>
            </div>
          )}
          
          {tulip.data?.planting_date && (
            <div className="flex items-center text-gray-600">
              <Flower2 size={16} className="mr-2 text-pink-500" />
              <span className="font-medium mr-2">Planted:</span>
              <span>{formatDate(tulip.data.planting_date)}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default TulipShowcase