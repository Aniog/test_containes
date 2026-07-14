import { Link } from 'react-router-dom'
import { useStrkImages } from '@/hooks/useStrkImages'

export default function Hero() {
  const ref = useStrkImages([])

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[600px] w-full overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-velmora-7f3a"
        data-strk-bg="[hero-subtitle] [hero-title] gold jewelry worn by model warm editorial"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Warm overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-espresso/50 via-espresso/20 to-espresso/60" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-5 text-center">
        <h1
          id="hero-title"
          className="animate-fade-up font-serif text-5xl leading-[1.05] text-ivory sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Crafted to be
          <br />
          Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="animate-fade-up mt-6 max-w-xl text-sm leading-relaxed text-ivory/85 md:text-base"
          style={{ animationDelay: '0.15s' }}
        >
          Demi-fine gold jewelry, designed in studio and made to be worn every
          day. Quietly luxurious, endlessly wearable.
        </p>
        <Link
          to="/shop"
          className="animate-fade-up mt-9 bg-gold px-10 py-4 text-xs uppercase tracking-widest2 text-ivory transition-colors duration-300 hover:bg-gold-soft"
          style={{ animationDelay: '0.3s' }}
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-ivory/40 p-1.5">
          <div className="h-2 w-px animate-bounce bg-ivory/60" />
        </div>
      </div>
    </section>
  )
}
