import { Link } from 'react-router-dom'
import Button from '@/components/ui/Button'

export default function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[600px] w-full overflow-hidden bg-ink">
      {/* Background image */}
      <div
        className="absolute inset-0 animate-slow-pan"
        data-strk-bg-id="hero-bg-velmora"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-ink/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-end pb-20 md:items-center md:pb-0">
        <div className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="max-w-xl text-warm-white">
            <p
              id="hero-subtitle"
              className="mb-4 text-xs uppercase tracking-[0.25em] text-white/80"
            >
              Demi-Fine Gold Jewelry
            </p>
            <h1
              id="hero-title"
              className="font-serif text-5xl leading-[1.05] md:text-7xl lg:text-8xl"
            >
              Crafted to be Treasured
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-white/80 md:text-lg">
              Earrings, necklaces, and huggies designed for everyday luxury.
              Made for you, and everyone you love.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button variant="primary" asChild>
                <Link to="/shop">Shop the Collection</Link>
              </Button>
              <Button variant="outlineLight" asChild>
                <Link to="/shop">Explore Bestsellers</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
