import { Link } from 'react-router-dom'
import useImageLoader from '@/hooks/useImageLoader'

export default function HeroSection() {
  const containerRef = useImageLoader([])

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-charcoal-900"
    >
      {/* Background image */}
      <div
        data-strk-bg-id="hero-bg-velmora-1"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        className="absolute inset-0 bg-cover bg-center opacity-80"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900/30 via-charcoal-900/20 to-charcoal-900/60" />

      <div className="relative z-10 mx-auto max-w-3xl px-5 text-center text-cream-100">
        <p className="label-uppercase mb-5 text-cream-200/80">Demi-Fine Jewelry</p>
        <h1
          id="hero-title"
          className="heading-display text-5xl font-light leading-[1.05] md:text-7xl lg:text-8xl"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-cream-200/90 md:text-lg"
        >
          Timeless 18k gold-plated pieces designed for everyday elegance —
          made for you, and meant to last.
        </p>
        <Link
          to="/shop"
          className="mt-9 inline-block bg-gold-600 px-9 py-4 text-xs font-medium uppercase tracking-[0.2em] text-charcoal-900 transition-colors hover:bg-gold-500"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="h-10 w-[1px] bg-gradient-to-b from-transparent via-cream-100/60 to-cream-100/20" />
      </div>
    </section>
  )
}
