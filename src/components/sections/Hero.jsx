import React from 'react'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image using STRK system */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center object-cover opacity-60"
          data-strk-bg-id="hero-bg-micro-1"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
        <h1 id="hero-title" className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-white drop-shadow-lg">
          MicroCosmos
        </h1>
        <p id="hero-subtitle" className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl text-shadow">
          A magnificent universe of microscopic life, cellular structures, and atomic scale wonders hidden right beneath our eyes.
        </p>
        <button 
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-xl hover:shadow-primary/50 flex items-center gap-2"
        >
          Explore the Unseen
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </button>
      </div>
    </section>
  )
}
