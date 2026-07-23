import { Link } from 'react-router-dom'
import ImageLoaderSection from '@/components/shared/ImageLoaderSection'

const HeroSection = () => {
  return (
    <ImageLoaderSection className="relative isolate overflow-hidden" deps={[]}>
      <section className="relative min-h-[92vh]" id="hero-title-wrap">
        <div
          className="absolute inset-0"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-id="velmora-hero-bg-a93f1c"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1800"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/80 via-neutral-950/35 to-neutral-950/20" />
        <div className="relative mx-auto flex min-h-[92vh] max-w-7xl items-end px-4 pb-20 pt-32 sm:px-6 lg:px-8">
          <div className="max-w-2xl text-stone-50">
            <p className="mb-6 text-xs uppercase tracking-[0.34em] text-stone-200">
              Demi-fine jewelry for gifting and self-purchase
            </p>
            <h1 className="font-display text-5xl leading-none sm:text-6xl lg:text-8xl" id="hero-title">
              Crafted to be Treasured
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-stone-200 sm:text-lg" id="hero-subtitle">
              Warm, quietly luxurious gold jewelry designed to elevate everyday dressing with polish, softness, and lasting charm.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                className="inline-flex items-center justify-center rounded-full bg-amber-600 px-7 py-4 text-sm font-medium uppercase tracking-[0.28em] text-stone-50 transition duration-300 hover:bg-amber-700"
                to="/shop"
              >
                Shop the Collection
              </Link>
              <Link
                className="inline-flex items-center justify-center rounded-full border border-white/35 bg-white/10 px-7 py-4 text-sm font-medium uppercase tracking-[0.28em] text-stone-50 backdrop-blur-sm transition duration-300 hover:bg-white/15"
                to="/product/royal-heirloom-set"
              >
                Discover the Gift Edit
              </Link>
            </div>
          </div>
        </div>
      </section>
    </ImageLoaderSection>
  )
}

export default HeroSection
