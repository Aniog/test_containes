import React from 'react'

const Hero = () => {
  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-slate-900"
        data-strk-bg-id="hero-bg-micro-01"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 z-10 bg-slate-950/60 mix-blend-multiply" />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-slate-950/90" />
      
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <h1 id="hero-title" className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-slate-50 drop-shadow-lg">
          Explore the <span className="text-cyan-400">MicroCosmos</span>
        </h1>
        <p id="hero-subtitle" className="text-xl md:text-2xl text-slate-200 mb-8 max-w-2xl mx-auto drop-shadow-md">
          A microscopic journey into the hidden structures, cellular biology, and quantum textures that make up our universe.
        </p>
        <button className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold py-3 px-8 rounded-full transition-colors duration-300">
          Begin Journey
        </button>
      </div>
    </section>
  )
}

export default Hero
