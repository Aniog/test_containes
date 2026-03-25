import React, { useState, useEffect } from 'react'
import { Loader2, AlertCircle, Flower2 } from 'lucide-react'
import { tulipAPI } from '@/api/tulipAPI.js'
import TulipCard from './TulipCard.jsx'

const TulipGallery = () => {
  const [tulips, setTulips] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchTulips()
  }, [])

  const fetchTulips = async () => {
    try {
      setLoading(true)
      setError(null)

      const response = await tulipAPI.getAllTulips()
      
      if (!response.success) {
        throw new Error(response.error)
      }

      setTulips(response.data)
    } catch (err) {
      console.error('Failed to fetch tulips:', err)
      setError(err.message || 'Failed to load tulip flowers')
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center py-16">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin text-purple-600 mx-auto mb-4" />
          <p className="text-gray-600">Loading your beautiful tulips...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="max-w-md mx-auto mt-8">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
          <AlertCircle className="w-8 h-8 text-red-500 mx-auto mb-3" />
          <h3 className="text-lg font-semibold text-red-800 mb-2">
            Oops! Something went wrong
          </h3>
          <p className="text-red-600 mb-4">{error}</p>
          <button
            onClick={fetchTulips}
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    )
  }

  if (tulips.length === 0) {
    return (
      <div className="text-center py-16">
        <Flower2 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-700 mb-2">
          No tulips found
        </h3>
        <p className="text-gray-500">
          Your tulip garden is waiting to be filled with beautiful flowers!
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          My Tulip Garden
        </h2>
        <p className="text-gray-600">
          Discover the beauty of {tulips.length} stunning tulip{tulips.length !== 1 ? 's' : ''}
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tulips.map((tulip) => (
          <TulipCard key={tulip.id} tulip={tulip} />
        ))}
      </div>

      {/* Stats */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-purple-600">
              {tulips.length}
            </div>
            <div className="text-sm text-gray-600">Total Tulips</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-pink-600">
              {tulips.filter(t => t.data?.is_favorite).length}
            </div>
            <div className="text-sm text-gray-600">Favorites</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-green-600">
              {new Set(tulips.map(t => t.data?.variety).filter(Boolean)).size}
            </div>
            <div className="text-sm text-gray-600">Varieties</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TulipGallery