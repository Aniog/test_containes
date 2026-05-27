import React from 'react'

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-microcosmos"
        data-strk-bg="[hero-title] [hero-subtitle] microscopic forest ecosystem"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 id="hero-title" className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          MicroCosmos
        </h1>
        <p id="hero-subtitle" className="text-xl md:text-2xl mb-8 font-light leading-relaxed">
          Discover the Hidden Universe Within Trees
        </p>
        <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto opacity-90">
          Journey into the microscopic world where every leaf, bark, and root reveals 
          an intricate ecosystem teeming with life, beauty, and wonder.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-golden-amber hover:bg-golden-amber/90 text-dark-charcoal px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg">
            Explore the Microcosmos
          </button>
          <button className="border-2 border-white text-white hover:bg-white hover:text-dark-charcoal px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105">
            Learn More
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}

export default HeroSection