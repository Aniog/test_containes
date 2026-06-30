import { Link } from 'react-router-dom'
import { StrkBg } from '@/components/Image'

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px]">
      <StrkBg
        id="hero-bg"
        query="warm lit close up gold jewelry on woman neck ear editorial demi fine jewelry"
        ratio="16x9"
        width={1600}
        className="absolute inset-0 w-full h-full bg-velmora-ink"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-velmora-ink/30 via-velmora-ink/20 to-velmora-ink/50" />
      </StrkBg>

      <div className="relative h-full flex items-center justify-center text-center px-4">
        <div className="max-w-2xl">
          <p className="font-sans text-xs md:text-sm uppercase tracking-[0.2em] text-white/80 mb-4 md:mb-6">
            Demi-Fine Gold Jewelry
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-[1.05] mb-6">
            Crafted to be Treasured
          </h1>
          <p className="font-sans text-sm md:text-base text-white/80 max-w-md mx-auto mb-8 md:mb-10 font-light">
            Elegant pieces for everyday moments and forever keepsakes. Designed
            in 18k gold plate, made to last.
          </p>
          <Link
            to="/shop"
            className="inline-block bg-velmora-accent text-white px-10 py-4 uppercase tracking-[0.18em] text-xs font-sans font-medium hover:bg-velmora-accent-hover transition-colors duration-300"
          >
            Shop the Collection
          </Link>
        </div>
      </div>
    </section>
  )
}
