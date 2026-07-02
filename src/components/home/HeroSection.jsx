import { Link } from 'react-router-dom'
import StrkImage from '@/components/ui/StrkImage'

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden bg-[#1A1512]">
      <StrkImage
        img={false}
        id="hero-bg-velmora"
        query="[hero-title] [hero-subtitle] gold jewelry on model warm light editorial"
        ratio="16x9"
        width="1600"
        className="absolute inset-0 h-full w-full bg-cover bg-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#1A1512]/40 via-[#1A1512]/20 to-[#1A1512]/60" />

      <div className="relative flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-[#C49A6C]">
              Demi-Fine Gold Jewelry
            </p>
            <h1
              id="hero-title"
              className="font-serif text-5xl font-light leading-[1.05] tracking-wide text-[#F6F3EF] sm:text-6xl md:text-7xl lg:text-8xl"
            >
              Crafted to be Treasured
            </h1>
            <p
              id="hero-subtitle"
              className="mt-6 max-w-md text-base leading-relaxed text-[#F6F3EF]/90 md:text-lg"
            >
              Timeless pieces for everyday moments and forever keepsakes. Designed for the woman who wears her light quietly.
            </p>
            <div className="mt-10">
              <Link
                to="/shop"
                className="inline-block bg-[#C49A6C] px-10 py-4 text-xs font-medium uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:bg-[#A67C52]"
              >
                Shop the Collection
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
