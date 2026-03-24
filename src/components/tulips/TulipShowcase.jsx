import React, { useState, useEffect } from 'react'
import { Flower2, Loader2, AlertCircle, Sparkles, Plus } from 'lucide-react'
import { fetchTulips } from '@/api/tulips'
import TulipCard from '@/components/tulips/TulipCard'
import { populateTulipDatabase } from '@/populateData'

const TulipShowcase = () => {
  const [tulips, setTulips] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [populating, setPopulating] = useState(false)

  useEffect(() => {
    loadTulips()
  }, [])

  const handlePopulateDatabase = async () => {
    try {
      setPopulating(true)
      await populateTulipDatabase()
      // Reload tulips after populating
      await loadTulips()
    } catch (err) {
      console.error('Failed to populate database:', err)
      setError('Failed to populate database with sample tulips')
    } finally {
      setPopulating(false)
    }
  }

  const loadTulips = async () => {
    try {
      setLoading(true)
      setError(null)

      const result = await fetchTulips()
      
      if (!result.success) {
        throw new Error(result.error)
      }

      setTulips(result.data || [])
    } catch (err) {
      console.error('Failed to load tulips:', err)
      setError(err.message || 'Failed to load tulip collection')
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin text-pink-500 mx-auto mb-4" />
          <p className="text-gray-600">Loading your beautiful tulip collection...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-6">
          <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Oops! Something went wrong</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <button
            onClick={loadTulips}
            className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-lg transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    )
  }

  const featuredTulips = tulips.filter(tulip => tulip.data?.is_featured)
  const regularTulips = tulips.filter(tulip => !tulip.data?.is_featured)

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      {/* Header */}
      <header className="relative overflow-hidden bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Flower2 className="w-16 h-16 mr-4" />
              <h1 className="text-5xl md:text-6xl font-bold">
                My Tulip Garden
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-pink-100 max-w-3xl mx-auto leading-relaxed">
              Welcome to my beautiful collection of tulip flowers. Each bloom tells a story of spring's renewal and nature's artistry.
            </p>
            <div className="mt-8 flex items-center justify-center gap-2 text-pink-200">
              <Sparkles className="w-5 h-5" />
              <span className="text-lg">{tulips.length} Beautiful Varieties</span>
              <Sparkles className="w-5 h-5" />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {tulips.length === 0 ? (
          <div className="text-center py-16">
            <Flower2 className="w-24 h-24 text-gray-300 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">No Tulips Yet</h2>
            <p className="text-gray-600 mb-6">Your tulip collection is waiting to bloom!</p>
            <button
              onClick={handlePopulateDatabase}
              disabled={populating}
              className="bg-pink-500 hover:bg-pink-600 disabled:bg-pink-300 text-white px-6 py-3 rounded-lg transition-colors flex items-center gap-2 mx-auto"
            >
              {populating ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Planting Tulips...
                </>
              ) : (
                <>
                  <Plus className="w-5 h-5" />
                  Add Sample Tulips
                </>
              )}
            </button>
          </div>
        ) : (
          <>
            {/* Featured Tulips */}
            {featuredTulips.length > 0 && (
              <section className="mb-16">
                <div className="flex items-center gap-3 mb-8">
                  <Sparkles className="w-6 h-6 text-yellow-500" />
                  <h2 className="text-3xl font-bold text-gray-900">Featured Varieties</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {featuredTulips.map((tulip) => (
                    <TulipCard key={tulip.id} tulip={tulip} />
                  ))}
                </div>
              </section>
            )}

            {/* All Tulips */}
            <section>
              <div className="flex items-center gap-3 mb-8">
                <Flower2 className="w-6 h-6 text-pink-500" />
                <h2 className="text-3xl font-bold text-gray-900">
                  {featuredTulips.length > 0 ? 'All Varieties' : 'My Collection'}
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {(featuredTulips.length > 0 ? tulips : regularTulips).map((tulip) => (
                  <TulipCard key={tulip.id} tulip={tulip} />
                ))}
              </div>
            </section>
          </>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <Flower2 className="w-8 h-8 mr-2 text-pink-400" />
            <span className="text-xl font-semibold">My Tulip Garden</span>
          </div>
          <p className="text-gray-400">
            © {new Date().getFullYear()} - Celebrating the beauty of tulips, one bloom at a time
          </p>
        </div>
      </footer>
    </div>
  )
}

export default TulipShowcase