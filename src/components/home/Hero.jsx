import { Link } from 'react-router-dom'
import { StrkBg } from '@/components/StrkImage'
import { useImageLoader } from '@/hooks/useImageLoader'

export default function Hero() {
  const containerRef = useImageLoader([])
  return (
    <section ref={containerRef} className="relative h-screen min-h-[640px] w-full overflow-hidden">
      <StrkBg
        bgId="hero-bg-velmora-1a2b"
        query="[hero-subtitle] [hero-title]"
        ratio="16x9"
        width={1920}
        className="absolute inset-0 w-full h-full bg-ink"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/20 to-ink/60" />
      </StrkBg>

      <div className="relative h-full max-w-8xl mx-auto px-6 md:px-10 flex flex-col justify-end pb-24 md:pb-32">
        <div className="max-w-2xl fade-up">
          <p className="text-xs uppercase tracking-widest2 text-gold-light mb-5">
            Demi-Fine Gold Jewelry
          </p>
          <h1
            id="hero-title"
            className="font-serif text-5xl md:text-7xl lg:text-8xl text-ivory leading-[1.05] font-light"
          >
            Crafted to be
            <br />
            <span className="italic">Treasured</span>
          </h1>
          <p
            id="hero-subtitle"
            className="mt-6 text-base md:text-lg text-muted-dark max-w-md leading-relaxed"
          >
            Hand-finished 18K gold plated pieces, designed in studio and made to
            be worn every single day.
          </p>
          <Link
            to="/shop"
            className="inline-block mt-8 bg-gold text-ink text-xs uppercase tracking-widest2 font-semibold px-10 py-4 hover:bg-ivory transition-colors"
          >
            Shop the Collection
          </Link>
        </div>
      </div>
    </section>
  )
}
