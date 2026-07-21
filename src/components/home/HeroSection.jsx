import { Link } from 'react-router-dom'
import { useImageLoader } from '@/hooks/useImageLoader'
import { ResponsiveBackground } from '@/components/ui/ResponsiveImage'

export function HeroSection() {
  const containerRef = useImageLoader([])

  return (
    <section ref={containerRef} className="relative h-[92vh] min-h-[600px] w-full overflow-hidden">
      <ResponsiveBackground
        bgId="hero-bg-velmora"
        query="[hero-subtitle] [hero-title]"
        ratio="9x16"
        width={1600}
        className="absolute inset-0 h-full w-full bg-cream-dark"
      >
        <div className="absolute inset-0 bg-espresso/35" />
      </ResponsiveBackground>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-cream-light">
        <p
          id="hero-subtitle"
          className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-champagne"
        >
          Demi-Fine Gold Jewelry
        </p>
        <h1
          id="hero-title"
          className="max-w-3xl font-serif text-5xl leading-[1.05] tracking-wide sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Crafted to be Treasured
        </h1>
        <p className="mx-auto mt-6 max-w-md text-base font-light leading-relaxed text-cream-light/90 sm:text-lg">
          Timeless silhouettes in 18K gold-plated and sterling silver — designed for everyday luxury.
        </p>
        <Link
          to="/shop"
          className="mt-8 bg-gold px-8 py-4 text-xs font-medium uppercase tracking-[0.18em] text-cream-light transition-all duration-300 hover:bg-gold-light hover:shadow-glow"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  )
}
