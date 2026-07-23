import { Link } from 'react-router-dom'
import { getStrkImageUrl } from '@/lib/strk-image'

const HomeHero = () => {
  const heroBackgroundSrc = getStrkImageUrl('hero-bg-velmora-8f2a9c')

  return (
    <section className="relative -mt-[76px] min-h-[100svh] overflow-hidden md:-mt-[88px]" aria-label="Hero">
      <div
        className="absolute inset-0 bg-cover bg-center"
        data-strk-bg-id="hero-bg-velmora-8f2a9c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundImage: `url(${heroBackgroundSrc})` }}
      />
      <div className="absolute inset-0 bg-stone-950/50" />
      <div className="absolute inset-0 bg-gradient-to-r from-stone-950/70 via-stone-950/35 to-stone-950/20" />
      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl items-end px-5 pb-16 pt-32 text-stone-50 sm:px-6 md:pb-24 lg:px-8">
        <div className="max-w-2xl space-y-6">
          <p className="text-xs uppercase tracking-[0.4em] text-amber-200">Velmora Fine Jewelry</p>
          <h1 id="hero-title" className="font-serif text-5xl leading-[0.95] text-stone-50 md:text-7xl lg:text-8xl">
            Crafted to be Treasured
          </h1>
          <p id="hero-subtitle" className="max-w-xl text-base leading-7 text-stone-200 md:text-lg">
            Warm gold tones, sculptural silhouettes, and gift-worthy details designed for everyday luxury.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              to="/shop"
              className="inline-flex items-center justify-center rounded-full bg-amber-700 px-6 py-3 text-sm font-medium text-stone-50 transition hover:bg-amber-800"
            >
              Shop the Collection
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center justify-center rounded-full border border-stone-50/40 px-6 py-3 text-sm font-medium text-stone-50 transition hover:bg-stone-50/10"
            >
              Discover the Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeHero
