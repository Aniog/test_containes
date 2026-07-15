import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

export default function HeroSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      // Image loading would happen here if using strk-img
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <section ref={containerRef} className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundColor: '#2C2420' }}
      />
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <p id="hero-subtitle" className="text-white/80 text-xs md:text-sm uppercase tracking-[0.3em] mb-6 animate-fade-up">
          Demi-Fine Gold Jewelry
        </p>
        <h1 id="hero-title" className="serif-heading text-4xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight animate-fade-up delay-200">
          Crafted to be<br />Treasured
        </h1>
        <p className="text-white/70 text-base md:text-lg mb-10 max-w-lg mx-auto font-light animate-fade-up delay-300">
          Timeless pieces designed for the modern woman. 18K gold plated, hypoallergenic, made to last.
        </p>
        <Link
          to="/shop"
          className="inline-block bg-accent text-white px-10 py-4 text-sm uppercase tracking-widest font-medium transition-all duration-300 hover:bg-[#996F0A] hover:shadow-xl animate-fade-up delay-400"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-px h-12 bg-white/40" />
      </div>
    </section>
  )
}
