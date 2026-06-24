import React from 'react'

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      <div 
        className="absolute inset-0 z-0 opacity-60"
        data-strk-bg-id="hero-bg-micro-12a9c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-slate-950/60 to-slate-950" />
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 
          id="hero-title"
          className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 drop-shadow-lg"
        >
          A Journey Into The Invisible
        </h1>
        <p 
          id="hero-subtitle"
          className="text-xl md:text-2xl text-slate-300 font-light max-w-2xl mx-auto drop-shadow-md"
        >
          Explore the awe-inspiring microscopic world. Discover cellular structures, macro photography of tiny insects, and the hidden beauty of the microcosm.
        </p>
        
        <div className="mt-10">
          <a href="#discover" className="inline-block px-8 py-4 bg-emerald-500 text-slate-950 font-semibold rounded-full hover:bg-emerald-400 transition-colors">
            Start Exploring
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero;
