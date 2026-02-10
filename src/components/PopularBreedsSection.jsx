import React from 'react'
import { Star, MapPin, Trophy, Users } from 'lucide-react'

const PopularBreedsSection = ({ onExploreBreeds }) => {
  // Mock data for popular breeds - in a real app this would come from the API
  const popularBreeds = [
    {
      name: 'Arabian',
      origin: 'Arabian Peninsula',
      description: 'Known for their distinctive head shape, high tail carriage, and incredible endurance. One of the oldest horse breeds.',
      popularity: 1,
      uses: ['Endurance', 'Show', 'Breeding'],
      image: '🐎',
      color: 'from-amber-400 to-amber-600'
    },
    {
      name: 'Thoroughbred',
      origin: 'England',
      description: 'The fastest horse breed, developed for racing. Known for their speed, agility, and competitive spirit.',
      popularity: 2,
      uses: ['Racing', 'Sport', 'Jumping'],
      image: '🏇',
      color: 'from-red-400 to-red-600'
    },
    {
      name: 'Quarter Horse',
      origin: 'United States',
      description: 'America\'s most popular breed, known for their versatility and gentle temperament. Excellent for beginners.',
      popularity: 3,
      uses: ['Western', 'Ranch', 'Trail'],
      image: '🐴',
      color: 'from-blue-400 to-blue-600'
    },
    {
      name: 'Clydesdale',
      origin: 'Scotland',
      description: 'Gentle giants known for their feathered feet and impressive size. Famous for their use in advertising.',
      popularity: 4,
      uses: ['Draft', 'Show', 'Driving'],
      image: '🦄',
      color: 'from-green-400 to-green-600'
    }
  ]

  const breedStats = [
    { icon: Star, label: 'Most Popular', value: 'Quarter Horse', description: 'In North America' },
    { icon: Trophy, label: 'Fastest', value: 'Thoroughbred', description: 'Up to 55 mph' },
    { icon: Users, label: 'Most Versatile', value: 'Arabian', description: 'Multiple disciplines' },
    { icon: MapPin, label: 'Most Ancient', value: 'Arabian', description: '4,500+ years old' }
  ]

  return (
    <section id="popular" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Most Popular Breeds
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the horse breeds that have captured hearts worldwide. These breeds are beloved 
            for their unique characteristics, versatility, and special bonds with humans.
          </p>
        </div>

        {/* Popular Breeds Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {popularBreeds.map((breed, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
              onClick={onExploreBreeds}
            >
              <div className="flex">
                {/* Image/Icon Section */}
                <div className={`bg-gradient-to-br ${breed.color} w-32 flex items-center justify-center text-6xl`}>
                  {breed.image}
                </div>
                
                {/* Content Section */}
                <div className="flex-1 p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{breed.name}</h3>
                      <div className="flex items-center text-gray-600 text-sm">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{breed.origin}</span>
                      </div>
                    </div>
                    <div className="flex items-center bg-amber-100 text-amber-800 px-2 py-1 rounded-full text-xs font-medium">
                      <Star className="h-3 w-3 mr-1" />
                      #{breed.popularity}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {breed.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {breed.uses.map((use, useIndex) => (
                      <span
                        key={useIndex}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium"
                      >
                        {use}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Breed Statistics */}
        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Breed Champions
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {breedStats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="text-center">
                  <div className="bg-amber-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-amber-600" />
                  </div>
                  <div className="text-sm font-medium text-gray-600 mb-1">{stat.label}</div>
                  <div className="text-lg font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-xs text-gray-500">{stat.description}</div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <button
            onClick={onExploreBreeds}
            className="bg-amber-600 hover:bg-amber-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Explore All Breeds
          </button>
        </div>
      </div>
    </section>
  )
}

export default PopularBreedsSection