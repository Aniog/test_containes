import React from 'react'
import { Star, Heart, Award } from 'lucide-react'

const FeaturedCakes = () => {
  const cakes = [
    {
      id: 1,
      name: "Chocolate Dream",
      description: "Rich chocolate layers with creamy ganache and fresh berries",
      price: "$45",
      image: "🍫",
      rating: 5,
      popular: true
    },
    {
      id: 2,
      name: "Vanilla Rose",
      description: "Delicate vanilla sponge with rose buttercream and edible flowers",
      price: "$38",
      image: "🌹",
      rating: 5,
      popular: false
    },
    {
      id: 3,
      name: "Red Velvet Classic",
      description: "Traditional red velvet with cream cheese frosting",
      price: "$42",
      image: "❤️",
      rating: 5,
      popular: true
    },
    {
      id: 4,
      name: "Lemon Sunshine",
      description: "Zesty lemon cake with lemon curd and meringue topping",
      price: "$40",
      image: "🍋",
      rating: 4,
      popular: false
    },
    {
      id: 5,
      name: "Strawberry Delight",
      description: "Fresh strawberry layers with whipped cream and berry compote",
      price: "$44",
      image: "🍓",
      rating: 5,
      popular: true
    },
    {
      id: 6,
      name: "Caramel Heaven",
      description: "Salted caramel cake with caramel drizzle and toasted nuts",
      price: "$46",
      image: "🍯",
      rating: 5,
      popular: false
    }
  ]

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ))
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Featured Cakes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our most beloved creations, each one crafted with premium ingredients 
            and decorated with artistic flair.
          </p>
          <div className="w-24 h-1 bg-pink-600 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Cakes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cakes.map((cake) => (
            <div
              key={cake.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden group"
            >
              {/* Popular Badge */}
              {cake.popular && (
                <div className="absolute top-4 left-4 z-10">
                  <div className="bg-pink-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                    <Award className="w-4 h-4 mr-1" />
                    Popular
                  </div>
                </div>
              )}

              {/* Cake Image/Emoji */}
              <div className="relative h-48 bg-gradient-to-br from-pink-50 to-rose-100 flex items-center justify-center">
                <div className="text-8xl group-hover:scale-110 transition-transform duration-300">
                  {cake.image}
                </div>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </div>

              {/* Cake Details */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-pink-600 transition-colors">
                    {cake.name}
                  </h3>
                  <span className="text-2xl font-bold text-pink-600">
                    {cake.price}
                  </span>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {cake.description}
                </p>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  <div className="flex mr-2">
                    {renderStars(cake.rating)}
                  </div>
                  <span className="text-sm text-gray-500">
                    ({cake.rating}.0)
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button className="flex-1 bg-pink-600 hover:bg-pink-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
                    <Heart className="w-4 h-4 mr-2" />
                    Order Now
                  </button>
                  <button className="px-4 py-3 border-2 border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white rounded-lg font-semibold transition-all duration-200">
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg transform hover:scale-105 transition-all duration-200">
            View All Cakes
          </button>
        </div>
      </div>
    </section>
  )
}

export default FeaturedCakes