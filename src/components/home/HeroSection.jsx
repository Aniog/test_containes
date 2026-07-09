import { Link } from 'react-router-dom'
import { BgImage } from '@/components/common/ProductImage'

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] flex items-center">
      <BgImage imgId="velmora-hero-gold-jewelry-model" ratio="16x9" width={1600} />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-velmora-deep/60 via-velmora-deep/10 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 w-full">
        <div className="max-w-lg">
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-[1.08] tracking-tight">
            Crafted to be<br />Treasured
          </h1>
          <p className="mt-5 text-sm md:text-base text-white/80 font-sans leading-relaxed max-w-sm">
            Demi-fine gold jewelry designed for the modern woman — elevated essentials that move with you, from morning light to evening glow.
          </p>
          <Link
            to="/shop"
            className="mt-8 inline-block px-8 py-3.5 border border-white/60 text-white text-xs tracking-[0.2em] uppercase font-sans font-medium hover:bg-white hover:text-velmora-deep transition-all duration-300"
          >
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 animate-bounce">
        <span className="text-[9px] tracking-[0.2em] uppercase">Scroll</span>
        <div className="w-px h-8 bg-white/30" />
      </div>
    </section>
  )
}
