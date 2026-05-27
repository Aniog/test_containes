import React from 'react'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-microcosmos"
        data-strk-bg="[hero-title] [hero-subtitle] microscopic world forest ecosystem"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/40 via-emerald-800/30 to-emerald-700/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <h1 
          id="hero-title" 
          className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white mb-6 leading-tight"
        >
          MicroCosmos
        </h1>
        
        <p 
          id="hero-subtitle" 
          className="text-xl md:text-2xl lg:text-3xl text-emerald-100 mb-8 max-w-4xl mx-auto leading-relaxed"
        >
          Discover the hidden universe within trees - where microscopic worlds reveal extraordinary beauty and complex ecosystems
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
            Explore the Microscopic World
          </button>
          <button className="border-2 border-white text-white hover:bg-white hover:text-emerald-800 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105">
            Learn About Tree Ecosystems
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-emerald-400 rounded-full opacity-70 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-amber-400 rounded-full opacity-60 animate-pulse delay-1000"></div>
      <div className="absolute bottom-40 left-20 w-3 h-3 bg-emerald-300 rounded-full opacity-80 animate-pulse delay-2000"></div>
      <div className="absolute bottom-60 right-10 w-5 h-5 bg-amber-300 rounded-full opacity-50 animate-pulse delay-500"></div>
    </section>
  )
}