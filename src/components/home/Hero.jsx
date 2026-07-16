import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-velmora-01"
        data-strk-bg="[hero-subtitle] [hero-title] warm lit close up gold jewelry worn on model editorial"
        data-strk-bg-ratio="9x16"
        data-strk-bg-width="1600"
      />
      {/* Warm overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/20 to-ink/60" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-5 text-center md:px-8">
        <p className="fade-up text-[11px] uppercase tracking-widest2 text-ivory/80">
          Velmora Fine Jewelry
        </p>
        <h1
          id="hero-title"
          className="fade-up mt-5 font-serif text-5xl leading-[1.05] text-ivory sm:text-6xl md:text-7xl lg:text-8xl"
          style={{ animationDelay: '80ms' }}
        >
          Crafted to be
          <br />
          <span className="italic text-champagne">Treasured</span>
        </h1>
        <p
          id="hero-subtitle"
          className="fade-up mt-6 max-w-md text-sm leading-relaxed text-ivory/85 md:text-base"
          style={{ animationDelay: '160ms' }}
        >
          Demi-fine gold jewelry, designed in studio and made to be worn every day.
          Quietly luxurious, endlessly wearable.
        </p>
        <div className="fade-up mt-9" style={{ animationDelay: '240ms' }}>
          <Button as={Link} to="/shop" size="lg">
            Shop the Collection
            <ArrowRight size={15} strokeWidth={1.5} className="ml-2" />
          </Button>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-ivory/50 p-1.5">
          <span className="h-2 w-px animate-bounce bg-ivory/70" />
        </div>
      </div>
    </section>
  )
}
