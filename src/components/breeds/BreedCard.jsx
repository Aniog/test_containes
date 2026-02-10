import React from 'react'
import { MapPin, Ruler, Weight, Heart, Star, AlertTriangle } from 'lucide-react'

const BreedCard = ({ breed, onViewDetails, onToggleFavorite, isFavorite = false }) => {
  const {
    breed_name,
    origin_country,
    breed_type,
    height_min,
    height_max,
    weight_min,
    weight_max,
    coat_colors,
    temperament,
    image_url,
    popularity_rank,
    is_rare_breed,
    description
  } = breed

  const formatHeight = (min, max) => {
    if (min && max) return `${min}-${max} hands`
    if (min) return `${min}+ hands`
    if (max) return `up to ${max} hands`
    return 'Variable'
  }

  const formatWeight = (min, max) => {
    if (min && max) return `${min}-${max} lbs`
    if (min) return `${min}+ lbs`
    if (max) return `up to ${max} lbs`
    return 'Variable'
  }

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
      {/* Image Section */}
      <div className="relative h-48 bg-gradient-to-br from-amber-100 to-amber-200 overflow-hidden">
        {image_url ? (
          <img
            src={image_url}
            alt={breed_name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-amber-600 text-6xl font-bold opacity-20">🐎</div>
          </div>
        )}
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          {is_rare_breed && (
            <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
              <AlertTriangle className="h-3 w-3" />
              Rare
            </span>
          )}
          {popularity_rank && popularity_rank <= 10 && (
            <span className="bg-amber-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
              <Star className="h-3 w-3" />
              Popular
            </span>
          )}
        </div>

        {/* Favorite Button */}
        <button
          onClick={(e) => {
            e.stopPropagation()
            onToggleFavorite?.(breed)
          }}
          className="absolute top-3 right-3 p-2 bg-white/80 hover:bg-white rounded-full transition-colors duration-200"
        >
          <Heart
            className={`h-4 w-4 ${
              isFavorite ? 'text-red-500 fill-current' : 'text-gray-600'
            }`}
          />
        </button>
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Header */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 mb-1">{breed_name}</h3>
          <div className="flex items-center text-gray-600 text-sm mb-2">
            <MapPin className="h-4 w-4 mr-1" />
            <span>{origin_country}</span>
            <span className="mx-2">•</span>
            <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded-full text-xs font-medium">
              {breed_type}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {description || 'A magnificent horse breed with unique characteristics and rich history.'}
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <Ruler className="h-4 w-4 mr-2 text-amber-600" />
            <div>
              <div className="font-medium">Height</div>
              <div>{formatHeight(height_min, height_max)}</div>
            </div>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Weight className="h-4 w-4 mr-2 text-amber-600" />
            <div>
              <div className="font-medium">Weight</div>
              <div>{formatWeight(weight_min, weight_max)}</div>
            </div>
          </div>
        </div>

        {/* Temperament */}
        {temperament && (
          <div className="mb-4">
            <div className="text-sm font-medium text-gray-700 mb-1">Temperament</div>
            <div className="text-sm text-gray-600">{temperament}</div>
          </div>
        )}

        {/* Coat Colors */}
        {coat_colors && coat_colors.length > 0 && (
          <div className="mb-4">
            <div className="text-sm font-medium text-gray-700 mb-2">Common Colors</div>
            <div className="flex flex-wrap gap-1">
              {coat_colors.slice(0, 4).map((color, index) => (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
                >
                  {color}
                </span>
              ))}
              {coat_colors.length > 4 && (
                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                  +{coat_colors.length - 4} more
                </span>
              )}
            </div>
          </div>
        )}

        {/* Action Button */}
        <button
          onClick={() => onViewDetails?.(breed)}
          className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
        >
          Learn More
        </button>
      </div>
    </div>
  )
}

export default BreedCard