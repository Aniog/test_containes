import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/Button'
import { BackgroundImage } from '@/components/ui/BackgroundImage'

export default function Hero() {
  return (
    <section className="relative h-[85vh] min-h-[600px] w-full">
      <BackgroundImage
        bgId="hero-bg-velmora"
        query="[hero-subtitle] [hero-title]"
        ratio="16x9"
        width="1600"
        className="absolute inset-0 h-full w-full"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-velmora-charcoal/30 via-velmora-charcoal/20 to-velmora-charcoal/40" />
      </BackgroundImage>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
        <p
          id="hero-subtitle"
          className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-white/90"
        >
          Demi-Fine Gold Jewelry
        </p>
        <h1
          id="hero-title"
          className="max-w-4xl font-serif text-5xl font-medium leading-[1.05] md:text-7xl lg:text-8xl"
        >
          Crafted to be Treasured
        </h1>
        <p className="mx-auto mt-6 max-w-md text-sm font-light leading-relaxed text-white/90 md:text-base">
          Timeless silhouettes in 18k gold plate. Designed for the everyday and
          the extraordinary.
        </p>
        <div className="mt-10">
          <Button asChild className="px-8 py-4">
            <Link to="/shop">Shop the Collection</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
