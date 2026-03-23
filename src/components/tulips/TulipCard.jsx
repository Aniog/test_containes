import React from 'react';
import { Heart, Flower2 } from 'lucide-react';

const TulipCard = ({ tulip, onFavorite }) => {
  const getSeasonBadgeColor = (season) => {
    switch (season) {
      case 'early_spring':
        return 'bg-green-100 text-green-800';
      case 'mid_spring':
        return 'bg-yellow-100 text-yellow-800';
      case 'late_spring':
        return 'bg-pink-100 text-pink-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const formatSeason = (season) => {
    return season?.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase()) || 'Unknown';
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        {tulip.data?.image_url ? (
          <img
            src={tulip.data.image_url}
            alt={tulip.data?.name || 'Tulip'}
            className="w-full h-64 object-cover"
          />
        ) : (
          <div className="w-full h-64 bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center">
            <Flower2 className="w-16 h-16 text-pink-400" />
          </div>
        )}
        
        {tulip.data?.is_featured && (
          <div className="absolute top-4 left-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-semibold">
            Featured
          </div>
        )}
        
        <button
          onClick={() => onFavorite && onFavorite(tulip)}
          className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
        >
          <Heart className="w-5 h-5 text-red-500" />
        </button>
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-900">{tulip.data?.name || 'Unknown Tulip'}</h3>
          {tulip.data?.bloom_season && (
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${getSeasonBadgeColor(tulip.data.bloom_season)}`}>
              {formatSeason(tulip.data.bloom_season)}
            </span>
          )}
        </div>
        
        <div className="flex items-center gap-4 mb-3">
          <div className="flex items-center gap-2">
            <div 
              className="w-4 h-4 rounded-full border-2 border-gray-300"
              style={{ backgroundColor: tulip.data?.color?.toLowerCase() || '#gray' }}
            />
            <span className="text-sm text-gray-600 capitalize">{tulip.data?.color || 'Unknown'}</span>
          </div>
          
          {tulip.data?.height && (
            <div className="text-sm text-gray-600">
              {tulip.data.height} cm
            </div>
          )}
        </div>
        
        <p className="text-gray-700 text-sm leading-relaxed">
          {tulip.data?.description || 'A beautiful tulip flower.'}
        </p>
      </div>
    </div>
  );
};

export default TulipCard;