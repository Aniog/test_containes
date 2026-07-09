import { Link } from 'react-router-dom'
import { useStrkImages, PLACEHOLDER } from '@/hooks/useStrkImages'

export default function Hero() {
  const ref = useStrkImages([])

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[600px] w-full overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-7f3a2c"
        data-strk-bg="[hero-subtitle] [hero-title] gold jewelry worn on model warm light"
        data-strk-bg-ratio="9x16"
        data-strk-bg-width="1600"
      />
      {/* Warm overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-espresso/50 via-espresso/20 to-espresso/60" />

      <div className="relative h-full max-w-7xl mx-auto px-5 md:px-8 flex flex-col justify-end pb-24 md:pb-32">
        <div className="max-w-2xl">
          <p className="text-ivory/80 text-xs uppercase tracking-[0.3em] mb-5 fade-up">
            Demi-Fine Gold Jewelry
          </p>
          <h1
            id="hero-title"
            className="font-serif text-ivory text-5xl md:text-7xl lg:text-8xl leading-[1.05] font-light fade-up"
            style={{ animationDelay: '0.1s' }}
          >
            Crafted to be
            <br />
            Treasured
          </h1>
          <p
            id="hero-subtitle"
            className="text-ivory/85 text-base md:text-lg mt-6 max-w-md leading-relaxed fade-up"
            style={{ animationDelay: '0.2s' }}
          >
            Warm, wearable gold — designed in studio and made to be lived in.
            Earrings, necklaces, and huggies for the everyday and the unforgettable.
          </p>
          <div className="mt-9 fade-up" style={{ animationDelay: '0.3s' }}>
            <Link
              to="/shop"
              className="inline-block bg-gold text-ivory text-xs uppercase tracking-[0.2em] px-10 py-4 hover:bg-gold-deep transition-colors duration-300"
            >
              Shop the Collection
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
