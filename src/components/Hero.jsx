import React from 'react'
import { ChefHat, Star, Heart } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-rose-50 to-orange-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-pink-200 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-rose-200 rounded-full opacity-40 animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-20 w-24 h-24 bg-orange-200 rounded-full opacity-25 animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-10 w-12 h-12 bg-pink-300 rounded-full opacity-35 animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Logo/Brand */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-full p-6 shadow-2xl border-4 border-pink-200">
            <ChefHat className="w-16 h-16 text-pink-600" />
          </div>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 leading-tight">
          Sweet Dreams
          <span className="block text-pink-600 text-4xl md:text-6xl mt-2">
            Cake Shop
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Handcrafted with love, baked to perfection. Creating magical moments 
          one cake at a time since 2015.
        </p>

        {/* Features */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <div className="flex items-center bg-white px-6 py-3 rounded-full shadow-lg border border-pink-100">
            <Star className="w-5 h-5 text-yellow-500 mr-2" />
            <span className="text-gray-700 font-medium">Premium Quality</span>
          </div>
          <div className="flex items-center bg-white px-6 py-3 rounded-full shadow-lg border border-pink-100">
            <Heart className="w-5 h-5 text-red-500 mr-2" />
            <span className="text-gray-700 font-medium">Made with Love</span>
          </div>
          <div className="flex items-center bg-white px-6 py-3 rounded-full shadow-lg border border-pink-100">
            <ChefHat className="w-5 h-5 text-pink-600 mr-2" />
            <span className="text-gray-700 font-medium">Expert Bakers</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg transform hover:scale-105 transition-all duration-200">
            Order Now
          </button>
          <button className="bg-white hover:bg-gray-50 text-pink-600 px-8 py-4 rounded-full text-lg font-semibold shadow-lg border-2 border-pink-600 transform hover:scale-105 transition-all duration-200">
            View Menu
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-pink-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-pink-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero