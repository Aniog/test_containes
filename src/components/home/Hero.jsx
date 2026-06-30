import { Link } from 'react-router-dom'
import Button from '@/components/ui/Button'
import { useImageLoader } from '@/hooks/useImageLoader'

export default function Hero() {
  const containerRef = useImageLoader()

  return (
    <section ref={containerRef} className="relative h-[100svh] min-h-[600px] w-full">
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-velmora"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-velmora-base/40 via-velmora-base/20 to-velmora-base/70" />

      <div className="relative flex h-full flex-col items-center justify-center px-4 text-center">
        <p
          id="hero-subtitle"
          className="mb-4 font-sans text-xs uppercase tracking-[0.3em] text-velmora-gold"
        >
          Demi-Fine Gold Jewelry
        </p>
        <h1
          id="hero-title"
          className="max-w-3xl font-serif text-5xl leading-[1.1] tracking-wide text-velmora-ivory sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Crafted to be Treasured
        </h1>
        <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-velmora-ivory/80 sm:text-base">
          Timeless essentials designed for everyday luxury — earrings, necklaces,
          and huggies made to elevate every moment.
        </p>
        <div className="mt-10">
          <Link to="/shop">
            <Button size="lg">Shop the Collection</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
