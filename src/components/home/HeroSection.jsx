import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-900/90 via-amber-800/80 to-amber-950/95" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(212,188,140,0.15),transparent_70%)]" />

      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-5 mix-blend-overlay">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 30%, rgba(255,255,255,0.3) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <p className="text-white/50 text-xs tracking-[0.3em] uppercase mb-6 font-sans font-light animate-in fade-in duration-700">
          Demi-Fine Gold Jewelry
        </p>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white font-medium mb-6 max-w-3xl leading-[1.15] tracking-tight animate-in fade-in slide-in-from-bottom-4 duration-700">
          Crafted to be <br className="hidden md:block" />
          Treasured
        </h1>
        <p className="text-white/60 text-sm md:text-base max-w-lg mb-10 font-light animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
          Premium gold jewelry designed for everyday elegance — from the
          gifting moment to the daily ritual.
        </p>
        <Link
          to="/shop"
          className="btn-accent group animate-in fade-in slide-in-from-bottom-12 duration-700 delay-150"
        >
          Shop the Collection
          <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent animate-pulse" />
      </div>
    </section>
  )
}