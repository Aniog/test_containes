import { Link } from 'react-router-dom'
import { StrkBg } from '@/components/StrkImage'
import { useStrkImages } from '@/components/StrkImage'

export default function HomeHero() {
  const ref = useStrkImages([])
  return (
    <section ref={ref} className="relative h-[100svh] min-h-[600px] w-full overflow-hidden">
      <StrkBg
        bgId="hero-bg-velmora-1a2b3c"
        query="[hero-subtitle] [hero-title]"
        ratio="16x9"
        width={1920}
        className="absolute inset-0"
      />
      {/* Warm overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-espresso/50 via-espresso/25 to-espresso/60" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-5 text-center">
        <p className="fade-up text-[11px] uppercase tracking-[0.35em] text-ivory/80">
          Demi-Fine Gold Jewelry
        </p>
        <h1
          id="hero-title"
          className="fade-up mt-5 font-serif text-5xl leading-[1.05] text-ivory sm:text-6xl md:text-7xl lg:text-8xl"
          style={{ animationDelay: '0.1s' }}
        >
          Crafted to be
          <br />
          <span className="italic">Treasured</span>
        </h1>
        <p
          id="hero-subtitle"
          className="fade-up mt-6 max-w-md text-sm leading-relaxed text-ivory/85 md:text-base"
          style={{ animationDelay: '0.2s' }}
        >
          Warm-lit, hand-finished gold jewelry made for everyday wear and the
          moments worth marking.
        </p>
        <div className="fade-up mt-9" style={{ animationDelay: '0.3s' }}>
          <Link
            to="/shop"
            className="inline-block bg-gold px-10 py-4 text-[11px] uppercase tracking-[0.25em] text-ivory transition-colors hover:bg-gold-deep"
          >
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-ivory/50 p-1.5">
          <span className="h-2 w-1 animate-bounce rounded-full bg-ivory/80" />
        </div>
      </div>
    </section>
  )
}
