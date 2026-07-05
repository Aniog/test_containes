import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ChevronDown } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[640px] max-h-[900px] w-full overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-velmora-espresso strk-placeholder"
        data-strk-bg-id="hero-main-bg"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />
      </div>

      {/* Text content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <p className="text-velmora-cream/80 uppercase tracking-[0.25em] text-xs md:text-sm mb-4 md:mb-6">
          Demi-Fine Gold Jewelry
        </p>
        <h1
          id="hero-title"
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-velmora-cream max-w-4xl leading-[0.95] mb-6"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="text-velmora-cream/80 text-base md:text-lg max-w-xl mb-8 md:mb-10 font-light"
        >
          Timeless gold pieces for everyday rituals and forever moments.
        </p>
        <Button
          asChild
          className="bg-velmora-gold hover:bg-velmora-goldDark text-white rounded-none h-12 px-10 uppercase tracking-[0.2em] text-xs font-medium transition-all duration-300"
        >
          <Link to="/shop">Shop the Collection</Link>
        </Button>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-velmora-cream/60 animate-bounce">
        <ChevronDown size={24} strokeWidth={1} />
      </div>
    </section>
  )
}
