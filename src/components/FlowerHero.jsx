import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const FlowerHero = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        data-strk-bg-id="flower-hero-bg-3a7f2c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />

      {/* Floating glow decorations */}
      <div className="absolute top-16 left-10 w-16 h-16 rounded-full bg-pink-300/20 blur-xl" />
      <div className="absolute top-32 right-16 w-24 h-24 rounded-full bg-rose-400/20 blur-2xl" />
      <div className="absolute bottom-24 left-20 w-20 h-20 rounded-full bg-fuchsia-300/20 blur-xl" />
      <div className="absolute bottom-16 right-12 w-28 h-28 rounded-full bg-pink-200/20 blur-2xl" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Eyebrow label */}
        <span className="inline-block text-pink-200 text-sm font-medium tracking-[0.25em] uppercase mb-6 px-4 py-1.5 border border-pink-200/40 rounded-full backdrop-blur-sm bg-white/5">
          Nature's Finest
        </span>

        {/* Main heading */}
        <h1
          id="hero-title"
          className="text-5xl md:text-7xl lg:text-8xl font-light text-white mb-6 leading-tight tracking-tight"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Where Every
          <span className="block italic text-pink-200 font-normal">Petal Tells</span>
          a Story
        </h1>

        {/* Subtitle */}
        <p
          id="hero-subtitle"
          className="text-lg md:text-xl text-white/80 max-w-xl mx-auto mb-10 leading-relaxed font-light"
        >
          Discover the timeless beauty of blooms — from delicate wildflowers to
          lush garden roses, each flower a masterpiece of nature.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="px-8 py-3.5 bg-pink-400 hover:bg-pink-300 text-white font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-pink-400/30 hover:-translate-y-0.5 text-sm tracking-wide">
            Explore Collection
          </button>
          <button className="px-8 py-3.5 border border-white/50 hover:border-white text-white font-medium rounded-full transition-all duration-300 hover:bg-white/10 backdrop-blur-sm text-sm tracking-wide">
            Learn More
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex flex-col items-center gap-2 text-white/50">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-white/50 to-transparent animate-pulse" />
        </div>
      </div>

      {/* Bottom flower image strip */}
      <div className="absolute bottom-0 left-0 right-0 h-48 overflow-hidden">
        <img
          alt="Beautiful flowers"
          className="w-full h-full object-cover object-top opacity-60"
          data-strk-img-id="flower-strip-9b4e1d"
          data-strk-img="[hero-subtitle] [hero-title] close-up colorful flowers bouquet"
          data-strk-img-ratio="16x9"
          data-strk-img-width="1600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
    </section>
  )
}

export default FlowerHero
