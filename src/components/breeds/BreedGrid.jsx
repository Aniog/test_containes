import React, { useState, useEffect } from 'react'
import { fetchHorseBreeds } from '@/api/horseBreeds'
import BreedCard from './BreedCard'
import { Loader2, AlertCircle, Search, Filter, Grid, List } from 'lucide-react'

const BreedGrid = () => {
  const [breeds, setBreeds] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedType, setSelectedType] = useState('all')
  const [viewMode, setViewMode] = useState('grid')
  const [favorites, setFavorites] = useState(new Set())

  const breedTypes = [
    'all', 'Draft', 'Sport', 'Pony', 'Arabian', 'Thoroughbred', 
    'Quarter Horse', 'Warmblood', 'Cold Blood', 'Hot Blood', 'Gaited', 'Miniature'
  ]

  useEffect(() => {
    loadBreeds()
  }, [])

  const loadBreeds = async () => {
    try {
      setLoading(true)
      setError(null)

      const result = await fetchHorseBreeds()
      
      if (result.success) {
        setBreeds(result.data)
      } else {
        setError(result.error || 'Failed to load horse breeds')
      }
    } catch (err) {
      console.error('Failed to load breeds:', err)
      setError(err.message || 'An unexpected error occurred')
    } finally {
      setLoading(false)
    }
  }

  const handleToggleFavorite = (breed) => {
    const newFavorites = new Set(favorites)
    if (newFavorites.has(breed.id)) {
      newFavorites.delete(breed.id)
    } else {
      newFavorites.add(breed.id)
    }
    setFavorites(newFavorites)
  }

  const handleViewDetails = (breed) => {
    // For now, just scroll to top and show alert
    // In a real app, this would navigate to a detail page
    window.scrollTo({ top: 0, behavior: 'smooth' })
    alert(`Viewing details for ${breed.breed_name}. In a full app, this would open a detailed page.`)
  }

  // Filter breeds based on search and type
  const filteredBreeds = breeds.filter(breed => {
    const matchesSearch = breed.breed_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         breed.origin_country?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         breed.description?.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesType = selectedType === 'all' || breed.breed_type === selectedType
    
    return matchesSearch && matchesType
  })

  if (loading) {
    return (
      <div className="flex justify-center items-center py-16">
        <div className="text-center">
          <Loader2 className="animate-spin h-12 w-12 text-amber-600 mx-auto mb-4" />
          <p className="text-gray-600">Loading horse breeds...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="max-w-2xl mx-auto py-16">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
          <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-red-800 mb-2">Error Loading Breeds</h3>
          <p className="text-red-600 mb-4">{error}</p>
          <button
            onClick={loadBreeds}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
          >
            Try Again
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore Horse Breeds</h2>
        <p className="text-gray-600 max-w-2xl">
          Discover the fascinating world of horse breeds from around the globe. Each breed has its own 
          unique characteristics, history, and purpose.
        </p>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
        <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search breeds, countries, or descriptions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
          </div>

          {/* Type Filter */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-gray-500" />
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              >
                {breedTypes.map(type => (
                  <option key={type} value={type}>
                    {type === 'all' ? 'All Types' : type}
                  </option>
                ))}
              </select>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-colors duration-200 ${
                  viewMode === 'grid' ? 'bg-white shadow-sm text-amber-600' : 'text-gray-500'
                }`}
              >
                <Grid className="h-4 w-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-colors duration-200 ${
                  viewMode === 'list' ? 'bg-white shadow-sm text-amber-600' : 'text-gray-500'
                }`}
              >
                <List className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mt-4 text-sm text-gray-600">
          Showing {filteredBreeds.length} of {breeds.length} breeds
          {searchTerm && ` for "${searchTerm}"`}
          {selectedType !== 'all' && ` in ${selectedType} category`}
        </div>
      </div>

      {/* Breeds Grid/List */}
      {filteredBreeds.length === 0 ? (
        <div className="text-center py-16">
          <div className="text-gray-400 text-6xl mb-4">🐎</div>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">No breeds found</h3>
          <p className="text-gray-500 mb-4">
            {searchTerm || selectedType !== 'all' 
              ? 'Try adjusting your search or filter criteria'
              : 'No horse breeds are currently available in the database'
            }
          </p>
          {(searchTerm || selectedType !== 'all') && (
            <button
              onClick={() => {
                setSearchTerm('')
                setSelectedType('all')
              }}
              className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
            >
              Clear Filters
            </button>
          )}
        </div>
      ) : (
        <div className={
          viewMode === 'grid' 
            ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
            : 'space-y-4'
        }>
          {filteredBreeds.map((breed) => (
            <BreedCard
              key={breed.id}
              breed={breed}
              onViewDetails={handleViewDetails}
              onToggleFavorite={handleToggleFavorite}
              isFavorite={favorites.has(breed.id)}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default BreedGrid