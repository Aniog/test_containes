import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { safeLoadImages } from '@/lib/imageLoader'


export default function Hero() {
  const containerRef = useRef(null)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    return safeLoadImages(containerRef.current)
  }, [])

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section ref={containerRef} className="relative h-screen min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden">
      {/* Background image with parallax */}
      <div
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        className="absolute inset-0 bg-brand-warm-black will-change-transform"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      />

      {/* Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60" />

      {/* Content */}
      <div className="relative z-10 text-center px-5 max-w-3xl mx-auto">
        <h1
          id="hero-title"
          className="font-serif text-display-lg md:text-[5rem] lg:text-[6.5rem] text-white leading-[1.05] tracking-wide"
          style={{ transform: `translateY(${scrollY * -0.08}px)`, opacity: Math.max(0, 1 - scrollY / 600) }}
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="mt-5 text-base md:text-lg text-white/80 font-light max-w-lg mx-auto leading-relaxed"
          style={{ transform: `translateY(${scrollY * -0.05}px)`, opacity: Math.max(0, 1 - scrollY / 500) }}
        >
          Demi-fine gold jewelry designed for the modern woman. Effortless elegance, every day.
        </p>
        <div style={{ opacity: Math.max(0, 1 - scrollY / 400) }}>
          <Link to="/shop" className="btn-accent mt-8 inline-flex">
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" style={{ opacity: Math.max(0, 1 - scrollY / 200) }}>
        <span className="text-[10px] tracking-[0.2em] uppercase text-white/50 font-sans">Scroll</span>
        <div className="scroll-line w-px h-8 bg-white/30" />
      </div>
    </section>
  )
}
