import { Link } from 'react-router-dom'
import { useStrkImages } from '@/hooks/useStrkImages'

export default function Hero() {
  const containerRef = useStrkImages()

  return (
    <section ref={containerRef} className="relative h-[100svh] min-h-[600px] w-full overflow-hidden bg-espresso">
      <div
        data-strk-bg-id="velmora-hero-bg"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        className="absolute inset-0 bg-charcoal"
      />

      <div className="absolute inset-0 bg-espresso/30" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 sm:px-6">
        <p
          id="hero-subtitle"
          className="text-xs md:text-sm font-sans uppercase tracking-ui text-cream/80 mb-5 md:mb-6 animate-fade-up"
        >
          Demi-Fine Gold Jewelry
        </p>
        <h1
          id="hero-title"
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium text-cream leading-[0.95] max-w-4xl animate-fade-up"
          style={{ animationDelay: '100ms' }}
        >
          Crafted to be Treasured
        </h1>
        <p
          className="mt-5 md:mt-6 text-sm md:text-base font-light text-cream/85 max-w-md animate-fade-up"
          style={{ animationDelay: '200ms' }}
        >
          Elegant pieces for everyday moments and forever memories.
        </p>
        <Link
          to="/shop"
          className="mt-8 md:mt-10 inline-block px-8 py-4 bg-cream text-espresso uppercase text-xs tracking-ui font-medium hover:bg-gold hover:text-cream transition-all duration-300 animate-fade-up"
          style={{ animationDelay: '300ms' }}
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  )
}
