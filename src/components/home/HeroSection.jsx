import { Link } from 'react-router-dom'
import Button from '@/components/ui/Button'

const HeroSection = () => (
  <section className="relative -mt-20 min-h-[92vh] overflow-hidden bg-neutral-950 text-stone-50">
    <div
      className="absolute inset-0 opacity-90"
      data-strk-bg-id="velmora-hero-bg-a821de"
      data-strk-bg="[hero-subtitle] [hero-title]"
      data-strk-bg-ratio="16x9"
      data-strk-bg-width="1800"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/85 via-neutral-950/55 to-neutral-950/20" />
    <div className="relative page-shell flex min-h-[92vh] items-end py-24 sm:items-center sm:py-32">
      <div className="max-w-2xl">
        <p className="luxury-kicker text-stone-200">Demi-fine jewelry for everyday treasuring</p>
        <h1 id="hero-title" className="mt-6 max-w-xl font-serif text-5xl leading-none text-stone-50 sm:text-6xl lg:text-7xl">
          Crafted to be Treasured
        </h1>
        <p id="hero-subtitle" className="mt-6 max-w-lg text-base leading-8 text-stone-200 sm:text-lg">
          Quietly radiant earrings, necklaces, and huggies designed to feel like a gift — whether it is for someone else or simply for you.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link to="/shop">
            <Button variant="accent" size="lg" className="w-full sm:w-auto">
              Shop the Collection
            </Button>
          </Link>
          <Link to="/#story">
            <Button variant="outline" size="lg" className="w-full border-stone-300 text-stone-50 hover:border-stone-50 hover:bg-stone-50 hover:text-stone-900 sm:w-auto">
              Discover Velmora
            </Button>
          </Link>
        </div>
      </div>
    </div>
  </section>
)

export default HeroSection
