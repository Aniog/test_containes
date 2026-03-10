import React from 'react'
import { ChevronDown, Star, Award } from 'lucide-react'

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-slate-800/30 to-emerald-900/20"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-emerald-200/20 rounded-full blur-xl"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-slate-700 mb-8 shadow-lg">
          <Award className="w-4 h-4 text-blue-600" />
          Authentic Jingdezhen Craftsmanship
        </div>
        
        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
          Exquisite
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
            Jingdezhen
          </span>
          Teacups
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Discover the timeless beauty of porcelain artistry from China's ancient ceramic capital. 
          Each teacup tells a story of thousand-year-old traditions and masterful craftsmanship.
        </p>
        
        {/* Features */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm">
            <Star className="w-5 h-5 text-yellow-500" />
            <span className="text-slate-700 font-medium">Hand-crafted Excellence</span>
          </div>
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm">
            <Star className="w-5 h-5 text-yellow-500" />
            <span className="text-slate-700 font-medium">1000+ Years Heritage</span>
          </div>
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm">
            <Star className="w-5 h-5 text-yellow-500" />
            <span className="text-slate-700 font-medium">Master Artisans</span>
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
            Explore Collection
          </button>
          <button className="bg-white/90 backdrop-blur-sm hover:bg-white text-slate-700 px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-slate-200">
            Learn Our Story
          </button>
        </div>
        
        {/* Scroll indicator */}
        <div className="animate-bounce">
          <ChevronDown className="w-8 h-8 text-slate-400 mx-auto" />
        </div>
      </div>
      
      {/* Decorative teacup silhouettes */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white/50 to-transparent"></div>
    </section>
  )
}

export default HeroSection