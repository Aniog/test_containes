import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useStrkImages } from '@/hooks/useStrkImages'
import { cn } from '@/lib/utils'

export function HeroSection() {
  const containerRef = useRef(null)
  useStrkImages(containerRef)

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-[85vh] items-center justify-center overflow-hidden"
    >
      <div
        data-strk-bg-id="hero-bg-velmora"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        className="absolute inset-0 bg-vel-base"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-vel-base/50 via-vel-base/30 to-vel-base/60" />

      <div className="container-vel relative z-10 text-center text-white">
        <p
          id="hero-subtitle"
          className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-white/80"
        >
          Demi-Fine Gold Jewelry
        </p>
        <h1
          id="hero-title"
          className="mx-auto max-w-4xl font-serif text-5xl font-light leading-[1.05] tracking-tight md:text-7xl lg:text-8xl"
        >
          Crafted to be Treasured
        </h1>
        <p className="mx-auto mt-6 max-w-lg text-base font-light leading-relaxed text-white/85 md:text-lg">
          Thoughtfully designed pieces for everyday luxury — made to glow on you,
          and last for years.
        </p>
        <div className="mt-10">
          <Link
            to="/shop"
            className={cn('btn-primary inline-block px-10 py-4 text-base')}
          >
            Shop the Collection
          </Link>
        </div>
      </div>
    </section>
  )
}
