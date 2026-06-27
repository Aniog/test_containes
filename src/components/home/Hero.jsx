import { Link } from 'react-router-dom'
import { useImageLoader } from '@/hooks/useImageLoader'

export default function Hero() {
  const containerRef = useImageLoader()

  return (
    <section ref={containerRef} className="relative h-[85vh] min-h-[520px] w-full overflow-hidden">
      <div
        data-strk-bg-id="hero-bg-velmora-main"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        className="absolute inset-0 bg-espresso"
      />
      <div className="absolute inset-0 bg-espresso/30" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6">
        <p
          id="hero-subtitle"
          className="text-cream/90 text-xs md:text-sm uppercase tracking-[0.2em] mb-4"
        >
          Demi-Fine Gold Jewelry
        </p>
        <h1
          id="hero-title"
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium text-cream leading-[1.05] max-w-4xl"
        >
          Crafted to be Treasured
        </h1>
        <p className="mt-5 text-cream/80 text-sm md:text-base max-w-lg font-light">
          Timeless designs for everyday luxury — made to layer, gift, and love
          for years.
        </p>
        <Link
          to="/shop"
          className="mt-8 inline-block bg-gold text-cream px-10 py-3.5 uppercase tracking-[0.14em] text-xs font-semibold hover:bg-gold-dark transition-colors duration-300"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  )
}
