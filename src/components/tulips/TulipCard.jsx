import React from 'react'
import { Heart, Calendar, Ruler } from 'lucide-react'

const TulipCard = ({ tulip }) => {
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
    if (!dateString) return null
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
        
        {/* Favorite Badge */}
        {tulip.data?.is_favorite && (
          <div className="absolute top-3 right-3 bg-red-500 text-white p-2 rounded-full shadow-lg">
            <Heart className="w-4 h-4 fill-current" />
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Header */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-800 mb-1">
            {tulip.data?.name || 'Unnamed Tulip'}
          </h3>
          <p className="text-sm font-medium text-purple-600 bg-purple-50 px-3 py-1 rounded-full inline-block">
            {tulip.data?.variety || 'Unknown Variety'}
          </p>
        </div>

        {/* Colors */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm font-medium text-gray-600">Colors:</span>
            <span className="text-sm bg-gray-100 px-2 py-1 rounded-md">
              {tulip.data?.color}
            </span>
            {tulip.data?.secondary_color && (
              <span className="text-sm bg-gray-100 px-2 py-1 rounded-md">
                {tulip.data.secondary_color}
              </span>
            )}
          </div>
        </div>

        {/* Details */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Calendar className="w-4 h-4" />
            <span>Blooms in {getSeasonDisplay(tulip.data?.bloom_season)}</span>
          </div>
          
          {tulip.data?.height && (
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Ruler className="w-4 h-4" />
              <span>{tulip.data.height} cm tall</span>
            </div>
          )}

          {tulip.data?.planting_date && (
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Calendar className="w-4 h-4" />
              <span>Planted: {formatDate(tulip.data.planting_date)}</span>
            </div>
          )}
        </div>

        {/* Description */}
        {tulip.data?.description && (
          <div className="border-t pt-4">
            <p className="text-sm text-gray-600 leading-relaxed">
              {tulip.data.description}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default TulipCard