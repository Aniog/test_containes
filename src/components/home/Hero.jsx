import { Link } from 'react-router-dom'
import { StrkBg, StrkImageContainer } from '@/components/ui/StrkImage'

export default function Hero() {
  return (
    <StrkImageContainer
      as="section"
      deps={[]}
      className="relative h-screen min-h-[640px] w-full overflow-hidden"
    >
      <StrkBg
        bgId="hero-bg-velmora-7f3a9c"
        query="[hero-subtitle] [hero-title] warm lit gold jewelry on model editorial"
        ratio="16x9"
        width={1920}
        className="absolute inset-0 bg-cover bg-center"
      />
      {/* warm overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/20 to-ink/60" />

      <div className="relative h-full max-w-7xl mx-auto px-5 md:px-8 flex flex-col justify-end pb-24 md:pb-28">
        <div className="max-w-2xl animate-fade-up">
          <p className="text-cream/80 text-[11px] uppercase tracking-widest2 mb-5">
            Demi-Fine Gold Jewelry
          </p>
          <h1
            id="hero-title"
            className="font-serif text-cream text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-wide"
          >
            Crafted to be
            <br />
            Treasured
          </h1>
          <p
            id="hero-subtitle"
            className="mt-6 text-cream/85 text-base md:text-lg max-w-md leading-relaxed font-light"
          >
            Warm-lit gold, made for everyday heirlooms. Earrings, necklaces and
            huggies designed to be worn and re-worn.
          </p>
          <Link
            to="/shop"
            className="inline-block mt-9 bg-gold text-cream px-10 py-4 text-[11px] uppercase tracking-widest2 hover:bg-gold-deep transition-colors"
          >
            Shop the Collection
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
        <div className="w-px h-12 bg-cream/50" />
      </div>
    </StrkImageContainer>
  )
}
