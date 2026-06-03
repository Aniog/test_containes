import { useEffect, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../strk-img-config.json'
import { Filter, Star, Heart, ShoppingCart } from 'lucide-react'

function Bikes() {
  const containerRef = useRef(null)
  const [searchParams, setSearchParams] = useSearchParams()
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all')
  const [priceRange, setPriceRange] = useState('all')

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const categories = [
    { id: 'all', name: 'All Bikes' },
    { id: 'mountain', name: 'Mountain Bikes' },
    { id: 'road', name: 'Road Bikes' },
    { id: 'city', name: 'City Bikes' },
    { id: 'electric', name: 'Electric Bikes' },
    { id: 'hybrid', name: 'Hybrid Bikes' }
  ]

  const bikes = [
    {
      id: 1,
      name: "TrailMaster Pro",
      category: "mountain",
      price: 2499,
      originalPrice: 2799,
      rating: 4.8,
      reviews: 124,
      description: "Professional-grade mountain bike with full suspension and premium components for serious trail riders.",
      features: ["Full Suspension", "Carbon Frame", "Shimano XT", "Tubeless Ready"],
      imgId: "bike-trailmaster-a1b2c3"
    },
    {
      id: 2,
      name: "SpeedRunner Elite",
      category: "road",
      price: 1899,
      rating: 4.9,
      reviews: 89,
      description: "Lightweight carbon fiber road bike designed for speed and endurance on long distance rides.",
      features: ["Carbon Fiber", "Aero Design", "Shimano 105", "Lightweight"],
      imgId: "bike-speedrunner-d4e5f6"
    },
    {
      id: 3,
      name: "Urban Cruiser",
      category: "city",
      price: 899,
      rating: 4.6,
      reviews: 156,
      description: "Comfortable and stylish city bike perfect for daily commuting and leisurely neighborhood rides.",
      features: ["Comfort Geometry", "Internal Hub", "Fenders", "Rack Ready"],
      imgId: "bike-urban-g7h8i9"
    },
    {
      id: 4,
      name: "PowerRide E-Mountain",
      category: "electric",
      price: 3299,
      rating: 4.7,
      reviews: 67,
      description: "Electric mountain bike with powerful motor and long-range battery for extended trail adventures.",
      features: ["750W Motor", "80mi Range", "Full Suspension", "Smart Display"],
      imgId: "bike-powerride-j1k2l3"
    },
    {
      id: 5,
      name: "AllTerrain Hybrid",
      category: "hybrid",
      price: 1299,
      rating: 4.5,
      reviews: 203,
      description: "Versatile hybrid bike that performs equally well on roads, paths, and light trails.",
      features: ["Versatile Design", "Comfort Saddle", "Multiple Gears", "Puncture Resistant"],
      imgId: "bike-allterrain-m4n5o6"
    },
    {
      id: 6,
      name: "Summit Climber",
      category: "mountain",
      price: 1799,
      rating: 4.6,
      reviews: 91,
      description: "Hardtail mountain bike built for climbing and technical terrain with precision handling.",
      features: ["Hardtail Design", "Lightweight", "Precision Handling", "Durable"],
      imgId: "bike-summit-p7q8r9"
    },
    {
      id: 7,
      name: "City Commuter Pro",
      category: "city",
      price: 1199,
      rating: 4.7,
      reviews: 134,
      description: "Premium city bike with integrated lights, fenders, and cargo capacity for serious commuters.",
      features: ["Integrated Lights", "Cargo Rack", "Belt Drive", "Weather Protection"],
      imgId: "bike-commuter-s1t2u3"
    },
    {
      id: 8,
      name: "Race Machine Carbon",
      category: "road",
      price: 3499,
      originalPrice: 3899,
      rating: 4.9,
      reviews: 45,
      description: "Professional racing bike with aerodynamic carbon frame and top-tier components.",
      features: ["Aero Carbon", "Shimano Dura-Ace", "Racing Geometry", "Ultra Light"],
      imgId: "bike-racemachine-v4w5x6"
    },
    {
      id: 9,
      name: "E-City Comfort",
      category: "electric",
      price: 2199,
      rating: 4.8,
      reviews: 78,
      description: "Electric city bike with step-through frame and comfortable riding position for easy urban mobility.",
      features: ["Step-Through", "Comfort Position", "50mi Range", "Integrated Battery"],
      imgId: "bike-ecity-y7z8a9"
    }
  ]

  const filteredBikes = bikes.filter(bike => {
    const categoryMatch = selectedCategory === 'all' || bike.category === selectedCategory
    let priceMatch = true
    
    if (priceRange === 'under-1000') priceMatch = bike.price < 1000
    else if (priceRange === '1000-2000') priceMatch = bike.price >= 1000 && bike.price < 2000
    else if (priceRange === '2000-3000') priceMatch = bike.price >= 2000 && bike.price < 3000
    else if (priceRange === 'over-3000') priceMatch = bike.price >= 3000
    
    return categoryMatch && priceMatch
  })

  const handleCategoryChange = (category) => {
    setSelectedCategory(category)
    if (category === 'all') {
      setSearchParams({})
    } else {
      setSearchParams({ category })
    }
  }

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Our Bike Collection
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Discover our carefully curated selection of premium bikes. From mountain adventures to city commuting, 
              find the perfect ride for your lifestyle and budget.
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            <div className="flex items-center">
              <Filter className="w-5 h-5 text-gray-600 mr-2" />
              <span className="font-semibold text-gray-900">Filter by:</span>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <select 
                  value={selectedCategory}
                  onChange={(e) => handleCategoryChange(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Price Range</label>
                <select 
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="all">All Prices</option>
                  <option value="under-1000">Under $1,000</option>
                  <option value="1000-2000">$1,000 - $2,000</option>
                  <option value="2000-3000">$2,000 - $3,000</option>
                  <option value="over-3000">Over $3,000</option>
                </select>
              </div>
            </div>
            
            <div className="ml-auto text-gray-600">
              Showing {filteredBikes.length} of {bikes.length} bikes
            </div>
          </div>
        </div>
      </section>

      {/* Bikes Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBikes.map((bike) => (
              <div key={bike.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img
                    data-strk-img-id={bike.imgId}
                    data-strk-img={`${bike.description} ${bike.name} bike`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={bike.name}
                    className="w-full h-48 object-cover"
                  />
                  {bike.originalPrice && (
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold">
                      Sale
                    </div>
                  )}
                  <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors">
                    <Heart className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-blue-600 uppercase tracking-wide">
                      {categories.find(c => c.id === bike.category)?.name}
                    </span>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600 ml-1">
                        {bike.rating} ({bike.reviews})
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{bike.name}</h3>
                  <p className="text-gray-700 text-sm mb-4">{bike.description}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {bike.features.slice(0, 3).map((feature, index) => (
                      <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                        {feature}
                      </span>
                    ))}
                    {bike.features.length > 3 && (
                      <span className="text-xs text-gray-500">+{bike.features.length - 3} more</span>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-blue-600">${bike.price.toLocaleString()}</span>
                      {bike.originalPrice && (
                        <span className="text-lg text-gray-500 line-through">${bike.originalPrice.toLocaleString()}</span>
                      )}
                    </div>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredBikes.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No bikes found matching your criteria.</p>
              <p className="text-gray-500 mt-2">Try adjusting your filters to see more options.</p>
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Buy From CycleLife?
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              When you choose CycleLife, you're not just buying a bike – you're investing in quality, service, and expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingCart className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Free Assembly</h3>
              <p className="text-gray-700">
                Every bike comes professionally assembled and tuned by our expert mechanics at no extra cost.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">30-Day Guarantee</h3>
              <p className="text-gray-700">
                Not completely satisfied? Return your bike within 30 days for a full refund or exchange.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Lifetime Support</h3>
              <p className="text-gray-700">
                Get ongoing support, maintenance tips, and priority service for the life of your bike.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Bikes