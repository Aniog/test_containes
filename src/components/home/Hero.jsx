import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/Button'
import { useImageLoader } from '@/hooks/useImageLoader'

export default function Hero() {
  const containerRef = useImageLoader()

  return (
    <section ref={containerRef} className="relative h-[100svh] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-foreground/30"
        data-strk-bg-id="hero-bg-velmora"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/20 to-foreground/50" />

      <div className="relative flex h-full flex-col items-center justify-center px-4 text-center text-white">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-white/80">
          Demi-Fine Gold Jewelry
        </p>
        <h1
          id="hero-title"
          className="max-w-4xl font-serif text-5xl leading-[1.1] sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Crafted to be Treasured
        </h1>
        <p id="hero-subtitle" className="mt-6 max-w-md text-base leading-relaxed text-white/90 sm:text-lg">
          Quietly luxurious pieces for everyday moments and forever memories.
        </p>
        <Button asChild className="mt-10 min-w-[220px] bg-accent text-white hover:bg-accent/90" size="lg">
          <Link to="/shop">Shop the Collection</Link>
        </Button>
      </div>
    </section>
  )
}
