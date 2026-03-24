import React from 'react'
import { Flower2, Sun, Ruler, Calendar } from 'lucide-react'
import { cn } from '@/lib/utils'

const TulipCard = ({ tulip, className }) => {
  const getSunIcon = (requirement) => {
    switch (requirement) {
      case 'Full Sun':
        return <Sun className="w-4 h-4 text-yellow-500" />
      case 'Partial Sun':
        return <Sun className="w-4 h-4 text-yellow-400" />
      case 'Partial Shade':
        return <Sun className="w-4 h-4 text-gray-400" />
      default:
        return <Sun className="w-4 h-4 text-gray-400" />
    }
  }

  const getBloomColor = (time) => {
    switch (time) {
      case 'Early Spring':
        return 'bg-green-100 text-green-800'
      case 'Mid Spring':
        return 'bg-blue-100 text-blue-800'
      case 'Late Spring':
        return 'bg-purple-100 text-purple-800'
      case 'Early Summer':
        return 'bg-orange-100 text-orange-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className={cn(
      "group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1",
      tulip.data?.is_featured && "ring-2 ring-yellow-400 ring-opacity-50",
      className
    )}>
      {/* Featured Badge */}
      {tulip.data?.is_featured && (
        <div className="absolute top-3 right-3 z-10">
          <div className="bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-semibold">
            Featured
          </div>
        </div>
      )}

      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        {tulip.data?.image_url ? (
          <img
            src={tulip.data.image_url}
            alt={tulip.data?.name || 'Tulip'}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center">
            <Flower2 className="w-16 h-16 text-pink-400" />
          </div>
        )}
        
        {/* Color indicator */}
        <div className="absolute bottom-3 left-3">
          <div 
            className="w-6 h-6 rounded-full border-2 border-white shadow-md"
            style={{ backgroundColor: tulip.data?.color?.toLowerCase() || '#pink' }}
            title={`Color: ${tulip.data?.color || 'Unknown'}`}
          />
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-pink-600 transition-colors">
            {tulip.data?.name || 'Unknown Tulip'}
          </h3>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {tulip.data?.description || 'A beautiful tulip flower.'}
        </p>

        {/* Details Grid */}
        <div className="grid grid-cols-2 gap-3 text-sm">
          {/* Bloom Time */}
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-gray-400" />
            <span className={cn(
              "px-2 py-1 rounded-full text-xs font-medium",
              getBloomColor(tulip.data?.bloom_time)
            )}>
              {tulip.data?.bloom_time || 'Unknown'}
            </span>
          </div>

          {/* Sun Requirement */}
          <div className="flex items-center gap-2">
            {getSunIcon(tulip.data?.sun_requirement)}
            <span className="text-gray-600 text-xs">
              {tulip.data?.sun_requirement || 'Unknown'}
            </span>
          </div>

          {/* Height */}
          <div className="flex items-center gap-2">
            <Ruler className="w-4 h-4 text-gray-400" />
            <span className="text-gray-600 text-xs">
              {tulip.data?.height ? `${tulip.data.height}"` : 'Unknown height'}
            </span>
          </div>

          {/* Planting Depth */}
          {tulip.data?.planting_depth && (
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 text-gray-400 flex items-center justify-center">
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
              </div>
              <span className="text-gray-600 text-xs">
                Plant {tulip.data.planting_depth}" deep
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default TulipCard