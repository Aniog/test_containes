import React, { useState, useEffect } from 'react'
import { fetchTulips } from '@/api/tulips.js'
import { Loader2, AlertCircle, Flower2, Calendar, Ruler, Droplets } from 'lucide-react'
import HeroSection from './HeroSection.jsx'

const TulipCard = ({ tulip }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Image Section */}
      <div className="h-64 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center relative overflow-hidden">
        {tulip.data.image_url ? (
          <img 
            src={tulip.data.image_url} 
            alt={tulip.data.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="text-center">
            <Flower2 className="w-16 h-16 text-green-600 mx-auto mb-2" />
            <p className="text-green-700 font-medium">{tulip.data.name}</p>
          </div>
        )}
        {/* Color indicator */}
        <div className="absolute top-3 right-3">
          <div 
            className="w-6 h-6 rounded-full border-2 border-white shadow-md"
            style={{ backgroundColor: tulip.data.color.toLowerCase() }}
            title={`Color: ${tulip.data.color}`}
          ></div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{tulip.data.name}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{tulip.data.description}</p>
        
        {/* Details Grid */}
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-pink-500" />
            <span className="text-gray-700">{tulip.data.bloom_time}</span>
          </div>
          <div className="flex items-center gap-2">
            <Ruler className="w-4 h-4 text-blue-500" />
            <span className="text-gray-700">{tulip.data.height} cm</span>
          </div>
          {tulip.data.planting_depth && (
            <div className="flex items-center gap-2">
              <Droplets className="w-4 h-4 text-brown-500" />
              <span className="text-gray-700">{tulip.data.planting_depth} cm deep</span>
            </div>
          )}
          <div className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded-full ${tulip.data.is_perennial ? 'bg-green-500' : 'bg-orange-500'}`}></div>
            <span className="text-gray-700">{tulip.data.is_perennial ? 'Perennial' : 'Annual'}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

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

      const response = await fetchTulips()
      
      if (!response.success) {
        throw new Error(response.error || 'Failed to fetch tulips')
      }

      setTulips(response.data.list || [])
    } catch (err) {
      console.error('Error loading tulips:', err)
      setError(err.message || 'An unexpected error occurred')
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-green-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin text-pink-500 mx-auto mb-4" />
          <p className="text-gray-600">Loading your beautiful tulips...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-green-50 flex items-center justify-center p-4">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md text-center">
          <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-red-800 mb-2">Oops! Something went wrong</h3>
          <p className="text-red-600 mb-4">{error}</p>
          <button 
            onClick={loadTulips}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Tulips Collection Section */}
      <div id="tulips-collection" className="bg-gradient-to-br from-pink-50 via-white to-green-50">
        {/* Header */}
        <div className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Flower2 className="w-10 h-10 text-pink-500" />
                <h2 className="text-4xl font-bold text-gray-800">Our Collection</h2>
                <Flower2 className="w-10 h-10 text-pink-500" />
              </div>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Each bloom tells a story of nature's artistry and careful cultivation.
              </p>
              <div className="mt-4 inline-flex items-center gap-2 bg-pink-100 text-pink-800 px-4 py-2 rounded-full">
                <span className="font-semibold">{tulips.length}</span>
                <span>Beautiful Varieties</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tulips Grid */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          {tulips.length === 0 ? (
            <div className="text-center py-16">
              <Flower2 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No tulips found</h3>
              <p className="text-gray-500">Your tulip collection will appear here once you add some flowers.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tulips.map((tulip) => (
                <TulipCard key={tulip.id} tulip={tulip} />
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <footer className="bg-white border-t mt-16">
          <div className="max-w-7xl mx-auto px-4 py-8 text-center">
            <p className="text-gray-600">
              © {new Date().getFullYear()} My Tulip Garden. Cultivated with love and care.
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default TulipShowcase