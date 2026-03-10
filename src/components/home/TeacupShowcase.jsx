import React from 'react'
import { Star, Heart, ShoppingCart } from 'lucide-react'

const TeacupShowcase = () => {
  // Sample teacup data - in a real app this would come from an API
  const featuredTeacups = [
    {
      id: 1,
      name: "Blue and White Lotus",
      description: "Classic Ming dynasty inspired design with delicate lotus motifs",
      price: 89,
      image_url: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=400&fit=crop&crop=center",
      glaze_type: "Blue and White",
      capacity_ml: 120,
      artisan: "Master Chen Wei",
      is_featured: true,
      in_stock: true
    },
    {
      id: 2,
      name: "Celadon Dragon",
      description: "Elegant celadon glaze with subtle dragon relief patterns",
      price: 125,
      image_url: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop&crop=center",
      glaze_type: "Celadon",
      capacity_ml: 100,
      artisan: "Master Li Ming",
      is_featured: true,
      in_stock: true
    },
    {
      id: 3,
      name: "Famille Rose Peony",
      description: "Vibrant famille rose technique featuring blooming peonies",
      price: 156,
      image_url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&crop=center",
      glaze_type: "Famille Rose",
      capacity_ml: 110,
      artisan: "Master Wang Hui",
      is_featured: true,
      in_stock: false
    },
    {
      id: 4,
      name: "Imperial Yellow Phoenix",
      description: "Rare imperial yellow glaze with phoenix and cloud motifs",
      price: 245,
      image_url: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop&crop=center",
      glaze_type: "Imperial Yellow",
      capacity_ml: 130,
      artisan: "Master Zhang Lei",
      is_featured: true,
      in_stock: true
    },
    {
      id: 5,
      name: "Copper Red Bamboo",
      description: "Challenging copper red glaze with bamboo grove design",
      price: 198,
      image_url: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=400&fit=crop&crop=center",
      glaze_type: "Copper Red",
      capacity_ml: 115,
      artisan: "Master Liu Qiang",
      is_featured: true,
      in_stock: true
    },
    {
      id: 6,
      name: "Moonlight White Crane",
      description: "Pure white porcelain with graceful crane silhouettes",
      price: 134,
      image_url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&crop=center",
      glaze_type: "Pure White",
      capacity_ml: 105,
      artisan: "Master Zhao Mei",
      is_featured: true,
      in_stock: true
    }
  ]

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Featured Collection
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Each piece is meticulously crafted by master artisans using techniques 
            passed down through generations in Jingdezhen, the porcelain capital of the world.
          </p>
        </div>

        {/* Teacup Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredTeacups.map((teacup) => (
            <div key={teacup.id} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-100">
              {/* Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={teacup.image_url} 
                  alt={teacup.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {!teacup.in_stock && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <span className="bg-red-500 text-white px-4 py-2 rounded-full font-semibold">
                      Sold Out
                    </span>
                  </div>
                )}
                <button className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white">
                  <Heart className="w-5 h-5 text-slate-600 hover:text-red-500 transition-colors" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Glaze Type Badge */}
                <div className="inline-block bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium mb-3">
                  {teacup.glaze_type}
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2">{teacup.name}</h3>
                <p className="text-slate-600 mb-4 line-clamp-2">{teacup.description}</p>

                {/* Details */}
                <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                  <span>By {teacup.artisan}</span>
                  <span>{teacup.capacity_ml}ml</span>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-sm text-slate-500 ml-2">(4.9)</span>
                </div>

                {/* Price and Action */}
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-slate-900">
                    ${teacup.price}
                  </div>
                  <button 
                    disabled={!teacup.in_stock}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                      teacup.in_stock 
                        ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1' 
                        : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    <ShoppingCart className="w-4 h-4" />
                    {teacup.in_stock ? 'Add to Cart' : 'Sold Out'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-900 hover:to-black text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
            View Complete Collection
          </button>
        </div>
      </div>
    </section>
  )
}

export default TeacupShowcase