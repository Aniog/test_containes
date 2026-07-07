import { Link } from 'react-router-dom'
import { StockBackground } from '@/components/ui/StockImage'

export function Hero() {
  return (
    <section className="relative h-[100dvh] min-h-[600px]">
      <StockBackground
        id="hero-bg-velmora"
        query="[hero-subtitle] [hero-title]"
        ratio="9x16"
        width="1600"
        className="absolute inset-0 h-full w-full bg-[#2A211C]"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1614]/50 via-[#1A1614]/20 to-[#1A1614]/60" />
      </StockBackground>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-[#F9F7F2]">
        <p className="mb-5 font-sans text-xs font-medium uppercase tracking-[0.2em] text-[#B9975B]">
          New Collection
        </p>
        <h1
          id="hero-title"
          className="max-w-4xl font-serif text-5xl font-light leading-[1.1] tracking-wide sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="mx-auto mt-6 max-w-xl font-sans text-base font-light leading-relaxed text-[#F9F7F2]/90 md:text-lg"
        >
          Demi-fine jewelry for the moments that matter — designed for everyday
          elegance and made to last.
        </p>
        <Link
          to="/shop"
          className="mt-10 bg-[#B9975B] px-10 py-4 font-sans text-xs font-medium uppercase tracking-[0.16em] text-white transition-colors duration-300 hover:bg-[#A8864D]"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  )
}
