import { Link } from 'react-router-dom'
import Button from '@/components/ui/Button'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-velmora-espresso text-velmora-porcelain">
      <div
        className="velmora-hero-fallback absolute inset-0 bg-cover bg-center opacity-70"
        role="img"
        aria-label="Warm editorial gold jewelry close-up"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-velmora-espresso/35 via-velmora-espresso/35 to-velmora-espresso/80" />
      <div className="relative mx-auto flex min-h-screen max-w-7xl items-end px-5 pb-20 pt-32 sm:px-8 md:pb-28">
        <div className="max-w-3xl animate-fade-up">
          <p className="text-xs font-semibold uppercase tracking-luxury text-velmora-champagne">Demi-fine gold jewelry</p>
          <h1 id="hero-title" className="mt-5 font-serif text-6xl font-medium leading-[0.92] text-velmora-porcelain sm:text-7xl md:text-8xl">
            Crafted to be Treasured
          </h1>
          <p id="hero-subtitle" className="mt-7 max-w-xl text-base leading-8 text-velmora-porcelain/85 md:text-lg">
            Warm, luminous pieces for everyday rituals, modern gifting, and the moments you want to remember.
          </p>
          <Button asChild variant="accent" className="mt-9">
            <Link to="/shop">Shop the Collection</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
