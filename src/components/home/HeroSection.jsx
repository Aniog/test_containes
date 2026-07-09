import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from '@/components/ui/Button'

const HeroSection = () => (
  <section className="relative -mt-[76px] overflow-hidden bg-velmora-noir pt-[76px] text-velmora-ivory sm:-mt-[88px] sm:pt-[88px]">
    <div
      className="absolute inset-0"
      data-strk-bg-id="hero-bg-velmora-home"
      data-strk-bg="[hero-subtitle] [hero-title]"
      data-strk-bg-ratio="16x9"
      data-strk-bg-width="1800"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-velmora-noir via-velmora-noir/75 to-velmora-noir/20" />
    <div className="relative mx-auto flex min-h-[82vh] max-w-7xl items-end px-4 pb-16 pt-20 sm:px-6 sm:pb-20 lg:px-8">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-velmora-gold">
          Quiet luxury for every day
        </p>
        <h1
          id="hero-title"
          className="mt-5 font-display text-6xl leading-none sm:text-7xl lg:text-[6.25rem]"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="mt-6 max-w-xl text-sm leading-7 text-velmora-ivory/78 sm:text-base"
        >
          Discover warm-lit demi-fine gold jewelry made for gifting, self-purchase,
          and the small rituals that stay with you.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Link to="/shop">
            <Button className="w-full sm:w-auto">
              Shop the Collection
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link to="/about">
            <Button
              variant="secondary"
              className="w-full border-white/20 bg-white/10 text-velmora-ivory hover:bg-white/15 sm:w-auto"
            >
              Our Story
            </Button>
          </Link>
        </div>
      </div>
    </div>
  </section>
)

export default HeroSection
