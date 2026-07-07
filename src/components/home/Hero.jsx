import { Link } from 'react-router-dom'
import { useImageLoader } from '@/hooks/useImageLoader'
import { Button } from '@/components/ui/Button'

export function Hero() {
  const containerRef = useImageLoader()

  return (
    <section ref={containerRef} className="relative h-screen min-h-[600px] max-h-[900px] w-full overflow-hidden">
      <div
        data-strk-bg-id="hero-bg-velmora"
        data-strk-bg="[hero-headline] [hero-subheadline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        className="absolute inset-0 bg-velmora-dark"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-velmora-dark/40 via-velmora-dark/20 to-velmora-dark/60" />
      </div>

      <div className="relative h-full max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12 flex flex-col items-center justify-center text-center text-velmora-cream">
        <p className="font-sans text-xs md:text-sm tracking-[0.25em] uppercase text-velmora-gold mb-5 animate-fadeIn">
          Demi-Fine Jewelry
        </p>
        <h1
          id="hero-headline"
          className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-6 animate-fadeIn"
          style={{ animationDelay: '120ms' }}
        >
          Crafted to be<br />Treasured
        </h1>
        <p
          id="hero-subheadline"
          className="font-sans text-base md:text-lg text-velmora-warm/90 max-w-xl mb-10 leading-relaxed animate-fadeIn"
          style={{ animationDelay: '240ms' }}
        >
          Timeless gold-plated pieces designed for everyday elegance and the moments worth remembering.
        </p>
        <div className="animate-fadeIn" style={{ animationDelay: '360ms' }}>
          <Link to="/shop">
            <Button size="lg" variant="solid">
              Shop the Collection
            </Button>
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-velmora-cream/50 to-velmora-cream/50" />
      </div>
    </section>
  )
}
