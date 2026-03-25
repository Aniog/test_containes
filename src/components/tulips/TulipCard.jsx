import React from 'react'
import { Heart, Calendar, Ruler } from 'lucide-react'

const TulipCard = ({ tulip, onToggleFavorite }) => {
  const getSeasonDisplay = (season) => {
    const seasonMap = {
      'early_spring': 'Early Spring',
      'mid_spring': 'Mid Spring', 
      'late_spring': 'Late Spring',
      'early_summer': 'Early Summer'
    }
    return seasonMap[season] || season
  }

  const formatDate = (dateString) => {
    if (!dateString) return 'Not specified'
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
      {/* Image Section */}
      <div className="relative h-64 bg-gradient-to-br from-pink-100 to-purple-100">
        {tulip.data?.image_url ? (
          <img 
            src={tulip.data.image_url} 
            alt={tulip.data?.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-6xl">🌷</div>
          </div>
        )}
        
        {/* Favorite Button */}
        <button
          onClick={() => onToggleFavorite && onToggleFavorite(tulip.id)}
          className={`absolute top-3 right-3 p-2 rounded-full transition-colors duration-200 ${
            tulip.data?.is_favorite 
              ? 'bg-red-500 text-white hover:bg-red-600' 
              : 'bg-white text-gray-400 hover:text-red-500 hover:bg-red-50'
          }`}
        >
          <Heart size={20} fill={tulip.data?.is_favorite ? 'currentColor' : 'none'} />
        </button>
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Header */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            {tulip.data?.name || 'Unnamed Tulip'}
          </h3>
          <div className="flex items-center gap-2">
            <div 
              className="w-4 h-4 rounded-full border-2 border-gray-300"
              style={{ backgroundColor: tulip.data?.color?.toLowerCase() || '#gray' }}
              title={`Color: ${tulip.data?.color || 'Unknown'}`}
            />
            <span className="text-sm font-medium text-gray-600 capitalize">
              {tulip.data?.color || 'Unknown Color'}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {tulip.data?.description || 'No description available.'}
        </p>

        {/* Details */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Calendar size={16} />
            <span>Blooms in {getSeasonDisplay(tulip.data?.bloom_season)}</span>
          </div>
          
          {tulip.data?.height && (
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Ruler size={16} />
              <span>{tulip.data.height} cm tall</span>
            </div>
          )}
          
          {tulip.data?.planting_date && (
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Calendar size={16} />
              <span>Planted: {formatDate(tulip.data.planting_date)}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default TulipCard