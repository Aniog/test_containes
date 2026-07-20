import { Link } from 'react-router-dom'
import { StockBackground } from '@/components/StockImage'

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden">
      <StockBackground
        id="hero-bg-velmora"
        query="[hero-subtitle] [hero-title]"
        ratio="9x16"
        width={1600}
        className="absolute inset-0 h-full w-full bg-cover bg-center"
      />
      <div className="absolute inset-0 bg-velmora-ink/30" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-velmora-ivory">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-velmora-ivory/80">
          Demi-Fine Gold Jewelry
        </p>
        <h1
          id="hero-title"
          className="max-w-4xl font-serif text-5xl font-medium leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="mx-auto mt-6 max-w-xl text-base font-light leading-relaxed text-velmora-ivory/90 sm:text-lg"
        >
          Timeless gold-plated pieces designed for everyday luxury — elegant enough to gift,
          personal enough to keep.
        </p>
        <Link
          to="/shop"
          className="mt-10 inline-flex items-center rounded-full bg-velmora-ivory px-8 py-4 text-xs font-semibold uppercase tracking-widest text-velmora-ink transition hover:bg-velmora-stone"
        >
          Shop the Collection
        </Link>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 animate-bounce md:block">
        <span className="block h-12 w-px bg-velmora-ivory/50" />
      </div>
    </section>
  )
}
